export interface iDistrictLabel {
  title: string;
  top: number;
  left: number;
  rotation: number;
  color: string;
}

export const DistrictLabel = (props: iDistrictLabel) => {
  const { title, top, left, rotation, color } = props;
  return (
    <span
      style={{
        top: `calc(${top}% - 0.5em)`,
        left: `calc(${left}% - 0.5em)`,
        transform: `rotate(${rotation}deg)`,
        // background: color,
        textShadow: `0px 0px 2px ${color}, 0px 0px 4px ${color}, 0px 0px 6px ${color},
    0px 0px 8px ${color}, 0px 0px 10px ${color}, 0px 0px 12px ${color}, 0px 0px 14px ${color},
    0px 0px 16px ${color}, 0px 0px 18px ${color}, 0px 0px 20px ${color}`,
      }}
      className="district-label absolute text-black font-im-fell-display text-4xl opacity-70 pointer-events-none"
    >
      {title}
    </span>
  );
};
