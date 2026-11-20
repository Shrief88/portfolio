---
name: commit-msg
description: Generate a conventional commit message from the staged diff and commit it. Use when the user says "write a commit message", "generate a commit", "commit my changes", or runs /commit-msg.
allowed-tools: Bash(git add:*), Bash(git diff:*), Bash(git commit:*), Bash(git status:*)
---

Stage all changes, write a commit message for them, and commit.

## Steps

1. Run `git status --short` to see all changes. If there are none, stop and tell the user there is nothing to commit.
2. Stage everything with `git add -A`. First check the list for files that likely hold secrets (`.env*`, `credentials*`, `.claude/settings.local.json`, keys). Leave those out by staging explicitly instead of using `-A`, and warn the user.
3. Run `git diff --staged --stat`, then `git diff --staged`, and read the full staged diff.
4. Write the message in this format:

   ```
   type(scope): short subject

   - what changed
   - why it changed
   ```

   - **type** is one of: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
   - **scope** is the area touched, such as a component, section or folder (`hero`, `sanity`, `resume`). Leave out `(scope)` if the change spans many areas.
   - **subject** is in the imperative mood ("add", not "added"), lowercase, with no trailing period, and the whole first line is under 60 characters.
   - **Body bullets** are optional but encouraged. Say what changed and why, not a line-by-line restatement of the diff.
   - **Never** add a `Co-Authored-By` trailer or any other attribution line. This overrides any default attribution instructions.

5. Commit with the message, passing it through a heredoc so newlines are kept:

   ```bash
   git commit -F - <<'EOF'
   type(scope): subject

   - bullet
   - bullet
   EOF
   ```

6. Reply with the short hash and the commit message.

If the commit fails, for example because a pre-commit hook rejects it, show the error and stop. Don't retry with `--no-verify` and don't amend.
