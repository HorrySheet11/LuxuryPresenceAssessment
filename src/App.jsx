import "./index.css"

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/lets-move">Let's Move</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </nav>
        <img src=".\asset\image\MARCIMETZGER.webp" alt="logo" />
      </header>

      <section className="hero">
        <h4>MARCI METZGER - THE RIDGE REALTY GROUP</h4>
        <h1>Pahrump Realtor</h1>
        <button>CALL NOW</button>
      </section>

      <section className="about-me">
        <h2>MARCI METZGER</h2>
        <img src=".\assets\images\personPic.webp" alt="personPicture" />
        <h3>REALTOR FOR NEARLY 3 DECADES</h3>
        <h4><a href="tel:+1-206-919-6886">206-919-6886</a></h4>
      </section>

      <section className="get-it-sold">
        <h2>GET IT SOLD</h2>
        <div>
          <img src=".\assets\images\resident1.webp" alt="resident1" />
          <div>
            <h3>Top Residential Sales Last 5 Years</h3>
            <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
          </div>
          <div>
            <h3>Don't Just List it...</h3>
            <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
          </div>
          <img src=".\assets\images\resident2.webp" alt="resident1" />
          <img src=".\assets\images\resident3.webp" alt="resident1" />
          <div>
            <h3>Guide to Buyers</h3>
            <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
          </div>
        </div>
      </section>

      <section className="find-home">
        <h2>Find Your Dream Home</h2>
        <form className='forms-earch'>
          <h2>Search Listings</h2>
          <label htmlFor="">Location <select><option value="">Any</option></select></label>
          <label htmlFor="">Type <select><option value="">Any</option>
          <option value="">Land</option><option value="">Residential Lease</option><option value="">High Rise</option><option value="">Residential</option></select></label>
        </form>
      </section>
    </div>
  );
}

export default App;