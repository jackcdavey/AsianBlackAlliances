import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import Header from '../public/components/header';
import Footer from '../public/components/footer';
import Layout from '../public/components/layout';

import ImgMediaCard from '../public/components/cards/imageMediaCard';

import FoodCard from '../public/components/foodCard';

import LinkWithImage from '../public/components/cards/linkWithImageCard';

interface SubtitleSeparatorProps {
  title: string;
  contentJustification: 'flex-start' | 'flex-end';
  marginLeft?: string;
  marginRight?: string;
}

function SubtitleSeparator({ title, contentJustification, marginLeft, marginRight }: SubtitleSeparatorProps) {
  return (
    <div style={{ display: 'flex', justifyContent: contentJustification, alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: marginLeft, marginRight: marginRight, width: '100vw' }}>
      <h1>{title}</h1>
    </div>
  );
}


const CrossCulturalInfluences: NextPage = () => {
  return (
    <>
      <Head>
        <title>ABA: Cross Cultural Influences</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title='ABA: Cross-Cultural Influences' description=' '>
        <Header />
        <div id='body'>
          <LinkWithImage
            link='https://www.youtube.com/watch?v=QZ9Y4Z0Z1Z8'
            image='https://picsum.photos/800/300/?random'
            title='Food'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.'
          />
          <h1>Cross Cultural Influences</h1>
          <h3>Black peoples and Asian peoples have been mutually influencing and learning from each other. These dynamic interactions are expressed through and reflected in our everyday activities. Below are xxx aspects***  </h3>


          {/* <span > <h1>Food</h1></span>
           */}
          <SubtitleSeparator title='Food' contentJustification='flex-start' marginLeft='25%' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />

          <SubtitleSeparator title='Fashion' contentJustification='flex-end' marginRight='25%' />

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: '25%', marginRight: '25%', width: '100vw' }}>
            <ImgMediaCard />
            <ImgMediaCard />
          </div>


          <SubtitleSeparator title='Black-Asian Blended Family' contentJustification='flex-start' marginLeft='25%' />

          <SubtitleSeparator title='Music / Anime / Manga' contentJustification='flex-end' marginRight='25%' />

          <SubtitleSeparator title='Celebrating Cultural Memories' contentJustification='flex-start' marginLeft='25%' />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default CrossCulturalInfluences
