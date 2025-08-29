import type { LucideIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";


export interface SubItemType {
  id: string;
  label: string;
  paths: string[];
}

export interface MenuItemType {
  id: string;
  icon: LucideIcon;
  label: string;
  badge: string | null;
  paths: string[];
  subItems?: SubItemType[];
}

export interface MenuItemProps {
  item: MenuItemType;
  sidebarOpen: boolean;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export interface SidebarProps {
  sidebarOpen: boolean;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}