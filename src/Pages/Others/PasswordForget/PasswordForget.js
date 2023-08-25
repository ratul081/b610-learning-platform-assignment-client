import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const PasswordForget = () => {
  const { passwordReset } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handlePasswordRest = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.e_mail.value;
    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };
  return (
    <div className="grid place-items-center min-h-screen bg-base-200">
      <form onSubmit={handlePasswordRest}>
        <p className="text-2xl text-center my-6">
          Enter the email address associated with your account <br /> and we'll
          send you a link to reset your password
        </p>
        <div className="form-control space-y-2">
          <label className="label">
            <span className="label-text text-3xl">Email:</span>
          </label>
          <input
            type="text"
            name="e_mail"
            placeholder="Enter your email"
            className="input input-bordered"
          />
        </div>
        <div className="my-2">{error}</div>
        <div className="text-center">
          <button className="btn btn-info my-6  px-12">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForget;
