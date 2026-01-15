import { LinkText } from "@/components/link-text";
import { UseItemI } from "@/data/uses";

export const UseItems = ({ items }: { items: UseItemI[] }) => {
  return (
    <ul className="ml-6 grid list-disc gap-2">
      {items.map(({ name, description, url }: UseItemI) => (
        <li key={name}>
          {url ? (
            <LinkText
              text={name}
              href={url}
              external
              className="text-foreground font-medium"
            />
          ) : (
            <span className="text-foreground font-medium">{name}</span>
          )}
          <span className="text-muted-foreground">
            {" — "}
            {description}
          </span>
        </li>
      ))}
    </ul>
  );
};
