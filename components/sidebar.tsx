"use client";
import React, { useEffect, useState } from 'react';
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import SideBarMenuGroup from './sidebar-menu-group';
import { SideBarLogo } from './sidebar-logo';
import { getUser } from '../app/lib/data/auth';
import { SIDENAV_ITEMS } from '@/app/menu_constants';

export const SideBar = () => {
    const [mounted, setMounted] = useState(false);
    const { toggleCollapse } = useSideBarToggle();
    const [user, setUser] = useState(null); 

    useEffect(() => {
        setMounted(true); 

        const fetchUser = async () => {
            const userData = await getUser(); 
            setUser(userData); 
        };

        fetchUser();
    }, []); 

    // Filtrer les éléments du menu en fonction des critères spécifiques, ici basé sur l'utilisateur
    const filteredSidenavItems = SIDENAV_ITEMS.filter(group => {
        if (group.title === "Others" && !user?.roles.includes("cemeca")) {
            // Exclure le groupe "Others" si l'utilisateur n'est pas un admin
            return false;
        }
        group.menuList = group.menuList.filter(item => {
            if (item.title === "Feedbacks" && !user?.roles.includes("cemeca")) {
                // Exclure le menu "Feedbacks" si l'utilisateur n'est pas un admin
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
                <h3 className={`pl-2 font-bold text-2xl min-w-max text-sidebar-foreground ${toggleCollapse ? "hidden" : ""}`}>{user?.username}</h3>
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
