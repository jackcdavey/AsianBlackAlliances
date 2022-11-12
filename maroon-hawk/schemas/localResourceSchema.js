export default {
    name: 'localResource',
    type: 'document',
    title: 'Local Resource',
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
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'state',
            type: 'string',
            title: 'State',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link',
        },
        

    ]
}