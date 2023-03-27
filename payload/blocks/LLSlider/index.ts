import { Block } from "payload/types";

export const LLSlider: Block = {
  slug: 'llSliderBlock',
  labels: {
    singular: 'LL Slider',
    plural: 'LL Sliders',
  },
  fields: [
    {
      type: 'row', // required
      fields: [ // required
        {
          name: 'slides',
          type: 'array',
          label: 'Gallery Slides',
          minRows: 1,
          maxRows: 6,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'main_title',
              label: 'Main title',
              type: 'text',
              required: true,
              admin: {
                width: '100%',
              },
            },
            {
              name: 'sub_title',
              label: 'Sub title',
              type: 'text',
              required: true,
              admin: {
                width: '100%',
              },
            },
          ],
        },
      ],
    },
  ],
}