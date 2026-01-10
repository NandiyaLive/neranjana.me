import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CERTIFICATES, Certificate } from "@/data/certificates";

export function Certifications() {
  return (
    <Card className="border-border bg-card/40 gap-2 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Certifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {CERTIFICATES.map((cert: Certificate, index: number) => (
          <div key={index}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-4 hover:underline"
            >
              {cert.title}
            </a>
            <p className="text-muted-foreground text-sm">
              {cert.issuedDate} &#8226; {cert.issuer}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
