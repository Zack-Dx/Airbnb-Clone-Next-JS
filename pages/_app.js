import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

// Progress Bar Setup

const progress = new ProgressBar({
  size: 3,
  color: "#FE595E",
  className: "z-58",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
