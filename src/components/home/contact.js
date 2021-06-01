import { Button, Col, Modal, Result, Row } from "antd";
import { useState } from "react";

function AppContact() {
	// const [name, setName] = useState("");
	// const [phoneNumber, setPhoneNumber] = useState("");
	// const [email, setEmail] = useState("");
	// const [content, setContent] = useState("");

	// const [isPending, setIsPending] = useState(false);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	const infoContact = { name, phoneNumber, email, content };

	// 	setIsPending(true);

	// 	fetch("http://206.189.90.147:5001/Contact", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(infoContact),
	// 	}).then(() => {
	// 		setIsPending(false);

	// 		// clear fix
	// 		setName("");
	// 		setPhoneNumber("");
	// 		setEmail("");
	// 		setContent("");
	// 	});
	// };

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

	const showResult = () => {
		setResult(true);
	};

	const handleCancelResult = () => {
		setResult(false);
	};

	const [name, setName] = useState("");
	const [gender, setGender] = useState("male");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [health, setHealth] = useState("good");
	const [tattoo, setTattoo] = useState("none");
	const [knowledge, setKnowledge] = useState("hightSchool");
	const [language, setLanguage] = useState("none");
	const [howToKnow, setHowToKnow] = useState("gg");
	const [resultCondition, setResultCondition] = useState(false);
	const [result, setResult] = useState(false);
	const [isPending, setIsPending] = useState(false);

	const handleCheckCondition = () => {
		if (gender == "male") {
			if (
				18 <= age <= 35 &&
				168 <= height <= 185 &&
				weight >= 60 &&
				(tattoo == "smallTattoo" || tattoo == "none") &&
				health == "good"
			) {
				console.log(1);
				return setResultCondition(true);
			} else {
				console.log(2);
				return setResultCondition(false);
			}
		}
		if (gender == "female") {
			if (
				18 <= age <= 26 &&
				158 <= height <= 175 &&
				weight >= 45 &&
				(tattoo == "smallTattoo" || tattoo == "none") &&
				health == "good"
			) {
				console.log(3);
				return setResultCondition(true);
			} else {
				console.log(4);
				return setResultCondition(false);
			}
		}
		console.log("resultCondition in check function: " + resultCondition);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

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
			resultCondition,
		};

		handleCheckCondition();
		setIsPending(true);

		fetch("http://206.189.90.147:5001/Test", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(infoCondition),
		})
			.then(() => {
				console.log(e);
			})
			.then(() => {
				setIsPending(false);

				// clear fix
				setName("");
				setGender("male");
				setAge("");
				setPhoneNumber("");
				setEmail("");
				setAddress("");
				setHeight("");
				setWeight("");
				setHealth("good");
				setTattoo("none");
				setKnowledge("hightSchool");
				setLanguage("none");
				setHowToKnow("gg");
				// setResultCondition(false);
				showResult();

				console.log("resultCondition in then: " + resultCondition);
			});
	};

	return (
		<div id='contact' className='block contactBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>Liên Hệ</h2>
					<p>Để lại thông tin và SATSi sẽ liên hệ tư vấn</p>
				</div>
				<Row gutter={[24, 24]}>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
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
									<select
										value={gender}
										onChange={(e) => setGender(e.target.value)}
									>
										<option value='male'>Nam</option>
										<option value='female'>Nữ</option>
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
									<select
										value={health}
										onChange={(e) => setHealth(e.target.value)}
									>
										<option value='good'>Tốt</option>
										<option value='trouble'>
											Mắc bệnh truyền nhiễm: Viên gan B/C, HIV,…
										</option>
									</select>
								</Col>
								<Col span={12}>
									<label>Xăm hình: </label>
									<select
										value={tattoo}
										onChange={(e) => setTattoo(e.target.value)}
									>
										<option value='none'>Không có</option>
										<option value='smallTattoo'>Nhỏ, ở vị trí kín</option>
										<option value='bigTattoo'>
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
										<option value='hightSchool'>THPT</option>
										<option value='vocational'>Cao đẳng</option>
										<option value='university'>Đại học</option>
									</select>
								</Col>
								<Col span={12}>
									<label>Ngoại ngữ: </label>
									<select
										value={language}
										onChange={(e) => setLanguage(e.target.value)}
									>
										<option value='none'>Chưa có chứng chỉ</option>
										<option value='toeic300'>Tương đương Toeic 300</option>
										<option value='toeic450'>
											Tương đương Toeic 450 trở lên
										</option>
									</select>
								</Col>
							</Row>
							<label>
								Bạn biết đến chương trình từ đâu, vui lòng cung cấp chính xác để
								được hỗ trợ tốt nhất:{" "}
							</label>
							<select
								value={howToKnow}
								onChange={(e) => setHowToKnow(e.target.value)}
							>
								<option value='gg'>Google</option>
								<option value='fb'>Facebook</option>
								<option value='person'>Người giới thiệu</option>
								<option value='different'>Khác</option>
							</select>
							{!isPending && <button>GỬI THÔNG TIN</button>}
							{isPending && <button disabled>ĐANG GỬI...</button>}
							<Modal
								className='resultPopup modalOverlay'
								title='SƠ TUYỂN THÀNH CÔNG'
								visible={result && resultCondition}
								onCancel={handleCancelResult}
							>
								<Result
									status='success'
									title='Chúc mừng bạn đã đáp ứng đủ điều kiện của chương trình'
									subTitle='Chuyên viên hỗ trợ tư vấn sẽ liên hệ với bạn sớm. Xin cảm ơn!'
								/>
							</Modal>
							<Modal
								className='resultPopup modalOverlay'
								title='SƠ TUYỂN THÀNH CÔNG'
								visible={result && !resultCondition}
								onCancel={handleCancelResult}
							>
								<Result
									status='success'
									title='Bạn đã gửi thông tin sơ tuyển thành công.'
									subTitle='Mời bạn tham khảo chương trình “Học Cao đẳng nghề tại CHLB Đức miễn học phí, cam kết việc làm sau tốt nghiệp”'
									extra={[
										<Button type='primary' size='large'>
											<a href='http://satsi.edu.vn/'>XEM THÊM</a>
										</Button>,
									]}
								/>
							</Modal>
						</form>
					</Col>
					<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
						<div>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.491141912446!2d105.7590120147541!3d20.97294069505785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453b311f4c94d%3A0xa84f3ad42d3983bd!2zU0FUU0kgLSBWSeG7hk4gxJDDgE8gVOG6oE8gS0jhu55JIE5HSEnhu4ZQIFbDgCDhu6hORyBE4bukTkcgS0hPQSBI4buMQyBDw5RORyBOR0jhu4YgQ0FP!5e0!3m2!1svi!2s!4v1622221019649!5m2!1svi!2s'
								width='100%'
								height='400px'
								loading='lazy'
							></iframe>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default AppContact;
