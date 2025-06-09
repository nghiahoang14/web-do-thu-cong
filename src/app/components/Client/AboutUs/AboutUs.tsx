export const AboutUs = ()=>{
    return (
        <>
        <section>
         <div className="max-w-7xl mx-auto mb-[20px]">
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Chúng tôi là những người yêu cái đẹp, say mê với từng đường kim mũi chỉ và chất liệu thủ công. Với tâm huyết và đôi bàn tay khéo léo, chúng tôi tạo nên những sản phẩm độc đáo, mang đậm dấu ấn văn hóa và cá tính riêng.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mb-16">
      {[
        {
          title: "Sứ Mệnh",
          desc: "Gìn giữ và phát triển giá trị của nghề thủ công truyền thống, mang lại vẻ đẹp tinh tế và ý nghĩa cho từng sản phẩm.",
        },
        {
          title: "Tầm Nhìn",
          desc: "Trở thành thương hiệu đồ thủ công uy tín trong nước và quốc tế, nơi mọi người tìm thấy sự mộc mạc và chân thành.",
        },
        {
          title: "Giá Trị Cốt Lõi",
          desc: "Chân thành, sáng tạo, tỉ mỉ, và luôn đặt chất lượng lên hàng đầu trong từng sản phẩm.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-center mb-6">Nghệ Nhân & Đội Ngũ</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        { name: "Chị Mai", role: "Nghệ nhân thêu tay" },
        { name: "Anh Quân", role: "Thợ mộc thủ công" },
        { name: "Chị Linh", role: "Thiết kế & Đóng gói" },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white border rounded-xl p-4 w-64 shadow hover:shadow-xl transition text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200" />
          <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
          <p className="text-sm text-blue-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
        </>
    )
}