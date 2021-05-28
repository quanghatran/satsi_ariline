// import { useState } from "react";

const AppSteps = () => {
	// const [mode, setMode] = useState("left");

	// const onChange = (e) => {
	// 	setMode(e.target.value);
	// };
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
							gian tối đa 1 năm (học phí từ 70.000.000 VNĐ/khóa)
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
			</div>
		</div>
	);
};

export default AppSteps;
