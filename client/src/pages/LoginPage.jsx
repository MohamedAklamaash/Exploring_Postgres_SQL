import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import { useEffect } from "react";

const LoginPage = ({ setUserData, userData }) => {
  useEffect(()=>{
    console.log(userData);
  },[userData])
  return (
    <div className=" flex items-center gap-6 ">
      <GoogleLogin
        onSuccess={async(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log(decoded);
          await setUserData(decoded);
          console.log(userData);
          window.location = "/";
        }}
        onError={() => {
          console.log("Login Failed ");
        }}
        useOneTap
      />
      <button
        onClick={() => {
          console.log(googleLogout());
        }}
        className=" font-montserrat p-3"
      >
        Logout
      </button>
    </div>
  );
};

export default LoginPage;