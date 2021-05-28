// import React, { Component } from "react";
import Slider from "react-slick";
const data = [
	{
		name: "Lê Ngọc Linh",
		image: "https://intelerp.net/public/uploads/11.png",
		content:
			"Mình đã trở thành đại sứ bầu trời của Bamboo Airway nhờ những bài thi tự tin, phát âm tiếng Anh tròn vành rõ chữ. Mình cũng dễ dàng vượt qua các bài thi về kỹ năng mềm khác nhờ những bài học hữu ích của công ty. Vui lắm, ước mơ mình ấp ủ 10 năm nay đã trở thành sự thật!",
	},
	{
		name: "Kiều Duy Nam",
		image:
			"https://www.datdepphuquoc.net/uploads/images/Thong%20tin%20website/avatar.png",
		content:
			"Sau khi tốt nghiệp THPT, mình chọn học nghiệp vụ Hàng không. Mình nhập học và tham gia lớp đào tạo kỹ năng thi tuyển hàng không năm 2017 và chính thức trở thành nhân viên Phục vụ hành khách tại Sân bay quốc tế Nội Bài tháng 10/2018. Ra trường chỉ trong một thời gian ngắn mình đã có việc làm và ổn định thu nhập, tự lập cuộc sống.",
	},
	{
		name: "Đỗ Mạnh Quân",
		image:
			"https://forakyafrica-drilling.com/wp-content/uploads/2020/12/man-300x300-1.png",
		content:
			"Sau 3 năm học với hơn 500 giờ thực tập cuối khóa, mình cùng những bạn sinh viên Vnas - Kent ngành Quản trị Kinh doanh Vận tải Hàng không đã được tiếp cận và trải nghiệm thực tế các công việc khác nhau tại Cảng Hàng không Quốc tế Tân Sơn Nhất. Hiện giờ thì mình cũng được nhận và làm việc tại SAGS với mức thu nhập ổn định.",
	},
	{
		name: "Lê Ngọc Linh",
		image: "https://intelerp.net/public/uploads/11.png",
		content:
			"Mình đã trở thành đại sứ bầu trời của Bamboo Airway nhờ những bài thi tự tin, phát âm tiếng Anh tròn vành rõ chữ. Mình cũng dễ dàng vượt qua các bài thi về kỹ năng mềm khác nhờ những bài học hữu ích của công ty. Vui lắm, ước mơ mình ấp ủ 10 năm nay đã trở thành sự thật!",
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
					// infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// infinite: true,
					// dots: true
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
									style={{ width: "30%", margin: "0 auto" }}
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
