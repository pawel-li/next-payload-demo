import React from 'react';
import { notFound } from 'next/navigation'
import getPayload from '../../../payload';
import Blocks from '../../../components/Blocks';
import { AdminBar } from '../../../components/AdminBar';

const Page = async ({ params }) => {
  const payload = await getPayload();
  console.log('slug', params)


  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: params.slug?.join('/') || 'home',
      },
    }
  });


  const page = pages.docs[0];

  if (!page) return notFound()

  return (
    <React.Fragment>
      <AdminBar adminBarProps={{ collection: 'pages', id: page.id }} />
      <Blocks blocks={page.layout} />
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload();

  const pages = await payload.find({
    collection: 'pages',
    limit: 0,
  })

  return pages.docs.map(({ slug }) => ({ slug }))
}

export default Page;