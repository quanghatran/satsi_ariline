import { Button } from "antd";
import { useState } from "react";
import OnlinePreQua from "../common/onlinePreQua";

const AppSteps = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<div id='steps' className='block stepsBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2 style={{ color: "#fff" }}>CÁC BƯỚC THAM GIA</h2>
				</div>
				<div className='listStepBlock'>
					<p>
						<b>Bước I</b>
						<span>Học viên điền thông tin vào form</span>{" "}
					</p>
					<p>
						<b>Bước II</b>
						<span>
							Hoàn thiện hồ sơ, khám sức khỏe tại cơ sở y tế chỉ định. Tiến hành
							kiểm tra đầu vào và thống nhất biểu phí, lộ trình đào tạo
						</span>{" "}
					</p>
					<p>
						<b>Bước III</b>
						<span>
							Hoàn thiện thủ tục và tham gia chương trình đào tạo trong thời
							gian tối đa 1 năm
						</span>{" "}
					</p>
					<p>
						<b>Bước IV</b>
						<span>
							Tốt nghiệp và ứng tuyển vào làm tại các hãng bay, cảng hàng không
							với mức thu nhập cao
						</span>{" "}
					</p>
				</div>

				<div className='centerObject' style={{ marginTop: "40px" }}>
					<Button
						onClick={showModal}
						type='primary'
						size='large'
						style={{
							backgroundColor: "#fff",
							border: "1px solid #000",
							letterSpacing: "1px",
							color: "#000",
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

export default AppSteps;
