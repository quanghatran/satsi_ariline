import hotBranch1 from "../../images/phi cong.jpg";
import hotBranch2 from "../../images/tiep vien hang khong.jpg";
import hotBranch3 from "../../images/an ninh hang khong.jpg";
import hotBranch4 from "../../images/thanh tra chat luong.jpg";
import hotBranch5 from "../../images/kiem soat khong luu.jpg";
import hotBranch6 from "../../images/bao duong may bay.jpg";

import { Button, Card, Col, Modal, Row } from "antd";
import React, { useState } from "react";
const listJobs = [
	{
		name: "Phi công",
		image: hotBranch1,
		detail:
			"Lái máy bay vận chuyển hành khách, hàng hóa,... Chuẩn bị, kiểm tra kế hoạch và các vấn đề liên quan tới chuyến bay",
		criteria:
			"<li>Quốc tịch Việt Nam, lý lịch rõ ràng, sức khỏe tốt</li> <li>Từ 18 - 33 tuổi</li> <li>Đã tốt nghiệp THPT</li> <li>Ngoại ngữ: TOEIC 550 hoặc chứng chỉ tương đương</li>",
	},
	{
		name: "Tiếp viên hàng không",
		image: hotBranch2,
		detail:
			"Hướng dẫn, theo dõi an toàn và hỗ trợ cho hành khách trong suốt chuyến bay",
		criteria:
			"<li>Công dân Việt Nam có quốc tịch Việt Nam, lý lịch rõ ràng, sức khỏe tốt</li> <li>Nữ từ 20 đến 26; chiều cao từ 158 cm đến 175 cm</li> <li>Nam từ 20 đến 28; chiều cao từ 168 cm đến 182 cm</li> <li>Tầm với sải tay khi kiễng chân: tối thiểu 212 cm</li><li>Cân nặng phù hợp với chiều cao</li><li>Đã tốt nghiệp THPT</li><li>Tiếng Anh: tối thiểu TOEIC 600/ TOEFL ibt 68/ TOEFL cbt 190/ IELTS 5.5 </li>",
	},
	{
		name: "Bảo dưỡng máy bay",
		image: hotBranch6,
		detail:
			"Phát hiện và khắc phục sự cố trước mỗi chuyến bay, theo dõi tình trạng tổng thể của máy bay",
		criteria:
			"<li>Công dân Việt Nam cư trú tại Việt Nam; lý lịch rõ ràng</li> <li>Tốt nghiệp THPT, Trung cấp chuyên ngành Kỹ thuật Hàng không hoặc Cao đẳng, Đại học các ngành kỹ thuật: cơ khí, Điện, Điện tử…</li> <li>Sức khỏe: Nam: Chiều cao từ 1m60 trở lên, cân nặng từ 50kg trở lên; Nữ: Chiều cao từ 1m56, cân nặng từ 45kg trở lên</li> <li>Có khả năng chịu được áp lực cao trong công việc, làm việc theo ca kíp (ngày và đêm)</li>",
	},
	{
		name: "Thanh tra chất lượng",
		image: hotBranch4,
		detail:
			"Xây dựng và điều chỉnh các tiêu chuẩn dịch vụ. Giám sát, kiểm tra, thanh tra chất lượng dịch vụ. Đánh giá và đưa giải pháp nâng cao chất lượng,...",
		criteria:
			"<li>Công dân Việt Nam cư trú tại Việt Nam, lý lịch rõ ràng, sức khỏe tốt</li> <li>Từ 26 tuổi trở lên</li> <li>Chiều cao: Nam 1m60 trở lên, nữ 1m56 trở lên</li> <li>Tiếng Anh tối thiểu TOEIC 450 hoặc IELTS 4.5</li>",
	},

	{
		name: "Kiểm soát không lưu",
		image: hotBranch5,
		detail:
			"Điều hành, hướng dẫn cho máy bay đi đúng hướng. Hỗ trợ phi công trong các trường hợp khẩn cấp. Theo dõi và nắm rõ lộ trình chuyến bay,...",
		criteria:
			"<li>Quốc tịch Việt Nam, lý lịch rõ ràng, sức khỏe tốt</li> <li>Từ 18 - 30 tuổi</li> <li>Tốt nghiệp THPT và đạt các yêu cầu về trình độ</li> <li>Thông minh, nhanh nhạy và có khả năng tập trung cao, phản xạ nhanh</li><li>Sức khỏe: Đối với Nam: Chiều cao ≥ 1m60; Cân nặng ≥ 53 kg; Đối với Nữ: Chiều cao ≥ 1m54; Cân nặng ≥ 45 kg</li>",
	},
	{
		name: "An ninh hàng không",
		image: hotBranch3,
		detail:
			"Nhân viên an ninh kiểm soát: kiểm tra, giám sát an ninh, tuần tra, canh gác bảo vệ tại các vị trí của sân bay, cảng hàng không...",
		criteria:
			"<li>Công dân Việt Nam cư trú tại Việt Nam, lý lịch trong sạch</li> <li>Nam từ 20 - 30 tuổi</li> <li>Đã tốt nghiệp THPT. Ưu tiên học viên đã hoàn thành nghĩa vụ quân sự, công an nghĩa vụ, tốt nghiệp Trung cấp/ Cao đẳng/ ĐH an ninh hàng không</li> <li>Ngoại ngữ: Nhân viên an ninh kiểm soát tối thiểu TOEIC 300 điểm trở lên, nhân viên an ninh soi chiếu TOEIC 450 điểm trở lên</li><li>Sức khỏe: Nam cao từ 1m70 trở lên, nữ từ 1m60. Cân nặng phù hợp với chiều cao.</li><li>Thị lực không kính tối thiểu 5/10 mỗi bên</li>",
	},
];

