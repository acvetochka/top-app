import { SortEnum } from "@/components/Sort/Sort.props";
import { ProductModel } from "@/interfaces/product.interface";

export type SortAction = { type: SortEnum.Price } | { type: SortEnum.Rating } | { type: "reset"; initialState: ProductModel[] };

export interface SortReducerState {
  products: ProductModel[];
  sort: SortEnum;
}

export const sortReducer: React.Reducer<SortReducerState, SortAction> = (state: SortReducerState, action: SortAction): SortReducerState => {
  // if (!state.products) {
  //   // Якщо `products` не ініціалізований, встановлюємо його як пустий масив
  //   state = { ...state, products: [] };
  // }
  switch (action.type) {
    case SortEnum.Rating:
      return {
        ...state,
        sort: SortEnum.Rating,
        // products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
        products: [...state.products].sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };
    case SortEnum.Price:
      return {
        ...state,
        sort: SortEnum.Price,
        // products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
        products: [...state.products].sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    case "reset":
      return {
        sort: SortEnum.Rating,
        products: action.initialState,
      };
    default:
      return state;
  }
};
