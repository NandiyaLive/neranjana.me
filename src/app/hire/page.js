import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";

export const metadata = {
  title: "Hire",
};

const HirePage = () => {
  return (
    <main className="container max-w-6xl pb-16 flex gap-8">
      <section className="flex-1">
        <ContactForm />
      </section>

      <section className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Questions?</h1>
        <FAQ />
      </section>
    </main>
  );
};

export default HirePage;
