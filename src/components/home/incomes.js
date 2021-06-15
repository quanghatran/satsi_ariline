import { Button, Col, Row } from "antd";
import { useState } from "react";
import imageIncomes from "../../images/01.jpg";
import OnlinePreQua from "../common/onlinePreQua";

const AppIncomes = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div id='incomes' className='block blockIncomes'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h1>Thu nhập hấp dẫn</h1>
				</div>
				<Row justify='space-between'>
					<Col
						sm={{ span: 24 }}
						md={{ span: 12 }}
						style={{ background: "#761c1d" }}
					>
						<div className=' imageCover'>
							<img className='imageStyle' src={imageIncomes} alt='' />
						</div>
					</Col>
					<Col sm={{ span: 24 }} md={{ span: 11 }}>
						<div className='contentIncomes'>
							<ul className='textAlignJustify'>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của tiếp viên hàng không lên tới{" "}
									<b> 65.000.000 VNĐ/tháng</b>
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của phi công lên tới <b> 250.000.000 VNĐ/tháng</b>
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thu nhập của nhân sự an ninh hàng không, dịch vụ mặt đất, bán
									vé máy bay,... lên tới <b> 40.000.000 VNĐ/tháng</b>
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

				<div className='centerObject' style={{ marginTop: "40px" }}>
					<Button
						onClick={showModal}
						type='primary'
						size='large'
						style={{
							backgroundColor: "#721b00",
							border: "1px solid #721b00",
							letterSpacing: "1px",
							fontWeight: "500",
						}}
					>
						SƠ TUYỂN ONLINE
					</Button>
				</div>

				<OnlinePreQua
					isModalVisible={isModalVisible}
					handleCancel={handleCancel}
				/>
			</div>
		</div>
	);
};

export default AppIncomes;