const allJobs = [
	{
		key: 1,
		nameJob: "Phi công",
	},
	{
		key: 2,
		nameJob: "Tiếp viên hàng không",
	},
	{
		key: 3,
		nameJob: "Kiểm soát không lưu",
	},
	{
		key: 4,
		nameJob: "An ninh hàng không",
	},
	{
		key: 5,
		nameJob: "Điều độ - Điều phối - Khai thác chuyến bay",
	},
	{
		key: 6,
		nameJob: "Cân bằng trọng tải - Hướng dẫn chất xếp",
	},
	{
		key: 7,
		nameJob: "Kỹ sư, thợ bảo dưỡng máy bay",
	},
	{
		key: 8,
		nameJob: "Kỹ sư kỹ thuật dụng cụ thiết bị",
	},
	{
		key: 9,
		nameJob: "Bảo dưỡng dụng cụ thiết bị",
	},
	{
		key: 10,
		nameJob: "Cơ khí",
	},
	{
		key: 11,
		nameJob: "Kỹ thuật Bảo dưỡng nội thất",
	},
	{
		key: 12,
		nameJob: "Thủ tục viên - Thủ tục hành khách",
	},
	{
		key: 13,
		nameJob: "Lái vận hành Trang thiết bị mặt đất (lái xe mặt đất - 09 vị trí)",
	},
	{
		key: 14,
		nameJob: "Bốc xếp, Vận chuyển hàng hóa",
	},
	{
		key: 15,
		nameJob: "Vệ sinh máy bay",
	},
	{
		key: 16,
		nameJob: "Thông báo tin tức hàng không",
	},
	{
		key: 17,
		nameJob: "Quản lý luồng không lưu",
	},
	{
		key: 18,
		nameJob: "Đánh tín hiệu tàu bay lăn",
	},
	{
		key: 19,
		nameJob: "Khí tượng",
	},
	{
		key: 20,
		nameJob: "Chính sách an ninh hàng không",
	},
	{
		key: 21,
		nameJob: "Phòng cháy chữa cháy",
	},
	{
		key: 22,
		nameJob: "Thuê chuyến",
	},
	{
		key: 23,
		nameJob: "Giám sát, Đánh giá & thanh tra chất lượng dịch vụ mặt đất",
	},
	{
		key: 24,
		nameJob: "Quản trị dữ liệu nhân sự",
	},
	{
		key: 25,
		nameJob: "Pháp chế",
	},
	{
		key: 26,
		nameJob: "Chính sách nhân sự",
	},
	{
		key: 27,
		nameJob: "Kiểm soát nội bộ",
	},
	{
		key: 28,
		nameJob: "Marketing",
	},
	{
		key: 29,
		nameJob: "Giám sát cung ứng sân bay",
	},
	{
		key: 30,
		nameJob: "Dịch vụ khách hàng",
	},
	{
		key: 31,
		nameJob: "Phát triển sales: Nội địa/Quốc tế",
	},
	{
		key: 32,
		nameJob: "Quản lý tiếp viên",
	},
	{
		key: 33,
		nameJob: "Truyền thông",
	},
	{
		key: 34,
		nameJob: "Quan hệ lao động",
	},
	{
		key: 35,
		nameJob: "Trợ giúp online",
	},
	{
		key: 36,
		nameJob: "Thương mại khối cơ quan",
	},
	{
		key: 37,
		nameJob: "Kinh tế làm việc tại khối cơ quan",
	},
	{
		key: 38,
		nameJob: "Chăm sóc khách hàng (Tổng đài viên )",
	},
	{
		key: 39,
		nameJob: "Công nghệ thông tin (Phần mềm và phần cứng)",
	},
	{
		key: 40,
		nameJob: "Văn thư lưu trữ",
	},
	{
		key: 41,
		nameJob: "Bán vé máy bay, tư vấn du lịch",
	},
	{
		key: 42,
		nameJob:
			"Vị trí sản xuất (nguyên liệu, công thức chế biến, thực đơn suất ăn…)",
	},
	{
		key: 43,
		nameJob: "Phòng sản xuất (Suất ăn)",
	},
	{
		key: 44,
		nameJob: "Điều độ (Suất ăn)",
	},
	{
		key: 45,
		nameJob: "Giám sát tổ sơ chế/Bộ phận Chia & Lắp khay",
	},
	{
		key: 46,
		nameJob: "Giao, nhận suất ăn trên máy bay",
	},
	{
		key: 47,
		nameJob: "Sát nhà ăn & Tòa nhà nhân viên",
	},
	{
		key: 48,
		nameJob: "Đầu bếp (Sous Chef)",
	},
	{
		key: 49,
		nameJob: "Vận hành băng chuyền rửa dụng cụ",
	},
	{
		key: 50,
		nameJob: "Đảm bảo chất lượng (VSMT - ATTP)",
	},
	{
		key: 51,
		nameJob: "Giám sát - Trực ban trưởng",
	},
	{
		key: 52,
		nameJob: "Phòng bán và tiếp thị",
	},
	{
		key: 53,
		nameJob: "Nhà xưởng, Phòng kỹ thuật",
	},
	{
		key: 54,
		nameJob: "Kế toán (Acc - Accountant)",
	},
	{
		key: 55,
		nameJob: "Giám sát (Hoạt động tài chính kế toán)",
	},
	{
		key: 56,
		nameJob: "Điện lạnh",
	},
	{
		key: 57,
		nameJob: "Kho vận",
	},
	{
		key: 58,
		nameJob: "Phòng khách",
	},
	{
		key: 59,
		nameJob: "Bán hàng",
	},
	{
		key: 60,
		nameJob: "Phòng điều hành nhà ga",
	},
	{
		key: 61,
		nameJob: "Phòng chờ hạng thương gia (Hạng sang)",
	},
	{
		key: 62,
		nameJob: "Phòng C",
	},
	{
		key: 63,
		nameJob: "Vận hành băng tải",
	},
	{
		key: 64,
		nameJob: "Kỹ thuật tin học",
	},
	{
		key: 65,
		nameJob: "Đào tạo lập kế hoạch (Training Planing Officer)",
	},
];

