import { Illustrations } from "../data/media";

const Contact = () => {
  return (
    <div className="flex gap-8 justify-center h-full">
      <div className="xmd:w-full w-1/2">
        <form action="https://formspree.io/xyynwlly" method="POST">
          <label className="block text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input className="mb-4 py-1 px-2 rounded-md w-full outline-none" type="text" id="name" name="name" required />
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input className="mb-4 py-1 px-2 rounded-md w-full outline-none" type="email" id="email" name="email" required />
          <label className="block text-sm mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="mb-4 py-1 px-2 rounded-md w-full outline-none" type="subject" id="subject" name="subject" />
          <label className="block text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="py-1 px-2 rounded-md w-full outline-none min-h-full" rows={6} name="message" id="message" required></textarea>
          <button type="submit" className="btn mt-4 block">
            Send Message
          </button>
        </form>
      </div>

      <div className="w-2/5 block m-auto xmd:hidden">{Illustrations.contact}</div>
    </div>
  );
};

export default Contact;
