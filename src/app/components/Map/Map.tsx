import { Title } from "../Title/Title";

export const Map = () => {
  return (
    <>
      <div className="w-[100%] h-[500px] my-[40px]">
        <Title title="Bản đồ"/>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3359079863108!2d105.82108997430579!3d21.019241388107275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e0!3m2!1svi!2s!4v1749207551865!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
