"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import FormInputCustom from "./FormInputCustom";
import { authFormSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/action/userAction";
import SignIn from "@/app/(auth)/sign-in/page";

const FormAuth = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: "",
    //   password: "",
    //   userName: "",
    //   firstName: "",
    //   lastName: "",
    //   address: "",
    //   state: "",
    //   postalCode: "",
    //   dateOfBirthday: "",
    //   ssn: "",
    // },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      if (type === "Sign-Up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "Sign-In") {
        const response = await SignIn({
          email: data.email,
          password: data.password,
        });
        if (response) router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  };

  return (
    <div className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        {" "}
        <Link href="/" className="  gap-1 flex cursor-pointer items-center">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif  font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "Sign-In" ? "Sign in" : "Sign up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details."}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*PliadLink*/}</div>
      ) : (
        <>
          {" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "Sign-Up" && (
                <>
                  <div className="flex justify-between gap-8">
                    <FormInputCustom
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="ex: Mohamed"
                    />

                    <FormInputCustom
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="ex: Salah"
                    />
                  </div>
                  <FormInputCustom
                    control={form.control}
                    label="Address"
                    name="address1"
                    placeholder="Enter your specific adderss"
                  />
                  <FormInputCustom
                    control={form.control}
                    label="City"
                    name="city"
                    placeholder="Enter your specific city"
                  />
                  <div className="flex justify-between gap-8">
                    <FormInputCustom
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="ex: EG"
                    />

                    <FormInputCustom
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="ex: 12556"
                    />
                  </div>
                  <div className="flex justify-between gap-8">
                    <FormInputCustom
                      control={form.control}
                      label="Date Of Birthday"
                      name="dateOfBirth"
                      placeholder="yyyy-mm-dd"
                    />

                    <FormInputCustom
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}
              <FormInputCustom
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />

              <FormInputCustom
                control={form.control}
                label="Password"
                name="password"
                placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={loading} className="form-btn">
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "Sign-Up" ? (
                    "Sign up"
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "Sign-Up"
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>
            <Link
              href={type === "Sign-Up" ? "/sign-in" : "/sign-up"}
              className="form-link"
            >
              {type === "Sign-Up" ? "Login" : "Sign up"}
            </Link>
          </footer>
        </>
      )}
    </div>
  );
};

export default FormAuth;
