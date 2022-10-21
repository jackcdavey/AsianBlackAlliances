export default {
    name: 'homepageCarousel',
    type: 'document',
    title: 'Homepage Carousel',
    fields: [
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