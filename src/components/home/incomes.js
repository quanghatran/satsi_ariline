import { Col, Row } from "antd";
const AppIncomes = () => {
	return (
		<div id='incomes' className='block blockIncomes'>
			<div className='container-fluid'>
				<Row justify='space-between'>
					<Col
						sm={{ span: 24 }}
						md={{ span: 12 }}
						style={{ background: "#761c1d" }}
					>
						<div className=' imageCover'>
							<img
								className='imageStyle'
								src='https://greenway.edu.vn/wp-content/uploads/2020/06/du-h%E1%BB%8Dc-nghe-%C4%91%C6%B0c.png'
								alt=''
							/>
						</div>
					</Col>
					<Col sm={{ span: 24 }} md={{ span: 11 }}>
						<h2 className='upperCase centerObject'>Thu nhập hấp dẫn</h2>

						<div className='contentIncomes'>
							<ul className='textAlignJustify'>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của tiếp viên hàng không lên tới 65.000.000 VNĐ/tháng
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của phi công lên tới 250.000.000 VNĐ/tháng
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của nhân sự an ninh hàng không, dịch vụ mặt đất, bán
									vé máy bay,... lên tới 40.000.000 VNĐ/tháng
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
				</Row>
			</div>
		</div>
	);
};

export default AppIncomes;
