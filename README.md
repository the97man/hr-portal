# Skyform HR Portal

A modular React + Vite HR portal prototype. The application keeps Skyform’s navy, teal and blue visual identity while using a compact component/page/data structure based on the supplied folder-layout example.

## Source structure

```text
src/
├── app/
│   └── App.jsx
├── components/
│   ├── dashboard/       # Dashboard cards, approvals, workforce and activity widgets
│   ├── layout/          # Sidebar, topbar, brand and JSX-based shared styling
│   ├── modules/         # Shared data-table module renderer
│   └── ui/              # Buttons, badges, avatars, tables, toast and modal
├── data/                # Domain-specific demo data and page configurations
├── hooks/               # Reusable navigation and toast state hooks
├── pages/               # One JSX entry file per HR module/page
└── main.jsx
```

## Included areas

- Dashboard and Ask AI assistant interface
- Employee directory, org chart, onboarding and documents
- Recruitment, requisitions, candidates, CV screening, interviews and offers
- Leave and absence, attendance, payroll and benefits
- Reports and analytics, tasks and approvals, workspace settings

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Notes

The screens use illustrative demo records and interaction feedback. No live HRIS, payroll, identity, recruitment, or AI service is connected. Shared presentation styles are kept in JSX (`components/layout/PortalStyles.jsx`); there is no standalone application CSS file. Tailwind remains configured and available to the JSX components.
