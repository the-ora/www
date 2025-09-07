"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  async function handleJoinWaitlist() {
    setLoading(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)).finally(() => {
        setLoading(false);
        setIsJoined(true);
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
      />
      <Button
        onClick={handleJoinWaitlist}
        className="rounded-none w-30"
        disabled={isJoined || loading}
      >
        {isJoined ? "Joined 🎉 " : "Join waitlist"}
      </Button>
    </div>
  );
}
