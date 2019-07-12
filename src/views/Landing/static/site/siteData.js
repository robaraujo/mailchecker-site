import React from 'react';

/* eslint-disable global-require */
export const siteColors = {
  offBlack: '#46484a',
  offWhite: '#EFEFEF',
  warning: '#F4A867',
  error: '#F07285',

  darkerPurple: '#854DD0',
  primary: '#9A71D1',
  lighterPurple: '#E2D4F5',

  darkerBlue: '#4270DE',
  secondary: '#4B97E0',
  lighterBlue: '#A9C2F8'
};

export const siteStructure = {
  sections: [
    { name: 'Sobre', scrollTo: 'about' },
    { name: 'Avaliações', scrollTo: 'event' },
    { name: 'Quem Usa?', scrollTo: 'sponsors' },
    { name: 'Funcionalidades', scrollTo: 'faq' }
  ]
};

export const siteButtons = {
  contactButton: {
    text: 'Contact',
    link: 'mailto:hello@equithon.org',
    location: '_self'
  },
  applyButton: {
    text: 'Apply',
    link: 'https://my.equithon.org',
    location: '_self'
  },
  statusButton: {
    text: 'Login',
    link: '/sign-in',
    location: '_self'
  },
  signupButton: {
    text: 'Stay Posted',
    link:
      'https://www.google.com/search?q=this+should+sign+the+user+up+for+a+mailing+list&oq=this+should+sign+the+user+up+for+a+mailing+list&aqs=chrome..69i57.5475j0j1&sourceid=chrome&ie=UTF-8',
    location: '_blank'
  }
};

export const mobileMenuData = {
  links: siteStructure.sections
};

export const headerData = {
  logoSrc: '',
  links: siteStructure.sections,
  actionButton: siteButtons.statusButton
};

export const footerdata = {};

export const mainPageData = {
  header: 'O serviço de verificação de e-mail com o melhor custo-benefício.',
  actionText:
    'Livre-se dos problemas de entrega e de endereços de e-mail ruins com o nosso serviço de alta qualidade e de ótimo preço. Verificação e validação de e-mails que melhoram a qualidade dos seus dados e o ROI de suas campanhas.',
  actionButton: siteButtons.contactButton
};

