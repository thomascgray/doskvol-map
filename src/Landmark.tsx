export interface iLandmark {
  title: string;
  text: string;
  top: number;
  left: number;
  idx: number;
}

export const Landmark = (props: iLandmark) => {
  const { title, text, top, left, idx } = props;
  return (
    <span
      data-tip={`<h3 class="font-im-fell-display text-xl">${title}</h3><p class="text-sm">${text}</p>`}
      className="landmark absolute top-0 left-0 block font-im-fell bold cursor-help pt-1 pb-3 px-2 text-base text-white bg-black opacity-60 hover:opacity-100"
      data-class="max-w-xs font-im-fell"
      data-place="bottom"
      data-html="true"
      style={{
        transform: `translateY(${top}%) translateX(${left}%)`,
      }}
    >
      {idx}
    </span>
  );
};
