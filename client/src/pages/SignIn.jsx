import { Label, TextInput, Button, Spinner, Alert } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);  //REMOVABLE BOTH
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrorMessage("Please fill out all fields.");   //using dispatch will give us the same result
      return dispatch(signInFailure("Please fill out all fields."));
    }

    try {
      // setLoading(true);
      // setErrorMessage(null);   //using dispatch will give us the same result.
      dispatch(signInStart());

      const res = await fetch("/api/authen/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // error message
      if (data.success === false) {
        // return setErrorMessage(data.message);  //using dispatch will give us the same result.
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);  //using dispatch will give us the same result.
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-full mt-20">
      <div className="flex p-3 max-w-xl mx-auto flex-col">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <Label value="Your Email" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your Password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Don&apos;t Have an account?</span>
          <Link to="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </div>

        {/* error message pop up*/}
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
