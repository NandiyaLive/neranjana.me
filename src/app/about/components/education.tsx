import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION, Education } from "@/data/education";

export function Education() {
  return (
    <Card className="border-border bg-card/40 gap-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {EDUCATION.map((education: Education) => (
          <div key={education.institution}>
            <p className="font-medium">{education.institution}</p>
            <p className="text-muted-foreground text-sm">
              {education.degree} &#8226; {education.duration}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
