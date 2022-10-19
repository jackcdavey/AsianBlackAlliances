export default {
    name: 'bio',
    type: 'document',
    i18n: true,
    title: 'Team Bios',
    fields: [
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

    ]
}