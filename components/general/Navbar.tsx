import Link from "next/link";
import Logo from "@/public/logo_s.png";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary ">himzei</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button>logout</Button>
          </form>
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            login
          </Link>
        )}
      </div>
    </nav>
  );
}
