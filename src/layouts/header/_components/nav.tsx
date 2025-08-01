"use client";

import { Groups } from "@/components/groups"
import { Routers } from "@/configs/routers.config"
import { cn, isActive } from "@/libs/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";

const menu = [
    {
        id: 1,
        to: Routers.homePage.to,
        label: Routers.homePage.label
    },
    {
        id: 2,
        to: Routers.moviesAndShowsPage.to,
        label: Routers.moviesAndShowsPage.label
    },
    {
        id: 3,
        to: Routers.supportPage.to,
        label: Routers.supportPage.label
    },
    {
        id: 4,
        to: Routers.subscriptionsPage.to,
        label: Routers.subscriptionsPage.label
    }
]

export const Nav = () => {
    const pathname = usePathname();

    return <nav className="bg-black-06 p-2 rounded-xl border border-black-12">
        <Groups className="flex-row gap-0">
            {
                menu.map((item) => (
                    <Link className={cn("py-3 px-5 rounded-lg text-grey-75 text-sm", {"bg-black-10 text-white": isActive(pathname, item.to)})} key={item.id} href={item.to}>
                        {item.label}
                    </Link>
                ))
            }
        </Groups>
    </nav>
}