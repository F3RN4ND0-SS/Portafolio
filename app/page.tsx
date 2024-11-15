"use client"

//import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full  ">
        {/*<CoverParticles />*/}
        <Introduction />
      </div>
    </main>
  );
}

