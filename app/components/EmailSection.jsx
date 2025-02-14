"use client";
import Image from "next/image";
import Link from "next/link";
import XIcon from "../../public/images/X.png";
import DiscordIcon from "../../public/images/discord.png";
import GitHubIcon from "../../public/images/github.png";
import LinkedInIcon from "../../public/images/linkedin.png";

const EmailSection = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center my-12 md:my-12 py-24 relative">
        <div className="z-1 text-center">
        {/* <div className="bg-gradient-to-r from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 -left-4  transform -translate-x-1/2 -translate-1/2"></div>
      <div className="bg-gradient-to-r from-transparent to-purple-900 rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 left-  transform -translate-x-1/2 -translate-1/2"></div>
           */}
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          Whether it's about the latest tech trends, UI/UX design, or just a friendly conversation, feel free to reach out!
        </p>
        <div className="socials flex flex-row gap-4 items-center justify-center">
          <Link href="https://github.com/DiyaVj">
            <Image src={GitHubIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/diya-vijay/">
            <Image src={LinkedInIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="LinkedIn Icon" />
          </Link>
          <Link href="https://linktr.ee/Diyavj">
            <Image src={DiscordIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="Discord Icon" />
          </Link>
          <Link href="https://twitter.com/DiyaVijay6">
            <Image src={XIcon} className="w-10 h-10 hover:opacity-80 cursor-pointer" alt="X Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;