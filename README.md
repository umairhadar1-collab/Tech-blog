# Stack Notes (Astro 7)

A static blog for AI and web development posts. No database, no CMS: every post is a Markdown file.

## Run it on your computer

Needs Node.js 22.12 or newer (`node -v`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output goes to dist/
```

## Write a post

Add a file in `src/content/blog/`, for example `my-first-post.md`:

```md
---
title: "Testing X on a real project"
description: "One sentence for search results."
pubDate: 2026-10-20
tags: ["ai-tools"]
tool: "Tool name and model"
---

Your text in Markdown.
```

Optional fields: `lastUpdated`, `featured: true` (shows on the home page), `draft: true` (hidden in the build).

The three posts that come with the project are samples. Delete them when you publish your own.

## Before you deploy

1. Change `site` in `astro.config.mjs` to your real domain (needed for RSS, sitemap and canonical links).
2. Replace `public/og-default.svg` with a 1200x630 PNG. Many social sites ignore SVG previews.
3. Deploy: connect the Git repo to Cloudflare Pages or Netlify. Build command `npm run build`, output folder `dist`.

## Structure

- `src/content.config.ts`: post fields and rules
- `src/layouts/Base.astro`: page shell, SEO tags, theme toggle
- `src/pages/`: home, post, topic pages, RSS, 404
- `src/styles/global.css`: colors and fonts as CSS variables (light and dark)
