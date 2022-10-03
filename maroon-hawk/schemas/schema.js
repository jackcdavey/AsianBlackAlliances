
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import myth from './mythSchema'
import homepageTile from './homepageTileSchema'
import food from './foodSchema'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    myth,
    homepageTile,
    food,
  ]),
})
