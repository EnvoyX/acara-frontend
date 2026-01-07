import PageHead from "@/components/commons/PageHead";
import React from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DahsboardLayout.constants";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

export default function DashboardLayout({
  title,
  description,
  type,
  children,
}: {
  title?: string;
  description?: string;
  type: "admin" | "member";
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            classNames={{ wrapper: "p-0" }}
            isBlurred={false}
            position="static"
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <NavbarMenuToggle
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
}
