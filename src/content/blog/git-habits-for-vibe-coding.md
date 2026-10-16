---
title: "Git habits that make vibe coding safe"
description: "Small commits, throwaway branches and one rule about reading diffs."
pubDate: 2026-10-08
tags: ["git", "vibe-coding"]
tool: "Git"
---

Sample post. Replace it with your own experience.

## Commit after every working step

```bash
git add -A
git commit -m "Add tag pages"
```

If the next AI change breaks the site, you can go back in seconds:

```bash
git restore .
```

## Use a branch for risky ideas

```bash
git switch -c try-search
```

Delete the branch if the idea fails. Your main branch stays clean.

## Never commit secrets

Keep API keys in a `.env` file and list it in `.gitignore`. This project already does that.
