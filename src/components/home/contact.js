import { Col, Row } from "antd";
import { useState } from "react";

function AppContact() {
	// const { TextArea } = Input;

	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [content, setContent] = useState("");

	const [isPending, setIsPending] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const infoContact = { name, phoneNumber, email, content };

		setIsPending(true);

		fetch("http://206.189.90.147:5001/Contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(infoContact),
		}).then(() => {
			setIsPending(false);

			// clear fix
			setName("");
			setPhoneNumber("");
			setEmail("");
			setContent("");
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
					<Col span={12}>
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
							{!isPending && <button>GỬI THÔNG TIN</button>}
							{isPending && <button disabled>ĐANG GỬI...</button>}
						</form>
					</Col>
					<Col span={12}>
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
