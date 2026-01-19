# Relationship Fields with maxDepth=0 Show "Untitled - ID" in Diff View

## Description of the issue

When a relationship field is configured with `maxDepth: 0` (which stores only the document ID, not the full document), the diff view in the versions comparison shows the relationship as "Untitled - ID: {documentId}" instead of resolving and displaying the actual document title.

This commonly occurs with fields like `updatedBy` or `createdBy` that are populated via field-level beforeChange hooks and intentionally use `maxDepth: 0` for performance reasons.

**Expected behavior:** The diff view should resolve the relationship and display the document's title (e.g., the user's email for a `updatedBy` field).

**Actual behavior:** The diff view shows "Untitled - ID: 507f1f77bcf86cd799439011" instead of the document title.

## Link to the code

https://github.com/jhb-dev/payload-lexical-internal-link-versions

## Reproduction Steps

1. Clone the reproduction repository and run the development server with `pnpm dev`
2. Navigate to the admin panel at `http://localhost:3000/admin`
3. Create a page with a title and publish it (the `updatedBy` field will be automatically populated via the field-level beforeChange hook)
4. Edit the page (e.g., change the title) and publish again to create a new version
5. Go to the Versions tab
6. Click "Compare" to view the diff between two versions
7. Observe the `updatedBy` field - it shows "Untitled - ID: {userId}" instead of the user's email

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
