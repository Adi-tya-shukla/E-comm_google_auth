# E-Commerce App

A React.js-based e-commerce application with authentication, product filtering, search functionality, and dark mode support. Styled using Tailwind CSS.

## 🚀 Features
- **Google OAuth Login** (Sign in with Google)
- **Product Listing** (Fetched from Fake Store API)
- **Category Filtering**
- **Search Functionality**
- **Dark Mode Support** (Persistent with Local Storage)
- **Responsive UI** (Optimized for Mobile & Desktop)

---

## 📂 Project Structure
```
ecommerce-app/
│── public/
│── src/
│   │── components/
│   │   │── Navbar.jsx
│   │   │── Sidebar.jsx
│   │   │── ProductCard.jsx
│   │   │── ProductList.jsx
│   │   │── SearchBar.jsx
│   │   │── LoginButton.jsx
│   │── pages/
│   │   │── Home.jsx
│   │   │── ProductDetails.jsx
│   │── context/
│   │   │── AuthContext.jsx
│   │   │── ProductContext.jsx
│   │   │── ThemeContext.jsx
│   │── App.js
│   │── index.js
│── package.json
│── tailwind.config.js
│── .env
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/ecommerce-app.git
cd ecommerce-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the root directory and add:
```sh
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

---

## 🔑 Authentication (Google OAuth)
- Uses `@react-oauth/google` for Google login.
- **Login / Logout Buttons** are available in `LoginButton.jsx`.
- Authentication is handled using `AuthContext.jsx`.

---

## 🌙 Dark Mode Implementation
- Uses Tailwind CSS’s `dark:` class-based theming.
- Controlled by `ThemeContext.jsx`.
- Theme is **stored in localStorage** to persist user preference.
- Toggle button available in `Navbar.jsx`.

---

## 🔗 API Usage (Fake Store API)
- Products are fetched from **Fake Store API** (`https://fakestoreapi.com/products`).
- Categories fetched from `https://fakestoreapi.com/products/categories`.

---

## 🎨 UI & Styling
- Tailwind CSS for responsive and modern styling.
- Dark mode support with `dark:` classes.

---

## 🤝 Contributing
Feel free to fork and contribute via pull requests!

---

## 📜 License
MIT License

