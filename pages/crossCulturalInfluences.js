
import Head from 'next/head'
import Header from '../public/components/header';
import Footer from '../public/components/footer.js';
import Layout from '../public/components/layout';

import React, {useState} from 'react';
import GradientMediaCard from '../public/components/cards/gradientMediaCard';
import { createClient } from 'next-sanity'

import { COLORS } from '../public/styling/colors.js';

import imageUrlBuilder from '@sanity/image-url'
import { Button, Paper, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';



const styles = {
  foodSectionWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    width: "100%",
    scrollMarginTop: '100px',

  },

  foodColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "2vw",
    borderRadius: '25px',
    padding: '1rem',
    position: 'relative',
    zIndex: '1',
  },


  foodColumnBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
    backgroundColor: COLORS.primaryLight,
    zIndex: '-1',
    borderRadius: '25px',
    opacity: '0.5',
  },

  fashionRowBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
    backgroundColor: '#FAC898 ',
    zIndex: '-1',
    borderRadius: '25px',
    opacity: '0.5',
  },

  seasonSectionWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
     gridTemplateRows: 'repeat(2, 1fr)',
     gridGap: '1rem',
     marginTop: '1rem',
     marginBottom: '1rem',
     marginLeft: '25%',
     marginRight: '25%',
     width: '100%',
     aspectRatio: '2/1'
  },

  seasonQuad: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
  },
  theRadius: {
    borderRadius: '25px',
  },

};


const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

function SubtitleSeparator({ title, contentJustification, marginLeft, marginRight }) {
  return (
    <div style={{ display: 'flex', justifyContent: contentJustification, alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: marginLeft, marginRight: marginRight, width: '100vw', marginTop: '0px' }}>
      <h1>{title}</h1>
    </div>
  );
}




export default function CrossCulturalInfluences({ food, chef, holiday, footerContent, fashion2, navbarItem }) {
  
  const [lang, setLang] = useState('en');


  const handleChange = (event) => {
        setLang(event.target.value);
        if (typeof window !== "undefined") {
            localStorage.setItem("langChoice", event.target.value);
            console.log("Set local language to: " + event.target.value);
        }
  };
  
  const checkLang = () => {
    if (typeof window !== "undefined") {
      var languageSelection = localStorage.getItem('langChoice');
      if(languageSelection != lang)
        setLang(languageSelection);
      console.log("Stored language is " + languageSelection);
    }
  }

  checkLang();

  const footerContentL = footerContent.filter((footerContent) => footerContent.language == lang).length > 0 ? footerContent.filter((footerContent) => footerContent.language == lang) : footerContent.filter((footerContent) => footerContent.language == 'en');


  const foodL = food.filter((food) => food.language == lang).length > 0 ? food.filter((food) => food.language == lang) : food.filter((food) => food.language == 'en');

  const chefL = chef.filter((chef) => chef.language == lang).length > 0 ? chef.filter((chef) => chef.language == lang) : chef.filter((chef) => chef.language == 'en');

  const holidayL = holiday.filter((holiday) => holiday.language == lang).length > 0 ? holiday.filter((holiday) => holiday.language == lang) : holiday.filter((holiday) => holiday.language == 'en');

  console.log("Holiday length is " + holidayL.length);
  console.log("Holiday is " + holidayL[0].title);

  const fashion2L = fashion2.filter((fashion2) => fashion2.language == lang).length > 0 ? fashion2.filter((fashion2) => fashion2.language == lang) : fashion2.filter((fashion2) => fashion2.language == 'en');


    const navbarItemTitles = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.title) : navbarItem.filter((item) => item.language === "en").map((item) => item.title)

  const navbarItemLinks = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.link) : navbarItem.filter((item) => item.language === "en").map((item) => item.link)


  return (
    


    <>
      <Head>
        <title>ABA: Cross Cultural Influences</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />


      </Head>

      <Layout title='ABA: Cross-Cultural Influences' description=' '>
        <div style={{
        position: 'fixed',
        right: '0',
        zIndex: '100',
        marginTop: '2rem',
        marginRight: '1.5rem',
      }}>
                <Box sx={{ width: 100 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >
                            {lang}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            label="Language"
                            onChange={handleChange}
                        >
                              <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zh-tw'}>繁體中文</MenuItem>
                            <MenuItem value={'zh-cn'}>粵語</MenuItem>
                            <MenuItem value={'zh'}>簡體中文</MenuItem>
                            <MenuItem value={'ko'}>한국어</MenuItem>
                            <MenuItem value={'vi'}>Tiếng Việt</MenuItem>
                            <MenuItem value={'ja'}>にほんご</MenuItem>
                            
                            


                        </Select>
                    </FormControl>
                </Box>
            </div>
        <Header titles={navbarItemTitles} links={navbarItemLinks} />
        <div id='body'>
          
          <Paper className='collapsed' sx={styles.theRadius}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: '4rem', width: '100%'}}>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ paddingTop: '1rem' }}
                    className='cultureDecor'
                  />
                  </div>
