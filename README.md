# Next.js TypeScript Project

[![Next.js](https://img.shields.io/badge/Next.js-13-blue?logo=next.js)](https://nextjs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/) 
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/) 

This is a **Next.js project** bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) using **TypeScript** and **React 18**. The project includes a basic routing setup and demonstrates modern Next.js concepts such as the **App Router**, **Server Components**, and **font optimization** with `next/font`.

---

## Features

- ✅ Built with **Next.js 13+** using the **App Router**
- ✅ Fully typed with **TypeScript**
- ✅ React 18 support
- ✅ Automatic font optimization using [Geist](https://vercel.com/font)
- ✅ Simple routing example (`/`, `/about`, `/contact`, etc.)
- ✅ Ready for deployment on [Vercel](https://vercel.com)
- ✅ Developer-friendly folder structure

---

## Project Structure

```bash
.
├── app
│   ├── layout.tsx        # Main layout with global components
│   ├── page.tsx          # Home page
│   ├── about
│   │   └── page.tsx      # About page
│   ├── contact
│   │   └── page.tsx      # Contact page
│   └── components
│       ├── Header.tsx
│       └── Footer.tsx
├── public                # Static assets
├── styles
│   └── globals.css       # Global CSS
├── next.config.js        # Next.js configuration
├── package.json
└── tsconfig.json
npm install
# or
yarn install
# or
pnpm install


npm run dev
# or
yarn dev
# or
pnpm dev
