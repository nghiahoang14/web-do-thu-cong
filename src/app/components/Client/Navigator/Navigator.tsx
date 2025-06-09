import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const Navigator = (props: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className:string;
}) => {
  const { currentPage, totalPages, onPageChange,className } = props;
  return (
    <>
      <div className={"flex items-center justify-center gap-[10px] my-[40px] " + className}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          className={ `${currentPage===1 ? "invisible " :" "}rounded-[50%] border border-[black] flex items-center justify-content px-2 py-2 hover:text-white hover:border-[#c0c95c] hover:bg-[#c0c95c] transitions-all durantion-3000 cursor-pointer`}
        >
          <ArrowBackIosNewIcon />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={` py-2 border rounded-[50%]  w-[42px] transitions-all durantion-3000 cursor-pointer ${
              currentPage === page ? "bg-[#c0c95c] border-[#c0c95c] text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          className={` ${currentPage === totalPages ? "invisible " : ""}rounded-[50%] border border-[black] flex items-center justify-content px-2 py-2 hover:text-white hover:border-[#c0c95c] hover:bg-[#c0c95c] transitions-all durantion-3000 cursor-pointer`}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
};