export const aboutPageData = {
  header: 'Por que usar?',
  desc:
    'Não deixe que os endereços de e-mail ruins arruínem a qualidade da sua lista e sua reputação como remetente. Adicione nossa ferramenta de verificação de e-mail em tempo real no seu site apenas copiando e colando uma linha de código. É preciso apenas alguns segundos e nada de conhecimentos técnicos.',
  testimonials: [
    {
      authorName: 'Marca H',
      authorDesc: 'Capterra',
      authorQuote:
        'The API is well documented, the results are the best in the industry. The pricing is great. But most importantly, I get far fewer bounces and complaints after running my...'
    },
    {
      authorName: 'Mandy Meindersma',
      authorDesc: 'Capterra',
      authorQuote:
        'I was able to meet three amazing bad ass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    }
  ]
};

export const previewPageData = {
  header: 'O verificador de e-mails #1',
  previewDesc: [
    'MailChecker é o validador de e-mails líder global em satisfação dos clientes.',
    ''
  ],
  lastYear: {
    header: '',
    statBubbles: [
      {
        desc: 'G2 Crowd',
        img: require('../img/reviews/g2.png'),
        review: 4.7,
        backgroundColor: '#AE85E6',
        color: 'white'
      },
      {
        desc: 'Capterra',
        img: require('../img/reviews/capterra.png'),
        review: 4.9,
        backgroundColor: '#E2D4F5',
        color: 'siteColors.offBlack'
      },
      {
        desc: 'TrustPilot',
        img: require('../img/reviews/trustpilot.png'),
        review: 4.6,
        backgroundColor: '#AE85E6',
        color: 'white'
      }
    ]
  },
  thisYear: {
    header: 'Alguns dados:',
    statCounters: [
      {
        start: 0,
        end: 3500,
        subtitle: 'E-mails checados',
        gridArea: 'statAttendees'
      },
      {
        start: 0,
        end: 100,
        suffix: '+',
        subtitle: 'Clientes',
        gridArea: 'statDuration'
      },
      // {
      //   start: 0,
      //   end: 5,
      //   textAbove: 'Participants will work towards one of:',
      //   subtitle: 'Tracks',
      //   color: '#854dd0',
      //   gridArea: 'statCategories'
      // },
      {
        start: 100,
        end: 1,
        subtitle: 'Objetivo',
        color: 'white',
        gridArea: 'statGoal'
      }
    ],
    categories: [
      // {
      //   name: 'Physical Accessibility',
      //   contents: <div style={{ fontWeight: 500 }}>Physical Accessibility</div>,
      //   backgroundColor: '#E2D4F5',
      //   color: 'siteColors.offBlack'
      // },
      // {
      //   name: 'Female Empowerment',
      //   contents: <div style={{ fontWeight: 500 }}>Female Empowerment</div>,
      //   backgroundColor: '#AE85E6',
      //   color: 'white'
      // },
      // {
      //   name: 'Economic Disparity',
      //   contents: <div style={{ fontWeight: 500 }}>Economic Disparity</div>,
      //   backgroundColor: '#E2D4F5',
      //   color: 'siteColors.offBlack'
      // },
      // {
      //   name: 'Mobility Rights',
      //   contents: <div style={{ fontWeight: 500 }}>Mobility Rights</div>,
      //   backgroundColor: '#E2D4F5',
      //   color: 'siteColors.offBlack'
      // },
      // {
      //   name: 'Mental Health',
      //   contents: <div style={{ fontWeight: 500 }}>Mental Health</div>,
      //   backgroundColor: '#AE85E6',
      //   color: 'white'
      // }
    ]
  }
};

export const sponsorBubbleTiers = {
  diamond: 250,
  gold: 220,
  silver: 190,
  bronze: 160
};

export const sponsorsPageData = {
  header: 'Previous Sponsors',
  sponsorUsBlurb:
    'MailChecker would not be possible without the generous sponsorship of companies and individuals who have all exhibited a passion for social innovation and are commited to helping us improve the world, one project at a time.',
  sponsorAction: {
    actionText: 'Junte-se a nós',
    link: {
      text:
        'Experimente o melhor verificador de e-mails em massa GRATUITAMENTE e veja a precisão dos resultados!.',
      to:
        'mailto: hello@equithon.org?subject=Equithon Sponsorship/Partnership Inquiry'
    }
  },
  shouldShowSponsorBubbles: true,
  sponsorBubbles: [
    {
      name: 'Facebook',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.facebook.com',
      imgSrc: require('../img/sponsors/logos/logo_facebook.png'),
      color: '#fff',
      backgroundColor: '#3b5998',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Google',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.facebook.com',
      imgSrc: require('../img/sponsors/logos/logo_google.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'WiCS',
      size: sponsorBubbleTiers.silver,
      link: 'https://cs.uwaterloo.ca/wics',
      imgSrc: require('../img/sponsors/logos/logo_wics.png'),
      color: '#fff',
      backgroundColor: '#f6e2e7',
      x: 230,
      y: 120,
      vy: 0.1
    },
    {
      name: 'University of Waterloo',
      size: sponsorBubbleTiers.diamond,
      link: 'https://uwaterloo.ca/',
      imgSrc: require('../img/sponsors/logos/logo_uw.png'),
      color: '#fff',
      backgroundColor: '#FFD54F',
      x: 0,
      y: 260,
      vy: -0.1
    },
    {
      name: 'Stripe',
      size: sponsorBubbleTiers.silver,
      link: 'https://stripe.com',
      imgSrc: require('../img/sponsors/logos/logo_stripe.png'),
      color: '#fff',
      backgroundColor: '#6676de',
      x: 225,
      y: 550,
      vy: 0.1
    },
    {
      name: 'BMO',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.bmo.com/main/personal',
      imgSrc: require('../img/sponsors/logos/logo_bmo.png'),
      color: '#fff',
      backgroundColor: '#0079c1',
      x: 225,
      y: 550,
      vy: 0.1
    },
    {
      name: 'PagerDuty',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.pagerduty.com/',
      imgSrc: require('../img/sponsors/logos/logo_pagerduty.png'),
      color: '#fff',
      backgroundColor: '#25c151',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Mathematics Society',
      size: sponsorBubbleTiers.bronze,
      link: 'http://mathsoc.uwaterloo.ca/',
      imgSrc: require('../img/sponsors/logos/logo_mathsoc.png'),
      color: '#fff',
      backgroundColor: '#C60078',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'HeForShe',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.heforshe.org/en',
      imgSrc: require('../img/sponsors/logos/logo_heforshe.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Math Endowment Fund',
      size: sponsorBubbleTiers.diamond,
      link: 'https://uwaterloo.ca/math-endowment-fund/',
      imgSrc: require('../img/sponsors/logos/logo_mef.png'),
      color: '#fff',
      backgroundColor: '#fff',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Microsoft',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.microsoft.com/en-ca',
      imgSrc: require('../img/sponsors/logos/logo_microsoft.png'),
      color: '#fff',
      backgroundColor: '#575352',
      x: 1050,
      y: 100,
      vy: 0.1
    },
    {
      name: 'Balsamiq',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.balsamiq.com',
      imgSrc: require('../img/sponsors/logos/logo_balsamiq.png'),
      color: '#fff',
      backgroundColor: '#cc0000',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'DigitalOcean',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.digitalocean.com',
      imgSrc: require('../img/sponsors/logos/logo_digitalocean.png'),
      color: '#fff',
      backgroundColor: '#0080FF',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Sticker Mule',
      size: sponsorBubbleTiers.bronze,
      link: 'https://www.stickermule.com/ca',
      imgSrc: require('../img/sponsors/logos/logo_stickermule.png'),
      color: '#fff',
      backgroundColor: '#4E2817',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'GoDaddy',
      size: sponsorBubbleTiers.bronze,
      link: 'https://ca.godaddy.com/',
      imgSrc: require('../img/sponsors/logos/logo_godaddy.png'),
      color: '#fff',
      backgroundColor: '#00a63f',
      x: 10,
      y: 20,
      vy: 0.1
    }
  ]
};

/*
SPONSOR HEADER
'Special Thanks'


TEST SPONSOR DATA
{
  name: 'Facebook',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_facebook.png'),
  color: '#fff',
  backgroundColor: '#3b5998',
  x: 10,
  y: 20,
  vy: 0.1
},
{
  name: 'University of Waterloo',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.uwaterloo.com',
  imgSrc: require('../img/sponsors/logos/logo_uw.png'),
  color: '#fff',
  backgroundColor: '#FFD54F',
  x: 0,
  y: 260,
  vy: -0.1
},
{
  name: 'Flipp',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_flipp.png'),
  color: '#fff',
  backgroundColor: '#28c0d2',
  x: 20,
  y: 470,
  vy: 0.1
},
{
  name: 'WiCS',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.wics.com',
  imgSrc: require('../img/sponsors/logos/logo_wics.png'),
  color: '#fff',
  backgroundColor: '#ffd1dc',
  x: 230,
  y: 120,
  vy: 0.1
},
{
  name: 'Google',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.google.com',
  imgSrc: require('../img/sponsors/logos/logo_google.png'),
  color: '#27cc24',
  backgroundColor: '#fff',
  x: 215,
  y: 345,
  vy: 0.1
},
{
  name: 'Stripe',
  size: sponsorBubbleTiers.gold,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_stripe.png'),
  color: '#fff',
  backgroundColor: '#6676de',
  x: 225,
  y: 550,
  vy: 0.1
},
{
  name: 'Bloomberg',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_bloomberg.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Datadog',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_datadog.png'),
  color: '#fff',
  backgroundColor: '#774aa4',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Square',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_square.png'),
  color: '#fff',
  backgroundColor: '#000',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Shopify',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_shopify.png'),
  color: '#fff',
  backgroundColor: '#3b9a2b',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Microsoft',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_microsoft.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Dropbox',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_dropbox.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'SeatGeek',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_seatgeek.png'),
  color: '#fff',
  backgroundColor: '#1696f2',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Loopio',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_loopio.png'),
  color: '#fff',
  backgroundColor: '#38babe',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Top Hat',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_tophat.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'D2L',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_d2l.png'),
  color: '#fff',
  backgroundColor: '#ffb800',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'kik',
  size: sponsorBubbleTiers.diamond,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_kik.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Wealthsimple',
  size: sponsorBubbleTiers.silver,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_wealthsimple.png'),
  color: '#fff',
  backgroundColor: '#fcb117',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Borrowell',
  size: sponsorBubbleTiers.bronze,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_borrowell.png'),
  color: '#fff',
  backgroundColor: '#fff',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'CIBC',
  size: sponsorBubbleTiers.gold,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_cibc.png'),
  color: '#fff',
  backgroundColor: '#b00b1c',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'Tribalscale',
  size: sponsorBubbleTiers.silver,
  link: 'https://www.facebook.com',
  imgSrc: require('../img/sponsors/logos/logo_tribalscale.png'),
  color: '#fff',
  backgroundColor: '#000',
  x: 1050,
  y: 100,
  vy: 0.1
},
{
  name: 'heheheh',
  size: sponsorBubbleTiers.silver,
  link: 'https://www.alexieyizhe.ne',
  imgSrc: require('../img/sponsors/logos/logo_alex.png'),
  color: '#fff',
  backgroundColor: '#ff00cf',
  x: 1050,
  y: 100,
  vy: 0.1
}


*/

export const FAQPageData = {
  header: 'Sobre nosso serviço de validação',
  desc:
    'Os bancos de dados de marketing normalmente se degradam em aproximadamente 22,5% por ano. Uma taxa de 5% de bounce pode fazer você ser bloqueado. Quem usa TheChecker não precisa se preocupar com isso.',
  faqs: [
    {
      question: 'Precisão de até 99%+',
      answer:
        'Nossos e-mails marcados como válidos são cobertos por nossa garantia de entregabilidade.'
    },
    {
      question: 'Verificação De E-mails Rápida',
      answer:
        'Limpe massivas listas de contatos desatualizadas em um tempo curto com completa precisão. '
    },
    {
      question: 'Preços acessíveis',
      answer:
        'Somos (de longe) a solução com melhor custo-benefício (precisa, rápida e acessível).'
    },
    {
      question: 'Tipos de arquivos compatíveis',
      answer:
        'Oferecemos uma ampla gama de compatibilidade. Faça upload de arquivos em formato CSV, TXT, XLS ou XLSX.'
    },
    {
      question: 'Verificador de Bounce de E-mail',
      answer:
        'Identifica e mostra quais e-mails vão apresentar falha de entrega e que por isso não é seguro enviá-los.'
    },
    {
      question: 'Anti-Greylisting',
      answer:
        'Nosso algoritmo te dá os mais precisos resultados na validação de e-mails.'
    },
    {
      question: 'Verificador de Catch-all',
      answer:
        'Verifica por domínios que são catch-all, que vão apresentar resposta positiva para todos os e-mails.'
    },
    {
      question: 'Correção de erros de digitação de e-mails',
      answer:
        'Sugere uma possível correção para endereços de e-mail com erros ortográficos (@ gmail.com => @ gmail.com).'
    }
  ],
  FAQAction: {
    actionText: 'Have another burning question?',
    link: {
      text: "Talk to our team (we don't bite).",
      to: 'mailto: hello@equithon.org'
    }
  }
};
