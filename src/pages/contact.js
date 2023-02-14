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
          <button type="submit" className="bg-rose-800 rounded-md py-2 px-5 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
