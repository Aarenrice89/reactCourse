// can handle all cart related changes in this function
export default function cartReducer(cart, action) {
  // In a Reducer, whatever we return becomes the new state <-- Important
  // First argument always represents the current state
  switch (action.type) {
    case "empty": {
      return [];
    }
    case "updateQuantity": {
      // sku and quantity being passed in with the action
      const { sku, quantity } = action;
      return quantity === 0
        ? cart.filter((i) => i.sku !== sku)
        : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    }
    case "add": {
      const { id, sku } = action;
      const itemInCart = cart.find((i) => i.sku === sku);
      // itemInCart.quantity++; // <-- This wrong, state is immutable
      if (itemInCart) {
        // Return a new array with the matching item replaced
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Return a new array with the new item appended
        return [...cart, { id, sku, quantity: 1 }];
      }
    }
    default:
      throw new Error("Unhandled action " + action.type);
  }
}
