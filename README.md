# Understanding Sjögren’s

A public learning and engagement website about Sjögren’s disease (SjD) and childhood-onset Sjögren’s disease (cSjD).

- Website: https://JunjiePeng.github.io/sjd-public-engagement/
- Repository: https://github.com/JunjiePeng/sjd-public-engagement
- [Project brief](docs/project-brief.md)
- [Development roadmap](docs/roadmap.md)

## Current version

An initial educational page with a brief introduction, expandable questions and links to established resources. It is an early starting point, not the complete planned learning experience, and has not received independent clinical or patient review.

This project is separate from the personal research dashboard, with its own content, visual direction and release schedule. Both this repository and the website are public.

## Local development

Requires Node.js 22.13 or newer and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by the server, with `/sjd-public-engagement/` appended if necessary.

```sh
pnpm lint
pnpm build
```

The React + Vite application builds a static site into `dist/client`. `vite.config.ts` sets the GitHub Pages path prefix.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` to install locked dependencies, lint, build and deploy the static site. GitHub Pages must use **GitHub Actions** as its publishing source.

The retained `.openai/hosting.json` only describes static output; hosting is deliberately GitHub Pages as requested by the owner.

## Content

Initial sources were checked on 8 September 2026. Source checking is not clinical endorsement. See the project brief for the review process to establish before expanding the educational content.

- [NIAMS: Sjögren’s disease](https://www.niams.nih.gov/health-topics/sjogrens-disease)
- [NHS: Sjögren’s syndrome](https://www.nhs.uk/conditions/sjogrens-syndrome/)
- [Sjögren’s Foundation: Sjögren’s in children](https://sjogrens.org/living-with-sjogrens/sjogrens-in-children)

No affiliation with or endorsement by these organisations is claimed.

The lint command checks authored application code and configuration. The untouched generated UI catalogue is excluded from lint because the starter contains pre-existing rule violations.
