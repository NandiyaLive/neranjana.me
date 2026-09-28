# Astro migration

## Current build inspected

- Source commit: `cc9e7e8`, branch: `development`, initially clean.
- Next.js 16.3.5, React 19, Tailwind CSS 4, Radix/shadcn components, Bun lockfile.
- Routes: `/`, `/about`, `/projects`, `/contact`, `/uses`, `/blog`, and MDX `/blog/[slug]`.
- The blog contains no published posts. Contact uses email/social links, without a submission backend.
- Home has a contour SVG, avatar, social icons, gradient title, and hiring link. Interior pages share navigation, theme switching, and a footer.
- About contains expandable work and volunteering entries, certificates, education, and a resume download. The GitHub graph/action are unused.
- Production build failed when Next.js tried to download Inter and JetBrains Mono from Google Fonts. The development server rendered home and about successfully.

## Preservation and rebuild plan

1. Copy application source, configuration, lockfile, and public assets to `.reference/nextjs`. Verify every copied file with SHA-256, recorded in `.reference/sha256.json`. Save all Git history in `.reference/history.bundle` and verify the bundle.
2. Check out the existing `development` branch. Preserve `.git` and `.reference`; remove the old application, dependencies, generated output, and Next-generated agent files.
3. Initialize a single Astro app with the official `bejamas` CLI. Use Tailwind 4 and native copied components for buttons, cards, badges, and accordions.
4. Preserve the route structure and existing content. Port TypeScript data without React imports, copy public assets, and move Next metadata assets to public paths. Rebuild shared layout/navigation/footer in Astro. Keep dark as the default and persist user theme selection. Support mobile navigation and reduced motion.
5. Replace Next MDX helpers with Astro content collections and MDX integration. Keep the original frontmatter fields and empty state. Update the Uses page's website stack to Astro and Bejamas. Use self-hosted Inter and JetBrains Mono.
6. Run Astro type checks and production build. Verify every route and local asset, theme persistence, mobile navigation, accordion behavior, and a temporary MDX post. Remove test content before delivery.

## Reference and recovery

The reference folder is local and ignored by Git. It is outside `src` and `public` and is not included in build output. Run the old site with `bun install` and `bun run dev` from `.reference/nextjs` if needed. Clone `.reference/history.bundle` into a separate directory to recover Git history. The original `main` branch remains available.

## Sources

- https://ui.bejamas.com/docs/installation
- https://ui.bejamas.com/docs/cli
- https://docs.astro.build/en/guides/content-collections/

## Completed validation

- The official Bejamas Astro scaffold was generated. Its add command reported success without writing additional component files, so card, badge, and accordion were copied from the official Juno registry. Accordion chevrons use `@lucide/astro` directly because the registry's shared SemanticIcon dependency was absent.
- `bun run check` passed with zero errors, warnings, or hints.
- `bun run build` generated all six original pages plus a 404 page and a sitemap. Empty-blog notices are expected because no posts were published in the original project.
- Browser checks covered light/dark switching and persistence across navigation, accordion expansion, mobile menu opening and Escape closing, and layouts at 390px and the default desktop viewport.
- A temporary MDX post verified metadata, route generation, headings, and highlighted code. It was removed after verification.
- Inter and JetBrains Mono are bundled locally. The Astro build no longer downloads fonts during compilation.

## Follow-up changes

- Restored page directories and colocated About, Projects, and Uses components under `src/pages/<page>/components`. Component filenames use Astro's `_` prefix to exclude them from routing.
- Replaced Fontsource imports with `astro-font`, loading local variable Inter and JetBrains Mono files with their licenses in `public/fonts`. The build still requires no font downloads.
- Set navigation height to 80px and aligned the mobile menu below it.
- Added the Astro client router and a shared `avatar` transition between the home portrait and interior navigation. Theme and accordion listeners initialize after each navigation and clean up before page swaps.
- Type checks and the production build pass. Browser checks confirmed 80px headers on home and About, both fonts loaded, shared avatar transition names, theme persistence on return navigation, and accordion expansion after client navigation.
