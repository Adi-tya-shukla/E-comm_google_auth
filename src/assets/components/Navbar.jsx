import { useAuth } from "../Context/AuthContext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useTheme } from "../Context/ThemeContext";
import { Moon, Sun, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="bg-slate-300 dark:bg-slate-800 p-2 flex justify-between items-center">
      <h1 className="text-fuchsia-800 dark:text-white text-xl font-bold flex"> <ShoppingBag className="w-5 h-5 mt-1"/> E-Commerce </h1>
   
      <div className="flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
        {user ? (
          <>
            <span className="text-white">{user.name}</span>
            <button
              onClick={() => {
                googleLogout();
                logout();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <GoogleLogin onSuccess={login} onError={() => console.log("Login Failed")} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
