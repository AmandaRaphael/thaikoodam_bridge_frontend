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

						<div className="contact-form-parent">
							<form>
								<fieldset className="contact-form">
									{/* <legend>Contact Us</legend> */}
									<div className="name control-margin">
										<label for="first_name">
											Your Name:<span>*</span>
										</label>
										<input
											type="text"
											q
											name="firstName"
											id="first_name"
											required
										/>
									</div>
									<div className="email control-margin">
										<label for="Email">
											Email:<span>*</span>
										</label>
										<input
											type="email"
											name="email"
											id="Email"
											placeholder="smithbob@gmail.com"
											required
										/>
									</div>
									<div className="number control-margin">
										<label for="phone">Phone Number:(optional)</label>
										<input type="number" name="phn" id="phone" />
									</div>
									<div className="message control-margin">
										<label for="message">Your Message:</label>
										<textarea
											name="msg"
											id="message"
											min="5"
											max="150"
											rows="3"
											cols="62"
										></textarea>
									</div>
									<div class="contact">
										<label for="contact">
											How do you like to be contacted?
										</label>
										<br></br>
										<label for="contactP">phone</label>
										<input type="radio" name="Contact" id="contactP" />

										<label for="contactE">email</label>
										<input type="radio" name="Contact" id="contactE" />
									</div>
									<div class="button">
										<input type="submit" className="submitButton" />
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
