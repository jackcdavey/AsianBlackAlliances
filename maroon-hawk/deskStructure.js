import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
  .title('Content')
    .items(
      S.documentTypeListItems()
    )
  
  // S.list()
  //   .title('Content')
  //   .items([
  //     S.listItem()
  //       .title('Myths & Curiosity Page')
  //       .child(
  //         S.documentTypeListItems().filter(
  //           item => item.schemaType() === 'myth' || item.getId() === 'mythCuriosityHeader'
  //             || item.getId() === 'roadtripStop'
  //         )
  //     ),
  //     S.listItem()
  //     .title('Homepage / Global')
  //     .child(
  //       S.documentTypeListItems().filter(
  //         item => item.getId() === 'homepageTile' || item.getId() === 'homepageCarousel' || item.getId() === 'homepageDescription' || item.getId() === 'bio' || item.getId() === 'footerContent'
          
  //       )
  //     )
  //       ])



    

  /////  myth,
  /////   homepageTile,
  /////   homepageCarousel,
  //   food,
  //   timelinePoint,
  //   chef,
  //   holiday,
  /////   homepageDescription,
  //////   bio,
  //////   footerContent,
  //////   mythCuriosityHeader,
  //   discussionPost,
  //   historyResources,
  //   collaborationTagSchema,
  //   fashion2,
  //////   roadtripStop,
  //   localResource,
  //   discussionQuestion,
    // .title('Content')
    // .items(
    //   S.documentTypeListItems()
    // )