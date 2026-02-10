# Kis Blocks

Kis Blocks is a private WordPress block library plugin for building modular, schema-driven Gutenberg blocks used across content-focused websites.

This repository contains a reusable set of custom blocks designed to prioritize:
- Structured content models
- Predictable markup
- Minimal editor freedom
- Long-term maintainability

The blocks are implemented as a standalone plugin so they can be versioned, reused, and deployed across multiple WordPress sites without coupling to a specific theme.

---

## Philosophy

This block library is intentionally opinionated.

- Blocks encode content structure, not free-form layout
- Editors assemble pages using predefined components
- Layout and styling live in code, not the editor UI
- Each block has a clear schema and a single responsibility

This approach reduces editorial drift, simplifies QA, and keeps sites maintainable over time.

---

## Technical Overview

- Built using the WordPress Block Editor (Gutenberg)
- Metadata-first registration via `block.json`
- Dynamic blocks with server-side rendering where appropriate
- Compiled using `@wordpress/scripts`
- Distributed as a WordPress plugin

---

## Repository Structure

kis-blocks/
├── kis-blocks.php
├── package.json
├── src/
│   └── blocks/
│       └── /
│           ├── block.json
│           ├── edit.js
│           ├── render.php (for dynamic blocks)
│           └── index.js
├── build/
└── README.md

---

## Installation

1. Clone or download this repository
2. Build assets locally:

npm install
npm run build

3. Upload the `kis-blocks` folder to:

wp-content/plugins/

4. Activate **Kis Blocks** in the WordPress admin

---

## Development Workflow

- Blocks are developed locally and committed to this repository
- Compiled assets in `build/` are committed and deployed with the plugin
- The plugin is installed on a sandbox WordPress site for editor and front-end validation
- Releases are versioned via Git tags

---

## Status

This is an actively developed internal block library.
The API and block set may evolve as new patterns are added.

---

## License

GPL-2.0-or-later
