import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";


const LoginPage = ()=>{
    return (
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <button
          onClick={() => {
            console.log(googleLogout());
          }}
        >
          Logout
        </button>
      </div>
    );
}

export default LoginPage;