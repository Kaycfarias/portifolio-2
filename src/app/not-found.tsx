import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="light-background dark:dark-background flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-2xl">Page Not Found</p>
        <p className="mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md px-4 py-2"
        ></Link>
        <Button asChild variant={"outline"}>
          <Link href="/">
            Go to Home
            <HomeIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
