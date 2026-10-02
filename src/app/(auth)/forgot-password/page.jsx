"use client";
import { requestPasswordReset } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Toast,
  toast,
} from "@heroui/react";

const ForgotPasswordPage = () => {
    const handleForgotPassword = async(e) => {
         e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("user data before submit", userData);

    const resData = await requestPasswordReset({
        email: userData.email,
        redirectTo: "/reset-password",
    });

    toast.success("An Email is sent to your email adress. Please Check.")
    console.log("after sending reset email", resData);

    }
  return (
    <><Toast.Provider/>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-400/30">
            <span className="text-2xl">🔐</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Forgot Password</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Enter your email address and we'll send you
            <br />a link to reset your password.
          </p>
        </div>
        <Form className="flex w-full flex-col gap-5" onSubmit={handleForgotPassword}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="mb-2 block text-sm font-semibold text-slate-300">
              Email
            </Label>
            <Input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="Enter Your Email"
            />
            <FieldError />
          </TextField>
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              <Check className="size-4" />
              Submit
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className="flex-1 rounded-xl py-3"
            >
              Reset
            </Button>
          </div>
        </Form>
        <div className="mt-7 text-center">
          <a
            href="/sign-in"
            className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            ← Back to Sign In
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPasswordPage;
