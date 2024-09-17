export interface iLandmark {
  title: string;
  text: string;
  district: string;
  top: number;
  left: number;
  idx: number;
  color: string;
}

export const Landmark = (props: iLandmark) => {
  const { title, text, district, top, left, idx, color } = props;
  return (
    <span
      className="landmark absolute font-im-fell bold block cursor-help pt-1 pb-3 px-2 text-xl text-white  opacity-60 hover:opacity-100"
      data-tip={`<h4 class"text-sm">${district}</h4><h3 class="font-im-fell-display text-3xl">${title}</h3><p class="text-base">${text}</p>`}
      data-class="max-w-xs font-im-fell"
      data-place="bottom"
      data-html="true"
      style={{
        top: `calc(${top}% - 0.5em)`,
        left: `calc(${left}% - 0.5em)`,
        backgroundColor: color,
      }}
    >
      {idx}
    </span>
  );
};