<a href='#food' className='collapsed-desc'>
                <SubtitleSeparator title={
                  lang == 'en' && 'Food' ||
                  lang == 'zh' && '食物' ||
                  lang == 'zh-tw' && '食物' ||
                  lang == 'zh-cn' && '食物' ||
                  lang == 'ko' && '음식' ||
                  lang == 'ja' && '食べ物' ||
                  lang == 'vi' && 'Thức ăn' ||
                  lang == 'tl' && 'Pagkain' ||
                  lang == 'km' && 'មុខម្ហូប'
            } contentJustification='center' />
              </a>
              <div style={{ maxWidth: '50%' }}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ WebkitTransform: 'scaleX(-1)', paddingTop: '1rem' }}
                    className='cultureDecor'

                    />
                  </div>

              </div>
            
            </Paper>
         <div className='collapsed-content' id='food'>
          <div id="foodSection" style={styles.foodSectionWrap}>
            <div className='foodColumn' style={styles.foodColumn}>
              <div style={styles.foodColumnBackground} > </div>
                <h2>{
                  lang == 'en' && 'Chefs' ||
                  lang == 'zh' && '廚師' ||
                  lang == 'zh-tw' && '廚師' ||
                  lang == 'zh-cn' && '廚師' ||
                  lang == 'ko' && '요리사' ||
                  lang == 'ja' && 'シェフ' ||
                  lang == 'vi' && 'Nấu ăn' 
                  }</h2>
                
              
                {chefL.map((chef) => (
                
                  
                // <div style={{ paddingBottom: "10%" }}>
                //   <a href={chef?.link} target="_blank">
                //   <Paper key={chef._id} id="chefCard" className="chefCard" sx={styles.theRadius}>
                //     <h2>{chef?.title}</h2>
                //     <a>{chef?.link}</a>
                //     </Paper>
                //     </a>
                //   </div>
                  

                  <div style={{paddingBottom: '10%'}} id='chefCard' key={chef._id}>
                    <Paper id="chefCard" className="chefCard" sx={styles.theRadius}>
                      <div id='millerCard' style={{
                        display: 'flex',  alignItems: 'center', justifyContent: 'center'
                      }}> 
                        
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1rem', alignItems: 'center', textAlign: "center"}}> 
                          {chef?.image && (
                      <img 
                        src={urlFor(chef?.image).url()}
                        style={{
                          width: '100%',
                          maxWidth: '7rem',
                          borderRadius: '25px',
                          aspectRatio: '1/1',
                          padding: '0.25rem'

                        }}
                      /> 
                        )}
                          
                          <h2 style={{ marginBottom: 0, textAlign: 'center' }}>{chef?.title}</h2>
                          <p style={{margin: '2%'}}>{chef?.body}</p>
                          
                          

                </div>
                      </div>
                      
                      {chef?.link && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', width: '100%' }}>

                                                  {chef?.links.map((link, index) => (
                          
                          <a href={chef?.links[index]} target="_blank">
                            <Button variant="contained" style={{margin: '2%', paddingLeft: '0.5rem', paddingRight: '0.5rem' , borderRadius: '25px', width: '100%'}} >
                              {chef.linkLabels && (
                                  <p>{chef.linkLabels[index]}</p>
                              )
                              || (
                                <p>More Info</p>
                              )}
                            </Button>
                                                    </a>
                          ))}
                        </div>
                      )}
            </Paper>
          </div>
                
              ))}

            </div>
            <div className='foodColumn' style={styles.foodColumn}>
              <div style={styles.foodColumnBackground} > </div>
                <h2>{
                  lang == 'en' && 'Dishes' ||
                  lang == 'zh' && '菜色' ||
                  lang == 'zh-tw' && '菜色' ||
                  lang == 'zh-cn' && '菜色' ||
                  lang == 'ko' && '요리' ||
                  lang == 'ja' && '料理' ||
                  lang == 'vi' && 'Món ăn' 

              }</h2>
              {foodL.map((food) => (
                <div style={{padding: "0 8% 8% 8%"}}>
                  <GradientMediaCard key={food._id} imgSource={urlFor(food?.image)} title={food?.title} content={food?.body} link={food?.link} useGradient={true} id='#foodCard' />
                  </div>
               ))}
            </div>
            </div>
            </div>

          <Paper className='collapsed' sx={styles.theRadius}>
            
            
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: '4rem', width: '100%'}}>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ paddingTop: '1rem' }}
                    className='cultureDecor'
                  />
              </div>
              <a href='#fashion' className='collapsed-desc'>
                <SubtitleSeparator title={
                  lang == 'en' && 'Fashion' ||
                  lang == 'zh' && '时尚' ||
                  lang == 'zh-tw' && '時尚' ||
                  lang == 'zh-cn' && '时尚' ||
                  lang == 'ko' && '패션' ||
                  lang == 'ja' && 'ファッション' ||
                  lang == 'vi' && 'Thời trang' ||
                  lang == 'tl' && 'Pamamaraan' ||
                  lang == 'km' && 'សម្រាប់អ្នកប្រើប្រាស់'

                } contentJustification='center' />
            </a>
              <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ WebkitTransform: 'scaleX(-1)', paddingTop: '1rem' }}
                    className='cultureDecor'

                    />
                  </div>

              </div>
            
            </Paper>
          <div className='collapsed-content' id='fashion'>
           
          
            {fashion2L.map((fashion) => (
            
              <div className="fashionTiles" key={fashion._id} style={{  marginBottom: '8vh', position: 'relative', zIndex: '1', padding: "5%", margin: '2vw', justifyContent: 'space-between', alignItems: 'center' }}>
                {urlFor(fashion?.image) &&
                  // <></>
                  // 'image-f2f8d887e3e8139e275cfe39e4413d766a9eff41-1200x675-png'
                  <div className='fashionCols' style={{padding: 'rem'}}>
                    <img src={urlFor(fashion?.image)} alt='' style={{maxWidth: "100%", borderRadius: '25px'}} /> 
                    </div>
              } 
                <div style={styles.fashionRowBackground} > </div>
              <p className='fashionCols' style={{ paddingTop: 'auto', verticalAlign: "middle"}}>{fashion?.body}</p>
                

              <div className='fashionCols' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              {/* for each link, create a button */}
                {fashion?.link && fashion?.link.map((link) => (
                // Display a button for each link
                  
              <Button variant="contained" color="primary" href={fashion?.link[fashion?.link.indexOf(link)]}  target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', width: "90%", textAlign: 'center', margin: '2%', borderRadius: '25px' }} >
                  {/* If a linkLabel exists in the same index as the link, use that as the button text. Otherwise, use the link */}
                  {fashion?.linkLabel && fashion?.linkLabel[fashion?.link.indexOf(link)] ? fashion?.linkLabel[fashion?.link.indexOf(link)] : "More Info"}
                </Button>
              ))}
              </div>
            </div>
          ))}
          </div>


          {/* <SubtitleSeparator title='Black-Asian Blended Family' contentJustification='flex-start' marginLeft='10%' /> */}

          {/* <SubtitleSeparator title='Music / Anime / Manga' contentJustification='flex-end' marginRight='25%' /> */}

          <Paper className='collapsed' sx={{ borderRadius: '25px', overflowX: 'hidden', overflowY: 'hidden' }}>
            
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: '4rem', width: '100%'}}>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ paddingTop: '1rem' }}
                    className='cultureDecor'
                  />
              </div>
              <a href='#holidays' className='collapsed-desc'>
                <SubtitleSeparator title={
                  lang == 'en' && 'Celebrations' ||
                  lang == 'zh' && '庆祝' ||
                  lang == 'zh-tw' && '慶祝' ||
                  lang == 'zh-cn' && '庆祝' ||
                  lang == 'ko' && '축하' ||
                  lang == 'ja' && '祝い' ||
                  lang == 'vi' && 'Lễ kỷ niệm' ||
                  lang == 'tl' && 'Pagdiriwang' ||
                  lang == 'km' && 'ការបញ្ចូលបញ្ចាក់'
                   } contentJustification='center' />
            </a>
              <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ WebkitTransform: 'scaleX(-1)', paddingTop: '1rem' }}
                    className='cultureDecor'

                    />
                  </div>

              </div>
            
            </Paper>
         <div className='collapsed-content' id='holidays'>
          {/* SEASON CHART */}
          {/* This should really be a separate component, but does not seem to work with CMS */}
          <div className='seasonGrid'>
      <div style={{ gridColumn: "span 2", backgroundColor: 'lightblue', borderRadius: '25px'}}>
        <div style={styles.seasonQuad}>
          <div className='holidayTextL'>
                    <h1 style={{ margin: 0 }}>{
                      lang == 'en' && 'Winter' ||
                      lang == 'zh' && '冬季' ||
                      lang == 'zh-tw' && '冬季' ||
                      lang == 'zh-cn' && '冬季' ||
                      lang == 'ko' && '겨울' ||
                      lang == 'ja' && '冬' ||
                      lang == 'vi' && 'Mùa đông' ||
                      lang == 'tl' && 'Tag - init' ||
                      lang == 'km' && 'ថ្ងៃស្រីពិសិដ្ឋាន'
                      }</h1>
                  {holidayL.map((holiday) => (
              holiday.season === 'winter' || holiday.season === '冬季 ' || holiday.season === '겨울 ' || holiday.season === 'Mùa đông ' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}

            </div>
          </div>
      </div>
      <div style={{gridColumn: "span 2", backgroundColor: 'lightgreen', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
          <div className='holidayTextR'>
                    <h1 style={{ margin: 0 }}>{
                      lang == 'en' && 'Spring' ||
                      lang == 'zh' && '春季' ||
                      lang == 'zh-tw' && '春季' ||
                      lang == 'zh-cn' && '春季' ||
                      lang == 'ko' && '봄' ||
                      lang == 'ja' && '春' ||
                      lang == 'vi' && 'Mùa xuân' ||
                      lang == 'tl' && 'Tag-init' ||
                      lang == 'km' && 'ឆ្នាំថ្មី'
                      
                    }</h1>
                  {holidayL.map((holiday) => (
              holiday.season === 'spring' || holiday.season === '春季 ' || holiday.season === '봄 ' || holiday.season == 'Mùa xuân ' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
              </div>
              : null
            ))}
            </div>
          </div>
      </div>
      <div style={{gridColumn: "span 2", backgroundColor: 'lightyellow', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
          <div className='holidayTextL'>
                    <h1 style={{ margin: 0 }}>{
                      lang == 'en' && 'Summer' ||
                      lang == 'zh' && '夏季 ' ||
                      lang == 'zh-tw' && '夏季' ||
                      lang == 'zh-cn' && '夏季' ||  
                      lang == 'ko' && '여름' ||
                      lang == 'ja' && '夏' ||
                      lang == 'vi' && 'Mùa hè' ||
                      lang == 'tl' && 'Tag-araw' ||
                      lang == 'km' && 'ថ្ងៃស្រីពិសិដ្ឋាន'

                    }</h1>
                  {holidayL.map((holiday) => (
              holiday.season === 'summer' || holiday.season === '夏季 ' || holiday.season === '여름 ' || holiday.season === 'Mùa hè ' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}
            </div>
          </div>
      </div>
      <div style={{gridColumn: "span 2", backgroundColor: 'lightsalmon', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
                    <div className='holidayTextR'>
                    <h1 style={{ margin: 0 }}>{
                      lang == 'en' && 'Autumn' ||
                      lang == 'zh' && '秋天' ||
                      lang == 'zh-tw' && '秋天' ||
                      lang == 'zh-cn' && '秋天' ||
                      lang == 'ko' && '가을' ||
                      lang == 'ja' && '秋' ||
                      lang == 'vi' && 'Mùa thu' ||
                      lang == 'tl' && 'Tag-ulan' ||
                      lang == 'km' && 'ថ្ងៃស្រីពិសិដ្ឋាន'
                      }</h1>
                  {holidayL.map((holiday) => (
              holiday.season === 'fall'|| holiday.season === '秋天 ' || holiday.season === '가을 ' || holiday.season == 'Mùa thu ' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}
            </div>
        </div>
        </div>
            </div>
            </div>
          



        </div>
        <Footer
          link={
          footerContentL[0]?.link
        } body={
          footerContentL[0]?.body
        } />
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const food = await client.fetch(`*[_type == "food"]  | order(order asc)`);
  const chef = await client.fetch(`*[_type == "chef"]  | order(order asc)`);
  const holiday = await client.fetch(`*[_type == "holiday"]  | order(order asc)`);
  const fashion2 = await client.fetch(`*[_type == "fashion2"]  | order(order asc)`);
  const footerContent = await client.fetch(`*[_type == "footerContent" ]  | order(order asc)`)
  const navbarItem = await client.fetch(`*[_type == "navbarItem"]  | order(order asc)`)
  return {
    props: {
      food,
      chef,
      holiday,
      footerContent,
      fashion2,
      navbarItem
    },
    revalidate: 10,

  };
}

