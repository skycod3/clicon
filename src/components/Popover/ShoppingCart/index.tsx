import { ShoppingCart, X, ArrowRight } from "phosphor-react";

import CurrencyFormat from "react-currency-format";

import PopoverWrapper from "..";

import Button from "../../Button";

import { shoppingCart as cart } from "../../../placeholder";

export default function PopoverShoppingCart() {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <PopoverWrapper badge={totalItems} icon={ShoppingCart}>
      <div className="grid gap-5 bg-white rounded shadow-2xl max-w-sm">
        <div className="py-4 px-6 border-0 border-b border-solid border-gray-100">
          <p className="font-medium">
            Shopping Cart <span className="text-gray-600 font-normal">({totalItems})</span>
          </p>
        </div>

        <div className="pb-5 px-6 border-0 border-b border-solid border-gray-100">
          <ul className="grid gap-4">
            {cart.map((item) => (
              <li key={item.id}>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="shrink-0 border border-solid border-gray-100"
                  />

                  <div className="text-sm space-y-2">
                    <h2>{item.name}</h2>
                    <p className="flex gap-1">
                      <span className="text-gray-600">{item.amount} x</span>
                      <span className="text-secondary-500">
                        <CurrencyFormat value={item.price} displayType="text" thousandSeparator prefix="$" />
                      </span>
                    </p>
                  </div>

                  <button>
                    <X size={16} className="text-gray-400" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-6 px-6">
          <div className="flex justify-between text-sm">
            <p className="text-gray-700">Sub-Total:</p>
            <span className="font-medium">
              <CurrencyFormat value={totalPrice} displayType="text" thousandSeparator prefix="$" /> USD
            </span>
          </div>

          <div className="grid gap-3 mt-5">
            <Button title="Checkout Now" icon={ArrowRight} data-type="primary" />
            <Button title="View Cart" data-type="outline" />
          </div>
        </div>
      </div>
    </PopoverWrapper>
  );
}
