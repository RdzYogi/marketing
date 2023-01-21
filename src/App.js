import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* ------------------------------------------------ */}
        {/* This has to be done for every page on the website. See Cases page */}
        {/* And adjust all the fields for better integration with external resources */}
        {/* Like search engines and social media sites */}
        {/* ------------------------------------------------ */}

        {/* General tags */}
        <title>Marketing</title>
        <meta name="description" content="Here is where you insert description for google search results" />
        <meta name="keywords" content="Here is where you insert keywords for google search results" />
        <meta name="author" content="Here is where you insert author name" />
        <meta name="publisher" content="Here is where you insert publisher name" />
        {/* robots = bots that can scan the website */}
        <meta name="robots" content="all" />
        <link rel="canonical" href="Here is where you put the link to the website domain name"/>
        {/* Social media tags */}
        <meta property="og:title" content="Here is where you put the title of the website" />
        <meta property="og:description" content="Here is where you put the description of the website" />
        <meta property="og:image" content="Here is where you put the image of the website" />
        <meta property="og:url" content="Here is where you put the link to the website domain name" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="Here is where you put the description/image of the website" />
        <meta name="twitter:title" content="Here is where you put the title of the website" />
        <meta name="twitter:description" content="Here is where you put the description of the website" />
        <meta name="twitter:image" content="Here is where you put an image of the website" />

      </Helmet>
      <Provider store={store}>
        <Router>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />

            {/* Home */}
            <Route path="/" element={<Home />} />
            <Route path="/casos" element={<Cases />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/carreras" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
