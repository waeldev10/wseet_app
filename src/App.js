import { useState,useEffect } from 'react';

import HomePage from './Pages/HomePage';
import WeAre from './Pages/WeAre';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import More from './Pages/More';
import Footer from './Commponets/Footer/Footer';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import CommingSoon from './Pages/CommingSoon';
import ScrollToTop from './Commponets/ScrollToTop/ScrollToTop';



const App = () => { 



  return (

    <>

        <BrowserRouter basename='/wseet_app'>

        <ScrollToTop />

          <Routes>
              
              <Route index element={<HomePage />} />
              <Route path="/we_are" element={ <WeAre />} />
              <Route path="/more" element={<More />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/soon" element={<CommingSoon />} />
              <Route path="/*" element={<ErrorPage />} />
              
          </Routes>
          
          <Footer />
          
        </BrowserRouter>

        
        
    </>

  );

}

export default App;
