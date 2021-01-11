import React from "react";
import { Helmet } from "react-helmet";
import logo from "../images/logothewestsun.png";

const Metadata = () => (
  <Helmet>
    <html lang="en-US" />
    <title>The West Sun | Compra </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme" content="#8E2D22" />
    <link rel="icon" href={logo} />

    {/* CDN CSS links */}
    <link href="https://vjs.zencdn.net/7.7.5/video-js.css" rel="stylesheet" />
    <link
      href="https://unpkg.com/@videojs/themes@1/dist/fantasy/index.css"
      rel="stylesheet"
    />

    {/* CDN JS links */}
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
    ></script>
    <script src="https://vjs.zencdn.net/7.7.5/video.js"></script>
  </Helmet>
);

export default Metadata;
