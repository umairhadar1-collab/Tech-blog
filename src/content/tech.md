---
title: "How to build a website with AI without losing control of the code"
description: "A practical workflow for vibe coding: plan first, prompt in small steps, review every change, and test before you publish."
pubDate: 2026-10-15
lastUpdated: 2026-10-15
tags: ["vibe-coding", "ai-tools", "prompting"]
tool: "Any AI coding tool"
---

AI coding tools can build a page in a few minutes. That speed feels great, but it also hides a risk. If you accept every change without reading it, you end up with a project you do not understand. Then the first bug takes hours to fix.

This guide shows a simple workflow for vibe coding that keeps you in control. It works with any AI coding tool and with any stack. The examples use a small blog, but the same steps fit a portfolio, a landing page, or a small web app.

## What vibe coding really means

Vibe coding means you describe what you want in normal language, and the AI writes the code. You guide the result with feedback instead of typing every line yourself.

This is useful for three reasons:

- You get a first version very fast.
- You can try ideas that you would not have time to code by hand.
- You learn new tools by reading what the AI produces.

But the AI is not a senior developer who knows your goals. It guesses. Sometimes the guess is good, and sometimes it is wrong in a quiet way: an old package, a missing label, a layout that breaks on a phone. Your job is to steer, check, and decide.

> The AI writes the first draft. You are still the editor.

## Step 1: Write a short plan before you prompt

Most bad results start with a vague request like "build me a blog". The AI has to guess everything: the stack, the design, the pages, the features. Spend ten minutes on a plan first. Answer these questions in a text file:

1. **Who is the site for?** Beginners, other developers, or clients?
2. **What is the one main job of the site?** For example: "Readers can find and read my AI tutorials."
3. **Which pages do you need?** Home, post page, topics page, about page.
4. **Which tools will you use?** For a blog, a static site generator like Astro is a good choice.
5. **What is out of scope for now?** Comments, user accounts, and payments can wait.

Keep the plan short. It is not a school assignment. It is a reference that you paste into prompts, so the AI always has the same context.

## Step 2: Start with the foundation, not the features

Ask the AI for the structure first. Do not ask for a finished design on day one. A good order looks like this:

| Order | What to ask for | Why |
| --- | --- | --- |
| 1 | Project setup and folder structure | Everything else depends on it |
| 2 | Design tokens: colors, fonts, spacing | Later pages reuse them |
| 3 | A base layout with header and footer | Every page shares it |
| 4 | One page at a time | Easy to review |
| 5 | Extra features: search, tags, RSS | Only when the basics work |

Here is an example of a good first prompt:

```text
I am building a static blog with Astro.
Posts are Markdown files in src/content/blog.
Create the project structure and a base layout with
a header, a footer, and a slot for page content.
Do not add any extra packages. Do not style it yet.
```

Notice the last two lines. They tell the AI what not to do. This is one of the most useful habits in prompting. Without limits, many tools add packages and features that you did not ask for.

## Step 3: Make small requests

A small request gives a small change, and a small change is easy to read. Compare these two prompts:

- **Too big:** "Build the whole blog with tags, search, dark mode, and RSS."
- **Better:** "Add a topics page that lists every tag. Each tag links to a page with the posts for that tag."

After the AI finishes the small task, open the browser and test it. Only then ask for the next one. If something breaks, you know it came from the last change.

A good size for one prompt is a change that you can explain in one or two sentences. If you need a whole paragraph to describe it, split it.

## Step 4: Give the AI the context it needs

The AI cannot see your head. It only knows what you write, plus the files it can read. Good context makes a large difference. Include:

- **The stack and the version:** "Astro 7, Node 22, plain CSS, no Tailwind."
- **The files involved:** "Edit src/pages/index.astro and use the PostItem component."
- **The result you expect:** "The page should show the five newest posts, newest first."
- **The rules to follow:** "Use the CSS variables from global.css. Do not use inline colors."

Versions matter. Libraries change quickly, and the AI may remember an older way to do things.

## Step 5: Read every change before you accept it

This is the most important step, and the one that many beginners skip. You do not need to understand every single line. You do need to look for the risky parts. Use this short checklist:

- **New packages.** Did the AI add a dependency? Do you know what it does? Is it popular and maintained?
- **Deleted code.** Did it remove files or functions that you still need?
- **Secrets.** Are there API keys, passwords, or tokens in the code? They must never be in your project files or in Git.
- **Copy that looks invented.** Fake testimonials, fake statistics, and fake names are common in generated pages. Replace them with real content or remove them.

If you do not understand a part, ask the AI to explain it:

```text
Explain what this function does, line by line.
Then tell me what could go wrong with it.
```

This turns the AI into a teacher. Over time, you will need fewer explanations, because you will recognize the patterns.

## Step 6: Use Git as your safety net

Git saves a snapshot of your project each time you commit. If the AI breaks something, you can go back. This is the best protection you have, and it takes only a minute to set up.

```bash
git init
git add -A
git commit -m "Initial project setup"
```

After each working step, commit again:

```bash
git add -A
git commit -m "Add topics page"
```

If the next change breaks the site and you want to undo it, run:

```bash
git restore .
```

For a risky idea, use a branch. A branch is a separate copy where you can experiment safely:

```bash
git switch -c try-search
```

If the experiment fails, switch back and delete the branch. Your main version stays clean.

One more rule: keep secrets out of Git. Put keys in a `.env` file and add `.env` to your `.gitignore` file.

## Step 7: Test like a real visitor

AI-generated pages often look good on the screen where you built them, and then fail somewhere else. Before you publish, test these things:

1. **Phone width.** Resize the browser to about 400 pixels. Does anything overflow or overlap?
2. **Dark and light mode.** Is all text readable in both?
3. **Keyboard.** Press the Tab key. Can you reach every link and button, and can you see where the focus is?
4. **Speed.** Large images are the most common problem.
5. **Links.** Click every link in the header, footer, and post list.
6. **Titles.** Does each page have a clear title and description?

Run Lighthouse in Chrome DevTools for scores on performance, accessibility, and SEO. Aim for 90 or more.

## Step 8: Be honest about the AI in your content

If you write a tech blog about AI, trust is your main asset. Readers want to know what is real. Follow these habits in every post:

- **Name the tool, the model, and the date.** AI tools change every month. A post without a date is hard to trust.
- **Show the real prompt and the real result.** Paste the exact text, and say what you had to fix by hand.
- **Verify every claim.** If an AI tool helped you write, check each fact and each code sample yourself.
- **Say when AI helped.** A short note builds trust. Readers do not mind AI assistance. They mind hidden assistance.
- **Update old posts.** When a tool changes, add a new "last updated" date and fix the outdated parts.

Generic AI text gets little traffic and little trust. Your own tests, your own mistakes, and your own opinions are what make a post worth reading.

## A simple checklist for your next project

Copy this list and use it every time:

1. Write a short plan: audience, goal, pages, stack, and what is out of scope.
2. Set up Git and make the first commit.
3. Ask for the structure and design tokens first.
4. Build one page or one feature per prompt.
5. Read each change and check for packages, deleted code, and secrets.
6. Commit after every working step.
7. Test on a phone, in dark mode, and with the keyboard.
8. Replace all placeholder content with real content.
9. Publish, then keep improving in small steps.

## Final thoughts

AI does not remove the need to understand your project. It moves your work from typing code to making decisions: what to build, how to check it, and what to keep. When you plan first, prompt in small steps, read the changes, and save your progress, AI becomes a fast and reliable helper.

Start with one small project this week. Use the checklist above, keep notes about what worked, and turn those notes into your next post.