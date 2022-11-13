export default {
    name: 'mythCuriosityHeader',
    type: 'document',
    i18n: true,
    title: 'Myths & Curiosity Headers',
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
            name: 'section',
            type: 'string',
            title: 'Section',
            options: {
                list: [
                    { title: 'Myth Section', value: 'mythSection' },
                    { title: 'Curiosity Section', value: 'curiositySection' },
                ]
            },
        },
        {
            name: 'desc',
            type: 'text',
            title: 'Description',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },

    ]
}