// store defs

import { ReactNode } from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    discont_price: number | null;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    categoryId: number;
}

export interface ProductsState {
    categoryTitle: string;
    products: ExtendedProduct[];
}

export interface ProductState {
    currentProduct: Product | null;
}

export interface ExtendedProduct extends Product {
    isShown: boolean;
    isShownPrice: boolean;
}

export interface ModalState {
    isOpened: boolean;
    title: string;
    children: ReactNode;
}

export interface Category {
    id: number;
    title: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface CategoriesState {
    categories: Category[];
}

export interface NavigationLink {
    name: string;
    href: string;
}
