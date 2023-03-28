import { Block } from "payload/types";
import { backgroundColor } from "../../fields/backgroundColor";
import linkGroup from "../../fields/linkGroup";
import richText from "../../fields/richText";

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: false
    },
    richText(),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      }
    }),
  ]
}