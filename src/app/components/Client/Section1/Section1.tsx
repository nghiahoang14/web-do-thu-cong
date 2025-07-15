import { Title } from "../Title/Title";

export const Section1 = () => {
  const data = [
    { img: "/demo/img-7.jpg", title: "Túi ví vải" },
    { img: "/demo/img-8.jpg", title: "Trang trí nội thất mềm" },
    { img: "/demo/img-9.webp", title: "Đồ vải cho trẻ em" },
    { img: "/demo/img-10.jpg", title: "Nghệ thuật quilting" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 mx-auto">
      <Title title="TÔ MÀU CHO CUỘC SỐNG" />

      <div
        className="mt-6 grid gap-[50px] 
                   grid-cols-1 
                   sm:grid-cols-2 
                   lg:grid-cols-4 
                   justify-items-center"
      >
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] mb-4 rounded-full overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-center text-[16px] sm:text-[17px] lg:text-[18px]">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
