export default {
    name: 'roadtripStop',
    type: 'document',
    title: 'Roadtrip Stops',
    fields: [
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