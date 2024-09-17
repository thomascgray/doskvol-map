export interface iLegendEntry {
  title: string;
  text: string;
}

export const LegendEntry = (props: iLegendEntry) => {
  const { title, text } = props;
  return (
    <div className="hover:shadow-lg p-3">
      <h3 className="font-im-fell-display text-xl fake-bold">{title}</h3>
      <p>{text}</p>
    </div>
  );
};
