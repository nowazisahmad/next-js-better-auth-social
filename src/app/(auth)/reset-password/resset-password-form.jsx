"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
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
import { resetPassword } from "@/lib/auth-client";

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await resetPassword({
      newPassword: userData.password,
      token,
    });
    console.log("after reset submit", resData);
    toast.success("Your password is reset successfully");
  };

  return (
    <>
      <Toast.Provider />
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-400/30">
              <span className="text-2xl">🔐</span>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Now Give Me New Password
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Create a new secure password for your account.
            </p>
          </div>
          <Form
            className="flex w-full flex-col gap-5"
            onSubmit={handleResetPassword}
          >
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="mb-2 block text-sm font-semibold text-slate-300">
                New Password
              </Label>
              <Input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                placeholder="Enter your password"
              />
              <Description className="mt-2 text-xs leading-5 text-slate-500">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
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

export default ResetPasswordForm;
