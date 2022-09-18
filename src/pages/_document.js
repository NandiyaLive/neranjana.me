import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neranjana.tk/" />
        <meta property="og:title" content="Neranjana Prasad — Eat. Sleep. Code. Repeat!" />
        <meta property="og:description" content="Computer Hobbyist • Web Dev • DIY Builder • Tweet-A-Holic • Linux Lover • Sri Lankan" />
        <meta property="og:image" content="https://neranjana.vercel.app/cyborg.svg" />
        
        <link rel="icon" type="image/x-icon" href="/batman.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://neranjana.tk/" />
        <meta property="twitter:title" content="Neranjana Prasad — Eat. Sleep. Code. Repeat!" />
        <meta property="twitter:description" content="Computer Hobbyist • Web Dev • DIY Builder • Tweet-A-Holic • Linux Lover • Sri Lankan" />
        <meta property="twitter:image" content="https://neranjana.vercel.app/cyborg.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Sinhala:wght@500;600&display=swap" rel="stylesheet" />                
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
