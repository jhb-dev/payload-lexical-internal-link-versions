# Lexical Rich Text Internal Links Render as href="#" in Versions View

## Description of the issue

When using Lexical rich text editor with internal links (links to other documents within the CMS), the links render correctly in the main edit view. However, when viewing a previous version of the document in the Versions view, internal links are rendered with `href="#"` instead of the actual link to the CMS page.

This makes it impossible to click through to linked documents when reviewing previous versions, and makes it difficult to verify what content was linked in historical versions.

**Expected behavior:** Internal links in the Versions view should render with the proper href pointing to the linked document in the admin panel (e.g., `/admin/collections/pages/{id}`).

**Actual behavior:** Internal links in the Versions view render with `href="#"`.

## Link to the code

https://github.com/jhb-dev/payload-lexical-internal-link-versions

## Reproduction Steps

1. Clone the reproduction repository and run the development server with `pnpm dev`
2. Navigate to the admin panel at `http://localhost:3000/admin`
3. Create a first page with a title (e.g., "Target Page") and publish it
4. Create a second page with a title (e.g., "Source Page")
5. In the rich text content field, add some text and create an internal link to "Target Page":
   - Select some text
   - Click the link button in the toolbar
   - Choose "Internal link" and select "Target Page"
6. Publish the page
7. Make an edit to the page (e.g., change the title) and publish again to create a version
8. Go to the Versions tab and click on a previous version to view it
9. Inspect the internal link in the rich text content - it will have `href="#"` instead of the actual link to the Target Page

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
