import { Button, Col, Row } from "antd";
import { useState } from "react";
import imageTrend from "../../images/imageTrend.jpg";
import OnlinePreQua from "../common/onlinePreQua";

const AppTrend = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
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
									Thị trường năng động với <b>72 hãng hàng không Quốc tế </b> và
									<b> 5 hãng hàng không Việt Nam</b>
								</li>
								<li>
									<i className='fas fa-check'></i>
									Thị trường cần đến <b> 58.000 lao động</b> giai đoạn 2020 -
									2025
								</li>
								<li>
									<i className='fas fa-check'></i>
									<b>22 cảng hàng không </b> và dự kiến mở thêm nhiều sân bay
									trong nước
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
							<img src={imageTrend} className='imageStyle' alt='' />
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

export default AppTrend;
