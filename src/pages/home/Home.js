import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import HomePage from "../../Component/HomePage/HomePage";

const Home = () => {
	return (
		<div className="container-fluid px-5">
			<Header />
			<HomePage />
			<Footer />
		</div>
	);
};

export default Home;
