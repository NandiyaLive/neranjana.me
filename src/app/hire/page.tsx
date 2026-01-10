import { Icon } from "@iconify/react";

import { FAQS } from "@/data/faq";

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
              <Icon icon="lucide:mail" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Email</h3>
              <a
                href="mailto:hello@neranjana.me"
                className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
              >
                hello@neranjana.me
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
              <Icon icon="lucide:linkedin" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/neranjanaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
              >
                @neranjanaprasad
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
              <Icon icon="lucide:github" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">GitHub</h3>
              <a
                href="https://github.com/NandiyaLive"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
              >
                @NandiyaLive
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-yellow-500/10 p-3 text-yellow-500">
              <Icon icon="lucide:twitter" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Twitter</h3>
              <a
                href="https://twitter.com/NandiyaLive"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-colors hover:text-yellow-500 hover:opacity-100"
              >
                @NandiyaLive
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h3 className="mb-2 flex items-center gap-2 font-semibold">
            <Icon icon="lucide:clock" className="h-5 w-5" />
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
                <Icon
                  icon="lucide:help-circle"
                  className="mt-0.5 h-5 w-5 text-yellow-500"
                />
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
