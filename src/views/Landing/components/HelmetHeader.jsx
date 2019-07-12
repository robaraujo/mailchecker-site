/* --- Packages and Components --- */
import React from 'react';
import Helmet from 'react-helmet';

/* --- Images & Other Assets --- */
import Favicon from '../static/img/logo_tiny.png';

/* --- Component [STATELESS] --- */
export default () => (
  <Helmet>
    <title>MailChecker</title>
    <meta
      name="description"
      content="A maior empresa de validação de e-mails no mundo."
    />
    <meta
      name="google-site-verification"
      content="HrZx9ln8WamacY3EvmuPaCpXqW0Ovw82ybThKXOEiQw"
    />
    <meta name="keywords" content="mailchecker, mail, validade, checker" />
    <link
      rel="icon"
      href={Favicon}
      sizes={['16x16', '32x32', '64x64', '128x128']}
      type="image/png"
    />
  </Helmet>
);
