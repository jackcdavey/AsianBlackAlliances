export default {
    name: 'timelinePoint',
    type: 'document',
    title: 'Timeline Points',
    fields: [
    {
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
              { title: 'English', value: 'en' },
              { title: 'Chinese (Simplified)', value: 'zh' },
              { title: 'Chinese (Traditional)', value: 'zh-tw' },
              { title: "Cantonese", value: "zh-cn" },
              { title: "Korean", value: "ko" },
              { title: "Japanese", value: "ja" },
              { title: "Vietnamese", value: "vi" },
              { title: "Tagalog", value: "tl" },
              { title: "Khmmer", value: "km" },
          ]
      }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date',
        },
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: 'citation',
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
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}