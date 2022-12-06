import { createContext } from "react";

// Initial State
const user = {
  name: "Mat",
  email: "tan.matmercado@gmail.com",
  status: "active",
};
const name = "Mat";
// Create context
export const UserContext = createContext(user);

// Provider component
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
