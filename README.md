# Multi-Tenant SPA Platform

**Techie Loonds** is a professional and user-friendly platform for building and managing multiple websites efficiently from a single codebase. Built with **React**, **TypeScript**, and **Tailwind CSS**, it leverages a robust JSON-driven architecture to deliver high-performance, SEO-optimized, and aesthetically stunning experiences for diverse clients.

## 🚀 Key Features

*   **Multi-Domain Architecture**: hosting 8+ distinct websites (Hospitality, Logistics, Gifting, SaaS, etc.) from one repo.
*   **JSON-Driven Content**: Complete separation of concerns. Content is managed via strictly typed JSON files, allowing for updates without code changes.
*   **Dynamic Component Rendering**: A powerful `Renderer` engine dynamically composes pages based on JSON configuration.
*   **Rich Design System**: Premium UI/UX with glassmorphism, micro-animations, and responsive layouts powered by Tailwind CSS.
*   **Smart Features**:
    *   **Dynamic Forms**: Contact forms adapt fields based on business needs.
    *   **SEO Engine**: Automatic meta-tag generation for every page.
    *   **Multi-Page Routing**: Seamless navigation for complex site structures.

## � Enterprise Documentation

For detailed architectural insights, scalability reports, and operations guides, please refer to our **[Documentation Hub](docs/README.md)**.
*   [System Architecture](docs/ARCHITECTURE.md)
*   [Scalability Report](docs/SCALABILITY.md)
*   [MVP to SaaS Roadmap](docs/MVP_TO_SAAS.md)
*   [Operations Manual](docs/OPERATIONS.md)
*   [Engineering Guide (Design Patterns)](docs/ENGINEERING_GUIDE.md)


## �🛠️ Technology Stack

*   **Frontend**: React 18, TypeScript, Vite
*   **Styling**: Tailwind CSS, PostCSS
*   **Animation**: CSS3 Transitions, Keyframes
*   **Testing**: Vitest, React Testing Library
*   **Icons**: React Icons (Fa, Ti)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/techieloonds/spa-platform.git
    cd spa-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173` (or the port shown in terminal).

4.  **Run Tests**
    ```bash
    npm test
    ```

5.  **Build for Production**
    ```bash
    npm run build
    ```

## 🌐 Supported Domains (MVP)

*   **Gayatri Lodge** (`gayatrilodge.com`): Luxury Homestay
*   **Kala By Himani** (`kalabyhimani.com`): Personalized Gifting
*   **ForeGrow Solutions** (`foregrowsolutions.com`): Enterprise IT & SaaS
*   **Dray World** (`dray-world.com`): Global Logistics
*   **Pahari Yatri** (`pahariyatri.com`): Travel & Blogs
*   **Techie Portfolio** (`techie.pahariyatri.com`): Developer Portfolio

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Powered by Techie Loonds Engineering*
