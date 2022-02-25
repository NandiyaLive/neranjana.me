import Head from "next/head";

const Uses = () => {
  const heartIcon = (
    <svg height="1rem" viewBox="0 0 512 512">
      <path fill="crimson" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
    </svg>
  );
  const nextjsIcon = (
    <svg height="1rem" viewBox="0 0 1024 1024" fill="none">
      <path d="M789.273 943.008L753.02 964.146L553.009 781.318L383.812 436.257L403.589 829.538L185.515 687.035L291.333 253.414L462.4 274.324L664.75 700.944L789.273 943.008Z" fill="white" />
      <path d="M478.503 0.799911C476.303 0.999892 469.304 1.69982 463.005 2.19977C317.719 15.2985 181.632 93.6908 95.4407 214.179C47.4454 281.173 16.7483 357.165 5.14948 437.657C1.04988 465.754 0.549927 474.054 0.549927 512.15C0.549927 550.246 1.04988 558.545 5.14948 586.643C32.9468 778.724 169.633 940.108 355.015 999.902C388.212 1010.6 423.209 1017.9 463.005 1022.3C478.503 1024 545.497 1024 560.995 1022.3C629.688 1014.7 687.883 997.703 745.277 968.405C754.076 963.906 755.776 962.706 754.576 961.706C753.776 961.106 716.28 910.811 671.284 850.017L589.492 739.528L487.002 587.843C430.608 504.451 384.212 436.257 383.812 436.257C383.413 436.157 383.013 503.551 382.813 585.843C382.513 729.929 382.413 735.728 380.613 739.128C378.013 744.027 376.013 746.027 371.814 748.227C368.614 749.827 365.814 750.127 350.716 750.127H333.417L328.818 747.227C325.818 745.327 323.618 742.827 322.119 739.928L320.019 735.428L320.219 534.948L320.519 334.367L323.618 330.468C325.218 328.368 328.618 325.668 331.018 324.368C335.117 322.369 336.717 322.169 354.015 322.169C374.413 322.169 377.813 322.968 383.113 328.768C384.612 330.368 440.107 413.96 506.501 514.65C572.894 615.34 663.685 752.827 708.281 820.32L789.273 943.008L793.373 940.308C829.669 916.711 868.065 883.114 898.462 848.117C963.156 773.824 1004.85 683.233 1018.85 586.643C1022.95 558.545 1023.45 550.246 1023.45 512.15C1023.45 474.054 1022.95 465.754 1018.85 437.657C991.053 245.576 854.367 84.1918 668.985 24.3976C636.288 13.7986 601.491 6.49935 562.495 2.09978C552.896 1.09988 486.802 -1.05798e-05 478.503 0.799911ZM687.883 310.17C692.682 312.569 696.582 317.169 697.982 321.969C698.782 324.568 698.982 380.163 698.782 505.451L698.482 685.233L666.785 636.638L634.988 588.043V457.355C634.988 372.864 635.388 325.368 635.988 323.068C637.588 317.469 641.087 313.069 645.887 310.47C649.987 308.37 651.486 308.17 667.185 308.17C681.983 308.17 684.583 308.37 687.883 310.17Z" fill="black" />
      <path d="M666.708 634.76L636.241 588.173L636.247 455.916C636.253 326.054 636.311 323.565 639.447 318.421C644.276 310.5 651.406 308.248 669.649 308.881C686.425 309.462 691.934 311.803 695.994 320.075C697.558 323.26 697.894 362.06 697.577 502.733L697.175 681.348L666.708 634.76Z" fill="white" />
    </svg>
  );

  return (
    <>
      <Head>
        <title>Uses | Neranjana Prasad</title>
      </Head>
      <section className="uses pt-5">
        <div className="container">
          <div className="grid">
            <div className="pb-10">
              <div>
                <p className="is-text-20 text-600 py-5">Primary</p>
                <ul>
                  <li>
                    <span>Hardware - </span>HP Compaq Elite 8300
                  </li>
                  <li>
                    <span>OS - </span>Manjaro Linux (XFCE)
                  </li>
                </ul>
              </div>
              <div>
                <p className="is-text-20 text-600 py-5 pt-10">Development</p>
                <ul>
                  <li>
                    <span>IDE - </span>VSCode
                  </li>
                  <li>
                    <span>Online IDE - </span>CodeSandbox
                  </li>
                  <li>
                    <span>Shell - </span>fish
                  </li>
                  <li>
                    <span>Prompt - </span>Starship
                  </li>
                  <li>
                    <span>Version Control - </span>Github
                  </li>
                  <li>
                    <span>Hosting - </span>Vercel / Netlify / Heroku
                  </li>
                  <li>
                    <span>API Testing - </span>Postman
                  </li>
                  <li>
                    <span>DNS + CDN - </span>Cloudflare
                  </li>
                  <li>
                    <span>Prototyping - </span>Figma
                  </li>
                  <li>
                    <span>Illustrations - </span>unDraw
                  </li>
                  <li>
                    <span>Icons - </span>SVG Repo / Font Awesome
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="is-text-20 text-600 py-5">Other</p>
              <ul>
                <li>
                  <span>Music Streaming - </span>Spotify
                </li>
                <li>
                  <span>Password Manager - </span>Bitwarden
                </li>
                <li>
                  <span>2FA - </span> Google Authenticator
                </li>
                <li>
                  <span>Main Browser - </span> Firefox
                </li>
                <li>
                  <span>Secondary Browser - </span> Brave
                </li>
                <li>
                  <span>Ad Blocker - </span>uBlock Origin
                </li>
                <li>
                  <span>Texting - </span> Signal
                </li>
                <li>
                  <span>Cloud Storage - </span> Telegram
                </li>
                <li>
                  <span>Media Player - </span> VLC / mpv-android
                </li>
                <li>
                  <span>TV / Movies Tracker - </span>Trakt.tv
                </li>
                <li>
                  <span>Note Taking - </span> Google Keep
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <p>
            Made with <span>{heartIcon}</span>{" + "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <span>Next.js</span>
            </a>{" + "}
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <span>Sass</span>
            </a> in  🇱🇰
          </p>
          <p>
            Hosted using{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              Vercel
            </a>
            {" + "}
            <a href="https://github.com/NandiyaLive/neranjana.tk" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Uses;
