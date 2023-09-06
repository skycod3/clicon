import type { ReactElement } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { CaretDown, IconProps } from "phosphor-react";

interface DropdownProps {
  label: string;
  trigger: string | ReactElement<IconProps>;
  caret?: boolean;
  children: JSX.Element;
}

export default function Dropdown({ label, trigger, caret = false, children }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="group | flex items-center gap-[6px]">
        <span aria-label={label}>{trigger}</span>
        {caret && <CaretDown size={12} className={`group-data-[state=open]:rotate-180`} />}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="grid gap-2 min-w-[11.25rem] bg-white rounded p-4 shadow" sideOffset={8}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
