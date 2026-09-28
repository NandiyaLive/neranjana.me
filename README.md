# neranjana.me

Personal portfolio built with Astro, Tailwind CSS 4, and native bejamas/ui components. All pages are statically generated. Inter and JetBrains Mono are self-hosted in `public/fonts` and loaded with `astro-font`, including preloads and metric-adjusted fallback fonts.

## Development

```sh
bun install
bun run dev
```

## Validation and production

```sh
bun run check
bun run build
bun run preview
```

Deploy the `dist` directory to a static host. No server adapter or environment variables are required. The canonical site URL is configured in `astro.config.mjs`.

## Editing content

- Page templates are in `src/pages`, with interior routes using `<page>/index.astro`.
- Page-specific components stay in `src/pages/<page>/components`. Their filenames start with `_` so Astro does not generate routes for them.
- Portfolio content is in `src/data`.
- Shared layout and navigation are in `src/layouts` and `src/components`.
- Copied Bejamas components are in `src/ui` and can be edited locally.
- Public assets and the resume are in `public`.

Add Markdown or MDX files to `src/content/blog`. The collection supports `title`, `date`, `description`, optional `author`, optional `tags`, and optional `image`. Filenames determine `/blog/<slug>` URLs. The blog is empty because the original site had no published posts.

```md
---
title: My first post
date: 2026-09-28
description: A short introduction.
tags: [Astro]
---

Write the post here.
```

## Migration reference

See `MIGRATION.md` for the inspection and rebuild plan. The verified original source is in the ignored local folder `.reference/nextjs`. Hashes are in `.reference/sha256.json`, and `.reference/history.bundle` contains the original Git history. These files are excluded from production output and are not committed. Keep a separate copy if moving the workspace to another machine.
