import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      // Uses the default Lexical editor from payload.config.ts
      // which includes the link feature with internal link support
    },
    {
      name: 'updatedBy',
      type: 'relationship',
      relationTo: 'users',
      maxDepth: 0,
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ req }) => {
            return req.user?.id
          },
        ],
      },
    },
  ],
}
