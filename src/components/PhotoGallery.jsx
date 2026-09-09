import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../assets/images/photoGallery/photo1.webp";
import photo2 from "../assets/images/photoGallery/photo2.webp";
import photo3 from "../assets/images/photoGallery/photo3.webp";
import photo4 from "../assets/images/photoGallery/photo4.webp";
import photo5 from "../assets/images/photoGallery/photo5.webp";
import photo6 from "../assets/images/photoGallery/photo6.webp";
import photo7 from "../assets/images/photoGallery/photo7.webp";

export default function PhotoGallery() {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const photos = [
		{ src: photo1, alt: "photo1" },
		{ src: photo2, alt: "photo2" },
		{ src: photo3, alt: "photo3" },
		{ src: photo4, alt: "photo4" },
		{ src: photo5, alt: "photo5" },
		{ src: photo6, alt: "photo6" },
		{ src: photo7, alt: "photo7" },
	];

	return (
			<Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.alt}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </Slider>
	);
}
