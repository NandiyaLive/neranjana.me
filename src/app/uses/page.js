import { cn } from "@/lib/utils";
import { hardware, devSoft, otherSoft } from "./data";

export const metadata = {
  title: "Uses",
};

const UsesPage = () => {
  const softwares = devSoft.concat(otherSoft);

  return (
    <main className="container max-w-6xl pb-16">
      <section>
        <p>A list of the hardware and software I use on a daily basis.</p>

        <h2 className="text-3xl font-bold mb-2 mt-8">Hardware</h2>

        <table className="table-auto w-full max-w-xl">
          <tbody>
            {hardware.map((item, index) => (
              <tr key={item.name} className={cn(index !== hardware.length - 1 && "border-b")}>
                <td className="font-medium py-2 align-top">{item.name}</td>
                <td className="py-2 align-top pl-12">
                  {item.description} {item.extra && <p className="text-sm opacity-80">{item.extra}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mb-2 mt-8">Software</h2>
        <div className="flex items-start mb-2 gap-16 lg:hidden">
          <table className="flex-1 w-full">
            <tbody>
              {devSoft.map((item, index) => (
                <tr key={item.name} className={cn(index !== devSoft.length - 1 && "border-b")}>
                  <td className="font-medium py-2 align-top">{item.name}</td>
                  <td className="py-2 pl-12 align-top ">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {item.description}
                    </a>
                    {item.extra && <p className="text-sm opacity-80">{item.extra}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="flex-1 w-full">
            <tbody>
              {otherSoft.map((item, index) => (
                <tr key={item.name} className={cn(index !== otherSoft.length - 1 && "border-b")}>
                  <td className="font-medium py-2 align-top">{item.name}</td>
                  <td className="py-2 pl-12 align-top">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {item.description}
                    </a>{" "}
                    {item.extra && <p className="text-sm opacity-80">{item.extra}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <table className="hidden lg:table table-auto w-full">
          <tbody>
            {softwares.map((item, index) => (
              <tr key={item.name} className={cn(index !== softwares.length - 1 && "border-b")}>
                <td className="font-medium py-2 align-top">{item.name}</td>
                <td className="py-2 pl-12 align-top">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {item.description}
                  </a>{" "}
                  {item.extra && <p className="text-sm opacity-80">{item.extra}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default UsesPage;
