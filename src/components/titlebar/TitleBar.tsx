interface TitleBarProps {
  title: string;
}

export const TitleBar = ({ title }: TitleBarProps) => {
  return (
    <div
      className="
        bg-primary 
        h-[96px] 
        rounded-bl-2xl 
        rounded-br-2xl
        flex
        items-center
        pl-10
        text-3xl
        font-DMSerif
        text-secondary"
    >
      {title}
    </div>
  );
};