const { Meta } = Card;

const AppHotBranch = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div id='selections' className='block hotBranchBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h1 style={{ color: "#fff" }}>Các Ngành Học Hot</h1>
				</div>
				<div className='listJob'>
					<Row gutter={[24, 24]}>
						{listJobs.map((job, index) => (
							<Col
								sm={{ span: 24 }}
								md={{ span: 12 }}
								lg={{ span: 8 }}
								gutter={[24, 24]}
								key={index}
							>
								{/* <h3>{job.name}</h3>
								<p>
									<span>Công việc:</span> {job.detail}
								</p> */}

								<Card
									hoverable
									style={{ width: "100%" }}
									cover={
										<img
											style={{
												height: "200px",
												objectFit: "cover",
												position: "center",
											}}
											alt='hot_branch'
											src={job.image}
										/>
									}
								>
									<Meta
										style={{ height: "100px", overflow: "hidden" }}
										title={job.name}
										description={job.detail}
									/>
								</Card>
							</Col>
						))}
					</Row>
				</div>
				<div className='centerObject'>
					<Button
						type='primary'
						size='large'
						onClick={showModal}
						style={{
							backgroundColor: "#721b00",
							border: "1px solid #721b00",
							marginTop: "30px",
						}}
					>
						XEM{" "}
						<i
							className='fas fa-long-arrow-alt-down upDownArrow'
							style={{ margin: "0 7px" }}
						></i>{" "}
						THÊM
					</Button>
				</div>
				<Modal
					className='modalOverlay'
					title='DANH SÁCH CÁC NGÀNH HỌC'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<Row gutter={[16, 16]}>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.forEach((job, index) => {
									if (job.key % 3 === 1) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.forEach((job, index) => {
									if (job.key % 3 === 2) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
						<Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<ul>
								{allJobs.forEach((job, index) => {
									if (job.key % 3 === 0) {
										return (
											<li style={{ listStyle: "inside" }} key={job.key}>
												{job.nameJob}
											</li>
										);
									}
								})}
							</ul>
						</Col>
					</Row>
				</Modal>
			</div>
		</div>
	);
};

export default AppHotBranch;
