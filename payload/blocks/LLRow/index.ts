import { Block } from "payload/types";
import { CallToAction } from '../CallToAction';

export const LLRow: Block = {
  slug: 'llRowBlock',
  labels: {
    singular: 'LL Row',
    plural: 'LL Rows',
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: false
    },
    {
      type: 'row', // required
      fields: [ // required
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          minRows: 0,
          maxRows: 3,
          labels: {
            singular: 'Card',
            plural: 'Cards',
          },
          fields: [...CallToAction.fields],
        },
      ],
    },
  ],
}