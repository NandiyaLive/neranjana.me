import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Questions = () => {
  const QandA = [
    {
      question: "What are your areas of expertise?",
      answer:
        "Well I'm experienced in developing stunning full-stack websites using Next.js (a React meta framework) and TailwindCSS (a CSS framework).",
    },
    {
      question: "What is your experience level?",
      answer:
        "I have 2+ years experience in Next.js and 5+ years experience in building websites using HTML, CSS and JavaScript.",
    },
    {
      question: "What are your rates?",
      answer:
        "My minimum rate is $110 (LKR36,000) for a single page website and it goes up to ∞, depending on your requirements.",
    },
    {
      question: "Where are you located? Do you work remotely?",
      answer:
        "Yes. As I said I'm from Kandy, Sri Lanka. But there's no problem if it's far from where you are as I'm used to working remotely.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Most of the projects take between 14 days to 2 months but it heavily depends on the workload I have to complete. But I can assure you that I will deliver the project on time.",
    },
    {
      question: "How do you communicate with clients?",
      answer:
        "I'm using Google Meet to communicate, but I can also communicate via Slack, Discord, or any other platform you prefer. And I'll be updating you with the progress of the project using a Notion's Kanban Board.",
    },
    {
      question: "What is your process for delivering projects?",
      answer: (
        <div>
          <p>I follow a simple 5 step process to deliver projects.</p>
          <ol className=" list-inside list-decimal space-y-2 pl-4">
            <li>
              <strong>Discovery</strong> — I will ask you a series of questions to understand your business and your
              goals. I will also ask you to share any examples of websites that you like.
            </li>

            <li>
              <strong>Design</strong> — I will create a design for your website and send it to you for feedback. I will
              make any changes you request until you are 100% happy with the design.
            </li>

            <li>
              <strong>Development</strong> — I will develop your website using Next.js and TailwindCSS and make sure it
              is responsive and works on all devices and browsers. I will send you a link to the website for feedback.
            </li>

            <li>
              <strong>Deployment</strong> — I will deploy your website to a reliable cloud platform and make sure
              everything is working correctly and securely (SSL).
            </li>

            <li>
              <strong>Maintenance</strong> — I will provide you with 1 month of free maintenance. This includes fixing
              any bugs and making minor changes to the website.
            </li>
          </ol>
        </div>
      ),
    },
    {
      question: "What are your terms of payment?",
      answer:
        "I require a 50% deposit to start working on your project. The remaining 50% is due when the project is complete and ready to be deployed. But, this payment schedule can be adjusted.",
    },
    {
      question: "What is your availability?",
      answer: "I'm currently available for hire. I'm also available for long-term contracts.",
    },
  ];
  return (
    <Accordion type="single" collapsible className="w-full">
      {QandA.map((qa, i) => (
        <AccordionItem key={i} value={`item-${i + 1}`}>
          <AccordionTrigger className="text-left">{qa.question}</AccordionTrigger>
          <AccordionContent>{qa.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Questions;
