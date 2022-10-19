export default {
    name: 'food',
    type: 'document',
    title: 'Dishes',
    fields: [
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