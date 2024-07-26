"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="hamburger logo"
          />
        </SheetTrigger>
        <SheetContent className="bg-white" side="left">
          <Link
            href="/"
            className="px-4  gap-1 flex cursor-pointer items-center"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif  font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="modilenav-sheet">
            <nav className="flex flex-col gap-6 pt-16 h-full text-white">
              {" "}
              {sidebarLinks.map((side) => {
                const isActice =
                  pathname === side.route ||
                  pathname.startsWith(`${side.route}/`);
                return (
                  <SheetClose asChild key={side.route}>
                    <Link
                      href={side.route}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActice,
                      })}
                      key={side.label}
                    >
                      <Image
                        src={side.imgURL}
                        width={30}
                        height={30}
                        alt="Horizon logo"
                        className={cn({
                          "brightness-[3] invert-0": isActice,
                        })}
                      />
                      <p
                        className={cn("text-16 font-semibold text-black-2  ", {
                          "text-white": isActice,
                        })}
                      >
                        {side.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
