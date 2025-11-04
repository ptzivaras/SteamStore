# 🎮 Steam Store Clone 'SPA'

A simplified **Steam Store clone** built for practice, following the exact specs of the Client. Todo Improve UI

---

## 🚀 Tech Stack
- React (Vite)
- TailwindCSS
- React Router
- Mock Data (no external APIs)
---

## 🧱 Features
✅ Tabs:
- New & Trending  
- Top Sellers  
- What’s Being Played  
- Upcoming  
✅ Search bar (filters games by name)  
✅ Game Info Page (with Back button)  
✅ Responsive layout using TailwindCSS  
## Future Features
1. Pagination or infinite scroll for the games.
2. Sorting (e.g Price or Discount).
3. Favorites / Wishlist Features.
4. Dark / Light mode toggle(Use Context Api).
5. Global state (Redux Toolkit and Context API for authentication and darkmode ).
6. API calls instead of mock data with tanstack.
7. User login / authentication. (Choose OATH/JWT)
8. Responsive grid breakpoints Advanced (not basic Tailwind).
9. Animations / transitions (not just hover).
10. Persistence (Like save in localStorage).
---

## 🗂️ Project Structure
src/
├─ components/ → Reusable UI components (GameCard)
├─ pages/ → Page components (GameInfoPage)
├─ data/ → Mock data (games.js)
├─ assets/ → Local images
└─ App.jsx / main.jsx

# yaml
---
## 🧰 Setup
```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

