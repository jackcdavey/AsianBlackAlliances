import React, {useState} from "react";
// import { NextPage } from "next";
import Head from "next/head";
import { createClient } from 'next-sanity'

import { Button, Paper, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import Layout from "../public/components/layout";
import Header from "../public/components/header";
import Footer from "../public/components/footer.js";

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

const Discussion = ({ footerContent, discussionPost, discussionQuestion, navbarItem }) => {

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

    const discussionPostL = discussionPost.filter((discussionPost) => discussionPost.language == lang).length > 0 ? discussionPost.filter((discussionPost) => discussionPost.language == lang) : discussionPost.filter((discussionPost) => discussionPost.language == 'en');

    const discussionQuestionL = discussionQuestion.filter((discussionQuestion) => discussionQuestion.language == lang).length > 0 ? discussionQuestion.filter((discussionQuestion) => discussionQuestion.language == lang) : discussionQuestion.filter((discussionQuestion) => discussionQuestion.language == 'en');

    
  const navbarItemTitles = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.title) : navbarItem.filter((item) => item.language === "en").map((item) => item.title)

  const navbarItemLinks = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.link) : navbarItem.filter((item) => item.language === "en").map((item) => item.link)

    return (
        <>
            <Head>
                <title>ABA: Discussion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />

            </Head>
            <Header titles={navbarItemTitles} links={navbarItemLinks} />
            <div style={{
        position: 'fixed',
        right: '0',
        zIndex: '100',
        marginTop: '2rem',
        marginRight: '1.5rem',
      }}>
                <Box sx={{ width: 100 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" style={{color: 'rgb(86, 129, 39)'}} > 
                            {lang}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            label="Language"
                            onChange={handleChange}
                            style={{color: 'rgb(86, 129, 39)'}}
                        >
                              <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zh-tw'}>繁體中文</MenuItem>
                            <MenuItem value={'zh-cn'}>粵語</MenuItem>
                            <MenuItem value={'zh'}>簡體中文</MenuItem>
                            <MenuItem value={'ko'}>한국어</MenuItem>
                            <MenuItem value={'vi'}>Tiếng Việt</MenuItem>
                            <MenuItem value={'ja'}>日本語</MenuItem>
                             
                              


                        </Select>
                    </FormControl>
                </Box>
            </div>
            <Layout title='ABA: Discussion' description=' '>
                <div id='body'>

                    <h1>{lang == 'en' && 'Discussion' ||
                        lang == 'zh-tw' && '討論' ||
                        lang == 'zh-cn' && '討論' ||
                        lang == 'zh' && '讨论' ||
                        lang == 'ko' && '토론' ||
                        lang == 'vi' && 'Thảo luận' ||
                        lang == 'ja' && 'ディスカッション'
                    }</h1>
                    <p style={{ textAlign: "center" }}>{
                        lang == 'en' &&
                        'If you would like to share your own story, plese submit a comment below.'
                        || lang == 'zh-tw' &&
                        '歡迎您在此分享您的故事，或提供您的想法及建議。'
                        || lang == 'zh-cn' &&
                        '如果您想分享您的故事，請在下面提交評論。'
                        || lang == 'zh' &&
                        '请在下方分享您的故事。'
                        || lang == 'ko' &&
                        '자신의 이야기를 공유하려면 아래에 댓글을 남겨주세요.'
                        || lang == 'vi' &&
                        'Nếu bạn muốn chia sẻ câu chuyện của riêng mình, vui lòng gửi bình luận bên dưới.'
                        || lang == 'ja' &&
                        '自分の話を共有したい場合は、下にコメントを送信してください。'
                    }</p>

                    {discussionQuestionL.map((question) => (
                    <div id='form' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} key={question._id}>
                    <Paper className='collapsed' style={{borderRadius: '25px'}}>
            <a href={'#' + question._id} className='collapsed-desc'>
              {/* Display the first item in mythsCuriosityHeader */}
                                    <h2 style={{marginBottom: '0'}}>{question.title}</h2>
                                    <h3 style={{marginTop: 0}}>{question.body}</h3>
            </a>
          </Paper>
          <div className='collapsed-form' id={question._id}>

            <form action="https://formspree.io/f/xknevqwl" method="POST"   enctype="multipart/form-data">
                <div id="formWrap">
                    <div className="innerFormWrap" >
                        <div id="formWrap">
                        <div className="fieldWrap">
                            <input style={{marginRight: "2%"}} type="text" id="name" placeholder="Name" required name="submissionName" />
                            <input style={{marginLeft: "2%"}} type="email" id="email" placeholder="Email" name="email" required />
                            <input style={{display: 'none'}} type="questionNumer" id="questionNumber" name="questionNumber" value={question.title} />
                        </div>
                    
                        <div className="fieldWrap">
                            <textarea id="message" rows="7" placeholder="Message" name="message" required />
                        </div>
                    </div>
                        {/* <label for='attachment'  className="fileAttachmentBtn">Attach a File</label> */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            {/* <label for='attachment' style={{width: '50%'}} >
                                <h4>Attach a File</h4>
                            </label>
                            <input type='file' name='attachment' id='attachment' style={{  textAlign: 'center', width: '80%'}}/> */}
                        </div>
                    </div>
                <Button variant="contained" type="submit" style={{marginBottom: '1rem', borderRadius: "25px"}}>Send</Button>

                </div>
                    </form>
                        </div>
                    </div>
                    ))}


                    {/* Display each discussion post in a Card below */}
                    {/* <h1>Posts</h1> */}
                    {discussionPostL.map((post) => (
                        <Paper className="discussionCard" style={{borderRadius: "25px", marginBottom: '2rem'}} key={post._id}>
                            <h2>{post?.title}</h2>
                            <h3>From: {" " + post?.name}</h3>
                            <p>{post?.body}</p>
                        </Paper>
                    ))}

                </div>
            </Layout>

            <Footer 
            link={
          footerContentL[0]?.link
        } body={
          footerContentL[0]?.body
        } />
        </>
    )
}


export async function getStaticProps() {
    const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
    const discussionPost = await client.fetch(`*[_type == "discussionPost"]  | order(order asc)`)
    const discussionQuestion = await client.fetch(`*[_type == "discussionQuestion"]  | order(order asc)`)
    const navbarItem = await client.fetch(`*[_type == "navbarItem"]  | order(order asc)`)
    return {
        props: {
            footerContent,
            discussionPost,
            discussionQuestion,
            navbarItem,
        },
    };
}

export default Discussion
