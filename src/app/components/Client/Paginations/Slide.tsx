
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const Slide= (props:{ image:string, className:string }) => {
    const {image,className=""}= props;
  return (
     
      <div className={" truncate aspect-square " + className}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    
  );
};
