import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "../ui/menubar";
import { RiNotification3Line } from "react-icons/ri";

type Notification = {
    id: string;
    message: string;
    time: string;
    isActive: boolean;
};

function rgb(r: number, g: number, b: number): string {
    return `rgb(${r}, ${g}, ${b})`;
}

const initialNotifications: Notification[] = [
    { id: "1", message: "New comment on your post", time: "2h ago", isActive: true },
    { id: "2", message: "New follower", time: "5h ago", isActive: true },
    { id: "3", message: "Password changed", time: "1d ago", isActive: false },
    { id: "4", message: "New like on your photo", time: "2d ago", isActive: true },
    { id: "5", message: "New message from John", time: "3d ago", isActive: false },
    { id: "6", message: "New event invitation", time: "1w ago", isActive: true },
    { id: "7", message: "New friend request", time: "2w ago", isActive: false },
    { id: "8", message: "New update available", time: "3w ago", isActive: true },
    { id: "9", message: "New comment on your photo", time: "1m ago", isActive: false },
    { id: "10", message: "New like on your post", time: "2m ago", isActive: true },
    { id: "11", message: "New mention in a comment", time: "3m ago", isActive: false },
    { id: "12", message: "New event RSVP", time: "4m ago", isActive: true },
    { id: "13", message: "New group invitation", time: "5m ago", isActive: false },
    { id: "14", message: "New story mention", time: "6m ago", isActive: true },
    { id: "15", message: "New post in your feed", time: "7m ago", isActive: false },
    { id: "16", message: "New comment on your story", time: "8m ago", isActive: true },
    { id: "17", message: "New like on your story", time: "9m ago", isActive: false },
    { id: "18", message: "New event reminder", time: "10m ago", isActive: true },
    { id: "19", message: "New friend suggestion", time: "11m ago", isActive: false },
];


export function Notifications() {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [length, setLength] = useState<number>(0);
    useEffect(() => {
        setNotifications((prev) =>
            [...prev].sort((a, b) => Number(b.isActive) - Number(a.isActive))
        );
    }, [notifications]);

    const handleDismiss = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isActive: false } : n))
        );
    };

    useEffect(() => {
        const activeNotifications = notifications.filter((n) => n.isActive);
        setLength(activeNotifications.length);
    }, [notifications]);

    return (
        <Menubar className="border-none">
            <MenubarMenu>
                <MenubarTrigger className="p-0 border-none hover:bg-transparent focus:bg-transparent">
                    <div>
                        <button
                            type="button"
                            style={{ color: "black" }}
                            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
                        >
                            {length !== 0 && <div
                                style={{ backgroundColor: rgb(254, 201, 15) }}
                                className="absolute inline-flex rounded-full right-1 top-1 justify-center items-center w-5 h-5 navBarWidth:w-4 navBarWidth:h-4"
                            >
                                <span
                                    className="text-xs font-semibold text-white px-1 py-0.5"
                                >{length < 10 ? length : '9+'}</span>
                            </div>}
                            {<RiNotification3Line className="w-8 h-8 navBarWidth:w-6 navBarWidth:h-6" />}
                        </button>
                    </div>
                </MenubarTrigger>
                <MenubarContent className="w-80 max-h-96 overflow-y-auto shadow-lg rounded-lg">
                    <AnimatePresence>
                        {notifications.length > 0 ? (
                            notifications.map((notif) => (
                                <motion.div
                                    key={notif.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div
                                        onClick={() => notif.isActive && handleDismiss(notif.id)}
                                        className={`flex flex-col items-start gap-1 cursor-pointer rounded-md px-3 my-2 py-2 transition-colors ${notif.isActive
                                            ? "bg-green-100 hover:bg-green-200 text-green-900"
                                            : "opacity-60 hover:bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{notif.message}</span>
                                        <span className="text-xs">{notif.time}</span>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <MenubarItem disabled className="text-center text-muted-foreground">
                                No notifications
                            </MenubarItem>
                        )}
                    </AnimatePresence>

                    <MenubarSeparator />
                    <div className="px-3 py-2 text-xs text-center text-muted-foreground">
                        Tap to mark as read
                    </div>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
