import { useSelector } from "react-redux";
import { ShowSignIn } from "../interfaces/interfaces";

function useShowSignIn() {
  const showSignIn = useSelector((state: ShowSignIn) => state.signIn);
  return showSignIn;
}

function UseUser() {
  const user = useSelector((state: any) => state.user);
  return user;
}

export { useShowSignIn, UseUser };
