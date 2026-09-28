# Diego Miralles — Chemical Engineering Portfolio

Bilingual student portfolio built with **Hugo 0.165.0** and published on GitHub Pages. It presents plant experience, a personal ethanol-water simulation study, and PeerScope, a joint project with Javier Gonzálvez.

## Run locally

Install Hugo 0.165.0 from its official release, then run these commands at the repository root:

```sh
hugo server
```

Open the local address printed by Hugo. To generate the static site:

```sh
hugo build --gc --minify
```

GitHub Actions builds and deploys pushes to `main`. Generated `public/` files are not committed. No Node dependencies or theme installation are required.

## Source layout

- `content/en/`, `content/es/`: page titles, descriptions and route metadata.
- `data/en/`, `data/es/`: homepage and project content in each language.
- `layouts/`: page templates, shared metadata and the error page.
- `assets/css/`, `assets/js/`: styles, navigation and image galleries.
- `static/projects/`: simulation figures and labelled PeerScope illustrations.
- `static/cv/`, `static/reports/`, `static/files/`: downloadable CV, report, workbook and DWSIM models.
- `.github/workflows/hugo.yaml`: production build and deployment.

## Pages and project files

- Portfolio: `/` (English), `/es/` (Spanish).
- Case studies: `/projects/ethanol-recovery/`, `/projects/peerscope/`, and their `/es/` equivalents.
- CV in English: `/cv/diego-miralles-cv-en.pdf`.
- Report in Spanish: `/reports/ethanol-water-recovery-diego-miralles.pdf`.
- Calculations: `/files/ethanol-water-calculations.xlsx`.
- Models: `/files/ethanol-water-flash.dwxmz` and `/files/ethanol-water-distillation-column.dwxmz`.

## Reproducing the ethanol study

Read the report for assumptions and case definitions. Open the workbook with Excel or a compatible application to inspect balances, sensitivity results and the educational HAZOP. Open the models with DWSIM 9.0.5 or a compatible version. The flash file contains the 87 °C reference case; the documented temperature sweep includes 82, 84, 86, 87, 88, 90 and 92 °C. The column uses a different feed, so its energy demand is not directly comparable with the flash. Results are simulated and have no experimental validation.

## Attribution and scope

PeerScope is a shared project. Its two interface illustrations use synthetic data and are not screenshots of real company analyses. Platform source code, original data and automated tests are not part of this portfolio repository. See `NOTICE.md` for credits and reuse conditions. The ethanol report lists its source material, including DWSIM tutorials. Public model copies have local paths and computer identifiers removed.

Before publishing, build both languages, check internal links and downloads, and review desktop and mobile navigation. The CV is a separate document and may describe an earlier stage of a project; its project summary should be reviewed when the CV is next updated.
