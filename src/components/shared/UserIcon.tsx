import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

import { User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

type UserIconProps = {
    element: React.ReactNode;
};

export function UserIcon({ element }: UserIconProps) {
    return (
        <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
                <MenubarTrigger className="p-0 border-none hover:bg-transparent focus:bg-transparent">
                    {element}
                </MenubarTrigger>
                <MenubarContent className="w-48 rounded-xl shadow-lg p-1">
                    <Link
                        to="/userinfo"
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/80 transition-colors">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span>User Info</span>
                    </Link>
                    <MenubarItem className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted/80 transition-colors">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span>Settings</span>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-100 hover:text-red-600 transition-colors">
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span className="text-red-500">Logout</span>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
