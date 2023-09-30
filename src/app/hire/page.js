import ContactForm from "./components/ContactForm";
import Questions from "./components/Questions";

export const metadata = {
  title: "Hire",
};

const HirePage = () => {
  return (
    <main className="container max-w-6xl pb-16 flex gap-8 md:flex-col md:gap-16">
      <section className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Hire Me</h1>
        <p className="font-medium mb-8">
          I'm currently available for hire. If you're interested in working with me, please fill out the form below.
        </p>
        <ContactForm />
      </section>

      <section className="flex-1">
        <h1 className="text-3xl font-bold mb-2">Questions?</h1>
        <Questions />
      </section>
    </main>
  );
};

export default HirePage;
