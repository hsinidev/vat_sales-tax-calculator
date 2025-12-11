# 🪐 VAT / Sales Tax Calculator

A high-performance, privacy-focused financial tool built with **React 19**, **TypeScript**, and **Tailwind CSS**. This application provides instant calculations for VAT and Sales Tax (Add/Remove) with a stunning, immersive cosmic interface.

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

### 🚀 [**LIVE DEMO: doodax.com**](https://doodax.com)

</div>

---

## ✨ Features

- **⚡ Instant Math Engine**: Calculations happen in real-time as you type. Zero latency.
- **🔄 Dual Modes**:
  - **Add Tax**: Calculate Gross Price from Net Price.
  - **Remove Tax**: Reverse calculate Net Price from Gross Price.
- **🌌 Immersive UX**: A fully responsive "Cosmic Galaxy" theme with CSS-only animations (stars, nebulas) and glassmorphism.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop viewports.
- **🔒 Privacy First**: 100% Client-side execution. No user data is sent to any server.
- **📈 SEO Optimized**: Pre-configured with JSON-LD Schema (SoftwareApplication, Article, FAQ), `robots.txt`, and sitemap for maximum search visibility.
- **📚 Educational Content**: Includes a comprehensive, collapsible guide on global tax systems.

## 📂 Project Structure

```
/
├── public/                 # Static assets
│   ├── favicon.svg         # App Icon
│   ├── robots.txt          # Crawler instructions
│   └── sitemap.xml         # SEO Sitemap
├── src/
│   ├── components/
│   │   ├── ThemeLayout.tsx       # Main layout, Galaxy background, Modals
│   │   └── TaxCalculatorTool.tsx # Core calculator logic & UI
│   ├── utils/
│   │   ├── SeoArticle.tsx        # SEO Content component
│   │   └── TaxMath.ts            # Pure TypeScript math functions
│   ├── App.tsx                   # Application Entry
│   └── index.tsx                 # DOM Mounting
├── index.html              # HTML entry with Metadata & Schema
└── ...
```

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/vat-sales-tax-calculator.git
    cd vat-sales-tax-calculator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Designed & Developed with ❤️ by <strong>HSINI MOHAMED</strong></p>
  <a href="https://doodax.com">doodax.com</a> • <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a>
</div>