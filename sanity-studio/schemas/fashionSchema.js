export default {
    name: 'fashion',
    type: 'document',
    title: 'Fashion Cards',
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
            name: 'linkLabel',
            type: 'array',
            title: 'Link Label',
            of: [{ type: 'string' }],
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}