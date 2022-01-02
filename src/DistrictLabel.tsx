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
        transform: `translateX(${left}px) translateY(${top}px) translateY(-50%) translateX(-50%) rotate(${rotation}deg)`,
        textShadow:
          "0px 0px #000, 0px 0px 2px #fff, 0px 0px 4px #fff, 0px 0px 6px #fff, 0px 0px 8px #fff, 0px 0px 8px #fff, 0px 0px 8px #fff, 0px 0px 8px #fff, 0px 0px 8px #fff, 0px 0px 8px #fff",
      }}
      className="absolute top-0 left-0 block text-black font-im-fell-display pointer-events-none text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl"
    >
      {title}
    </span>
  );
};
