import Slider from "react-slick";
import partner4 from "../../images/Bamboo-Airways-logo.png";
import partner1 from "../../images/Hoc_vien_Hang_khongVN.png";
import partner6 from "../../images/Jetstarairlines.png";
import partner2 from "../../images/logokent-daihan.png";
import partner3 from "../../images/pcbv_logo.png";
import partner5 from "../../images/vj-logo.0f71c68b.svg";

function AppPartners() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		autoplay: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// infinite: true,
					// dots: true
				},
			},
		],
		// dots: true,
	};

	const listPartners = [
		partner1,
		partner2,
		partner3,
		partner4,
		partner5,
		partner6,
	];

	return (
		<div id='works' className='block worksBlock'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h2>Đối Tác Chiến Lược</h2>
				</div>
				<Slider {...settings}>
					{listPartners.map((partner, index) => (
						<img
							style={{ width: "100%", height: "150px" }}
							src={partner}
							key='index'
							alt=''
						/>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default AppPartners;
