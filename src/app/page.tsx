import { Facebook, Github, Instagram, Linkedin, Twitter, HomeIcon, UserSearch } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "./components/MenuItem";

export default function Home() {
  return (
    <div className="h-screen flex">
      <nav className="w-80 bg-gray-800 p-8 flex flex-col">
        <div>
          <h1 className="text-3xl font-bold select-none">Herlon Costa</h1>
        </div>

        <div className="mt-20 flex-1">
          <ul className="flex flex-col gap-3">
            <MenuItem icon={<HomeIcon />} link="/" text="Home" />
            <MenuItem icon={<UserSearch />} link="/" text="About Me" />
            <MenuItem icon={<HomeIcon />} link="/" text="Resume" />
            <MenuItem icon={<HomeIcon />} link="/" text="Portfolio" />
            <MenuItem icon={<HomeIcon />} link="/" text="Testimonials" />
            <MenuItem icon={<HomeIcon />} link="/" text="Blog" />
            <MenuItem icon={<HomeIcon />} link="/" text="Contact" />
          </ul>
        </div>

        <div className="mt-10 flex justify-center gap-1 pb-2">
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Linkedin />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
          <Link href="/">
            <Github />
          </Link>
        </div>

        <div>
          <p className="text-sm text-center">2024, Herlon Costa&reg;.</p>
        </div>
      </nav>

      <main className="bg-gray-900 flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-2 text-center">
          <p>Hello, i{`'`}m</p>
          <h2 className="text-7xl font-bold">Herlon Costa</h2>
          <p className="text-xl">I am a Web Developer</p>
        </div>
      </main>
    </div>
  );
}
