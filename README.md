# UrbanFade Barber Website

A production-ready full-stack barber shop website built with React and Express.

## Tech Stack

- **Frontend**: React 18 + React Router 6 + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite
- **Testing**: Vitest
- **UI**: Radix UI + Lucide React icons

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Available Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Start development server |
| `pnpm build`     | Production build         |
| `pnpm start`     | Start production server  |
| `pnpm typecheck` | TypeScript validation    |
| `pnpm test`      | Run Vitest tests         |

## Project Structure

```
client/           # React SPA frontend
├── pages/        # Route components
├── components/  # UI components
└── App.tsx       # App entry point

server/           # Express backend
├── index.ts     # Server setup
└── routes/      # API routes

shared/           # Shared types
```
