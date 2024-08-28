export type ButtonNavigation =
    {
        icon: string,
        label: string,
        route: string
    }

export type NavParams = {
    logo: {
        route: string,
        label: string,
        labelStyle: string,
    },
    profile: {
        photo: string,
        name: string
    },
    avatarStyle: {
        root: string,
        image: string,
        fallback: string,
    },
    addStyle: {
        navStyle: string,
        burguerStyle: string,
        buttonsStyle: string,
        dropdownStyle: string,
    }
}

export type UserDropdownLink = {
    label: string,
    link: string,
    icon?: string,
}