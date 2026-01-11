import type { Metadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  developmentEnvironment,
  hardware,
  softwaresList,
  techStack,
  websiteStack,
} from "@/data/uses";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "A detailed list of my development environment, hardware, software, and tech stack.",
};

const Page = () => (
  <main className="container mx-auto max-w-7xl pt-24 pb-16">
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold uppercase">
        Development Environment
      </h2>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Table className="w-full table-auto">
          <TableBody>
            {developmentEnvironment.map((item, index) => (
              <TableRow
                key={index}
                className={cn(
                  index !== developmentEnvironment.length - 1 &&
                    "border-b border-neutral-200 dark:border-neutral-800",
                )}
              >
                <TableCell className="w-1/3 px-6 py-4 align-top font-semibold">
                  {item.name}
                </TableCell>
                <TableCell className="px-6 py-4 align-top">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 opacity-90 transition-colors hover:text-yellow-500 hover:underline hover:opacity-100"
                  >
                    {item.description}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold uppercase">Hardware</h2>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Table className="w-full table-auto">
          <TableBody>
            {hardware.map((item, index) => (
              <TableRow
                key={index}
                className={cn(
                  index !== hardware.length - 1 &&
                    "border-b border-neutral-200 dark:border-neutral-800",
                )}
              >
                <TableCell className="w-1/3 px-6 py-4 align-top font-semibold">
                  {item.name}
                </TableCell>
                <TableCell className="px-6 py-4 align-top opacity-90 hover:opacity-100">
                  {item.description}
                  {item.extra && (
                    <p className="mt-1 text-sm opacity-70">{item.extra}</p>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold uppercase">Software & Services</h2>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Table className="w-full table-auto">
          <TableBody>
            {softwaresList.map((item, itemIndex) => (
              <TableRow
                key={itemIndex}
                className={cn(
                  itemIndex !== softwaresList.length - 1 &&
                    "border-b border-neutral-200 dark:border-neutral-800",
                )}
              >
                <TableCell className="w-1/3 px-6 py-4 align-top font-semibold">
                  {item.name}
                </TableCell>
                <TableCell className="px-6 py-4 align-top">
                  {item.softwares.map((software, softwareIndex) => (
                    <span key={softwareIndex}>
                      <a
                        href={software.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 opacity-90 transition-colors hover:text-yellow-500 hover:underline hover:opacity-100"
                      >
                        {software.name}
                      </a>
                      {softwareIndex !== item.softwares.length - 1 && ", "}
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold uppercase">Tech Stack</h2>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Table className="w-full table-auto">
          <TableBody>
            {techStack.map((item, index) => (
              <TableRow
                key={index}
                className={cn(
                  index !== techStack.length - 1 &&
                    "border-b border-neutral-200 dark:border-neutral-800",
                )}
              >
                <TableCell className="w-1/3 px-6 py-4 align-top font-semibold">
                  {item.name}
                </TableCell>
                <TableCell className="px-6 py-4 align-top opacity-90 hover:opacity-100">
                  {item.items}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>

    <section>
      <h2 className="mb-6 text-3xl font-bold uppercase">This Website</h2>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Table className="w-full table-auto">
          <TableBody>
            {websiteStack.map((item, index) => (
              <TableRow
                key={index}
                className={cn(
                  index !== websiteStack.length - 1 &&
                    "border-b border-neutral-200 dark:border-neutral-800",
                )}
              >
                <TableCell className="w-1/3 px-6 py-4 align-top font-semibold">
                  {item.name}
                </TableCell>
                <TableCell className="px-6 py-4 align-top opacity-90 hover:opacity-100">
                  {item.items}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  </main>
);

export default Page;
