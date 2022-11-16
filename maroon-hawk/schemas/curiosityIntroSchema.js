export default {
    name: 'curiosityIntro',
    type: 'document',
    title: 'Curiosity Intro',
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
            name: 'intro',
            type: 'string',
            title: 'Intro',
        },
        {
            name: 'prompt',
            type: 'string',
            title: 'Map Prompt',
        }
        
    ]
}