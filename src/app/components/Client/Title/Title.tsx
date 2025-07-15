export const Title = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-[10px] mb-[30px] sm:mb-[50px] w-[90%] sm:w-[85%] mx-auto">
      <div className="hidden sm:block h-[2px] bg-[#ddd] w-[35%]" />
      <div className="font-semibold text-[20px] xs:text-[22px] sm:text-[24px] lg:text-[29px] text-center leading-[1.3]">
        {title}
      </div>
      <div className="hidden sm:block h-[2px] bg-[#ddd] w-[35%]" />
    </div>
  );
};
