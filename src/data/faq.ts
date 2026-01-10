interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in frontend development, particularly with Next.js, React, and TailwindCSS. I can help with building complete websites, landing pages, web applications, and improving existing projects.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "It depends on the project scope, but typically small projects take 1-2 weeks, medium projects 2-4 weeks, and larger projects are discussed on a case-by-case basis.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients from all around the world. Communication is primarily done via email, Slack, or video calls.",
  },
  {
    question: "What are your rates?",
    answer:
      "My rates vary depending on the project complexity and requirements. Feel free to reach out with your project details for a custom quote.",
  },
];
