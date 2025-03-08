import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, signInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(password, email);

    userLogin(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        // console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-ghost">
          Login With Google
        </button>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
