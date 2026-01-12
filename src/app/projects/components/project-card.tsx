import { LinkText } from "@/components/link-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Construction, Link, XOctagonIcon } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  key?: string | number;
  name: string;
  description: string | React.ReactNode;
  url: string;
  completed: boolean;
  active?: boolean;
}

export const ProjectCard = ({
  key,
  name,
  description,
  url,
  completed,
  active = true,
}: ProjectCardProps) => (
  <Card
    key={key}
    className="border-border bg-card/40 gap-2 shadow-none backdrop-blur-sm"
  >
    <CardHeader>
      <CardTitle className="text-xl">{name}</CardTitle>
    </CardHeader>
    <CardContent className="flex h-full flex-col justify-between gap-4">
      {typeof description === "string" ? (
        <p className="text-muted-foreground">{description}</p>
      ) : (
        description
      )}

      <div className="flex items-center justify-between gap-2 text-sm font-medium transition-colors group-hover:text-yellow-500">
        {completed ? (
          <div className="flex items-center gap-2">
            <Link className="h-3 w-3" />
            <LinkText
              text={url}
              href={`https://${url}`}
              className={cn("no-underline", !active && "line-through")}
              external
            />
          </div>
        ) : (
          <p className="flex items-center gap-2">
            <Construction className="h-3 w-3" />
            In Progress
          </p>
        )}
        {!active && (
          <Badge variant="destructive">
            <XOctagonIcon />
            Inactive
          </Badge>
        )}
      </div>
    </CardContent>
  </Card>
);
