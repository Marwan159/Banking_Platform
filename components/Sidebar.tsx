"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 gap-2 flex cursor-pointer items-center">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((side) => {
          const isActice =
            pathname === side.route || pathname.startsWith(`${side.route}/`);
          return (
            <>
              <Link
                href={side.route}
                className={cn("sidebar-link", { "bg-bank-gradient": isActice })}
                key={side.label}
              >
                <div className="relative size-6">
                  <Image
                    src={side.imgURL}
                    fill
                    alt="Horizon logo"
                    className={cn({ "brightness-[3] invert-0": isActice })}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActice })}>
                  {side.label}
                </p>
              </Link>
            </>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
