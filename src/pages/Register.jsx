import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrormessage] = useState("");
  const [success, setSuccess] = useState(false);

  // ✅ Use useEffect to show toast only when success changes
  useEffect(() => {
    if (success) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Register Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [success]);
  // Runs only when `success` updates

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({name, photo, email, password});

    // reseting the error message
    setErrormessage("");
    setSuccess(false);
    // showing toast

    // password validation

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = /^.{6,}$/.test(password);
    if (!hasUppercase) {
      setErrormessage("The Password Must Contain Atleast 1 Uppercase Letter");
      return;
    }
    if (!hasLowercase) {
      setErrormessage("The Password Must Contain Atleast 1 Lowercase Letter");
      return;
    }
    if (!hasMinLength) {
      setErrormessage("The Password Must Contain Atleast 6 Letters");
      return;
    }

    try {
      // Create user
      const res = await createNewUser(email, password);
      const user = res.user;

      // Update user profile with name and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      // Successfully updated user profile
      setUser({ ...user, displayName: name, photoURL: photo });
      // console.log("User updated:", user);
      navigate("/");
      setSuccess(true);
    } catch (error) {
      setErrormessage(error.message);
      setSuccess(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
            />
            <label className="fieldset-label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
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

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        {errorMessage && (
          <p className="text-red-400 ml-4 text-sm">{errorMessage}</p>
        )}

        <p className="text-center font-semibold">
          Allready Have An Account ?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
