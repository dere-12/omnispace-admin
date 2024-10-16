import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-full mt-20">
      <div className="flex p-3 max-w-xl mx-auto flex-col">
        <form className="flex flex-col gap-5">
          <div>
            <Label value="Your Name" />
            <TextInput type="text" placeholder="Username" id="username" />
          </div>
          <div>
            <Label value="Your Email" />
            <TextInput type="email" placeholder="Email" id="email" />
          </div>
          <div>
            <Label value="Your Password" />
            <TextInput type="password" placeholder="Password" id="username" />
          </div>

          <Button gradientDuoTone="purpleToPink" type="submit">
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/sign-in" className="text-blue-600">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
