import { cn } from "@/lib/utils";
import { hardware, softwaresList } from "./data";

export const metadata = {
  title: "Uses",
};

const UsesPage = () => {
  return (
    <main className="container max-w-6xl pb-16">
      <section>
        <table className="table-auto w-full">
          <thead className="text-left">
            <tr>
              <th colSpan={2} className="text-2xl font-medium pb-2">
                Hardware
              </th>
            </tr>
          </thead>
          <tbody>
            {hardware.map((item, index) => (
              <tr key={item.name} className={cn(index !== hardware.length - 1 && "border-b")}>
                <td className="font-medium py-2 align-top">{item.name}</td>
                <td className="py-2 align-top pl-10 opacity-90 hover:opacity-100">
                  {item.description}
                  {item.extra && <p className="text-sm opacity-80">{item.extra}</p>}
                </td>
              </tr>
            ))}
          </tbody>

          <thead className="text-left">
            <tr>
              <th colSpan={2} className="text-2xl font-medium pt-8 pb-2">
                Softwares, Services and Tools
              </th>
            </tr>
          </thead>
          <tbody>
            {softwaresList.map((item, itemIndex) => (
              <tr key={item.name} className={cn(itemIndex !== softwaresList.length - 1 && "border-b")}>
                <td className="font-medium py-2 align-top">{item.name}</td>
                <td className="py-2 align-top pl-10">
                  {item.softwares.map((software, softwareIndex) => (
                    <span key={software.name}>
                      <a
                        href={software.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-90 hover:opacity-100 hover:underline underline-offset-4"
                      >
                        {software.name}
                      </a>
                      {softwareIndex !== item.softwares.length - 1 && ", "}
                    </span>
                  ))}
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
