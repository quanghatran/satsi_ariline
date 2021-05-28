import { Col, Row } from "antd";
const AppTrend = () => {
	return (
		<div id='air' className='block blockTrend'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2 className='upperCase'>Hàng không - ngành học mơ ước</h2>
				</div>
				<Row justify='space-between'>
					<Col sm={{ span: 24 }} md={{ span: 11 }}>
						<div className='contentTrend'>
							<ul className='textAlignJustify'>
								<li>
									<i className='fas fa-check'></i>
									Môi trường làm việc trẻ trung, năng động, hiện đại và chuyên
									nghiệp
								</li>
								<li>
									<i className='fas fa-check'></i>
									Lĩnh vực triển vọng, rộng mở cơ hội làm việc và du lịch tại
									nước ngoài
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thị trường năng động với 72 hãng hàng không Quốc tế và 5 hãng
									hàng không Việt Nam
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thị trường cần đến 58.000 lao động giai đoạn 2020 - 2025
								</li>
								<li>
									<i className='fas fa-check'></i>
									22 cảng hàng không và dự kiến mở thêm nhiều sân bay trong nước
								</li>
								<li>
									<i className='fas fa-check'></i>
									Dễ dàng ứng tuyển: Học viên tốt nghiệp THPT trở lên đều đủ
									điều kiện ứng tuyển. Nghiệp vụ và các kỹ năng mềm sẽ được đào
									tạo thêm
								</li>
							</ul>
						</div>
					</Col>
					<Col
						sm={{ span: 24 }}
						md={{ span: 12 }}
						style={{ background: "#761c1d" }}
					>
						<div className=' imageCover'>
							<img
								className='imageStyle'
								src='https://duhocinec.com/wp-content/uploads/2020/07/01-07-2020-du-hoc-uc-nganh-hang-khong-01.jpg'
								alt=''
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AppTrend;
