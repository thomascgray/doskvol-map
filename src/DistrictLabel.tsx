export interface iDistrictLabel {
  title: string;
  top: number;
  left: number;
  rotation: number;
}

export const DistrictLabel = (props: iDistrictLabel) => {
  const { title, top, left, rotation } = props;
  return (
    <span
      style={{
        top: `calc(${top}% - 0.5em)`,
        left: `calc(${left}% - 0.5em)`,
        transform: `rotate(${rotation}deg)`,
      }}
      className="district-label absolute text-black font-im-fell-display text-2xl opacity-50 pointer-events-none"
    >
      {title}
    </span>
  );
};
