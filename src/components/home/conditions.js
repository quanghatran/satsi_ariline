import { Button, Col, Row } from "antd";

const AppConditions = () => {
	return (
		<div id='conditions' className='block blockConditions'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>ĐIỀU KIỆN ỨNG TUYỂN</h2>
				</div>
				<Row gutter={[24, 24]} justify='space-between'>
					<Col
						xs={{ span: 24 }}
						sm={{ span: 24 }}
						md={{ span: 12 }}
						className='conditions conditionsMan'
					>
						<div className='flip-box'>
							<div className='flip-box-inner'>
								<div className='flip-box-front'>
									<div className='overlay'></div>
									<h3>ĐỐI VỚI NAM</h3>
								</div>
								<div className='flip-box-back'>
									<ul>
										<li> Độ tuổi: 18 – 28 tuổi (lái xe lấy tới 35 tuổi)</li>
										<li>Chiều cao: 1m68 – 1m85 </li>
										<li>Cân nặng: 60kg trở lên tương đương với chiều cao</li>
										<li>
											Ngoại hình: Không có hình xăm lớn ở vị trí dễ nhận biết
										</li>
										<li>
											Học vấn: Tốt nghiệp THPT trở lên, có bằng CĐ - ĐH là một
											lợi thế
										</li>
										<li>
											Ngoại ngữ: TOEIC 300 trở lên (chưa có sẽ được đào tạo tại
											SATSi)
										</li>
										<li>
											Sức khỏe: Không mắc các bệnh truyền nhiễm (Viêm gan B,
											C,...)
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Col>
					<Col
						xs={{ span: 24 }}
						sm={{ span: 24 }}
						md={{ span: 12 }}
						className='conditions conditionsWoman'
					>
						<div className='flip-box'>
							<div className='flip-box-inner'>
								<div className='flip-box-front'>
									<div className='overlay'></div>
									<h3>ĐỐI VỚI NỮ</h3>
								</div>
								<div className='flip-box-back'>
									<ul>
										<li>Độ tuổi: 18 – 26 tuổi</li>
										<li>Chiều cao: 1m58 – 1m75 </li>
										<li>Cân nặng: 45kg trở lên tương đương với chiều cao</li>
										<li>
											Ngoại hình: Không có hình xăm lớn ở vị trí dễ nhận biết
										</li>
										<li>
											Học vấn: Tốt nghiệp THPT trở lên, có bằng CĐ - ĐH là một
											lợi thế
										</li>
										<li>
											Ngoại ngữ: TOEIC 300 trở lên (chưa có sẽ được đào tạo tại
											SATSi)
										</li>
										<li>
											Sức khỏe: Không mắc các bệnh truyền nhiễm (Viêm gan B,
											C,...)
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<div className='centerObject' style={{ margin: "30px 0" }}>
					<Button
						type='primary'
						size='large'
						style={{ backgroundColor: "#721b00", border: "1px solid #721b00" }}
					>
						THAM GIA SƠ TUYỂN ONLINE
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AppConditions;
