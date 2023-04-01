import { Page } from '../../../payload-types';
import React from 'react';
import { SectionContainer } from '../../SectionContainer';
import RichText from '../../RichText';
import { CMSLink } from '../../Link';
import Link from 'next/link';


type Props = {
  slug: 'llRowBlock',
  cards: {
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
  }[],
  id?: string;
  blockName?: string;
  blockType: 'llRowBlock';
}
export const LLRowBlock: React.FC<Props> = ({ cards }) => {
  console.log('cards', cards);
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row">
        {cards.map((card, i) =>
          <div key={i} className={`${i + 1 === cards.length ? 'pr-0' : 'md:pr-6'}`}>
            <div className="my-10 md:my-20">
              <h1 className={`mt-6 font-sans text-3xl md:text-4xl font-medium tracking-tight text-black dark:text-white`}>
                {card.Title}
              </h1>
              <RichText
                content={card.richText}
                className="my-10 text-lg font-light text-slate-400 lg:text-2xl dark:text-slate-300"
              />
              <div className="flex">
                {card.links.map((link, i) => {
                  const href = (link.link.type === 'reference' && typeof link.link.reference?.value === 'object' && link.link.reference.value.slug) ? `/${link.link.reference.value.slug}` : link.link.url;
                  const newTabProps = link.link.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
                  return (
                    <Link href={href} className="inline-flex items-center py-3 text-center text-sm text-lg font-medium text-black transition ease-in-out hover:-translate-y-1 hover:underline dark:text-white lg:text-xl"
                    {...newTabProps}>
                        {link.link.label}
                        <svg
                          aria-hidden="true"
                          className="ml-2 -mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
