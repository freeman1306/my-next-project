import {MenuItem} from "@/interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "@/interfaces/page.inteface";
import {ProductModel} from "@/interfaces/product.interface";

export interface TopPageComponentProps extends Record<string, unknown>{
    firstCategory: TopLevelCategory
    page: TopPageModel
    products: ProductModel[]
}