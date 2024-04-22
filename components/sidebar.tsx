"use client";
import React, { useState } from 'react';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from './sidebar-menu-group';
import { SideBarLogo } from './sidebar-logo';
import { SIDENAV_ITEMS } from '@/app/menu_constants';

export const SideBar = ({auth}) => {

    const [mounted, setMounted] = useState(true);
    const { toggleCollapse } = useSideBarToggle();

    const filteredSidenavItems = SIDENAV_ITEMS.filter(group => {
        if (!auth) {
            return group.title === "Login";
        } else if (group.title === "Others" && !auth?.roles.includes("cemeca")) {
            return true;
        } else if (group.title === "Login") {
            return false;
        }
        else if (group.title === "Manage" && !auth?.roles.includes("admin")) {
            return false;
        }
      
        group.menuList = group.menuList.filter(item => {
            if (item.title === "Feedbacks" && !auth?.roles.includes("cemeca")) {
                return false;
            }
            return true;
        });
        return true;
    });

    const asideStyle = `sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999] ${toggleCollapse ? "sm:w-[5.4rem] sm:left-0 left-[-100%]" : "w-[20rem]"}`;

    return (
        <aside className={asideStyle}>
            <div className="sidebar-top relative flex items-center px-3.5 py-5">
                {mounted && <SideBarLogo />}
                <h3 className={`pl-2 font-bold text-2xl min-w-max text-sidebar-foreground ${toggleCollapse ? "hidden" : ""}`}>{auth ? auth.role : "pas connecté" }</h3>
            </div>
            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4">
                    {filteredSidenavItems.map((item, idx) => (
                        <SideBarMenuGroup key={idx} menuGroup={item} />
                    ))}
                </div>
            </nav>
        </aside>
    );
};
