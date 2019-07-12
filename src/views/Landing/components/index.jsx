/* --- Packages and Components --- */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MobileView } from 'react-device-detect';

import { GlobalStyle } from '../static/site/siteTools';
import { siteColors } from '../static/site/siteData';

import MobileMenu from '../components/MobileMenu';
import HelmetHeader from '../components/HelmetHeader';

import PageHeader from './SectionHeader';
import PageFooter from './SectionFooter';
import MainPage from './MainSection';
import AboutPage from './AboutSection';
import PreviewPage from './PreviewSection';
import SponsorsPage from './SectionSponsors';
import FAQPage from './FAQSection';

/* --- Component [STATELESS] --- */
export default () => (
  <ThemeProvider theme={siteColors}>
    <div id="appWrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      <GlobalStyle />
      <HelmetHeader />

      <PageHeader />
      <MainPage />
      <AboutPage />
      <PreviewPage />
      <SponsorsPage />
      <FAQPage />
      <PageFooter />

      <MobileView>
        <MobileMenu />
      </MobileView>
    </div>
  </ThemeProvider>
);
