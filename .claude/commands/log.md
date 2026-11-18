---
description: Save a recap of this session to context/sessions/
argument-hint: "[optional topic]"
---

Write a recap of this chat session and save it as a new file in `context/sessions/`.

**File name:** `context/sessions/YYYY-MM-DD-<topic>.md`, using today's date. For the topic, use "$ARGUMENTS" if given, otherwise pick a short kebab-case topic (2–4 words) that describes the session. If that file already exists, add a `-2`, `-3`, … suffix rather than overwriting it.

**Contents** (keep it short and skimmable; leave out a section if it has nothing in it):

```markdown
# <Session title>

**Date:** YYYY-MM-DD

## Goal
One or two sentences on what the user wanted.

## What changed
- Files created, edited or deleted (as relative links), with a short note on each.

## Decisions
- Choices made and the reason for each.

## Follow-ups
- Anything left unfinished, open questions, or suggested next steps.
```

Only include what actually happened in this session. Don't read the earlier logs in `context/sessions/`. When you're done, reply with the file path and nothing else.
