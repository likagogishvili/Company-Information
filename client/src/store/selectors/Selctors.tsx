import { useSelector } from "react-redux";
import { ShowSignIn } from '../interfaces/interfaces';

function useShowSignIn() {
    const showSignIn = useSelector((state: ShowSignIn) => state.signIn);
    return showSignIn;
  }
  
  export { useShowSignIn };