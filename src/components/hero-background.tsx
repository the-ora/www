"use client";

import { DarkVeilBackground } from "./ui/dark-veil-background";
import Noise from "./noise";
import { cn } from "@/lib/utils";

export default function HeroBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <DarkVeilBackground
        hueShift={220}
        scanlineIntensity={0.4}
        warpAmount={1.0}
        speed={1}
        className="opacity-70"
      />
      <Noise
        patternSize={500}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={0.6}
        patternAlpha={10}
      />
    </div>
  );
}
