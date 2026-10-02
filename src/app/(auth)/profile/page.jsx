"use client";
import { updateUser } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Toast,
  toast,
} from "@heroui/react";

const ProfilePage = () => {
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("in the form data", userData);
    const resData = await updateUser({
      name: userData.name,
    });
    console.log("after submit user profile", resData);
    toast.success("Profile Update Successfully!");
  };

  return (
    <><Toast.Provider/>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
       <Form className="w-full max-w-md" onSubmit={handleUpdateUser}>
        <Fieldset className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <Fieldset.Legend className="text-2xl font-bold text-white">
            Profile Settings
          </Fieldset.Legend>
          <Description className="mt-2 text-sm text-slate-400">
            Update your profile information.
          </Description>
          <FieldGroup className="mt-4 flex flex-col gap-3">
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
              <Label className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </Label>
              <Input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                placeholder="Change Your Name"
              />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions className="mt-5 flex gap-2">
            <Button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-2 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              <FloppyDisk className="size-4" />
              Save changes
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className="rounded-xl px-6 py-2"
            >
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
    </>
  );
};

export default ProfilePage;


