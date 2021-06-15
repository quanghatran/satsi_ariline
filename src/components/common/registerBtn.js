import { Modal, Button, Alert } from "antd";
import { useState } from "react";

function RegisterBtn() {
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
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");

	const [isPending, setIsPending] = useState(false);
	const [success, setSuccess] = useState(false);

	let url = process.env.REACT_APP_API_URL;

	const handleSubmit = (e) => {
		e.preventDefault();

		const infoContact = { name, phoneNumber, email, content };

		setIsPending(true);

		fetch(`${url}/Contact`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(infoContact),
		})
			.then(() => {
				setIsPending(false);
				setSuccess(true);
			})
			.then(() => {
				setTimeout(() => {
					setSuccess(false);
				}, 4000);

				// clear fix
				setName("");
				setPhoneNumber("");
				setEmail("");
				setContent("");
			});
	};

	return (
		<div className='block registerBlock'>
			<Button
				size='large'
				type='primary'
				className='btnFixed animate__animated animate__shakeX  animate__repeat-2 animate__delay-5s'
				onClick={showModal}
			>
				ĐĂNG KÝ NGAY
			</Button>
			<Modal
				data-wow-delay='3s'
				className='resisterModal modalOverlay'
				title='ĐĂNG KÝ THÔNG TIN'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<form className='formContactWrapper' onSubmit={handleSubmit}>
					<input
						className='formContact'
						type='text'
						placeholder='Họ tên'
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className='formContact'
						type='number'
						placeholder='Số điện thoại'
						required
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<input
						className='formContact'
						type='email'
						placeholder='Địa chỉ email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						className='formContact '
						required
						placeholder='Nội dung'
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
					{!success && !isPending && <button>GỬI THÔNG TIN</button>}
					{!success && isPending && <button disabled>ĐANG GỬI...</button>}
					{success && !isPending && (
						<Alert message='GỬI THÀNH CÔNG' type='success' showIcon />
					)}
				</form>
			</Modal>
		</div>
	);
}

export default RegisterBtn;
