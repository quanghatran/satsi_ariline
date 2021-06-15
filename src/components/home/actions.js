import Slider from "react-slick";
import action1 from "../../images/02.png";
import action2 from "../../images/03.png";
import action3 from "../../images/04.png";
import action4 from "../../images/05.png";
import action5 from "../../images/06.png";

const AppActions = () => {
	const dataActions = [action1, action2, action3, action4, action5];
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div id='actions' className='block blockTestimonial'>
			<div className='container-fluid'>
				<div className='titleHolder'>
					<h1>Hoạt động đào tạo</h1>
				</div>

				<Slider {...settings}>
					{dataActions.map((action, index) => (
						<div className='data' key={index}>
							<div className='actionInside'>
								<img src={action} alt='' style={{ width: "100%" }} />
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default AppActions;
