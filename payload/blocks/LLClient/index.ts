import { Block } from "payload/types";
import { MediaBlock } from "../Media";

export const LLClient: Block = {
  slug: 'llClientBlock',
  labels: {
    singular: 'LL Clients',
    plural: 'LL Clients',
  },
  fields: [
    {
      type: 'row', // required
      fields: [ // required
        {
          name: 'clients',
          type: 'array',
          label: 'Clients',
          minRows: 1,
          maxRows: 300,
          labels: {
            singular: 'Client',
            plural: 'Clients',
          },
          fields: [
            {
              name: 'name',
              label: 'Client Name',
              type: 'text',
              required: true,
              admin: {
                width: '100%',
              },
            },
            {
              name: 'url',
              label: 'Website',
              type: 'text',
              required: true,
              admin: {
                width: '100%',
              },
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}