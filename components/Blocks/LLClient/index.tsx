import React, { Fragment } from 'react';
import { Media } from '../../Media';
import { Media as MediaType } from '../../../payload-types';
import { SectionContainer } from '../../SectionContainer';

type Props = {
  slug: 'llClientBlock',
  clients: {
    name: string;
    url: string;
    media: MediaType;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'llClientBlock';
}
export const LLClientBlock: React.FC<Props> = ({ clients }) => {
  return (
    <SectionContainer>
      <div className="md:mt-32 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {clients.map((client, i) => <Fragment key={i}><Media resource={client.media} className='rounded border p-4 px-8 flex items-center justify-center h-52' /></Fragment>)}
        </div>
      </div>
    </SectionContainer>
  )
}
