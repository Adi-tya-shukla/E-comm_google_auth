import { useAuth } from "../Context/AuthContext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const LoginButton = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <button 
          onClick={() => {
            googleLogout();
            logout();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      ) : (
        <GoogleLogin
          onSuccess={(credentialResponse) => login(credentialResponse)}
          onError={() => console.log("Login Failed")}
        />
      )}
    </div>
  );
};

export default LoginButton;
