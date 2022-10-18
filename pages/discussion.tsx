import React from "react";
import Disqus from "disqus-react";
import { NextPage } from "next";
import Head from "next/head";

import Layout from "../public/components/layout";
import Header from "../public/components/header";
import Footer from "../public/components/footer";

const DisqusBlock = () => {
    const disqusShortname = "asianblackalliances";
    const disqusConfig = {
        url: "https://www.asianblackalliances.com",
        identifier: "asianblackalliances",
        title: "Asian Black Alliances",
    };

    return (
        <div>
            <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
}

const Discussion: NextPage = () => {
    return (
        <>
            <Head>
                <title>ABA: Discussion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />

            </Head>
            <Header />
            <Layout title='ABA: Discussion' description=' '>
                <div id='body'>

                    <h1>Discussion</h1>
                    <p style={{ textAlign: "center" }}>If you would like to share your own story, plese submit a comment below</p>
                    {/* <form action="mailto:jack2018g@me.com" method="post" enctype="text/plain">
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" /><br />
                        <label htmlFor="subject">Subject:</label><br />
                        <input type="text" id="subject" name="subject" /><br /><br />
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows={10} cols={100}></textarea><br /><br />
                        <input type="submit" value="Submit" />
                    </form> */}
                </div>
            </Layout>

            <Footer />
        </>
    )
}

export default Discussion
