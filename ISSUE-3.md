# Lexical Rich Text Shows Full Content in "Modified Only" Diff View

## Description of the issue

When comparing versions and toggling "Show modified only" in the diff view, Lexical rich text fields display the entire content instead of collapsing unchanged sections. This makes it very difficult to review changes in documents with large rich text content, as users must scroll through the entire text to find the actual modifications.

Other field types correctly hide when unchanged, but Lexical fields always show the complete content regardless of whether sections within the rich text have changed.

**Expected behavior:** When "Show modified only" is enabled, Lexical rich text fields should either:
1. Be hidden entirely if no changes were made to the rich text content
2. Collapse unchanged sections and only highlight/show the modified portions within the rich text

**Actual behavior:** The full Lexical rich text content is always displayed in the diff view, even when "Show modified only" is toggled on, making it hard to identify what actually changed.

## Link to the code

https://github.com/jhb-dev/payload-lexical-internal-link-versions

## Reproduction Steps

1. Clone the reproduction repository and run the development server with `pnpm dev`
2. Navigate to the admin panel at `http://localhost:3000/admin`
3. Create a page with a title and add several paragraphs of rich text content, then publish it
4. Edit the page and change only the title (do not modify the rich text content), then publish again
5. Go to the Versions tab and click "Compare" to view the diff between the two versions
6. Toggle "Show modified only"
7. Observe that the Lexical rich text field still shows the full content, even though no changes were made to it

Alternatively:
1. Create a page with extensive rich text content (multiple paragraphs, headings, lists, etc.)
2. Edit only a single word or sentence within the rich text and publish
3. Compare versions with "Show modified only" enabled
4. The entire rich text content is shown instead of just highlighting the modified section

## Environment Info

```
Binaries:
  Node: 24.3.0
  npm: 11.4.2
  Yarn: 1.22.22
  pnpm: 10.27.0
Relevant Packages:
  payload: 3.72.0
  next: 15.4.10
  @payloadcms/db-mongodb: 3.72.0
  @payloadcms/graphql: 3.72.0
  @payloadcms/next/utilities: 3.72.0
  @payloadcms/richtext-lexical: 3.72.0
  @payloadcms/translations: 3.72.0
  @payloadcms/ui/shared: 3.72.0
  react: 19.2.1
  react-dom: 19.2.1
Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 24.6.0
  Available memory (MB): 24576
  Available CPU cores: 14
```
