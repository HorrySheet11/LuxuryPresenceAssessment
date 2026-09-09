import "./index.css";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { FaBars, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaYelp } from "react-icons/fa6";
import EQO from "./assets/images/logos/EQO.webp";
import logo from "./assets/images/logos/MARCIMETZGER.webp";
import pahrump from "./assets/images/logos/pahrump.webp";
import realtor from "./assets/images/logos/realtor.webp";
import ridge from "./assets/images/logos/ridge.webp";
import personPic from "./assets/images/personPic.webp";
import resident1 from "./assets/images/residents/resident1.webp";
import resident2 from "./assets/images/residents/resident2.webp";
import resident3 from "./assets/images/residents/resident3.webp";
import commercialResidential from "./assets/images/services/commercialResidential.webp";
import expertise from "./assets/images/services/expertise.webp";
import realEstate from "./assets/images/services/realEstate.webp";
import PhotoGallery from "./components/PhotoGallery";
import ScrollFadeIn from "./components/ScrollFadeIn";

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
			icon: <FaFacebook size={40} />,
			alt: "facebook",
		},
		{
			icon: <FaLinkedin size={40} />,
			alt: "linkedin",
		},
		{
			icon: <FaInstagram size={40} />,
			alt: "instagram",
		},
		{
			icon: <FaYelp size={40} />,
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
									<a href={item.link} className="text-2xl">
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Drawer>
			<header className="header px-[5%] flex flex-row justify-between align-center sticky top-0 bg-white border-b z-10 ">
				{/* <nav>
					<ul>
						{nav.map((item) => (
							<li key={item.name}>
								<a href={item.link}>{item.name}</a>
							</li>
						))}
					</ul>
				</nav> */}

				<FaBars
					onClick={() => setOpen(true)}
					size={30}
					className="cursor-pointer my-auto"
				/>

				<img src={logo} alt="MARCIMETZGERLogo" height={20} className="h-20" />
			</header>
			<ScrollFadeIn>
				<section className="hero text-white bg-linear-122 from-gray-800 to-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
					<h1 className="mb-6 ">PAHRUMP REALTOR</h1>
					<h4 className="mb-4 ">MARCI METZGER - THE RIDGE REALTY GROUP</h4>
					<button
						type="button"
						onClick={() => {}}
						className="button cursor-pointer px-10 py-5 bg-green-800 rounded-4xl text-white font-bold "
					>
						CALL NOW
					</button>
				</section>
			</ScrollFadeIn>
			<section className="about-me text-white  bg-cover bg-fixed bg-[url(https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1279,m)]">
				<ScrollFadeIn className={"grid grid-cols-2 gap-[30%]"}>
					<div className="flex flex-col justify-center ">
						<p className=" text-4xl text-shadow-2xs">MARCI METZGER</p>
						<p className=" text-xl">REALTOR FOR NEARLY 3 DECADES</p>
						<p className=" text-lg">
							<a href="tel:+1-206-919-6886">206-919-6886</a>
						</p>
					</div>
					<img
						src={personPic}
						alt="personPicture"
						className="rounded-4xl shadow-2xl"
					/>
				</ScrollFadeIn>
			</section>{" "}
			<ScrollFadeIn>
				<section className="get-it-sold flex flex-col gap-20 text-white bg-linear-122 from-gray-800 to-black">
					<h3 className=" text-4xl">GET IT SOLD</h3>
					<div className="grid grid-cols-2 gap-20">
						<div>
							<h3 className=" text-2xl mb-5">
								Top Residential Sales Last 5 Years
							</h3>
							<p>
								We helped nearly 90 clients in 2021, and closed 28.5 million in
								sales! Our team works hard everyday to grow and learn, so that
								we may continue to excel in our market. Our clients deserve our
								best, & we want to make sure our best is better every year.
							</p>
						</div>
						<img src={resident1} alt="resident1" className="rounded-2xl" />
						<img src={resident2} alt="resident2" className="rounded-2xl" />
						<div>
							<h3 className=" text-2xl mb-5">Don't Just List it...</h3>
							<p>
								Get it SOLD! We exhaust every avenue to ensure our listings are
								at the fingertips of every possible buyer, getting you top
								dollar for your home.
							</p>
						</div>
						<div>
							<h3 className=" text-2xl mb-5">Guide to Buyers</h3>
							<p>
								Nobody knows the market like we do. Enjoy having a pro at your
								service. Market analysis, upgrades lists, contractors on speed
								dial, & more!
							</p>
						</div>
						<img src={resident3} alt="resident3" className="rounded-2xl" />
					</div>
				</section>{" "}
			</ScrollFadeIn>
			<section className="find-home text-white bg-cover bg-fixed bg-[url(https://img1.wsimg.com/isteam/getty/2223376026/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1279,m)]">
				<ScrollFadeIn>
					<h2 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
						Find Your Dream Home
					</h2>
					<form className="forms-search bg-white text-black pb-10 pt-5 rounded-2xl">
						<fieldset className="grid grid-cols-6 gap-8 border mx-5 rounded-2xl p-5">
							<legend className="text-3xl ">Search Listings</legend>
							<label className="flex flex-col col-span-2 text-left">
								Location <br />
								<select>
									<option value="">Any</option>
								</select>
							</label>
							<label htmlFor="" className="">
								Type{" "}
								<select>
									<option value="">Any</option>
									<option value="">Land</option>
									<option value="">Residential Lease</option>
									<option value="">High Rise</option>
									<option value="">Residential</option>
								</select>
							</label>
							<label htmlFor="" className="">
								Sort By{" "}
								<select>
									<option value=""></option>
								</select>
							</label>
							<label htmlFor="" className="col-span-1">
								Bedrooms{" "}
								<select>
									<option value="">Any Number</option>
								</select>
							</label>
							<label htmlFor="" className="col-span-1">
								Baths{" "}
								<select>
									<option value="">Any Number</option>
								</select>
							</label>
							<label htmlFor="" className="col-span-1">
								Min Price{" "}
								<input
									type="number"
								/>
							</label>
							<label htmlFor="" className="col-span-1">
								Max Price{" "}
								<input
									type="number"
								/>
							</label>
							<button
								type="submit"
								className="col-span-2	bg-green-700 text-white rounded-2xl"
							>
								SEARCH NOW
							</button>
						</fieldset>
					</form>
				</ScrollFadeIn>
			</section>{" "}
			<ScrollFadeIn>
				<section className="logos flex flex-row justify-between py-[5%]">
					<img src={ridge} alt="ridge" />
					<img src={EQO} alt="EQO" />
					<img src={realtor} alt="realtor" />
					<img src={pahrump} alt="pahrump" />
				</section>{" "}
			</ScrollFadeIn>
			<ScrollFadeIn>
				<section className="photo-gallery bg-linear-122 from-gray-800 to-black text-white">
					<p className="text-4xl">PHOTO GALLERY</p>
					{/* <PhotoGallery /> */}
				</section>
			</ScrollFadeIn>
			<ScrollFadeIn>
				<section className="services flex flex-col gap-20">
					<p className="text-4xl">OUR SERVICES</p>
					<div className="services-container grid grid-cols-3 gap-[5%]">
						<div className="service">
							<img src={realEstate} alt="" />
							<h2>Real Estate Done Right</h2>
							<p>
								Nervous about your property adventure? Don’t be. Whether you're
								getting ready to buy or sell your residence, looking at
								investment properties, or just curious about the markets, our
								team ensures you get the best experience possible!
							</p>
						</div>
						<div className="service">
							<img src={commercialResidential} alt="" />
							<h2>Commercial & Residential</h2>
							<p>
								Large or small, condo or mansion, we can find it and get at the
								price that's right. Fixer-uppers? Luxury? We can help with all
								of it! We live, work, and play in this community. Happy to help
								you find where to put you hard-earned dollars.
							</p>
						</div>
						<div className="service">
							<img src={expertise} alt="" />
							<h2>Rely on Expertise</h2>
							<p>
								If you have questions about affordability, credit, and loan
								options, trust us to connect you with the right people to get
								the answers you need in a timely fashion. We make sure you feel
								confident and educated every step of the way.
							</p>
						</div>
					</div>
				</section>{" "}
			</ScrollFadeIn>
			<ScrollFadeIn>
				<section className="map grid grid-cols-2 p-0">
					<div className="map-container "></div>
					<div className="contact  py-[10%] px-[5%] bg-linear-180 from-gray-800 to-black text-white">
						<h2 className="mb-40">CALL OR VISIT</h2>
						<div className="grid grid-cols-2 gap-[5%] ">
							<form className="send-msg">
								<h3>Send Message</h3>
								<fieldset className="flex flex-col gap-5">
									<input type="text" placeholder="Name" className=''/>
									<input type="email" placeholder="Email" className=''/>
									<textarea name="" id="" placeholder="Message" className=''></textarea>
									<button type="submit" className="button cursor-pointer px-5 py-2	 bg-green-800 rounded-4xl text-white font-bold ">Send</button>
								</fieldset>
							</form>
							<div className="contact-info text-left flex flex-col gap-[5%]">
								<h2 className="font-bold">Marci Metzger - THE RIDGE REALTY GROUP</h2>
								<p>
									3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
								</p>
								<p className="font-bold">
									<a href="tel:1-206-919-6886">(206) 919-6886</a>
								</p>
								<p>Open Daily{"   "} <b>8:00 am</b> - <b>7:00 pm</b></p>
								<p>
									Appointments outside office hours available upon request. Just
									call!
								</p>
							</div>
						</div>
					</div>
				</section>{" "}
			</ScrollFadeIn>
			<ScrollFadeIn>
				<footer className="footer py-[1%] bg-linear-122 from-gray-800 to-black text-white flex flex-col gap-2">
					<div className="contact-container flex flex-row justify-around">
						{contacts.map((contact) => {
							return (
								<div className="contact " key={contact.alt}>
									{contact.icon}
								</div>
							);
						})}
					</div>
					<p className="text-gray-400">Copyright © 2026 Marci METZGER - All Rights Reserved</p>
				</footer>{" "}
			</ScrollFadeIn>
		</>
	);
}

export default App;
