import { Link } from "react-router-dom";

const Aside = () => {
	return (
		<>
			<li className="bg-info">
				<Link to="/inbox">inbox</Link>
			</li>

			<li>
				<Link to="/promotion">primary</Link>
			</li>
		</>
	);
};

export default Aside;
