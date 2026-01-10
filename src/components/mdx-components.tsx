import Image from "next/image";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-8 mb-6 scroll-m-20 text-4xl font-bold tracking-tight"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-8 mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-6 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="mt-6 mb-3 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h5: (props: ComponentPropsWithoutRef<"h5">) => (
    <h5
      className="mt-4 mb-3 scroll-m-20 text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  h6: (props: ComponentPropsWithoutRef<"h6">) => (
    <h6
      className="mt-4 mb-3 scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 leading-7 not-first:mt-6" {...props} />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link href={href} {...props} className="underline underline-offset-4">
      {props.children}
    </Link>
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:mt-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-6 ml-6 list-decimal space-y-2 [&>li]:mt-2" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-border *:text-muted-foreground my-6 border-l-4 pl-6 italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-muted mt-6 mb-4 overflow-x-auto rounded-lg p-4 font-mono text-sm"
      {...props}
    />
  ),
  img: ({
    src = "",
    alt = "",
    width,
    height,
    ...props
  }: ComponentPropsWithoutRef<"img">) => (
    <Image
      src={typeof src === "string" ? src : ""}
      alt={alt}
      width={typeof width === "number" ? width : 800}
      height={typeof height === "number" ? height : 400}
      className="my-6 rounded-lg"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="border-border my-8" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-border bg-muted border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="border-border border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right"
      {...props}
    />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr className="even:bg-muted/50 m-0 border-t p-0" {...props} />
  ),
};

export default components;
