export interface iLandmark {
  text: string;
  top: number;
  left: number;
}

export const Landmark = (props: iLandmark) => {
  const { text, top, left } = props;
  return (
    <span
      data-tip={text}
      className="absolute block cursor-help p-2 bg-red-500"
      data-class="max-w-xs font-im-fell text-base"
      data-place="bottom"
      style={{
        top: `calc(${top}% - 0.5em)`,
        left: `calc(${left}% - 0.5em)`,
      }}
    >
      !
    </span>
  );
};
