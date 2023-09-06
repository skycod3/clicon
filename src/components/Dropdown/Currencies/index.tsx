import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Check } from "phosphor-react";

import Dropdown from "..";

interface ItemProps {
  title: string;
  image?: string;
  active?: boolean;
  abbr: string;
}

const currencies: ItemProps[] = [
  { title: "Dollar (USD)", abbr: "USD", active: true },
  { title: "Euro (EUR)", abbr: "EUR" },
];

export default function DropdownCurrencies() {
  const activeItem = currencies.filter((currency) => currency.active)[0] as ItemProps;

  const [abbr, setAbbr] = useState<string>(activeItem.abbr);

  return (
    <Dropdown label="Multi-currency" trigger={abbr} caret>
      <>
        {currencies.map((currency) => (
          <DropdownMenu.Item
            onClick={() => setAbbr(currency.abbr)}
            key={currency.title}
            className="flex items-center gap-3 py-2 cursor-pointer"
          >
            <span className={`${currency.abbr === abbr ? "text-primary-500 font-medium" : "text-gray-600"}`}>
              {currency.title}
            </span>

            {currency.abbr === abbr && <Check size={16} weight="bold" className="text-primary-500 ml-auto" />}
          </DropdownMenu.Item>
        ))}
      </>
    </Dropdown>
  );
}
