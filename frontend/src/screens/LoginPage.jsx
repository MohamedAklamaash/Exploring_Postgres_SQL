import {GoogleLogin} from "@react-oauth/google"
const LoginPage = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
}

export default LoginPage