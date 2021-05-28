import { Button, Form, Input } from "antd";

function AppContact() {
	const { TextArea } = Input;
	return (
		<div id='contact' className='block contactBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>Liên Hệ</h2>
					<p>Để lại thông tin và SATSi sẽ liên hệ tư vấn</p>
				</div>

				<Form
					name='normal_login'
					className='login-form'
					initialValues={{ remember: true }}
				>
					<Form.Item
						name='fullname'
						type='text'
						rules={[{ required: true, message: "Please input your name!" }]}
					>
						<Input placeholder='Họ và tên' />
					</Form.Item>
					<Form.Item
						name='phonenumber'
						type='number'
						rules={[
							{ required: true, message: "Please input your phone number!" },
						]}
					>
						<Input placeholder='Số điện thoại' />
					</Form.Item>
					<Form.Item
						name='email'
						type='email'
						rules={[{ required: true, message: "Please input your email!" }]}
					>
						<Input type='email' placeholder='Địa chỉ email' />
					</Form.Item>
					<Form.Item
						name='TextArea'
						type='textarea'
						rules={[{ required: true, message: "Please input your message!" }]}
					>
						<TextArea placeholder='Nội dung quan tâm' />
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
							style={{ backgroundColor: "#761c1d", border: "#761c1d" }}
						>
							GỬI THÔNG TIN
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default AppContact;
