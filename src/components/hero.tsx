"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DarkVeilBackground } from "./ui/dark-veil-background";
import { ShinyButton } from "./magicui/shiny-button";
import { Star } from "lucide-react";
import { Icons } from "./icons";
import { ArrowRight } from "./animate-ui/icons/arrow-right";

export function Hero() {
  return (
    <div className="w-full h-full bg-background overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <DarkVeilBackground
          hueShift={220}
          scanlineIntensity={0.4}
          warpAmount={1.0}
          speed={0.5}
          className="opacity-50"
        />
        <Noise
          patternSize={500}
          patternRefreshInterval={0.6}
          patternAlpha={6}
        />
      </div>

      <main className="absolute inset-0 flex flex-col items-center justify-center gap-12 z-10">
        <ShinyButton className="flex rounded-none hover:scale-105 transition-transform">
          <Icons.github className="size-4 fill-white" />
          <span className="font-medium">Github</span>
          <Star className="size-3 fill-white" />
          <span className="font-medium">200</span>
            <ArrowRight className="size-4" animation="out" animateOnHover />
        </ShinyButton>
        <h1 className="text-7xl font-medium z-10 w-[42rem] text-center">
          Less noise, more browsing.
        </h1>
        <p className="text-muted-foreground w-96 text-center leading-6 text-lg">
          Built on webkit, designed for macOS. Ora
          delivers a clean, native experience that’s simple, powerful, and free
          of bloat.
        </p>
        <div className="flex space-x-4">
          <Input
            className="w-96 rounded-none bg-input"
            placeholder="yonaries@0.email"
          />
          <Button className="rounded-none">Join waitlist</Button>
        </div>
        <div className="flex gap-2 items-center">
          <div className="size-2 bg-green-400 animate-pulse rounded-full shadow-2xl shadow-green-400" />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">1,872 </span>people have
            joined the waitlist
          </p>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return (
    <canvas
      className="pointer-events-none absolute top-0 left-0 h-screen w-screen bg-transparent"
      ref={grainRef}
      style={{
        imageRendering: "pixelated",
      }}
    />
  );
};
