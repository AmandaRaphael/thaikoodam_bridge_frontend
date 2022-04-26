import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ContactUs() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<div className="contact-container">
				<div className="contact-box">
					<h2>Contact Us</h2>
					<div className="flex">
						<div className="contact-info">
							<div>
								<p>You are planning an event or have questions?</p>
								<p>
									<span> Reach out to us via our form or email us at</span>
									<a href="mailto: info@bentofoodtruck.de ">
										info@bentofoodtruck.de
									</a>
								</p>
								You can also reach us directly Mon - Fri , 10.00 - 17.00 under{" "}
								<a href="tel:0176-70834316">0176-70834316</a>.
							</div>
							{/* <p>
								For more information, visit us on our social media channels:
							</p> */}
						</div>

						
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
