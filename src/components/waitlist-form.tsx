"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { addToWaitlist, sendJoiningEmail } from "@/actions/waitlist";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const data = await addToWaitlist(email);
          if (data.success) {
            setIsJoined(true);
            console.log(data);
            await sendJoiningEmail(email);
            resolve("Joined waitlist");
          } else {
            reject("Failed to join waitlist");
          }
        } catch (error) {
          reject("Failed to join waitlist");
        } finally {
          setLoading(false);
        }
      }),
      {
        loading: "Joining waitlist",
        success: "Joined waitlist",
        error: "Failed to join waitlist",
      },
    );
  }

  return (
    <div className="flex space-x-4">
      <Input
        className="w-96 rounded-none dark:bg-background/40"
        placeholder="yonaries@0.email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isJoined || loading}
      />
      <Button
        onClick={handleSubmit}
        className="rounded-none w-30"
        disabled={isJoined || loading}
      >
        {isJoined ? "Joined 🎉 " : "Join waitlist"}
      </Button>
    </div>
  );
}
