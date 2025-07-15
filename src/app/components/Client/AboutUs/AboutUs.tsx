export const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/demo/about-img-1.webp"
              alt="about-1"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">✨ Tinh Hoa Thủ Công Cho Cuộc Sống Hằng Ngày</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-justify">
              <li>Trong thời đại công nghiệp hóa, những món đồ handmade mang đến một làn gió mới – gần gũi, mộc mạc nhưng đầy sáng tạo.</li>
              <li>Từng sản phẩm đều chứa đựng tâm huyết và dấu ấn cá nhân của người làm ra nó.</li>
              <li>Sản phẩm handmade kết nối con người, hiện đại với truyền thống, và thẩm mỹ với giá trị bền vững.</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">👁️ Tầm Nhìn Của Chúng Tôi</h2>
            <p className="text-gray-700 mb-3 text-justify">
              Với niềm tin vào giá trị của sự thủ công và tính cá nhân hóa, chúng tôi mong muốn xây dựng một thương hiệu đồ handmade đáng tin cậy, nơi bạn có thể tìm thấy những sản phẩm độc đáo, thân thiện và có ý nghĩa thật sự.
            </p>
            <p className="text-gray-700 text-justify">
              Chúng tôi không chỉ bán sản phẩm – mà lan tỏa lối sống đề cao tính chân thực, giản dị và sáng tạo không giới hạn.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/demo/about-img-2.jpg"
              alt="about-2"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/demo/about-img-3.jpg"
              alt="about-3"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">🎯 Sứ Mệnh & Mục Tiêu</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-justify">
              <li>Lựa chọn nguyên liệu thân thiện môi trường và có nguồn gốc rõ ràng.</li>
              <li>Thiết kế độc quyền, kết hợp giữa truyền thống và hiện đại.</li>
              <li>Đồng hành cùng cộng đồng người yêu đồ thủ công qua workshop và các dự án sáng tạo.</li>
            </ul>
          </div>
        </div>

        {/* Vì sao chọn */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">🌿 Vì Sao Khách Hàng Chọn Chúng Tôi</h2>
          <p className="text-gray-700 italic mb-6 max-w-2xl mx-auto">
            Mỗi sản phẩm không chỉ là một món đồ – mà là một câu chuyện được kể bằng đôi tay, sự kiên nhẫn và tình yêu nghề.
          </p>
          <ul className="list-disc pl-6 text-left max-w-3xl mx-auto text-gray-700 space-y-2 text-justify">
            <li><strong>Thủ công tinh xảo:</strong> Mỗi chi tiết đều được chăm chút tỉ mỉ bởi các nghệ nhân lành nghề, mang đến cảm giác độc đáo và chất lượng vượt trội.</li>
            <li><strong>Thiết kế giới hạn:</strong> Không sản xuất hàng loạt – mỗi món đồ đều có phiên bản giới hạn, thể hiện phong cách và cá tính riêng của bạn.</li>
            <li><strong>Hình ảnh thật - sản phẩm thật:</strong> Cam kết không sử dụng ảnh chỉnh sửa quá mức – sản phẩm như thế nào, bạn nhận được đúng như vậy.</li>
            <li><strong>Đồng hành tận tâm:</strong> Chính sách chăm sóc khách hàng rõ ràng, hỗ trợ đổi trả dễ dàng và luôn sẵn sàng lắng nghe bạn.</li>
          </ul>
          <p className="text-center text-gray-600 italic mt-10">
            “Handmade không chỉ là sản phẩm – mà là cả một hành trình sống chậm, yêu điều nhỏ bé và trân trọng giá trị thật.”
          </p>
        </div>
      </div>
    </section>
  );
};
