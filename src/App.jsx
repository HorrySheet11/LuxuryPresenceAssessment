import "./index.css";
import { FaFacebook, FaLinkedin, FaBars  } from "react-icons/fa";
import { FaInstagram, FaYelp } from "react-icons/fa6";
import logo from "./assets/images/MARCIMETZGER.webp";
import personPic from "./assets/images/personPic.webp";
import resident1 from "./assets/images/resident1.webp";
import resident2 from "./assets/images/resident2.webp";
import resident3 from "./assets/images/resident3.webp";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";

function App() {
	const [open, setOpen] = useState(false);
	const nav = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Listings",
			link: "/listings",
		},
		{
			name: "Let's Move",
			link: "/lets-move",
		},
		{
			name: "About Us",
			link: "/about-us",
		},
	];

	const contacts = [
		{
			icon: <FaFacebook />,
			alt: "facebook",
		},
		{
			icon: <FaLinkedin />,
			alt: "linkedin",
		},
		{
			icon: <FaInstagram />,
			alt: "instagram",
		},
		{
			icon: <FaYelp />,
			alt: "yelp",
		},
	];
	return (
		<>
			<Drawer open={open} onClose={() => setOpen(false)}>
				<div className="drawer p-5">
					<nav>
						<ul className="flex flex-col gap-8">
							{nav.map((item) => (
								<li key={item.name}>
									<a href={item.link} className="text-2xl">{item.name}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Drawer>
			<header className="header px-[5%] flex flex-row justify-between align-center sticky top-0 bg-white border-b">
				{/* <nav>
					<ul>
						{nav.map((item) => (
							<li key={item.name}>
								<a href={item.link}>{item.name}</a>
							</li>
						))}
					</ul>
				</nav> */}

				<FaBars onClick={() => setOpen(true)} size={30} className="cursor-pointer my-auto"/>

				<img src={logo} alt="MARCIMETZGERLogo" height={20} className='h-20'/>
			</header>

			<section className="hero text-white bg-gray-800">
				<h1>PAHRUMP REALTOR</h1>
				<h4 className="mb-4">MARCI METZGER - THE RIDGE REALTY GROUP</h4>
				<button type="button" onClick={() => {}} className="button cursor-pointer px-10 py-5 bg-green-800 rounded-4xl text-white font-bold">CALL NOW</button>
			</section>

				<section className="about-me text-gray-900 grid grid-cols-2 gap-[30%] bg-cover bg-fixed bg-[url(https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1279,m)]">
					<div className="flex flex-col justify-center">
						<h4 className=" text-4xl">MARCI METZGER</h4>
						<h3>REALTOR FOR NEARLY 3 DECADES</h3>
						<h4>
							<a href="tel:+1-206-919-6886">206-919-6886</a>
						</h4>
					</div>
					<img src={personPic} alt="personPicture" className='rounded-4xl'/>
				</section>

			<section className="get-it-sold flex flex-col gap-20">
				<h3 className=" text-4xl">GET IT SOLD</h3>
				<div className="grid grid-cols-2 gap-20">
					<img src={resident1} alt="resident1" />
					<div>
						<h3>Top Residential Sales Last 5 Years</h3>
						<p>
							We helped nearly 90 clients in 2021, and closed 28.5 million in
							sales! Our team works hard everyday to grow and learn, so that we
							may continue to excel in our market. Our clients deserve our best,
							& we want to make sure our best is better every year.
						</p>
					</div>
					<div>
						<h3>Don't Just List it...</h3>
						<p>
							Get it SOLD! We exhaust every avenue to ensure our listings are at
							the fingertips of every possible buyer, getting you top dollar for
							your home.
						</p>
					</div>
					<img src={resident2} alt="resident2" />
					<img src={resident3} alt="resident3" />
					<div>
						<h3>Guide to Buyers</h3>
						<p>
							Nobody knows the market like we do. Enjoy having a pro at your
							service. Market analysis, upgrades lists, contractors on speed
							dial, & more!
						</p>
					</div>
				</div>
			</section>

			<section className="find-home">
				<h2>Find Your Dream Home</h2>
				<form className="forms-search">
					<h2>Search Listings</h2>
					<label htmlFor="">
						Location{" "}
						<select>
							<option value="">Any</option>
						</select>
					</label>
					<label htmlFor="">
						Type{" "}
						<select>
							<option value="">Any</option>
							<option value="">Land</option>
							<option value="">Residential Lease</option>
							<option value="">High Rise</option>
							<option value="">Residential</option>
						</select>
					</label>
					<label htmlFor="">
						Bedrooms{" "}
						<select>
							<option value="">Any Number</option>
						</select>
					</label>
					<label htmlFor="">
						Baths{" "}
						<select>
							<option value="">Any Number</option>
						</select>
					</label>
					<label htmlFor="">
						Min Price <input type="number" />
					</label>
					<label htmlFor="">
						Max Price <input type="number" />
					</label>
					<button type="submit">Search NOW</button>
				</form>
			</section>

			<section className="logos">
				<img src=".\assets\images\ridge.webp" alt="" />
				<img src=".\assets\images\EQO.webp" alt="" />
				<img src=".\assets\images\realtor.webp" alt="" />
				<img src=".\assets\images\pahrump.webp" alt="" />
			</section>

			<section className="photo-gallery"></section>

			<section className="services">
				<h2>OUR SERVICES</h2>
				<div className="services-container">
					<div className="service">
						<img src=".\assets\images\realEstate.webp" alt="" />
						<h4>Real Estate Done Right</h4>
						<p>
							Nervous about your property adventure? Don’t be. Whether you're
							getting ready to buy or sell your residence, looking at investment
							properties, or just curious about the markets, our team ensures
							you get the best experience possible!
						</p>
					</div>
					<div className="service">
						<img src=".\assets\images\commercialResidential.webp" alt="" />
						<h4>Commercial & Residential</h4>
						<p>
							Large or small, condo or mansion, we can find it and get at the
							price that's right. Fixer-uppers? Luxury? We can help with all of
							it! We live, work, and play in this community. Happy to help you
							find where to put you hard-earned dollars.
						</p>
					</div>
					<div className="service">
						<img src=".\assets\images\expertise.webp" alt="" />
						<h4>Rely on Expertise</h4>
						<p>
							If you have questions about affordability, credit, and loan
							options, trust us to connect you with the right people to get the
							answers you need in a timely fashion. We make sure you feel
							confident and educated every step of the way.
						</p>
					</div>
				</div>
			</section>

			<section className="contacts">{contacts.map((contact) => {
				return (
					<div className="contact" key={contact.alt}>
						{contact.icon}
					</div>
				);
			})}</section>

			<section className="call-or-visit">
				<h2>CALL OR VISIT</h2>
				<div>
					<form className="send-msg">
						<h3>Send Message</h3>
						<input type="text" />
						<input type="email" name="" id="" />
						<textarea name="" id=""></textarea>
						<button type="submit">Send</button>
					</form>
					<div>
						<h3>Marci Metzger - THE RIDGE REALTY GROUP</h3>
						<p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
						<p>
							<a href="tel:1-206-919-6886">(206) 919-6886</a>
						</p>
						<h3>Office Hours</h3>
						<p>Open Daily{"   "} 8:00 am - 7:00 pm</p>
						<p>
							Appointments outside office hours available upon request. Just
							call!
						</p>
					</div>
				</div>
			</section>

			<section className="map"></section>

			<footer></footer>
		</>
	);
}

export default App;
