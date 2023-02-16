import { Icons } from "@/data/icons";
import { socialLinks } from "@/data/social-links";

const Contact = () => {
  return (
    <div className="flex gap-8 justify-between h-full pb-12 md:flex-col mt-8">
      <div className="max-w-md">
        <h1 className="text-4xl mb-8 font-bold">Just Say Hi!</h1>

        <h2 className="text-2xl">I&apos;m always open to discuss your project and talk about new things.</h2>

        <p className="mt-8 font-semibold">Mail Me At :</p>
        <p className="underline underline-offset-2">
          <a href="mailto:hello@neranjana.me">hello@neranjana.me</a>
        </p>

        <p className="mt-8 mb-2 font-semibold">Or Hire Me On :</p>
        <a href="https://fiverr.com/neranjanaprasad" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1690 512" className="h-8">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M1551.46 153.6h-37.95c-37.96 0-62.63 11.38-81.6 53.1v-53.1h-138.54c-37.96 0-62.63 11.38-81.6 53.1v-53.1H1097.9v348.92h113.87V326.16c0-49.3 20.87-77.75 58.83-77.75h47.44v254.11h113.87V326.16c0-49.3 20.87-77.75 58.83-77.75h58.83l1.89-94.81Zm-480.13 201.01c1.9-7.59 1.9-17.07 1.9-34.14 0-73.95-43.65-172.56-174.59-172.56-123.36 0-172.7 96.71-172.7 178.25 0 83.44 56.93 180.15 180.29 180.15 74.01 0 134.74-36.03 159.41-96.71l-100.58-28.44c-7.59 20.85-28.47 34.13-58.83 34.13-39.85 0-64.53-20.86-70.22-60.68h235.32Zm-235.32-66.37c7.59-41.72 28.47-56.89 64.52-56.89 37.96 0 60.73 26.55 62.63 56.89H836.01ZM528.58 502.52h98.68L752.51 155.5H638.64l-60.72 202.9-60.73-204.8H403.32l125.26 348.92Zm-463.06 0h111.97V248.41h108.17v254.11h111.97V153.6H177.49v-20.86c0-22.75 17.08-37.93 41.75-37.93h66.42V0h-83.5C120.56 0 65.52 51.2 65.52 125.16v28.44H1v94.81h64.52v254.11Z"
              clip-rule="evenodd"
            />
            <path fill="#1DBF73" d="M1619.78 512c37.96 0 70.22-32.24 70.22-70.16 0-37.93-32.26-70.17-70.22-70.17-37.95 0-70.21 32.24-70.21 70.17 0 37.92 32.26 70.16 70.21 70.16Z" />
          </svg>
        </a>

        <p className="mt-8 mb-2 font-semibold">Follow Me On :</p>
        <ul className="flex gap-4">
          {socialLinks.map(({ platform, link, icon }, index) => {
            return (
              <li key={index}>
                <a href={link} title={platform} target="_blank" rel="noreferrer">
                  <div className="h-7 fill-white">{Icons[icon]}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-1/2 md:w-full">
        <form action="https://formspree.io/xyynwlly" method="POST" className="max-w-full md:max-w-xl">
          <label className="block text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="text" id="name" name="name" placeholder="Bruce Wayne" required />
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="email" id="email" name="email" placeholder="bruce@waynecorp.com" required />
          <label className="block text-sm mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="subject" id="subject" name="subject" placeholder="This is the subject" />
          <label className="block text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="py-1 px-2 rounded-sm w-full outline-none text-neutral-900 min-h-full" rows={6} name="message" id="message" placeholder="I would like to ask you..." required></textarea>
          <button type="submit" className="bg-orange-400 text-neutral-900 rounded-md pt-3 pb-2 px-5 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
