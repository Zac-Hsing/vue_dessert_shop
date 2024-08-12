declare module '../stores/cart' {
  export const useCartStore: () => {
    items: any[];
    total: number;
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
  };
}
