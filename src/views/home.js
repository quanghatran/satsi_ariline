import RegisterBtn from "../components/common/registerBtn";
import AppBanner from "../components/home/banner";
import AppConditions from "../components/home/conditions";
import AppContact from "../components/home/contact";
import AppHotBranch from "../components/home/hotBranch";
import AppIncomes from "../components/home/incomes";
import AppPartners from "../components/home/partners";
import AppSteps from "../components/home/steps";
import AppTestimonial from "../components/home/testimonial";
import AppActions from "../components/home/actions";
import AppTraining from "../components/home/tranings";
import AppTrend from "../components/home/trend";

function AppHome() {
	return (
		<div className='main'>
			<AppBanner />
			<AppTrend />
			<AppIncomes />
			<AppHotBranch />
			<AppConditions />
			<AppSteps />
			<AppTraining />
			<AppPartners />
			<AppTestimonial />
			<AppActions />
			<AppContact />
			<RegisterBtn />
		</div>
	);
}

export default AppHome;
