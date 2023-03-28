import React from 'react';
import { Page } from '../../../payload-types';
import RichText from '../../RichText';
import { title } from 'process';
import { SectionContainer } from '../../SectionContainer';

type Props = {
  title: string;
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
    };
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'cta';
}
export const CallToActionBlock: React.FC<Props> = ({ title, links, richText }) => {

  return (
    <SectionContainer>
      <div className="my-10 md:my-20">
        <h1 className={`mt-6 font-sans text-4xl font-medium tracking-tight text-black dark:text-white`}>
          {title}
        </h1>
        <RichText
          content={richText}
          className="my-10 text-lg font-light text-slate-400 lg:text-2xl dark:text-slate-300"
        />
      </div>
    </SectionContainer>
  )
}
