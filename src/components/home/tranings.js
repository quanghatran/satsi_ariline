import { Col, Collapse, Row } from "antd";

const { Panel } = Collapse;

const contentTrainings = [
	{
		key: 1,
		title: "Giai đoạn I",
		content:
			"<li>- Đào tạo tiếng Anh giao tiếp </li> <li>- Đào tạo kỹ năng giao tiếp </li> <li>- Đào tạo các kỹ năng mềm: đi, đứng, nói, cười, học võ, sơ cứu, xử lý tình huống,...</li>",
	},
	{
		key: 2,
		title: "Giai đoạn II",
		content:
			"<li>- Đào tạo tiếng Anh chuyên ngành Hàng không </li> <li>- Đào tạo nghiệp vụ Hàng không theo từng ngành học</li>",
	},
	{
		key: 3,
		title: "Giai đoạn III",
		content:
			"<li>- Học và thực hành tại sân bay Vân Đồn/ Tân Sơn Nhất...</li> <li>- Học kỹ năng thi tuyển để ứng cử vào các vị trí trong các hãng, cảng Hàng không </li> ",
	},
];

const AppTraining = () => {
	return (
		<div id='training' className='block trainingBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>GIAI ĐOẠN ĐÀO TẠO</h2>
				</div>
				<Row gutter={[24, 24]}>
					{contentTrainings.map((contentTraining) => (
						<Col
							xs={{ span: 24 }}
							sm={{ span: 24 }}
							md={{ span: 8 }}
							className={"contentTraining"}
							key={contentTraining.key}
						>
							<h3>{contentTraining.title}</h3>
							<ul
								dangerouslySetInnerHTML={{ __html: contentTraining.content }}
							></ul>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default AppTraining;
