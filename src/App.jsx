import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./assets/Context/ProductContext";
import { AuthProvider } from "./assets/Context/AuthContext";
import { ThemeProvider } from "./assets/Context/ThemeContext";
import MainLayout from "./assets/components/MainLayout";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/" element={<MainLayout />} />
              </Routes>
            </Router>
        </ThemeProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
