import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";


function MyApp({ Component, pageProps }) {
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Opensea : largest nft marketplace</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        </Head>
       
          <Component {...pageProps} />
    
      </React.Fragment>
    );}
    export default  MyApp
