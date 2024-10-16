import { Alert, Button, Modal, ModalBody, TextInput } from "flowbite-react";

export default function DashProfile() {
  return (
    <div className="max-w-2xl pl-60 pt-16 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-3">
        <TextInput type="text" id="username" placeholder="username" />
        <TextInput type="email" id="email" placeholder="email" />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5 text-sm">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
