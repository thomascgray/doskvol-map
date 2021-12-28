export interface iLegendEntry {
  title: string;
  text: string;
}

export const LegendEntry = (props: iLegendEntry) => {
  const { title, text } = props;
  return (
    <div>
      <h3 className="font-im-fell-display text-3xl fake-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};
