
// import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

import myth from './mythSchema'
import homepageTile from './homepageTileSchema'
import food from './foodSchema'
import homepageCarousel from './homepageCarouselSchema'
import timelinePoint from './timelineSchema'
import chef from './chefSchema'
import holiday from './holidaySchema'
import homepageDescription from './homepageDescriptions'
import bio from './bioSchema'
import footerContent from './footerSchema'
import mythCuriosityHeader from './mythCuriosityHeaderSchema'
import discussionPost from './discussionPostSchema'
import historyResources from './historyResourcesSchema'
import collaborationTagSchema from './collaborationTagSchema'
import fashion2 from './fashionSchema2'
import roadtripStop from './roadtripSchema.js'
import localResource from './localResourceSchema'
import discussionQuestion from './discussionQuestionSchema'
import navbarItem from './navbarItemSchema'
import curiosityNote from './curiosityNoteSchema'
import curiosityIntro from './curiosityIntroSchema'
import contributorSchema from './contributorSchema'

// Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([

export const schemaTypes = [
    myth,
    homepageTile,
    homepageCarousel,
    food,
    timelinePoint,
    chef,
    holiday,
    homepageDescription,
    bio,
    footerContent,
    mythCuriosityHeader,
    discussionPost,
    historyResources,
    collaborationTagSchema,
    fashion2,
    roadtripStop,
    localResource,
    discussionQuestion,
    navbarItem,
    curiosityNote,
    curiosityIntro,
    contributorSchema,
]
//   ),
// })
