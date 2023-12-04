import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";

const LoginPage = ({ setUserData, userData }) => {
  const [data, setdata] = useState({});
  return (
    <div className=" flex items-center gap-6 ">
      <GoogleLogin
        onSuccess={async(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          setdata(decoded);
          console.log(data);
          window.location = "/";
        }}
        onError={() => {
          console.log("Login Failed ");
        }}
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