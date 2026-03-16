# 🌃 Tegel-Gem: The Ultimate Synthwave Booking App

A visually stunning, high-performance event booking application designed for authenticated users. Featuring a retro-futuristic **neon synthwave aesthetic**, smooth animations, and a custom-built calendar system.

## ✨ Features

- **🔒 Secure Authentication**: Firebase-powered login system (Signup functionality intentionally disabled for exclusive access).
- **📅 Dynamic Calendar**: A custom 7-column monthly grid view for easy event management.
- **🚀 Real-time Updates**: Powered by Firebase Realtime Database for instantaneous event synchronization.
- **🎨 Neon Synthwave UI**: 
  - Vivid neon-pink, cyan, and purple color scheme.
  - Interactive ripple effects on components.
  - Custom-styled modal windows and toast notifications.
  - Responsive design for both desktop and mobile.
- **📺 Dynamic Ad Engine**: A rotating ad space with multiple styles (Tabloid, Comic, Horror, etc.) and randomized animations.
- **🛠️ Validation Logic**: Built-in overlap detection to ensure event integrity.

## 🛠️ Technical Stack

- **Frontend**: [TypeScript](https://www.typescriptlang.org/) & [Sass (SCSS)](https://sass-lang.com/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Backend**: [Firebase Realtime Database](https://firebase.google.com/docs/database)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)
- **Testing**: [Vitest](https://vitest.dev/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for local emulator testing)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tegel-gem
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Development

Run the development server:
```bash
npm run dev
```

Run tests:
```bash
npm run test
```

Build for production:
```bash
npm run build
```

## 🧪 Testing

The project uses Vitest for unit testing. All core logic (calendar generation, overlap detection) is covered by tests. Firebase interactions are designed to be tested against the Firebase Emulator.

## 📜 License

MIT
