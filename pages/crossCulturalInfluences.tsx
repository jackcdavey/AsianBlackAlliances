import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import Header from '../public/components/header';
import Footer from '../public/components/footer';
import Layout from '../public/components/layout';

import FoodCard from '../public/components/foodCard';

interface SubtitleSeparatorProps {
  title: string;
}

function SubtitleSeparatorLeft({ title }: SubtitleSeparatorProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: '25%', width: '100vw' }}>
      <h1>{title}</h1>
    </div>
  );
}

function SubtitleSeparatorRight({ title }: SubtitleSeparatorProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginRight: '25%', width: '100vw' }}>
      <h1>{title}</h1>
    </div>
  );
}

const Home: NextPage = () => {
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

          <h1>Cross Cultural Influences</h1>
          <h3>Black peoples and Asian peoples have been mutually influencing and learning from each other. These dynamic interactions are expressed through and reflected in our everyday activities. Below are xxx aspects***  </h3>


          {/* <span > <h1>Food</h1></span>
           */}
          <SubtitleSeparatorLeft title='Food' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />
          <FoodCard chefName='Chef Name' chefDesc='Chef Desc' dishName='Dish Name' dishDesc='Dish Description' />

          <SubtitleSeparatorRight title='Fashion' />

          <SubtitleSeparatorLeft title='Black-Asian Blended Family' />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default Home
