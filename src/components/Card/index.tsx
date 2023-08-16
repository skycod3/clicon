interface CardProps {
  title: string;
}

export default function Card(props: CardProps) {
  return <div className="p-10 bg-neutral-200 rounded grid place-items-center">{props.title}</div>;
}
