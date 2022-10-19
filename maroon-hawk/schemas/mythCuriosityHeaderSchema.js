export default {
    name: 'mythCuriosityHeader',
    type: 'document',
    i18n: true,
    title: 'Myths & Curiosity Headers',
    fields: [
              {
            name: 'title',
            type: 'string',
            title: 'Title',
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