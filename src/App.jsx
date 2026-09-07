function App() {
	return (
		<>
			<section>
				<header className="sticky top-0 z-[1000] bg-white px-0 py-4 border-b border-gray-200">
					<a href="/" className="logo-link">
						<img
							src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png"
							alt="Marci Metzger"
							className="h-15 w-auto"
						/>
					</a>
					<nav className="main-nav">
						<ul className="flex list-none gap-8">
							<li>
								<a href="/" className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
									Home
								</a>
							</li>
							<li>
								<a href="/listings" className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
									Listings
								</a>
							</li>
							<li>
								<a href="/lets-move" className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
									Let's Move
								</a>
							</li>
							<li>
								<a href="/about-us" className="text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
									About Us
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</section>

			<section className="hero">
				<h1 className="text-[2.5rem] mb-4 text-[#2c3e50]">
					Marci Metzger - THE RIDGE REALTY GROUP
				</h1>
				<h2 className="text-2xl mb-6 text-[#7f8c8d] font-normal">
					Pahrump Realtor
				</h2>
				<a href="tel:(206) 919-6886" className="inline-block bg-red-600 text-white px-8 py-3 rounded font-bold transition-colors duration-300 hover:bg-red-700 text-[1.1rem] cursor-pointer">
					CALL NOW
				</a>
			</section>

			<section className="about">
				<h3 className="text-3xl mb-4 text-[#2c3e50]">
					Marci Metzger
				</h3>
				<img
					src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg"
					alt="Marci Metzger"
					className="w-50 h-50 rounded-full object-cover mb-6 border-4 border-[#ecf0f1]"
				/>
				<p className="text-[1.2rem] mb-4 text-gray-600 italic">
					REALTOR FOR NEARLY 3 DECADES
				</p>
				<a href="tel:(206) 919-6886" className="text-red-600 font-bold hover:underline">
					206-919-6886
				</a>
			</section>

			<section className="get-it-sold">
				<h3 className="text-3xl mb-6 text-[#2c3e50]">
					Get IT SOLD
				</h3>
				<div className="get-it-sold-grid grid gap-8">
					<img
						src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db7a0b.jpg"
						alt="Get IT Sold"
					/>
					<div>
						<h4 className="text-[1.8rem] mb-6 text-[#2c3e50]">
							Top Residential Sales Last 5 Years
						</h4>
						<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
							We helped nearly 90 clients in 2021, and closed 28.5 million in
							sales! <br /> Our team works hard everyday to grow and learn, so
							that we may continue to excel <br /> in our market. Our clients
							deserve our best, & we want to make sure our best is better every
							year.
						</p>
					</div>
					<div>
						<h4 className="text-[1.8rem] mb-6 text-[#2c3e50]">
							Top Residential Sales Last 5 Years
						</h4>
						<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
							We helped nearly 90 clients in 2021, and closed 28.5 million in
							sales! <br /> Our team works hard everyday to grow and learn, so
							that we may continue to excel <br /> in our market. Our clients
							deserve our best, & we want to make sure our best is better every
							year.
						</p>
					</div>
					<img
						src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db7a0b.jpg"
						alt="Get IT Sold"
					/>
					<img
						src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db7a0b.jpg"
						alt="Get IT Sold"
					/>
					<div>
						<h4 className="text-[1.8rem] mb-6 text-[#2c3e50]">
							Top Residential Sales Last 5 Years
						</h4>
						<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
							We helped nearly 90 clients in 2021, and closed 28.5 million in
							sales! <br /> Our team works hard everyday to grow and learn, so
							that we may continue to excel <br /> in our market. Our clients
							deserve our best, & we want to make sure our best is better every
							year.
						</p>
					</div>
				</div>
			</section>

			<section className="listings-search">
				<h6 className="text-[1.8rem] mb-8 text-[#2c3e50]">
					Find Your Dream Home
				</h6>
				<form className="grid gap-4 max-w-xl mx-auto">
					<label className="flex flex-col text-left font-medium">
						Location <input type="text" className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25" />
					</label>
					<label className="flex flex-col text-left font-medium">
						Type{" "}
						<select className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25">
							<option value="">Any</option>
						</select>
					</label>
					<label className="flex flex-col text-left font-medium">
						Sort By <select className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25">…</select>
					</label>
					<label className="flex flex-col text-left font-medium">
						Bedrooms <select className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25">…</select>
					</label>
					<label className="flex flex-col text-left font-medium">
						Baths <select className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25">…</select>
					</label>
					<label className="flex flex-col text-left font-medium">
						Min Price <input type="number" className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25" />
					</label>
					<label className="flex flex-col text-left font-medium">
						Max Price <input type="number" className="px-3 py-2 border border-gray-300 rounded text-sm mt-1 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-25" />
					</label>
					<button type="submit" className="bg-red-600 text-white px-8 py-3 rounded text-[1.1rem] font-bold transition-colors duration-300 hover:bg-red-700 self-start cursor-pointer">
						Search Now
					</button>
				</form>
			</section>

			<section className="photo-gallery" aria-label="Photo Gallery">
				{/* placeholder images */}
			</section>

			<section className="services">
				<h4 className="text-[1.8rem] mb-6 text-[#2c3e50]">
					Our Services
				</h4>
				<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
					“Real Estate Done Right”
				</p>
				<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
					“Commercial & Residential”
				</p>
				<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
					“Rely on Expertise”
				</p>
				<p className="text-[1.1rem] mb-4 text-gray-600 leading-[1.7]">
					“If you have questions about affordability, credit, and loan options…”
				</p>
			</section>

			<section className="call-visit">
				<h5 className="text-[1.8rem] mb-6 text-[#2c3e50]">
					Call or Visit
				</h5>
				<address className="not-italic bg-gray-50 p-6 rounded-lg mb-6 inline-block">
					Marci Metzger - THE RIDGE REALTY GROUP
					<br />
					3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
					<br />
					<a href="tel:2069196886" className="text-red-600 font-bold hover:underline">(206) 919-6886</a>
				</address>
				<p className="mb-2 text-gray-600 italic">
					“Office Hours”
				</p>
				<p className="mb-2 text-gray-600 italic">
					Open today 08:00 am – 07:00 pm
					<br className="my-2"/>
					Open daily 8:00 am - 7:00 pm
				</p>
				<div className="social-icons flex gap-4 justify-center mt-6">
					<a href="https://www.facebook.com/MarciHomes/" aria-label="Facebook" className="inline-flex w-10 h-10 bg-gray-50 rounded-full items-center justify-center text-gray-800 no-underline transition-colors duration-300 border border-gray-300 hover:bg-blue-600 hover:text-white hover:-translate-y-[3px] hover:border-blue-600">
						F
					</a>
					<a
						href="https://www.instagram.com/marcimetzger_theridge/"
						aria-label="Instagram"
						className="inline-flex w-10 h-10 bg-gray-50 rounded-full items-center justify-center text-gray-800 no-underline transition-colors duration-300 border border-gray-300 hover:bg-blue-600 hover:text-white hover:-translate-y-[3px] hover:border-blue-600"
					>
						I
					</a>
					<a
						href="https://www.linkedin.com/in/marci-metzger-30642496/"
						aria-label="LinkedIn"
						className="inline-flex w-10 h-10 bg-gray-50 rounded-full items-center justify-center text-gray-800 no-underline transition-colors duration-300 border border-gray-300 hover:bg-blue-600 hover:text-white hover:-translate-y-[3px] hover:border-blue-600"
					>
						L
					</a>
					<a
						href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
						aria-label="Yelp"
						className="inline-flex w-10 h-10 bg-gray-50 rounded-full items-center justify-center text-gray-800 no-underline transition-colors duration-300 border border-gray-300 hover:bg-blue-600 hover:text-white hover:-translate-y-[3px] hover:border-blue-600"
					>
						Y
					</a>
				</div>
			</section>

			<footer className="site-footer">
				<p className="mb-6 text-[1.1rem]">
					© 2026 Marci METZGER - All Rights Reserved
				</p>
				{/* <section className="cookie-notice">
	          <p>“This website uses cookies.”</p>
	          <button>Accept</button>
	        </section> */}
			</footer>
		</>
	);
}

export default App;