import {SortEnum} from "@/components/Sort/Sort.props";
import {ProductModel} from "@/interfaces/product.interface";

export type SortActions = {type: SortEnum.price} | {type: SortEnum.rating} | {type: 'reset', initialState: ProductModel[]}

export interface SortReducerState {
    sort: SortEnum
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
switch (action.type){
    case SortEnum.rating :
        return {
            sort: SortEnum.rating,
            products: state.products.sort((a, b)=>a.initialRating > b.initialRating ? -1 : 1 )
        }
    case SortEnum.price :
        return {
            sort: SortEnum.price,
            products: state.products.sort((a, b)=>a.price > b.price ? 1 : -1 )
        }
    case 'reset':
        return {
            sort: SortEnum.rating,
            products: action.initialState
        }
    default:
        throw new Error('wrong sorting type')
}
}