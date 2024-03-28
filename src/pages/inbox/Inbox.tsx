import { MdInbox, MdOutlinePeopleOutline } from "react-icons/md";
import useListParams from "../../components/list/useListParams";
import { PiTag } from "react-icons/pi";

const Inbox = () => {
	const { iconSize } = useListParams();
	return (
		<div>
			<div style={{ borderBottom: "1px solid rgba(180, 182, 187, 0.3)" }}>
				<div className="col-7 d-flex align-items-center">
					<div className="align-self-stretch align-items-center d-flex col ps-3 pe-0 py-3 x primary" style={{ color: "#0b57d0", position: "relative" }}>
						<div className="d-flex ps-3">
							<MdInbox size={iconSize} />
							<h4 className="ms-4">Primary</h4>
						</div>
					</div>
					<div className="promotion d-flex align-self-stretch align-items-center col ps-4 pt-3 pb-2 x">
						<PiTag size={iconSize} />
						<div className="ms-4 pe-3">
							<div className="primary_heading d-flex " style={{ marginBottom: "-5px" }}>
								<h4 className="me-3">Promotions</h4>
								<span>badge</span>
							</div>
							<span style={{ fontSize: "1.2rem", color: "grey" }}>Adobe Acrobat, Course Hero, S..</span>
						</div>
					</div>
					<div className="social align-self-stretch d-flex align-items-center col ps-4 pe-0 x">
						<MdOutlinePeopleOutline size={iconSize} />
						<h4 className="ms-4">Social</h4>
					</div>
				</div>
			</div>

			<div className="messages">Message here</div>
			{/* <p>inbox1</p>
			<p>inbox2</p>
			<p>inbox3</p>
			<p>inbox4</p>
			<p>inbox5</p>
			<p>inbox6</p>
			<p>inbox7</p>
			<p>inbox8</p>
			<p>inbox9</p>
			<p>inbox10</p>
			<p>inbox11</p>
			<p>inbox12</p>
			<p>inbox13</p>
			<p>inbox14</p>
			<p>inbox15</p>
			<p>inbox16</p>
			<p>inbox17</p>
			<p>inbox18</p>
			<p>inbox19</p>
			<p>inbox20</p>
			<p>inbox21</p>
			<p>inbox22</p>
			<p>inbox23</p>
			<p>inbox24</p>
			<p>inbox25</p>
			<p>inbox26</p>
			<p>inbox27</p>
			<p>inbox28</p>
			<p>inbox29</p>
			<p>inbox30</p>
			<p>inbox31</p>
			<p>inbox32</p>
			<p>inbox33</p>
			<p>inbox34</p>
			<p>inbox35</p>
			<p>inbox36</p>
			<p>inbox37</p>
			<p>inbox38</p>
			<p>inbox39</p>
			<p>inbox40</p>
			<p>inbox41</p>
			<p>inbox42</p>
			<p>inbox43</p>
			<p>inbox44</p>
			<p>inbox45</p>
			<p>inbox46</p>
			<p>inbox47</p>
			<p>inbox48</p>
			<p>inbox49</p>
			<p>inbox50</p>
			<p>inbox51</p>
			<p>inbox52</p>
			<p>inbox53</p>
			<p>inbox54</p>
			<p>inbox55</p>
			<p>inbox56</p>
			<p>inbox57</p>
			<p>inbox58</p>
			<p>inbox59</p>
			<p>inbox60</p>
			<p>inbox61</p>
			<p>inbox62</p>
			<p>inbox63</p>
			<p>inbox64</p>
			<p>inbox65</p>
			<p>inbox66</p>
			<p>inbox67</p>
			<p>inbox68</p>
			<p>inbox69</p>
			<p>inbox70</p>
			<p>inbox71</p>
			<p>inbox72</p>
			<p>inbox73</p>
			<p>inbox74</p>
			<p>inbox75</p>
			<p>inbox76</p>
			<p>inbox77</p>
			<p>inbox78</p>
			<p>inbox79</p>
			<p>inbox80</p>
			<p>inbox81</p>
			<p>inbox82</p>
			<p>inbox83</p>
			<p>inbox84</p>
			<p>inbox85</p>
			<p>inbox86</p>
			<p>inbox87</p>
			<p>inbox88</p>
			<p>inbox89</p>
			<p>inbox90</p>
			<p>inbox91</p>
			<p>inbox92</p>
			<p>inbox93</p>
			<p>inbox94</p>
			<p>inbox95</p>
			<p>inbox96</p>
			<p>inbox97</p>
			<p>inbox98</p>
			<p>inbox99</p>
			<p>inbox100</p> */}
		</div>
	);
};

export default Inbox;
