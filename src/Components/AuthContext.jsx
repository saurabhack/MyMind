// src/Components/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebaseConfig";  // Make sure the path to firebaseConfig is correct
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap around the app and provide authentication context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // UseEffect to subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Set user data
      setLoading(false);  // Once authentication state is checked, set loading to false
      console.log("Current user:", currentUser);  // Debugging log for user
    });

    // Cleanup subscription when component unmounts
    return () => unsubscribe();
  }, []);

  // Log out function
  function logOut() {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully.");
      })
      .catch((err) => {
        console.log("Error logging out:", err.message);  // Log any errors during sign-out
      });
  }

  return (
    // Provide auth context value to children
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
