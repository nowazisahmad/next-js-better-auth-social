"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // Convert FormData to plain object

    console.log("data from the form", data);

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    console.log("after sign up", resData, error);
  };
  const handleGoogleSignUp = async() =>{
        const resData = await signIn.social({
            provider: 'google',
        })

        console.log('after google sign up', resData)
    };
        const handleGithubSignUp = async() =>{
            const resData = await signIn.social({
                provider: "github",
            })
    
            console.log('after github sign up', resData)
        };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      {" "}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {" "}
        <div className="mb-8 text-center">
          {" "}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-400/30">
            {" "}
            <span className="text-2xl">✨</span>{" "}
          </div>{" "}
          <h2 className="text-3xl font-bold text-white"> Sign Up </h2>{" "}
          <p className="mt-2 text-sm text-slate-400">
            {" "}
            Create your account and get started.{" "}
          </p>{" "}
        </div>{" "}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          {" "}{" "}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            {" "}
            <Label className="mb-2 block text-sm font-medium text-slate-300">
              {" "}
              Name{" "}
            </Label>{" "}
            <Input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="Your Name"
            />{" "}
            <FieldError />{" "}
          </TextField>{" "}
          {" "}
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
            {" "}
            <Label className="mb-2 block text-sm font-medium text-slate-300">
              {" "}
              Email{" "}
            </Label>{" "}
            <Input
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              placeholder="Your Email"
            />{" "}
            <FieldError />{" "}
          </TextField>{" "}{" "}
          <TextField
            className="w-full"
            name="password"
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
            {" "}
            <Label className="mb-2 block text-sm font-medium text-slate-300">
              {" "}
              Password{" "}
            </Label>{" "}
            <InputGroup className="w-full">
              {" "}
              <InputGroup.Input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                type={isVisible ? "text" : "password"}
              />{" "}
              <InputGroup.Suffix className="pe-2">
                {" "}
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {" "}
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}{" "}
                </Button>{" "}
              </InputGroup.Suffix>{" "}
            </InputGroup>{" "}
            <Description className="mt-2 text-xs text-slate-500">
              {" "}
              Must be at least 8 characters with 1 uppercase and 1 number{" "}
            </Description>{" "}
            <FieldError />{" "}
          </TextField>{" "}
          {" "}
          <div className="flex gap-3 pt-2">
            {" "}
            <Button
              type="submit"
              className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              {" "}
              Submit{" "}
            </Button>{" "}
            <Button
              type="reset"
              variant="secondary"
              className="rounded-xl px-6"
            >
              {" "}
              Reset{" "}
            </Button>{" "}
          </div>{" "}
        </Form>{" "}
        {" "}
        <div className="my-7 flex items-center gap-4">
          {" "}
          <div className="h-px flex-1 bg-white/10" />{" "}
          <span className="text-xs font-medium text-slate-500">
            {" "}
            OR CONTINUE WITH{" "}
          </span>{" "}
          <div className="h-px flex-1 bg-white/10" />{" "}
        </div>{" "}
        {" "}
        <div className="flex w-full flex-col gap-3">
          {" "}
          <Button
            onClick={handleGoogleSignUp}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10"
            variant="tertiary"
          >
            {" "}
            <Icon icon="devicon:google" /> Sign in with Google{" "}
          </Button>{" "}
          <Button
            onClick={handleGithubSignUp}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-slate-200 transition hover:bg-white/10"
            variant="tertiary"
          >
            {" "}
            <Icon icon="mdi:github" /> Sign in with GitHub{" "}
          </Button>{" "}
        </div>{" "}
        {" "}
        <p className="mt-7 text-center text-sm text-slate-500">
          {" "}
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            {" "}
            Sign in{" "}
          </a>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default SignUpPage;
