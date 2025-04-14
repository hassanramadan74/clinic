"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Menu,
  CircleUser,
  Syringe,
  NotebookTabs,
  BookCheck,
  Laugh,
} from "lucide-react";
import { theme } from "@/lib/theme";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About Us", icon: CircleUser, href: "/about" },
  { name: "Services", icon: Syringe, href: "/services" },
  { name: "Blogs", icon: BookCheck, href: "/blog" },
  { name: "Transformation", icon: Laugh, href: "/transformation" },
  { name: "Reservation", icon: NotebookTabs, href: "/reservation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: theme.colors.primary }} className="px-2">
      <div className="mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          style={{ color: theme.colors.light }}
        >
          <Image
            src="/images/logo.png"
            alt="Elkholy Logo"
            width={150}
            height={150}
            priority
            // className="h-20 w-20"
          />
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              style={{
                color: theme.colors.light,
              }}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] lg:hidden"
            style={{ backgroundColor: theme.colors.primary }}
          >
            <div className="mt-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="mb-6 flex items-center space-x-2"
                style={{ color: theme.colors.light }}
              >
                <Image
                  src="/images/logo.png"
                  alt="elkholy"
                  width={100}
                  height={100}
                  priority
                  // className="h-8 w-8"
                />
              </Link>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 transition-colors duration-200"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.colors.primary)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = theme.colors.light)
                  }
                  style={{
                    color: theme.colors.light,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="relative overflow-hidden">
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform transition-transform duration-300 hover:scale-x-100"
                      style={{ backgroundColor: theme.colors.primary }}
                    ></span>
                  </span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden space-x-6 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center space-x-2 transition-colors duration-200"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = theme.colors.lightMuted)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = theme.colors.light)
              }
              style={{
                color: theme.colors.light,
              }}
            >
              <item.icon className="h-5 w-5" />
              <span className="relative overflow-hidden">
                {item.name}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: theme.colors.primary }}
                ></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
