import { Button, Carousel } from "antd";
const items = [
	{
		key: 1,
		title:
			"Đào tạo nghiệp vụ hàng không - Chắp cánh ước mơ bước vào ngành hàng không",
		content:
			"Hàng ngàn bạn trẻ đã được hiện thực hóa ước mơ làm việc trong ngành Hàng không với mức thu nhập ổn định ngay sau khi ra trường",
	},
	{
		key: 2,
		title: "Thu nhập hấp dẫn - Vững chắc tương lai",
		content:
			"<li>Lĩnh vực triển vọng, rộng mở cơ hội làm việc và du lịch tại nước ngoài</li> <li>Thị trường năng động với 72 hãng hàng không Quốc tế và 5 hãng hàng không Việt Nam</li>",
	},
	{
		key: 3,
		title: "Cơ hội nghề nghiệp rộng mở với 65 ngành nghề",
		content:
			"<li>Môi trường làm việc trẻ trung, năng động, hiện đại và chuyên nghiệp</li><li>Lĩnh vực triển vọng, rộng mở cơ hội làm việc và du lịch tại nước ngoài</li>",
	},
	{
		key: 4,
		title: "Tiêu chí ứng tuyển đơn giản",
		content:
			"Dễ dàng ứng tuyển: Học viên tốt nghiệp THPT trở lên đều đủ điều kiện ứng tuyển. Nghiệp vụ và các kỹ năng mềm sẽ được đào tạo thêm",
	},
];

function AppBanner() {
	return (
		<div id='whyChoose' className='heroBlock'>
			<Carousel autoplay next previous>
				{items.map((item) => (
					<div className='container-fluid' key={item.key}>
						<div className='content'>
							<h3>{item.title}</h3>
							{/* <p>{item.content}</p> */}
							<ul dangerouslySetInnerHTML={{ __html: item.content }}></ul>
							<div className='btnHolder'>
								<Button
									href='#air'
									type='primary'
									size='large'
									style={{ marginRight: "10px" }}
								>
									TÌM HIỂU THÊM
								</Button>
								<Button href='#contact' size='large'>
									<i className='fas fa-sign-in-alt'></i> ĐĂNG KÝ
								</Button>
							</div>
						</div>
					</div>
				))}
			</Carousel>
			{/* <Slider {...settings}>
				{items.map((item) => (
					<div className='container-fluid' key={item.key}>
						<div className='content'>
							<h3>{item.title}</h3>
							<p>{item.content}</p>
							<div className='btnHolder'>
								<Button type='primary' sizes='large'>
									Learn More
								</Button>
								<Button sizes='large'>
									<i className='fas fa-desktop'></i> Watch a Demo
								</Button>
							</div>
						</div>
					</div>
				))}
			</Slider> */}
		</div>
	);
}

export default AppBanner;
