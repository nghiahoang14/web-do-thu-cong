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
    <>
      <div className="my-[40px]">
        <Title title="Đối tác của chúng tôi"/>
        <Paginations preview={6} images={images} className="h-[160px] border border-[#c0c95c] w-[170px]" />
      </div>
    </>
  );
};
