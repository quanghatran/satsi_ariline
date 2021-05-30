import { Anchor, Button, Drawer } from "antd";
import React, { useState } from "react";
import logo from "../../images/logo_satsi.png";

const { Link } = Anchor;

function AppHeader() {
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};
	return (
		<div style={{ boxShadow: "0 .5rem .5rem rgba(0,0,0,.15)" }}>
			<div className='container-fluid'>
				<div className='header'>
					<div className='logo'>
						<a href='/' style={{ marginLeft: "-10px" }}>
							<img src={logo} alt='logo_satsi' />
						</a>
						{/* <a href='#'>SATSi</a> */}
					</div>

					<div className='mobileHidden'>
						<Anchor targetOffset='65'>
							<Link href='#air' title='Ngành Hàng Không' />
							{/* <Link href='#incomes' title='Thu Nhập' /> */}
							<Link href='#selections' title='Các Ngành Hot' />
							<Link href='#conditions' title='Điều Kiện Ứng Tuyển' />
							<Link href='#steps' title='Các Bước Tham Gia' />
							<Link href='#training' title='Giai Đoạn Đào Tạo' />
							<Link href='#contact' title='Liên Hệ' />
						</Anchor>
					</div>

					<div className='mobileVisible'>
						<Button
							style={{
								backgroundColor: "#721b00",
								border: "1px solid #721b00",
							}}
							type='primary'
							onClick={showDrawer}
						>
							<i className='fas fa-bars'></i>
						</Button>
						<Drawer
							placement='left'
							closable={true}
							onClose={onClose}
							visible={visible}
						>
							<img
								src={logo}
								alt=''
								style={{ width: "80%", height: "auto", marginBottom: "1.7rem" }}
							/>
							<Anchor targetOffset='65'>
								<Link href='#air' title='Ngành Hàng Không' />
								{/* <Link href='#incomes' title='Thu Nhập' /> */}
								<Link href='#selections' title='Các Ngành Học' />
								<Link href='#conditions' title='Điều Kiện Ứng Tuyển' />
								<Link href='#steps' title='Các Bước Tham Gia' />
								<Link href='#training' title='Giai Đoạn Đào Tạo' />
								<Link href='#contact' title='Liên Hệ' />
							</Anchor>
						</Drawer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;
