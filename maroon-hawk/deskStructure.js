import S from '@sanity/desk-tool/structure-builder'

// export default () =>
//   S.list()
//   .title('Content')
//     .items(
//       S.documentTypeListItems()
//     )


export default () =>

  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.list()
            .title('Homepage Documents')
            .items([
              S.listItem()
                .title('Homepage Tile')
                .child(language =>
                  S.documentTypeList('homepageTile')
                    .title('Homepage Tile')
                    .filter('language == en')
                    .params({language})
                  
              ),
              S.listItem()
                .title('Homepage Intro & Thanks')
                .child(
                  S.documentTypeList('homepageDescription')
              ),
              S.listItem()
                .title('Homepage Carousel')
                .child(
                  S.documentTypeList('homepageCarousel')
              ),
              S.listItem()
                .title('Team Bios')
                .child(
                  S.documentTypeList('bio')
              ),
              S.listItem()
                .title('Footer')
                .child(
                  S.documentTypeList('footerContent')
              )
            ])
      ),
      S.listItem()
        .title('Cross Cultural Influences')
        .child(
          S.list()
            .title('Cross Cultural Influences Documents')
            .items([
              S.listItem()
                .title('Chefs')
                .child(
                  S.documentTypeList('chef')
              ),
              S.listItem()
                .title('Dishes')
                .child(
                  S.documentTypeList('food')
              ),
              S.listItem()
                .title('Fashion')
                .child(
                  S.documentTypeList('fashion2')
              ),
              S.listItem()
                .title('Celebrations')
                .child(
                  S.documentTypeList('holiday')
              ),
            ])
      ),
      S.listItem()
        .title('Myths & Curiosity')
        .child(
          S.list()
            .title('Myths & Curiosity Documents')
            .items([
              S.listItem()
                .title('Myth')
                .child(
                  S.documentTypeList('myth')
              ),
              S.listItem()
                .title('Roadtrip Stops')
                .child(
                  S.documentTypeList('roadtripStop')
              ),
              S.listItem()
                .title('Myth Curiosity Header')
                .child(
                  S.documentTypeList('mythCuriosityHeader')
              ),
            ])
      ),
      S.listItem()
        .title('Contact & Collaboration')
        .child(
          S.list()
            .title('Contact & Collaboration Documents')
            .items([
              S.listItem()
                .title('Collaboration Tags')
                .child(
                  S.documentTypeList('collaborationTag')
              ),
              S.listItem()
                .title('Additional Resources')
                .child(
                  S.documentTypeList('historyResources')
              ),
            ])
      ),
      S.listItem()
        .title('Discussion')
        .child(
          S.list()
            .title('Discussion Documents')
            .items([
              S.listItem()
                .title('Discussion Post')
                .child(
                  S.documentTypeList('discussionPost')
              ),
              S.listItem()
                .title('Discussion Question')
                .child(
                  S.documentTypeList('discussionQuestion')
              ),
            ])
      ),

      ...S.documentTypeListItems().filter(listItem => !['homepageTile', 'homepageDescription', 'homepageCarousel', 'chef', 'food', 'fashion2', 'holiday', 'myth', 'roadtripStop', 'mythCuriosityHeader', 'timelinePoint', 'historyResources', 'collaborationTag', 'discussionPost', 'discussionQuestion', 'bio', 'footerContent'].includes(listItem.getId()))
    ])
        