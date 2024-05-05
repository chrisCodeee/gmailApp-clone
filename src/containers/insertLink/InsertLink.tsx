import { IoClose } from "react-icons/io5";
import { BtnSecondary, Icon } from "../../components";
import { Link } from "react-router-dom";

const InsertLink = () => {
	return (
		<>
			<div className="" style={{ position: "absolute", top: 0, left: "0", height: "100vh", width: "100vw", backgroundColor: "rgba(0,0,0,.3)", zIndex: "10000", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<div className="" style={{ width: "625px", backgroundColor: "#fff", borderRadius: "5px", padding: "1.5rem 1.5rem 1.5rem 2.5rem" }}>
					<div className="d-flex justify-content-between align-items-center">
						<span style={{ fontSize: "2.2rem" }}>Edit Link</span>
						<Icon>
							<IoClose size={25} />
						</Icon>
					</div>

					<div className="d-flex" style={{ paddingRight: "1.5rem", margin: "1rem 0" }}>
						<label htmlFor="textToDisplay" style={{ marginRight: "1rem" }}>
							Text to display:
						</label>
						<input type="text" id="textToDisplay" style={{ border: "1px solid #000", borderRadius: "3px", flexGrow: "1" }} />
					</div>

					<div className="">
						<span>Link to:</span>
						<div className="d-flex" style={{ padding: "0 1.5rem 0 1rem" }}>
							<div className="col-3" style={{ marginRight: "2rem" }}>
								<div className="d-flex align-items-center" style={{ margin: ".6rem 0" }}>
									<input type="radio" name="textAddress" id="webAddress" checked />
									<label htmlFor="webAddress" style={{ marginLeft: ".5rem" }}>
										Web address
									</label>
								</div>

								<div className="d-flex align-items-center">
									<input type="radio" name="textAddress" id="emailAddress" />
									<label htmlFor="emailAddress" style={{ marginLeft: ".5rem" }}>
										Email address
									</label>
								</div>
							</div>
							<div className="" style={{ marginTop: "-1.5rem" }}>
								<div className="">
									<label className="d-block" htmlFor="urlLink" style={{ fontWeight: "500" }}>
										To what URL should this link go?
									</label>
									<input type="text" id="urlLink" style={{ width: "100%", border: "1px solid #000", borderRadius: "3px" }} />
								</div>

								<div className="" style={{ marginTop: "1.3rem" }}>
									<Link to="" style={{ textDecoration: "underline", color: "rgb(17, 85, 204)" }}>
										Test this link
									</Link>

									<p style={{ fontSize: "1.11rem", marginTop: "1.5rem", lineHeight: "2" }}>
										<span style={{ fontWeight: "500" }}>Not sure what to put in the box?</span> First, find the page on the web that you want to link to. (A{" "}
										<Link to="" style={{ textDecoration: "underline", color: "rgb(17, 85, 204)" }}>
											search engine
										</Link>{" "}
										might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.
									</p>
								</div>

								<div className="d-flex justify-content-end" style={{ marginTop: "3rem" }}>
									<BtnSecondary name="Cancel" borderRadius="20px" />

									<button style={{ backgroundColor: "rgba(180, 182, 187, 0.15)", borderRadius: "20px", padding: "0.7rem 3rem", marginLeft: "1rem" }}>Ok</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InsertLink;
