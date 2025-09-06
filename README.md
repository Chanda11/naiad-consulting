# Naiad Firm Dynamics Consulting — Website (Next.js + TypeScript + Tailwind)

A simple, professional site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run the dev server
npm run dev

# 3) Open your browser
# Visit http://localhost:3000
```

## 📁 Project Structure

```
src/
  app/
    api/contact/route.ts    # Contact form API
    about/page.tsx          # Background, Mission & Vision
    services/page.tsx       # Service groups & bullets
    executive-summary/page.tsx
    contact/page.tsx        # Contact details + form
    layout.tsx              # Root layout (Header/Footer)
    page.tsx                # Home page
  components/
    Header.tsx
    Footer.tsx
public/
  founder.jpg               # Your portrait for the hero
```

## 🧩 Customization

- Replace `public/founder.jpg` with your preferred photo.
- Update copy in each page to your tone.
- Hook `/api/contact` into email/DB (e.g., Nodemailer, Resend, Supabase) when ready.

## 🛠 Built With

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
```

