# SteamStore
Clone of steam store

# Create with Vite (React + JS)
npm create vite@latest steam-store-clone -- --template react
cd steam-store-clone
npm install

# install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss-cli@latest init -p
npm install -D @tailwindcss/postcss


# open tailwind.config.js and add
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
# in postcss.config.js have these lines
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


# In src/index.css delete all and add
@tailwind base;
@tailwind components;
@tailwind utilities;

# clean cache if problems
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# npm run dev
