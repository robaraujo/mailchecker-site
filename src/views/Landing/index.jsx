/* --- Packages and Components --- */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MobileView } from 'react-device-detect';

import { GlobalStyle } from './static/site/siteTools';
import { siteColors } from './static/site/siteData';

import MobileMenu from './components/MobileMenu';
import HelmetHeader from './components/HelmetHeader';

import SectionHeader from './components/SectionHeader';
import SectionFooter from './components/SectionFooter';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import PreviewSection from './components/PreviewSection';
import SectionSponsors from './components/SectionSponsors';
import FAQSection from './components/FAQSection';

/* --- Component [STATELESS] --- */
export default () => (
  <ThemeProvider theme={siteColors}>
    <div id="appWrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      <GlobalStyle />
      <HelmetHeader />

      <SectionHeader />
      <MainSection />
      <AboutSection />
      <PreviewSection />
      <SectionSponsors />
      <FAQSection />
      <SectionFooter />

      <MobileView>
        <MobileMenu />
      </MobileView>
    </div>
  </ThemeProvider>
);
