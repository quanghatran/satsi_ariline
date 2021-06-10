import { BackTop, Col, Row } from "antd";
import logo from "../../images/logo_footer.png";

const AppFooter = () => {
	return (
		<div className='container-fluid'>
			<div className='footer'>
				<div className='titleHolder'>
					<h2 style={{ color: "#fff" }}>
						SATSi - Viện Đào tạo Khởi nghiệp và Ứng dụng Khoa học Công nghệ cao
					</h2>
				</div>
				<Row gutter={[24, 24]}>
					<Col
						className='sloganSatsi'
						xs={{ span: 24 }}
						sm={{ span: 6 }}
						md={{ span: 6 }}
					>
						<div className='logo'>
							<img
								style={{ width: "110px", height: "auto" }}
								src={logo}
								alt=''
							/>
						</div>
						<h2
							className='sloganTitle'
							style={{ color: "#fff", fontStyle: "italic" }}
						>
							LỰA CHỌN VÌ TƯƠNG LAI
						</h2>
					</Col>
					<Col
						className='contactWrapper'
						xs={{ span: 24 }}
						sm={{ span: 10 }}
						md={{ span: 10 }}
						style={{ display: "flex", justifyContent: "center" }}
					>
						<ul className='listContact'>
							<li>
								<i className='iconContact fas fa-map-pin'></i> 01- BT9 KĐT Văn
								Khê, Hà Đông, Hà Nội
							</li>
							<li>
								<i className='iconContact fas fa-phone-square-alt'></i>024 223
								71 777
							</li>
							<li>
								<i className='iconContact fas fa-phone-volume'></i> 097 8586 755
							</li>
							<li>
								<i className='iconContact fas fa-phone-volume'></i> 0962 917 755
							</li>
							<li>
								<i className=' iconContact far fa-envelope'></i>{" "}
								satsi.edu@gmail.com
							</li>
							<li>
								<i className='iconContact fab fa-facebook'></i>
								<a href='https://www.facebook.com/duhocducsatsi'>
									duhocducsatsi
								</a>
							</li>
							<li>
								<i className='iconContact fab fa-internet-explorer'></i>
								<a href='http://satsi.edu.vn/'>www.satsi.edu.vn</a>
							</li>
						</ul>
					</Col>
					<Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
						<div>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.491141912446!2d105.7590120147541!3d20.97294069505785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453b311f4c94d%3A0xa84f3ad42d3983bd!2zU0FUU0kgLSBWSeG7hk4gxJDDgE8gVOG6oE8gS0jhu55JIE5HSEnhu4ZQIFbDgCDhu6hORyBE4bukTkcgS0hPQSBI4buMQyBDw5RORyBOR0jhu4YgQ0FP!5e0!3m2!1svi!2s!4v1622221019649!5m2!1svi!2s'
								width='100%'
								height='250px'
								loading='lazy'
							></iframe>
						</div>
					</Col>
				</Row>
				<div className='copyright'>
					<br />
					Copyright &copy; 2021 -{" "}
					<a href='http://satsi.edu.vn/'>www.satsi.edu.vn </a>{" "}
					<span> | Bản quyền thuộc về thương hiệu SATSI</span>
				</div>
				<BackTop>
					<div className='goTop'>
						<i style={{ color: "#000" }} className='fas fa-arrow-circle-up'></i>
					</div>
				</BackTop>
			</div>
		</div>
	);
};

export default AppFooter;
