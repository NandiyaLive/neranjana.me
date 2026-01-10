import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  VOLUNTEERING_EXPERIENCES,
  VolunteeringExperience,
} from "@/data/volunteering";

export function Volunteering() {
  return (
    <Card className="border-border bg-card/40 gap-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Volunteering</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-4"
        >
          {VOLUNTEERING_EXPERIENCES.map(
            (experience: VolunteeringExperience, index: number) => (
              <AccordionItem
                key={index}
                value={`volunteer-${index}`}
                className="bg-card-900/50 border-border/70 rounded-md border px-4 last:border-b"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col items-start">
                    <p className="text-base font-medium">
                      {experience.organization}
                    </p>
                    <p className="text-muted-foreground text-sm font-normal">
                      {experience.role} &#8226; {experience.startDate} -{" "}
                      {experience.endDate}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-0 pt-0 pb-4 font-mono">
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {experience.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
}
