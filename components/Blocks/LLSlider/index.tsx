import React from 'react';
import Swiperjs from './swiper';


type Props = {
  slug: 'llSliderBlock',
  llSliderBackgroundColor?: 'white' | 'black';
  slides?: {
    main_title: string;
    sub_title: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'llSliderBlock';
}
export const LLSliderBlock: React.FC<Props> = ({ llSliderBackgroundColor, slides }) => {
  const oppositeBackgroundColor = llSliderBackgroundColor === 'white' ? 'black' : 'white';

  return (
    <div>
        <div className="shadow-[inset_0_-1px_0_rgba(25,25,60,0.05)] pb-5 dark:border-b-gray-800">
          <Swiperjs slides={slides} />
        </div>
      </div>
  )
}
