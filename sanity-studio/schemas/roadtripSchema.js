export default {
    name: 'roadtripStop',
    type: 'document',
    title: 'Roadtrip Stops',
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
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'xPos',
            type: 'number',
            title: 'Y coordinate',
        },
        {
            name: 'yPos',
            type: 'number',
            title: 'X coordinate',
        },
        {
            name: 'body',
            type: 'text',
            title: 'Body',
        },
        {
            name: 'color',
            type: 'string',
            title: 'Marker Color',
        },
        {
            name: 'link',
            type: 'array',
            title: 'Link',
            of: [{ type: 'url' }],
        },

    ]
}