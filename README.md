# Purpose of this demonstration

Testing and demonstration of
the [speculation rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API).

## What is the [Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)

As of the time of writing, the speculation rules API is an experimental browser
feature, [compatible](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API#browser_compatibility) with
all Chromium based browsers. It supersedes the features of "prerender" ("chrome-only") and "prefetch" links, which will
be deprecated in favor of the speculation rules.

A speculation rule can specify links on a page, or data sources, which should be pre-rendered in the background, or
pre-fetched respectively.

It is used for faster navigation mainly in MPAs (Multi-page applications) whereas SPAs (Single-page applications) won't
profit that much from these new features.

### Example

Speculation rules are the easiest specified in a script tag on the current document.


```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/*\\?*(^|&)add-to-cart=*" } },
            { "not": { "selector_matches": ".no-prerender" } },
            { "not": { "selector_matches": "[rel~=nofollow]" } }
          ]
        },
        "eagerness": "moderate"
      }
    ],
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```




# Setup

This demo project uses [Astro](astro.dev) (based on [Astroship template](https://github.com/surjithctly/astroship)) to
build and run the development preview

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```
