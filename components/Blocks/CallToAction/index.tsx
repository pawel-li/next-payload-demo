import React from 'react';
import { Page } from '../../../payload-types';
import RichText from '../../RichText';
import { title } from 'process';
import { SectionContainer } from '../../SectionContainer';
import { CMSLink } from '../../Link';

type Props = {
  Title: string;
  richText: {
    [k: string]: unknown;
  }[];
  links: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
      appearance?: 'primary' | 'secondary';
    };
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'cta';
}
export const CallToActionBlock: React.FC<Props> = ({ Title, links, richText }) => {
  return (
    <SectionContainer>
      <div className="lg:my-10">
        <h1 className={`mt-6 font-sans text-4xl font-medium tracking-tight text-black dark:text-white`}>
          {Title}
        </h1>
        <RichText
          content={richText}
          className="my-10 text-lg font-light text-slate-400 lg:text-2xl dark:text-slate-300"
        />
        <div className="flex">
          {links.map((link, i) => <CMSLink key={i} {...link} className="font-nunito font-p-1 ml-4 font-medium text-slate-600 hover:text-black hover:underline dark:text-gray-100" />)}
        </div>
      </div>
    </SectionContainer>
  )
}
