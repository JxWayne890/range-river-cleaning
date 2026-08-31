# Range & River Cleaning Co.

An Astro website for a new residential and commercial cleaning company focused on Fort Worth, Texas.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run check
npm run build
npm run preview
```

## Canonical and indexing controls

Copy `.env.example` to a local environment file or set the variables in the deployment provider.

* `PUBLIC_SITE_URL` controls canonicals, Open Graph URLs, structured data URLs, robots, and the sitemap host.
* `PUBLIC_SITE_INDEXABLE` must remain `false` for previews. Setting it to `true` changes public pages to `index,follow` and populates the sitemap.

The preview quote form validates fields in the browser but intentionally sends and stores nothing. Connect an approved destination before changing the form language or enabling indexing.
