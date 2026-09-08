# Understanding Sjögren’s — PPIE website

An independent public learning website about Sjögren’s disease (SjD) and childhood-onset Sjögren’s disease (cSjD), for patients, families, young people and the wider public.

- [Live website](https://junjiepeng.github.io/sjd-public-engagement/)
- [GitHub repository](https://github.com/JunjiePeng/sjd-public-engagement)
- [Project brief](docs/project-brief.md)
- [Roadmap](docs/roadmap.md)
- [Content sources and review status](docs/content-review.md)

## Working project

This checkout at `/Users/pengjunjie/Documents/ChatGPT/SjD PPIE website` is the dedicated working project, continuing the existing `sjd-public-engagement` repository and its history. The previous starter remains in the shared SjD websites folder. Develop future PPIE changes here to avoid diverging working copies. The publications website remains a separate project.

## Current release

- Five interactive explanations covering the basics, dryness, fatigue, pain and wider effects.
- Separate young-person and parent/carer learning paths with everyday-life and appointment prompts.
- Expandable explanations of diagnostic tests.
- A four-question misconception quiz, immediate explanations, completion review and restart.
- An introduction to involvement, engagement and study participation, with genuine external opportunities.
- Source links, review status, mobile navigation, keyboard-accessible components and reduced-motion support.

This release is a working educational prototype. It has not had independent clinical or patient review, and must not be described as clinically approved or co-designed. Patient stories and project recruitment are not active. The website does not diagnose, give personalised treatment recommendations or collect health information. No analytics or browser persistence are implemented; quiz answers clear on reload. The hosting provider may process technical access logs.

## Develop and validate

Node.js >=22.13 and pnpm 11.19.0 are required.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

The local URL uses `/sjd-public-engagement/`. React + Vite builds static files into `dist/client`. The package manager and dependency lockfile are retained from the initial project. Tests cover answer locking, question progression, completion, scoring, restart and source references. Lint covers authored application code; the untouched starter component catalogue is excluded. Type checking includes the complete source tree.

## Deployment

Push to `main` to run `.github/workflows/deploy.yml`. GitHub Actions installs locked dependencies, runs lint, types and unit tests, builds, then publishes `dist/client` to GitHub Pages. The workflow packages the static output as a Pages-compatible tar archive and uses the current Node 24 upload action. This replaces the inherited uploader after repeated stalled uploads. Pages publishing source is **GitHub Actions**. Keep `vite.config.ts` and the canonical URL aligned if the repository is renamed.

The retained `.openai/hosting.json` describes static output only. Hosting remains GitHub Pages by the owner’s explicit choice; no additional Sites deployment is needed.

## Editing content

Edit educational content and source references in `app/learning-content.ts`; layout and brief project explanations are in `app/home-content.tsx`. Update `docs/content-review.md` and the visible source-check date when checking sources again. Do not present that date as clinical sign-off. Clinical and lived-experience review are outstanding next steps.

`public/images/community.jpg` is an original AI-generated editorial illustration, created for this project on 8 September 2026. It depicts fictional people, not patients, contributors or endorsers. It must not be presented as a patient photograph or testimonial.
