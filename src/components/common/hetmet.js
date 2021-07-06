import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = () => {
	return (
		<Helmet>
			<title>Hàng Không - SATSi</title>

			<meta property='og:image' content='./logo_satsi.png' />

			<meta property='og:image:width' content='180' />

			<meta property='og:image:height' content='110' />

			<meta
				name='description'
				content='Đào tạo nghiệp vụ Hàng Không - chắp cánh ước mơ vào ngành Hàng Không'
			/>
		</Helmet>
	);
};

export default HelmetComponent;
