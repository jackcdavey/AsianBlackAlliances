
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import myth from './mythSchema'
import homepageTile from './homepageTileSchema'
import food from './foodSchema'
import homepageCarousel from './homepageCarouselSchema'
import timelinePoint from './timelineSchema'
import chef from './chefSchema'
import holiday from './holidaySchema'
import fashion from './fashionSchema'
import homepageDescription from './homepageDescriptions'
import bio from './bioSchema'
import footerContent from './footerSchema'
import mythCuriosityHeader from './mythCuriosityHeaderSchema'
import discussionPost from './discussionPostSchema'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    myth,
    homepageTile,
    homepageCarousel,
    food,
    timelinePoint,
    chef,
    holiday,
    fashion,
    homepageDescription,
    bio,
    footerContent,
    mythCuriosityHeader,
    discussionPost,
  ]),
})
