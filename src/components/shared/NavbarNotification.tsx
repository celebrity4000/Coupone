import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

type MenubarDemoProps = {
  element: React.ReactNode; // Accepts any valid React component or JSX
};
export function MenubarDemo({ element }: MenubarDemoProps) {
  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger className="p-0 border-none hover:bg-transparent focus:bg-transparent">
          {element}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
