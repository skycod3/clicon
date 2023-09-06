import type { HTMLAttributes } from "react";

import type { IconProps } from "phosphor-react";

import "./styles.scss";

type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  title: string;
  type?: "default" | "outline";
  theme?: "primary" | "secondary";
  icon?: Icon;
  className?: string;
}

export default function Button({ title, type = "default", theme = "primary", icon, className, ...props }: ButtonProps) {
  const Icon = icon as Icon;

  return (
    <button data-type={type} data-theme={theme} className={`button | ${className}`} {...props}>
      {title} {icon && <Icon size={20} />}
    </button>
  );
}
