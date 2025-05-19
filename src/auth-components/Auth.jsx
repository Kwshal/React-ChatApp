import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function AuthPage({ entered }) {
     const [signing, setSigning] = useState(false);

     const logIn = () => {
          // more to be added
          entered();
     }
     const signUp = () => {
          // more to be added
          entered();
     }

     return (
          <div>
               {!signing && <LoginForm logIn={logIn} signUp={() => setSigning(true)} />}
               {signing && <SignupForm signUp={signUp} logIn={() => setSigning(false)} />}
          </div>
     );
}

export default AuthPage;
