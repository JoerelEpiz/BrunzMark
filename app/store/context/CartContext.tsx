"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ==========================================
  // LOAD CART FROM LOCAL STORAGE
  // ==========================================

  useEffect(() => {
    const savedCart = localStorage.getItem("brunzmark-cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Failed to load cart:", error);
        localStorage.removeItem("brunzmark-cart");
      }
    }

    setIsLoaded(true);
  }, []);

  // ==========================================
  // SAVE CART TO LOCAL STORAGE
  // ==========================================

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "brunzmark-cart",
      JSON.stringify(cart)
    );
  }, [cart, isLoaded]);

  // ==========================================
  // ADD TO CART
  // ==========================================

  function addToCart(item: CartItem) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + item.quantity,
              }
            : cartItem
        );
      }

      return [...currentCart, item];
    });
  }

  // ==========================================
  // REMOVE ITEM
  // ==========================================

  function removeFromCart(id: string) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );
  }

  // ==========================================
  // UPDATE QUANTITY
  // ==========================================

  function updateQuantity(
    id: string,
    quantity: number
  ) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, quantity),
            }
          : item
      )
    );
  }

  // ==========================================
  // CLEAR CART
  // ==========================================

  function clearCart() {
    setCart([]);
  }

  // ==========================================
  // CART COUNT
  // ==========================================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // ==========================================
  // PROVIDER
  // ==========================================

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ==========================================
// USE CART
// ==========================================

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}