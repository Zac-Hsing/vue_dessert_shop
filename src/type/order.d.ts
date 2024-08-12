interface Order {
    customer: {
      name: string;
      phone: string;
      email: string;
    };
    items: Array<{
      name: string;
      quantity: number;
      price: number;
    }>;
  }
  
  const orders = computed<Order[]>(() => orderStore.orders);