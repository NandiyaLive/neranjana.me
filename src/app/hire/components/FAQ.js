import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What are your areas of expertise?</AccordionTrigger>
        <AccordionContent>
          Well I&apos;m experienced in developing stunning full-stack websites using Next.js (a React meta framework)
          and TailwindCSS (a CSS framework).
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>What is your experience level?</AccordionTrigger>
        <AccordionContent>
          I have 2+ years experience in Next.js and 5+ years experience in building websites using HTML, CSS and
          JavaScript.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>What are your rates?</AccordionTrigger>
        <AccordionContent>
          My minimum rate is $110 (LKR36,000) for a single page website and it goes up to ∞, depending on your
          requirements.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Where are you located? Do you work remotely?</AccordionTrigger>
        <AccordionContent>
          Yes. As I said I’m from Kandy, Sri Lanka. But there’s no problem if it’s far from where you are as I'm used to
          working remotely.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>How long does a project take?</AccordionTrigger>
        <AccordionContent>
          Most of the projects take between 10 days to 2 months and it heavily depends on the workload I have to
          complete. But I can assure you that I will deliver the project on time.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>How do you communicate with clients?</AccordionTrigger>
        <AccordionContent>
          I’m using Google Meet to communicate, but I can also communicate via Slack, Discord, or any other platform you
          prefer. And I'll be updating you with the progress of the project using a Notion's Kanban Board.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>What is your process for delivering projects?</AccordionTrigger>
        <AccordionContent>
          I follow a simple 5 step process to deliver projects.
          <ol>
            <li>
              <strong>Discovery</strong>
              <p>
                I will ask you a series of questions to understand your business and your goals. I will also ask you to
                share any examples of websites that you like.
              </p>
            </li>

            <li>
              <strong>Design</strong>
              <p>
                I will create a design for your website and send it to you for feedback. I will make any changes you
                request until you are 100% happy with the design.
              </p>
            </li>

            <li>
              <strong>Development</strong>
              <p>
                I will develop your website using Next.js and TailwindCSS. I will send you a link to the website for
                feedback. I will make any changes you request until you are 100% happy with the website.
                <br />
                And also I will make sure that your website is SEO friendly, optimized for performance and
                accessibility, responsive and works on all devices and browsers.
              </p>
            </li>

            <li>
              <strong>Deployment</strong>
              <p>
                I will deploy your website to a reliable cloud platform and make sure everything is working correctly
                and securely (SSL).
              </p>
            </li>

            <li>
              <strong>Maintenance</strong>
              <p>
                I will provide you with 1 month of free maintenance. This includes fixing any bugs and making minor
                changes to the website.
              </p>
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>What are your terms of payment?</AccordionTrigger>
        <AccordionContent>
          I require a 50% deposit to start working on your project. The remaining 50% is due when the project is
          complete and ready to be deployed. But, this payment schedule can be adjusted.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <AccordionTrigger>What is your availability?</AccordionTrigger>
        <AccordionContent>
          I&apos;m currently available for hire. I&apos;m also available for long-term contracts.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
