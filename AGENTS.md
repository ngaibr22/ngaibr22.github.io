# AI Agent Instructions for this Repository

## Repository overview
- This is a React portfolio site built with Create React App.
- The app uses `react-bootstrap`, `react-router-dom`, `react-helmet-async`, `react-transition-group`, and `emailjs-com`.
- Content is primarily managed in `src/content_option.js`.
- The site is a static front-end project with no backend server code in this repository.

## Recommended commands
- `yarn install` — install dependencies
- `yarn start` — run the development server
- `yarn build` — build production assets
- `yarn test` — run tests
- `yarn deploy` — deploy the built site with `gh-pages`

## Key files and directories
- `src/content_option.js` — primary editable content and metadata for the portfolio
- `src/app/App.js` — root application component and main layout
- `src/app/routes.js` — route definitions and page transitions
- `src/pages/` — route pages for `home`, `portfolio`, `about`, and `contact`
- `src/components/` — reusable components such as `themetoggle` and `socialicons`
- `src/header/` — navigation/header UI
- `src/hooks/` — custom hooks including animated cursor behavior

## Agent behavior guidance
- Prefer updates in the existing component/page structure instead of adding unrelated architectural layers.
- Keep styling changes localized to the CSS file next to the component being edited.
- Use `src/content_option.js` for text, social links, and contact-form configuration changes.
- Do not introduce backend frameworks, PHP Composer, or server-side code; this repo is frontend-only.
- If a request is ambiguous, ask whether the desired change is content editing, page structure, styling, or deployment.

## Notes
- The repo currently contains a static Create React App structure and deploys with GitHub Pages.
- The README links to setup and usage instructions; prefer referencing it instead of duplicating all content.
