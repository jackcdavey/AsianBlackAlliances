export default {
    name: 'myth',
    type: 'document',
    i18n: true,
    title: 'Myth Cards',
    fields: [
    {
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
              { title: 'English', value: 'en' },
              { title: 'Mandarin', value: 'zh' },
              { title: 'Vietnamese', value: 'vi' },
              { title: 'Korean', value: 'ko' },
            {title: 'French', value: 'fr'}
          ]
      }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: 'link',
            type: 'array',
            title: 'Link',
            of: [{ type: 'url' }],
        },
        {
            name: 'linkNote',
            type: 'array',
            title: 'Link Note',
            of: [{ type: 'string' }],
        },
        {
            name: 'linkLabel',
            type: 'array',
            title: 'Link Label',
            of: [{ type: 'string' }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}