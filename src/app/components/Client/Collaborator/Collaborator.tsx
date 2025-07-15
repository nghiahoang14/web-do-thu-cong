import { Paginations } from "../Paginations/Paginations";
import { Title } from "../Title/Title";

export const Collaborator = () => {
  const images = [
    "/demo/img-colab-1.png",
    "/demo/img-colab-2.png",
    "/demo/img-colab-3.png",
    "/demo/img-colab-4.png",
    "/demo/img-colab-5.jpg",
    "/demo/img-colab-6.png",
    "/demo/img-colab-7.jpg",
  ];

  return (
    <div className="my-[40px]  sm:px-6 md:px-8 lg:px-0">
      <Title title="Đối tác của chúng tôi" />
      <Paginations
        preview={4}
        images={images}
        className="w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] md:w-[160px] md:h-[140px] lg:w-[220px] lg:h-[160px] border border-[#c0c95c]"
      />
    </div>
  );
};
