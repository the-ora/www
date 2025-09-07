"use client";

import { useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { addToWaitlist, sendJoiningEmail } from "@/actions/waitlist";
import { z } from "zod";

type FormState = "idle" | "submitting" | "success";

const emailSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [userIP, setUserIP] = useState<string | null>(null);
  const [ipError, setIpError] = useState(false);

  // Lazy fetch IP only when needed
  const fetchUserIP = useCallback(async (): Promise<string> => {
    if (userIP) return userIP;

    try {
      const response = await fetch("/api/ip");
      if (!response.ok) throw new Error("Failed to fetch IP");

      const data = await response.json();
      const ip = data.ip;

      setUserIP(ip);
      setIpError(false);
      return ip;
    } catch (error) {
      console.error("Failed to fetch user IP:", error);
      setIpError(true);
      throw new Error("Unable to get your IP address");
    }
  }, [userIP]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (formState !== "idle") return;

      const trimmedEmail = email.trim();

      const validation = emailSchema.safeParse({ email: trimmedEmail });
      if (!validation.success) {
        toast.error(validation.error.message);
        return;
      }

      setFormState("submitting");

      try {
        const ip = await fetchUserIP();
        toast.promise(
          addToWaitlist(trimmedEmail, ip)
            .then(() => {
              return sendJoiningEmail(trimmedEmail);
            })
            .then(() => {
              setFormState("success");
            }),
          {
            loading: "Wait a sec, adding you to waitlist...",
            success: "Boom, You're in!",
            error: "Failed to join waitlist",
          },
        );
      } catch (error) {
        setFormState("idle");

        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    },
    [email, formState, fetchUserIP],
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [],
  );

  const isSubmitting = formState === "submitting";
  const isSuccess = formState === "success";
  const isDisabled = isSubmitting || isSuccess;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:justify-end">
      <Input
        className="w-full md:w-96 rounded-none dark:bg-background/40"
        placeholder="yonaries@0.email"
        value={email}
        onChange={handleEmailChange}
        disabled={isDisabled}
        type="email"
        autoComplete="email"
        aria-label="Email address"
      />
      <Button
        onClick={handleSubmit}
        className="rounded-none w-30"
        disabled={isDisabled}
        type="submit"
      >
        {isSuccess ? "Joined 🎉" : "Join waitlist"}
      </Button>
      {ipError && !isSubmitting && (
        <p className="text-sm text-red-500 mt-1">
          Something went wrong - please try again
        </p>
      )}
    </div>
  );
}
