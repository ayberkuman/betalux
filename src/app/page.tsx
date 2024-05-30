import { buttonVariants } from "@/components/ui/button";
import { Match } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="mx-auto space-y-4 grid place-items-center min-h-[20vh]">
      <h1 className="text-3xl">Welcome To Betalux</h1>
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({
            variant: "default",
            size: "lg",
          })
        )}
      >
        Go to dashboard
      </Link>
    </div>
  );
}
