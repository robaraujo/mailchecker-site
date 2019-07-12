/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { isMobile } from 'react-device-detect';

import { mediaSize } from '../static/site/siteTools';
import { FAQPageData } from '../static/site/siteData';

import GenericAccordion from './GenericAccordion';
/* --- Images --- */

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding: 10vh 0 0 0;
  width: 80vw;
  height: auto;
  margin: auto;

  color: ${props => props.theme.offBlack};

  ${mediaSize.tablet`
    width: 80vw;
  `};

  ${mediaSize.phone`
  `};
`;

const PageHeader = withReveal(
  styled.div`
    font-size: 2.5vw;
    font-weight: 500;
    color: ${props => props.theme.offBlack};
    position: relative;
    display: inline-block;

    ${mediaSize.tablet`
    font-size: 5vw;
    margin-bottom: 20px;
  `};

    ${mediaSize.phone`
    font-size: 7vw;
    margin-bottom: 30px;
  `};
  `,
  <Fade bottom />
);

const MainDesc = styled.div`
  font-size: 1.3vw;
  font-weight: 400;
  margin-top: 10px;

  ${mediaSize.tablet`
    font-size: 3vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
  `};
`;

const QandAContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    width: 45%;

    ${mediaSize.tablet`
      width: 100%;
    `};

    ${mediaSize.phone`
    `};
  }
`;

const FAQAccordion = styled(GenericAccordion)`
  width: 100%;

  & > div.label {
    font-size: 1.5vw;
    font-weight: 500;
    margin-bottom: 10px;

    ${mediaSize.tablet`
      font-size: 3.5vw;
    `};

    ${mediaSize.phone`
      font-size: 5vw;
    `};
  }

  & div.contents {
    font-size: 1.3vw;
    font-weight: 400;

    ${mediaSize.tablet`
      font-size: 2.5vw;
    `};

    ${mediaSize.phone`
      font-size: 4vw;
    `};
  }
`;

/* --- Component --- */
class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer className="section" id="faq">
        <ContentContainer>
          <PageHeader title={FAQPageData.header}>
            {FAQPageData.header}
          </PageHeader>
          <MainDesc>{FAQPageData.desc}</MainDesc>
          <QandAContainer>
            <Fade bottom>
              {FAQPageData.faqs.map(qa => (
                <FAQAccordion
                  className="accordion question"
                  label={qa.question}
                  collapsible={isMobile}
                  key={qa.question}>
                  <div className="contents">{qa.answer}</div>
                </FAQAccordion>
              ))}
            </Fade>
          </QandAContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

export default FAQPage;
