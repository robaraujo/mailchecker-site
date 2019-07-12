/* --- Packages and Components --- */
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import FiveStar from './FiveStar';
import { mediaSize } from '../static/site/siteTools';
import { mainPageData } from '../static/site/siteData';

/* --- Images --- */
//import HeroImg from '../static/img/main/hero_rounded.png';
import HeroImg from '../static/img/main/email-verification.png';
import AbstractShape1 from '../static/img/shapes/main_about_middle_left@2x.png';

/* --- Styles --- */
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;

  ${mediaSize.tablet`
    height: 130vw;
  `};

  ${mediaSize.phone`
    height: 170vw;
  `};
`;

const ContentContainer = styled.div`
  padding-top: 10vh;
  width: 80vw;
  height: 80vh;
  margin: auto;

  color: ${props => props.theme.offBlack};

  display: grid;
  grid-column-gap: 3vw;
  grid-template-columns: 5fr 5fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'header hero'
    'action hero';

  ${mediaSize.tablet`
    padding-top: 25vw;
    height: 90vw;

    grid-template-columns: auto;
    grid-template-rows: 6fr 2fr 1fr;
    grid-template-areas:
      'hero'
      'header'
      'action';
  `};

  ${mediaSize.phone`
    height: 130vw;
    grid-template-rows: 5fr 1fr 1fr 1fr;
    text-align: center;
  `};
`;

const HeroImgContainer = styled.img`
  grid-area: hero;
  justify-self: end;
  align-self: center;
  max-height: 100%;
  width: 100%;

  ${mediaSize.tablet`
    justify-self: center;
  `};
`;

const HeaderTextContainer = styled.div`
  grid-area: header;
  align-self: end;
  margin-bottom: 2vh;
  position: relative;
  z-index: 1;

  ${mediaSize.tablet`
    justify-self: center;
  `};

  ${mediaSize.phone`
    padding-top: 5%;
  `};
`;

const Header = styled.span`
  font-size: 2.6vw;
  font-weight: 500;
  position: relative;

  &:after {
    content: '${props => props.shadowText}';
    color: rgba(199, 199, 199, 0.4);
    font-size: 1.3em;

    position: absolute;
    top: -3vmin;
    right: -1vmin;
    z-index: -1;
  }

  ${mediaSize.tablet`
    font-size: 7vw;
  `};

  ${mediaSize.phone`
    font-size: 7.5vw;
  `};
`;

const ActionTextContainer = styled.div`
  grid-area: action;
  align-self: start;
  margin-bottom: 5vh;
  width: 90%;

  font-size: 1.3vw;

  ${mediaSize.tablet`
    justify-self: center;
    text-align: center;
    width: 90%;

    font-size: 3vw;
  `};

  ${mediaSize.phone`
    font-size: 4vw;
    margin-bottom: 4vw;
  `};

  small {
    margin-top: 10px;
    display: block;
  }
`;

const ShapeContainer = styled.img`
  position: absolute;
  bottom: -15vw;
  left: -20px;
  max-width: 30vw;
  max-height: 30vw;
  z-index: -1;

  ${mediaSize.tablet`
    max-height: 50vw;
    max-width: 50vw;
    left: -20vw;
    bottom: -12vw;
  `};

  ${mediaSize.phone`
    display: none;
  `};
`;

/* --- Component --- */
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.signUpForMailingList = email => {};
  }

  render() {
    return (
      <PageContainer className="section" id="main">
        <Fade>
          <ContentContainer>
            <HeroImgContainer src={HeroImg} alt="A person thinking." />
            <HeaderTextContainer>
              <Header shadowText={mainPageData.header.split(' ').splice(-1)}>
                {mainPageData.header}
              </Header>
            </HeaderTextContainer>
            <ActionTextContainer>
              {mainPageData.actionText}
              <small>
                Avaliado <FiveStar /> 4,8/5 baseado em mais de 200 avaliações.
              </small>
            </ActionTextContainer>
          </ContentContainer>
        </Fade>
        <ShapeContainer src={AbstractShape1} />
      </PageContainer>
    );
  }
}

export default MainPage;
