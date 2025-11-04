# SteamStore Read me inside  other folder.
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

# Why use Router?
ALl should be in the same component
We would need contitional rendering
url would not change so no refresh or back in the browser
So with Router
-Each page is separated in a clean way
-press a game  changes url so yousee new page
-back button works easy
-This is clean way to create SPA
...So Router is because we click on game and see info.If we see info under game and not by clicking it then no ROuter would be needed so we did not create it from start of app.
