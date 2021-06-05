import { Modal, Button, Col, Row, Result } from "antd";
import { useState } from "react";

const OnlinePreQua = (props) => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("nam");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [health, setHealth] = useState("tốt");
	const [tattoo, setTattoo] = useState("Không có");
	const [knowledge, setKnowledge] = useState("THPT");
	const [language, setLanguage] = useState("Chưa có chứng chỉ");
	const [howToKnow, setHowToKnow] = useState("gg");

	const [success, setSuccess] = useState(false);

	const [result, setResult] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [namePerson, setNamePerson] = useState("");

	const showResult = (success) => {
		setResult(true);
		setSuccess(success);
	};

	const handleCancelResult = () => {
		setResult(false);
	};

	const handleCheckCondition = () => {
		if (gender === "nam") {
			if (
				18 <= age <= 35 &&
				168 <= height <= 185 &&
				weight >= 60 &&
				(tattoo === "Không có" || tattoo === "Nhỏ, ở vị trí kín") &&
				health === "tốt"
			) {
				console.log(1);
				return true;
			} else {
				console.log(2);
				return false;
			}
		}
		if (gender === "nữ") {
			if (
				18 <= age <= 26 &&
				158 <= height <= 175 &&
				weight >= 45 &&
				(tattoo === "Không có" || tattoo === "Nhỏ, ở vị trí kín") &&
				health === "tốt"
			) {
				return true;
			} else {
				console.log(4);
				return false;
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const resultCondition = handleCheckCondition();

		const infoCondition = {
			name,
			gender,
			age,
			phoneNumber,
			email,
			address,
			height,
			weight,
			health,
			tattoo,
			knowledge,
			language,
			howToKnow,
			namePerson,
			resultCondition,
		};

		setIsPending(true);

		fetch("http://206.189.90.147:5001/Test", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(infoCondition),
		})
			.then((res) => {
				if (!res.ok) {
					throw Error("did not post that data to server");
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setIsPending(false);

				// clear fix
				setName("");
				setGender("nam");
				setAge("");
				setPhoneNumber("");
				setEmail("");
				setAddress("");
				setHeight("");
				setWeight("");
				setHealth("tốt");
				setTattoo("Không có");
				setKnowledge("THPT");
				setLanguage("Chưa có chứng chỉ");
				setHowToKnow("gg");
				setNamePerson("");
				showResult(resultCondition);
			})
			.catch((e) => {
				setIsPending(false);
				console.log(e);
			});
	};

	return (
		<Modal
			className='modalOverlay'
			title='THAM GIA SƠ TUYỂN ONLINE'
			visible={props.isModalVisible}
			onCancel={props.handleCancel}
		>
			<form
				className='formContactWrapper formCondition'
				onSubmit={handleSubmit}
			>
				<Row gutter={[12, 12]}>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
						<input
							className='formContact'
							type='text'
							placeholder='Họ tên'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Col>
					<Col
						xs={{ span: 16 }}
						sm={{ span: 16 }}
						md={{ span: 8 }}
						style={{ display: "flex", alignItems: "center" }}
					>
						<div style={{ width: "40%" }}>Giới tính: </div>
						<select value={gender} onChange={(e) => setGender(e.target.value)}>
							<option value='nam'>Nam</option>
							<option value='nữ'>Nữ</option>
						</select>
					</Col>
					<Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 6 }}>
						<input
							className='formContact'
							type='text'
							placeholder='Tuổi'
							required
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }}>
						<input
							className='formContact'
							type='number'
							placeholder='Số điện thoại'
							required
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</Col>
					<Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }}>
						<input
							className='formContact'
							type='email'
							placeholder='Địa chỉ email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
						<input
							className='formContact'
							type='text'
							placeholder='Địa chỉ'
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Col>
					<Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
						<input
							className='formContact'
							type='number'
							placeholder='Chiều cao (cm)'
							required
							value={height}
							onChange={(e) => setHeight(e.target.value)}
						/>
					</Col>
					<Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
						<input
							className='formContact'
							type='number'
							placeholder='Cân nặng (kg)'
							required
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
					</Col>
				</Row>
				<Row gutter={[16, 16]}>
					<Col span={12}>
						{" "}
						<label>Sức khỏe: </label>
						<select value={health} onChange={(e) => setHealth(e.target.value)}>
							<option value='tốt'>Tốt</option>
							<option value='Mắc bệnh truyền nhiễm'>
								Mắc bệnh truyền nhiễm: Viên gan B/C, HIV,…
							</option>
						</select>
					</Col>
					<Col span={12}>
						<label>Xăm hình: </label>
						<select value={tattoo} onChange={(e) => setTattoo(e.target.value)}>
							<option value='Không có'>Không có</option>
							<option value='Nhỏ, ở vị trí kín'>Nhỏ, ở vị trí kín</option>
							<option value='Lớn, ở vị trí dễ nhận biết'>
								Lớn, ở vị trí dễ nhận biết
							</option>
						</select>
					</Col>

					<Col span={12}>
						<label>Trình độ học vấn: </label>
						<select
							value={knowledge}
							onChange={(e) => setKnowledge(e.target.value)}
						>
							<option value='THPT'>THPT</option>
							<option value='Cao đẳng'>Cao đẳng</option>
							<option value='Đại học'>Đại học</option>
						</select>
					</Col>
					<Col span={12}>
						<label>Ngoại ngữ: </label>
						<select
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
						>
							<option value='Chưa có chứng chỉ'>Chưa có chứng chỉ</option>
							<option value='Tương đương Toeic 300'>
								Tương đương Toeic 300
							</option>
							<option value='Tương đương Toeic 450 trở lên'>
								Tương đương Toeic 450 trở lên
							</option>
						</select>
					</Col>
				</Row>
				<label>
					Bạn biết đến chương trình từ đâu, vui lòng cung cấp chính xác để được
					hỗ trợ tốt nhất:{" "}
				</label>
				<select
					value={howToKnow}
					onChange={(e) => setHowToKnow(e.target.value)}
				>
					<option value='gg'>Google</option>
					<option value='fb'>Facebook</option>
					<option value='person'>Người giới thiệu</option>
				</select>
				{howToKnow === "person" && (
					<input
						className='formContact'
						type='text'
						placeholder='Tên người giới thiệu'
						required
						value={namePerson}
						onChange={(e) => setNamePerson(e.target.value)}
					/>
				)}

				{!isPending && <button>GỬI THÔNG TIN</button>}
				{isPending && <button disabled>ĐANG GỬI...</button>}
			</form>
			<Modal
				className='resultPopup modalOverlay'
				title='SƠ TUYỂN THÀNH CÔNG'
				visible={result}
				onCancel={handleCancelResult}
			>
				{success ? (
					<Result
						status='success'
						title='Chúc mừng bạn đã đáp ứng đủ điều kiện của chương trình'
						subTitle='Chuyên viên hỗ trợ tư vấn sẽ liên hệ với bạn sớm. Xin cảm ơn!'
					/>
				) : (
					<Result
						status='success'
						title='Bạn đã gửi thông tin sơ tuyển thành công.'
						subTitle='Mời bạn tham khảo chương trình “Học Cao đẳng nghề tại CHLB Đức miễn học phí, cam kết việc làm sau tốt nghiệp”'
						extra={[
							<Button key='s' type='primary' size='large'>
								<a href='http://satsi.edu.vn/'>XEM THÊM</a>
							</Button>,
						]}
					/>
				)}
			</Modal>
		</Modal>
	);
};

export default OnlinePreQua;
