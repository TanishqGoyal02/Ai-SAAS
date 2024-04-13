"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold text-center space-y-5 py-36">
      <div className="text-4xl sm:text-5xl md:text-6xl space-y-5 lg:text-7xl font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="flex justify-center items-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
            <TypewriterComponent
              options={{
                strings: [
                  "Music Generation",
                  "Code Generation",
                  "Image Generation",
                  "Text Generation",
                  "Video Generation",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster
      </div>
      <div>
        <Link href={isSignedIn ? "/dasboard" : "/sign-up"}>
          <Button
            variant="default"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-purple-400 to-pink-600 pb-4 text-gray-900"
          >
            Start Generating for free.
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        *No credit card required.
      </div>
    </div>
  );
};
