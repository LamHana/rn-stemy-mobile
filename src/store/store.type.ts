import { AuthSlice } from './auth/auth.type';
import { CartSlice } from './cart/cart.type';
import { CheckoutSlice } from './checkout/checkout.type';
import { FilterSortingSlice } from './filter-sorting/filter-sorting.type';
import { HistorySearchProductSlice } from './history-search-product/history-search-product.type';
import { ModalSlice } from './modal/modal.type';
import { ProductDetailSlice } from './product-detail/product-detail.type';
import { StoresDrawerSlice } from './stores-drawer/stores-drawer.type';

export type Store = AuthSlice & ProductDetailSlice & CheckoutSlice & FilterSortingSlice & StoresDrawerSlice;

export type CartStore = CartSlice;

export type HistorySearchProductStore = HistorySearchProductSlice;

export type ModalStore = ModalSlice;
