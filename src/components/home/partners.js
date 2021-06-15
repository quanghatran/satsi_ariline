import Slider from "react-slick";
import partner1 from "../../images/partner1.jpg";
import partner2 from "../../images/partner2.jpg";
import partner3 from "../../images/partner3.jpg";
import partner4 from "../../images/partner4.jpg";
import partner5 from "../../images/partner5.jpg";
import partner6 from "../../images/vnas.png";

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
					slidesToShow: 3,
					slidesToScroll: 3,
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
		<div id='partner' className='block worksBlock blockPartners'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h1>Đối Tác Chiến Lược</h1>
				</div>
				<Slider {...settings}>
					{listPartners.map((partner, index) => (
						<img src={partner} key={index} alt='' />
					))}
				</Slider>
			</div>
		</div>
	);
}

export default AppPartners;
