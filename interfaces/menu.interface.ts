import {JSX} from "react";
import {TopLevelCategory} from "@/interfaces/page.inteface";


export interface PageItem {
    alias: string
    title: string
    _id: string
    category: string
}

export interface MenuItem {
    _id: {
        secondCategory: string
    }
    isOpened?: boolean
    pages: Page[]
}

export interface FirstLevelMenuItem {
    route: string
    name: string
    icon: JSX.Element
    id: TopLevelCategory
}