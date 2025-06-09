export const Title = (props: { title: string }) => {
  const { title } = props;
  return (
    <>
      <div className="flex items-center gap-[10px] justify-between mb-[50px] w-[85%] mx-auto">
        <div className="h-[2px] bg-[#ddd]  w-[35%]" />
        <div
          className={
            "font-[600] text-[29px]  text-center leading-[1.2]  "
          }
        >
          {title}
        </div>
        <div className="h-[2px] bg-[#ddd]  w-[35%]" />
      </div>
    </>
  );
};
