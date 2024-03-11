import { create } from "zustand";
import { ProductListType } from "assets/content/productList";

export type cartProduct = ProductListType & {
  size: string;
  qty: number;
};

type Store = {
  count: number;
  inc: () => void;
  products: cartProduct[];
  addProduct: (product: cartProduct) => void;
  removeProduct: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  deleteProduct: (id: string) => void;
  total: number;
};

const useStore = create<Store>((set) => ({
  count: 1,
  products: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  addProduct: (product: cartProduct) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  increaseQty: (id: string) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      ),
    })),
  decreaseQty: (id: string) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id && product.qty > 1
          ? { ...product, qty: product.qty - 1 }
          : product
      ),
    })),
  deleteProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  total: 0,
}));

export default useStore;

// Usage example:
