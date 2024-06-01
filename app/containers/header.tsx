"use client";
import { useState } from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitterX, BsX } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

const headerLinks = [
    {
        label: 'About',
        slug: '#about'
    },
    {
        label: 'Skills',
        slug: '#skills'
    },
    {
        label: 'Technologies',
        slug: '#technologies'
    },
    {
        label: 'Projects',
        slug: '#projects'
    }
];

const socialLinks = [
    {
        Icon: BsGithub,
        label: 'Github',
        slug: '#'
    },
    {
        Icon: BsLinkedin,
        label: 'Linkedin',
        slug: '#'
    },
    {
        Icon: BsTwitterX,
        label: 'X',
        slug: '#'
    },
]

export function Header()
{
    const [toggle, setToggle] = useState(false);

    return (
        <header className="h-20 flex justify-center px-4 md:px-8">
            <div className="relative container flex items-center justify-between">
                <div className="flex gap-12 items-center">
                    <div>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="hidden md:flex gap-8 font-bold">
                        {headerLinks.map(({ label, slug }, i) => (
                            <Link href={slug} key={i}>{label}</Link>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex gap-8">
                    {socialLinks.map(({Icon, label, slug}, i) => (
                        <Link key={i} href={slug} className="hover:text-secondary">
                            <Icon size={24} />
                        </Link>
                    ))}
                </div>
                <button className="md:hidden" onClick={() => setToggle(!toggle)}>
                    {toggle ? <CgClose size={36} /> : <HiBars3 size={36} />}
                </button>
                {toggle && <div className="absolute md:hidden top-20 right-0 w-full max-w-xs p-4 rounded-lg bg-primary flex flex-col divide-y divide-primary-light z-10">
                    {headerLinks.map(({ label, slug }, i) => (
                        <Link href={slug} key={i} className="p-4 flex justify-end" onClick={() => setToggle(false)}>
                            {label}
                        </Link>
                    ))}
                    <div className="flex justify-end">
                        {socialLinks.map(({ label, Icon, slug}, i) => (
                            <Link key={i} href={slug} className="p-4" onClick={() => setToggle(false)}>
                                <Icon size={24} />
                            </Link>
                        ))}
                    </div>
                </div>}
            </div>
        </header>
    );
}