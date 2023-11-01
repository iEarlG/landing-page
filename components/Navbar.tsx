
import Link from "next/link";
import Image from "next/image";

import { MoreHorizontal, Search } from 'lucide-react';

import { NAV_LINKS } from "@/constants/links";

import { Button } from "@/components/ui/button";

const Navbar = () => {
    return ( 
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image 
                    src="/cda.svg"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.key}
                        className="regular-16 text-sky-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="lg:flexCenter hidden">
                <Button 
                    variant="contract" 
                    size="default"
                    className="regular-16"
                >
                    Search
                    <Search className="ml-12" size={19} />
                </Button>
            </div>
            <MoreHorizontal 
                width={32} 
                height={32}
                className="lg:hidden cursor-pointer inline-block"
            />
        </nav>
    );
}
 
export default Navbar;