import React from 'react';
import Image from 'next/image';
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
      <div className="my-10 md:my-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {clients.map((client) => <Media resource={client.media} className='rounded border p-4 flex items-center justify-center h-48' /> )}
    </div>
      </div>
    </SectionContainer>

  )
}
