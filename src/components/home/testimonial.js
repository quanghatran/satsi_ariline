// import React, { Component } from "react";
import Slider from "react-slick";
import person1 from "../../images/kieuduynam.jpg";
import person2 from "../../images/quanvananh.png";
import person3 from "../../images/nguyenhuyhoang.png";

const data = [
	{
		name: "Quản Vân Anh",
		image: person2,
		content:
			"Trong 5 tháng đào tạo, mình đã lĩnh hội đầy đủ kiến thức chuyên ngành hàng không. Đặc biệt là những buổi thực hành kỹ năng mềm, Kỹ năng thi tuyển - ‘Học tưởng như chơi’ nhưng cái được lại là kinh nghiệm thực tế. Hiện tại mình đang là Thông dịch viên của hãng Hàng không Bamboo Airways từ tháng 11/2019 và có mức thu nhập ổn định hàng tháng.",
	},
	{
		name: "Kiều Duy Nam",
		image: person1,
		content:
			"Sau khi tốt nghiệp THPT, mình chọn học nghiệp vụ Hàng không. Mình nhập học và tham gia lớp đào tạo kỹ năng thi tuyển hàng không năm 2017 và chính thức trở thành nhân viên Phục vụ hành khách tại Sân bay quốc tế Nội Bài tháng 10/2018. Ra trường chỉ trong một thời gian ngắn mình đã có việc làm và ổn định thu nhập, tự lập cuộc sống.",
	},
	{
		name: "Nguyễn Huy Hoàng",
		image: person3,
		content:
			"Mình từng thi đỗ ngành Công nghệ Thông tin của 1 trường ĐH top đầu nhưng rồi nghỉ hẳn ở nhà sau 1 năm. Và khi biết đến khóa đào tạo nghiệp vụ Hàng không, mình đăng ký ngay lập tức bởi đây là ước mơ từ nhỏ. Kết thúc khóa đào tạo, mình nộp hồ sơ dự thi và trúng tuyển vị trí Nhân viên Phục vụ hành khách của hãng Vietnam Airlines từ tháng 12/2019 trong sự hân hoan của người thân và gia đình.",
	},
];
const AppTestimonial = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='block blockTestimonial'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>Cảm Nhận Học Viên</h2>
					<p>
						Hàng ngàn bạn trẻ đã được hiện thực hóa ước mơ làm việc trong ngành
						Hàng không với mức thu nhập ổn định ngay sau khi ra trường
					</p>
				</div>

				<Slider {...settings}>
					{data.map((item, index) => (
						<div className='testimonialWrapper' key={index}>
							<div className='testimonialInside'>
								<img
									style={{
										width: "100px",
										height: "100px",
										margin: "0 auto",
										borderRadius: "50%",
										objectFit: "cover",
									}}
									src={item.image}
									alt=''
								/>
								<h3 style={{ textAlign: "center", margin: "1rem 0" }}>
									{item.name}
								</h3>
								<p>{item.content}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default AppTestimonial;
