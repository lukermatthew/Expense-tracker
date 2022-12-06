import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="container">Expense Tracker</div>
      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Header;
