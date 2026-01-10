import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WORK_EXPERIENCE, WorkExperience } from "@/data/work";

export function Experience() {
  return (
    <Card className="border-border bg-card/40 gap-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-4"
        >
          {WORK_EXPERIENCE.map((work: WorkExperience) => (
            <AccordionItem
              key={work.id}
              value={work.id}
              className="bg-card-900/50 border-border/70 rounded-md border px-4 last:border-b"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start">
                  <p className="text-base font-medium">{work.company}</p>
                  <p className="text-muted-foreground text-sm font-normal">
                    {work.position} &#8226; {work.duration}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pt-0 pb-4 font-mono">
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  {work.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-2">
                  {work.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
