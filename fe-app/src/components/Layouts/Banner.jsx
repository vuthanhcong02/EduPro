import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
	const [slides, setSlides] = useState([
		{
			id: 1,
			title: "Khám phá ưu đãi mùa hè",
			subtitle: "Giảm giá lên đến 50%",
			description: "Các sản phẩm công nghệ mới nhất với mức giá hấp dẫn",
			image: "https://source.unsplash.com/random/1600x600/?technology,1",
			buttonText: "Mua ngay",
			buttonLink: "/promotion",
		},
		{
			id: 2,
			title: "Bộ sưu tập mới 2023",
			subtitle: "Ra mắt sản phẩm độc quyền",
			description: "Trải nghiệm công nghệ tiên phong với thiết kế đột phá",
			image: "https://source.unsplash.com/random/1600x600/?tech,2",
			buttonText: "Khám phá",
			buttonLink: "/new-collection",
		},
		{
			id: 3,
			title: "Hỗ trợ 24/7",
			subtitle: "Dịch vụ khách hàng tận tâm",
			description: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn",
			image: "https://source.unsplash.com/random/1600x600/?support,3",
			buttonText: "Liên hệ",
			buttonLink: "/contact",
		},
	]);

	return (
		<div className="relative w-full h-[500px] bg-[#591ab1]">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper h-full w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id} className="relative">
						{/* Background Image */}
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: `url(${slide.image})` }}
						>
							<div className="absolute inset-0 bg-black/30"></div>
						</div>

						{/* Content */}
						<div className="relative h-full flex items-center">
							<div className="container mx-auto px-6 lg:px-20 text-white">
								<div className="max-w-2xl space-y-4">
									<span className="inline-block px-3 py-1 text-sm font-medium bg-color-primary rounded-full">
										{slide.subtitle}
									</span>
									<h2 className="text-4xl md:text-5xl font-bold leading-tight">
										{slide.title}
									</h2>
									<p className="text-lg md:text-xl">{slide.description}</p>
									<div className="pt-4">
										<a
											href={slide.buttonLink}
											className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-color-primary rounded-full hover:bg-[#591ab1]/90 transition-colors duration-300 shadow-lg hover:shadow-primary/40"
										>
											{slide.buttonText}
											<svg
												className="ml-2 -mr-1 w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
