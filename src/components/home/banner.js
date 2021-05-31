import { Button, Carousel } from "antd";
const items = [
	{
		key: 4,
		title:
			"Đào tạo nghiệp vụ hàng không - Chắp cánh ước mơ bước vào ngành hàng không",
		content:
			"Hàng ngàn bạn trẻ đã được hiện thực hóa ước mơ làm việc trong ngành Hàng không với mức thu nhập ổn định ngay sau khi ra trường",
	},
];

function AppBanner() {
	return (
		<div id='whyChoose' className='block heroBlock'>
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
									className='buttonSmall'
									style={{
										marginRight: "10px",
										backgroundColor: "#721b00",
										color: "#fff",
										border: "1px solid #721b00",
									}}
								>
									TÌM HIỂU THÊM
								</Button>
								<Button
									className='btn-sign'
									href='#contact'
									size='large'
									style={{
										marginRight: "10px",
										color: "#000",
										background: "transparent",
										border: "1px solid #000",
									}}
								>
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
