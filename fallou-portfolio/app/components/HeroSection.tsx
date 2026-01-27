"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6 py-16">
      {/* Profile Photo in top left */}
      <div className="absolute top-8 left-8 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">FALLOU</span>
            {" "}
            <span className="bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent">
              SOW
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 font-light">
            Web Designer / Developer
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 px-6 py-3 border-2 border-zinc-300 text-zinc-50 font-medium rounded-full hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
          >
            Get in touch →
          </a>
        </div>

        {/* Right: Large profile image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Fallou Sow"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

