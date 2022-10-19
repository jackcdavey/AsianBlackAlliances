export default {
    name: 'homepageTile',
    type: 'document',
    title: 'Homepage Tile',
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
            name: 'link',
            type: 'string',
            title: 'Link',
        },
        {
            name: 'backgroundColor',
            type: 'string',
            title: 'Background Color',
        },
        {
            name: 'textColor',
            type: 'string',
            title: 'Text Color',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ]
}