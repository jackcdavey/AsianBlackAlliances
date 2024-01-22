export default {
    name: 'homepageCarousel',
    type: 'document',
    title: 'Homepage Carousel',
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
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link',
        },
        {
            name: 'linkLabel',
            type: 'string',
            title: 'Link Label',
        },
        {
            name: 'order',
            type: 'number',
            title: 'Order',
            hidden: true,
        },
    ]
}