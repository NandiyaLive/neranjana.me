import Head from "next/head";

const Uses = () => {
  const heartIcon = (
    <svg height="1rem" viewBox="0 0 512 512">
      <path
        fill="crimson"
        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      ></path>
    </svg>
  );

  return (
    <>
      <Head>
        <title>Uses | Neranjana Prasad</title>
      </Head>
      <section className="uses">
        <div className="container">
          <div className="grid">
            <div className="pb-10">
              <div>
                <p className="is-text-20 text-600 pb-5">Primary</p>
                <ul>
                  <li>
                    <span>Hardware - </span>Acer TravelMate P446
                  </li>
                  <li>
                    <span>OS - </span>Manjaro Linux (XFCE)
                  </li>
                </ul>
              </div>
              <div>
                <p className="is-text-20 text-600 pb-5 pt-10">Development</p>
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
              <p className="is-text-20 text-600 pb-5">Other</p>
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
        <div className="bottom">
          <footer>
            <p>
              Made with <span>{heartIcon}</span>
              {" + "}
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <span>Next.js</span>
              </a>
              {" + "}
              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                <span>Sass</span>
              </a>{" "}
              in{" "}
              <span role="img" aria-label="Flag LK" title="Sri Lanka">
                🇱🇰
              </span>
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
        </div>
      </section>
    </>
  );
};

export default Uses;
