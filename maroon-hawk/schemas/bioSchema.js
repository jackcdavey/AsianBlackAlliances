export default {
    name: 'bio',
    type: 'document',
    i18n: true,
    title: 'Team Bios',
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
              { title: "Khmer", value: "km" },
          ]
      }
        },
              {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link',
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

    ],
    initialValue: {
        language: "en",
    },
}