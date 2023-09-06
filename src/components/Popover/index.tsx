import * as Popover from "@radix-ui/react-popover";

import type { Icon } from "phosphor-react";

interface PopoverProps {
  icon: Icon;
  badge?: number;
  children: JSX.Element;
}

export default function PopoverWrapper({ icon, badge, children }: PopoverProps) {
  const Icon = icon;

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className={`${badge && "relative"}`}>
          <Icon size={32} />

          {badge && (
            <div className="absolute top-0 right-0 -translate-y-2 translate-x-1">
              <span className="rounded-full w-5 aspect-square bg-white flex items-center justify-center">
                <b className="text-xs text-secondary-700">{badge}</b>
              </span>
            </div>
          )}
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content asChild sideOffset={12}>
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
