import { User, Eye } from "phosphor-react";

import PopoverWrapper from "..";

import Input from "../../Input";
import Button from "../../Button";

export default function PopoverSignIn() {
  return (
    <PopoverWrapper icon={User}>
      <div className="grid gap-2 bg-white rounded p-8 shadow-2xl">
        <div className="text-center">
          <span className="text-xl font-semibold">Sign in to your account</span>
        </div>

        <form className="mt-5 min-w-[26.5rem]">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="sign-in-email" className="text-sm">
                Email Address
              </label>

              <Input type="email" name="sign-in-email" className="border border-solid border-gray-100" />
            </div>

            <div className="grid gap-2">
              <div className="flex justify-between text-sm">
                <label htmlFor="sign-in-password">Password</label>

                <a href="#" className="text-secondary-500 font-medium">
                  Forget Password
                </a>
              </div>

              <div className="relative">
                <Input type="password" name="sign-in-password" className="border border-solid border-gray-100" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button title="Login" className="w-full" />

            <div className="mt-6 flex gap-2 items-center justify-between">
              <span className="flex-1 py-px bg-[#E4E7E9]"></span>
              <p className="text-gray-500 text-sm">Don't have account</p>
              <span className="flex-1 py-px bg-[#E4E7E9]"></span>
            </div>

            <Button title="Create Account" data-type="outline" className="mt-3 w-full" />
          </div>
        </form>
      </div>
    </PopoverWrapper>
  );
}
