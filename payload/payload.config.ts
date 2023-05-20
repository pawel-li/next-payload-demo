import { buildConfig } from 'payload/config';
import path from 'path';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { MainMenu } from './globals/MainMenu';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { Media } from './collections/Media';
import nestedDocs from "@payloadcms/plugin-nested-docs";

const adapter = s3Adapter({
  config: {
    endpoint: 'https://leszek-payload.s3.eu-central-1.amazonaws.com',
    region: process.env.S3_REGION,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    }
  },
  
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
})

const slugify = (str:string) => str
  .replaceAll(' > ', '/')
  .replaceAll(' ', '-')
  .toLowerCase()
  .trim();

export default buildConfig({
  collections: [
    Pages,
    Users,
    Media
  ],
  globals: [
    MainMenu,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter,
          disablePayloadAccessControl: true,
        }
      },
    }),
    nestedDocs({
      collections: ['pages'],
      generateLabel: (_, doc:any) => doc.title,
      generateURL: (docs) => docs.reduce((url, doc) => slugify(`${url}/${doc.slug}`).toLowerCase(), ''),
    }),
  ],
});
