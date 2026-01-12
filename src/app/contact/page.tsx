import { Clock, HelpCircle, Mail } from "lucide-react";
import type { Metadata } from "next";

import { FAQS } from "@/data/faq";
import { socialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for freelance work or any inquiries you may have.",
};

const Page = () => (
  <main className="container mx-auto max-w-7xl pt-24 pb-16">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <section>
        <h1 className="mb-6 text-4xl font-bold">Let&apos;s Work Together</h1>
        <p className="mb-8 text-lg leading-relaxed opacity-90">
          I&apos;m currently available for freelance work. If you&apos;re
          interested in working with me, feel free to reach out via email or
          through any of my social channels.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:hello@neranjana.me"
                className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
              >
                hello@neranjana.me
              </a>
            </div>
          </div>

          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <div key={social.platform} className="flex items-center gap-4">
                <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{social.platform}</h3>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
                  >
                    @{social.handle}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h3 className="mb-2 flex items-center gap-2 font-semibold">
            <Clock className="h-5 w-5" />
            Availability
          </h3>
          <p className="opacity-80">
            I&apos;m currently{" "}
            <span className="font-semibold text-green-500">available</span> for
            new projects. Expected response time: 24-48 hours.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200 p-6 select-none dark:border-neutral-800"
            >
              <h3 className="mb-2 flex items-start gap-2 font-semibold">
                <HelpCircle className="mt-0.5 h-5 w-5 text-yellow-500" />
                {faq.question}
              </h3>
              <p className="ml-7 leading-relaxed opacity-80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default Page;
