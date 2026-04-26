import React from 'react';
import { Button } from './ui/button';
import {Github, Zap} from "lucide-react";
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-20">
        <Button variant={"outline"} className="rounded-full mb-5">
            <Zap />
            Next.js 16 + shadcn/ui
            </Button>
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">
            Build beautiful apps {""}
            <span className="text-blue-500">faster <br /> than ever</span>
        </h1>
        <p className="w-96 m-auto mt-4 text-xl text-gray-500">
          A minimal Next.js starter with shadcn/ui, Tailwind CSS v4, and React 19. Everything you need to ship your next idea.
        </p>
      </div>
      <div>
        <Button size={'lg'} className="at-1">
          Started
          <ArrowRight />
        </Button>
        <Button size={"lg"} className="mt-4" variant={"outline"}>
          View on Github
          <Github />
        </Button>
      </div>
    </section>
  )
}
export default HeroSection