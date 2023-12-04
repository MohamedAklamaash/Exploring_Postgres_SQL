import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";

const LoginPage = ({ setUserData, userData }) => {
  return (
    <div className=" flex items-center gap-6 ">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          setUserData(decoded);
          console.log(userData);
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