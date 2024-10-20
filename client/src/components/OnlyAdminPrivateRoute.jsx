import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyAdminPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in">
      {alert(
        "This page is accessible only by Admin. \n\n\n" +
          "SignIn in your Admin account to continue."
      )}
    </Navigate>
  );
}
