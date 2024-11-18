import type { TabMenuItem } from "../../components/Sidebares/fragments/types"
import type { Router, RouteRecord, RouteRecordNameGeneric, RouteRecordRaw } from "vue-router"

export const getRouteModule = (router: Router) => router.currentRoute.value.meta.key
export const getRoutePath = (router: Router) => router.currentRoute.value.fullPath
export const getRouteName = (router: Router) => router.currentRoute.value.name

export const getMenu = (router: Router, condition: string) => {
    const key = getRouteModule(router)
    const routes = router.currentRoute.value.matched as RouteRecord[]
    const routeModule = routes.find((route) => route.meta.key == key)
    const menu = routeModule?.children.filter((child) => child.meta && child.meta[condition])

    return menu
}

// Função recursiva para construir cada item do menu
const buildMenuItem = (item: RouteRecordRaw, parent: RouteRecordNameGeneric | undefined) => {
    const { meta, name, children } = item

    const parentKey = !parent ? '' : parent.toString() + '_'
    const menuItem: TabMenuItem = {
        key: `${parentKey}${name as string}`,
        label: '',
        items: [],
        ...meta
    }
    const childrenAsMenu = children ? children.filter((child) => !child.meta?.isTab) : null
    // Se o item possui subitens (children), chama recursivamente a função para montar os submenus
    if (childrenAsMenu && childrenAsMenu.length > 0) {
        menuItem.items = childrenAsMenu.map((child) => buildMenuItem(child, item.name))
    } else {
        // TODO: realizar abertura do mega menu como um command qd o menu for mais aninhado
        menuItem.route = name
    }

    return menuItem
}

export const buildMainMenuFromRoutes = (menu: RouteRecordRaw[]) => {
    // Função principal que percorre recursivamente o array de menu e monta a estrutura de menus e submenus
    function buildMenuRecursively(menu: RouteRecordRaw[]) {
        return menu?.map((item) => buildMenuItem(item, undefined))
    }

    return buildMenuRecursively(menu)
}