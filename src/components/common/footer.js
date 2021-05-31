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
						sm={{ span: 24 }}
						md={{ span: 12 }}
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
						sm={{ span: 24 }}
						md={{ span: 12 }}
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<ul className='listContact'>
							<li>
								<i className='iconContact fas fa-map-pin'></i> 01- BT9 khu Đô
								thị Văn Khê, Hà Đông, Hà Nội, Việt Nam
							</li>
							<li>
								<i className='iconContact fas fa-phone-square-alt'></i>024 223
								71777
							</li>
							<li>
								<i className='iconContact fas fa-phone-volume'></i> 0962 2917755
							</li>
							<li>
								<i className=' iconContact far fa-envelope'></i>{" "}
								satsi.edu@gmail.com
							</li>
							<li>
								<i className='iconContact fab fa-internet-explorer'></i>
								<a href='http://satsi.edu.vn/'>www.satsi.edu.vn</a>
							</li>
						</ul>
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
						<i className='fas fa-arrow-circle-up'></i>
					</div>
				</BackTop>
			</div>
		</div>
	);
};

export default AppFooter;
