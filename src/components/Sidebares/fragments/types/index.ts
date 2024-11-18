import type { RouteRecordNameGeneric } from "vue-router"

type ConfigData = {
    parent?: RouteRecordNameGeneric,
    activeStyle: string
}

export type MenuConfigData = {
    root: ConfigData,
    tabSubmenu: ConfigData,
    submenu: ConfigData
}

export type Category = keyof MenuConfigData

export type SidebarRoot = {
    rootActiveStyle: string;
    rootIconActiveStyle: string;
}

export type SidebarItemMenuActive = string | SidebarRoot;

export type TabMenuItem = {
    key: string;
    label: string;
    icon?: string | object;
    items: TabMenuItem[];
    command?: () => void;
    route?: RouteRecordNameGeneric
};

export type TabMenuProps = {
    items: TabMenuItem[];
};
