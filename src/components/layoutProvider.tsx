"use client"
// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "@/components/Footer";

export const LayoutProvider = ({ children }: {children: React.ReactNode;}) => {
    const pathname = usePathname();
    return (
        <>
            {pathname.includes("/admin") ? null : <NavBar />}
            {children}
            {pathname !== "/" && <Footer />}
        </>
    );
};
