import { useState } from "react";
import { MdPerson, MdEmail, MdMessage } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle contact form submission
		console.log(formData);
		alert("Thank you for your message! We will contact you soon.");
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Contact Us
					</h2>
					<p className="mt-3 text-xl text-gray-500">
						Have questions? We'd love to hear from you.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Contact Form */}
					<div className="bg-white py-8 px-6 shadow rounded-lg">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="sr-only">
									Full Name
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<MdPerson className="h-5 w-5 text-gray-400" />
									</div>
									<input
										id="name"
										name="name"
										type="text"
										required
										className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
										placeholder="Full Name"
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="email" className="sr-only">
									Email
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<MdEmail className="h-5 w-5 text-gray-400" />
									</div>
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
										placeholder="Email Address"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="subject" className="sr-only">
									Subject
								</label>
								<input
									id="subject"
									name="subject"
									type="text"
									className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
									placeholder="Subject"
									value={formData.subject}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
										<MdMessage className="h-5 w-5 text-gray-400" />
									</div>
									<textarea
										id="message"
										name="message"
										rows="4"
										required
										className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
										placeholder="Your Message"
										value={formData.message}
										onChange={handleChange}
									></textarea>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#591ab1] hover:bg-[#4a1699] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#591ab1]"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>

					{/* Contact Information */}
					<div className="bg-white py-8 px-6 shadow rounded-lg">
						<h3 className="text-lg font-medium text-gray-900 mb-6">
							Our Information
						</h3>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<FaMapMarkerAlt className="h-5 w-5 text-[#591ab1]" />
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900">Address</p>
									<p className="text-sm text-gray-500">
										123 Business Street
										<br />
										City, State 10001
										<br />
										Country
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<MdEmail className="h-5 w-5 text-[#591ab1]" />
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900">Email</p>
									<p className="text-sm text-gray-500">
										info@example.com
										<br />
										support@example.com
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 mt-1">
									<FaPhone className="h-5 w-5 text-[#591ab1]" />
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900">Phone</p>
									<p className="text-sm text-gray-500">
										+1 (555) 123-4567
										<br />
										+1 (555) 987-6543
									</p>
								</div>
							</div>

							<div className="pt-4">
								<h4 className="text-sm font-medium text-gray-900 mb-2">
									Business Hours
								</h4>
								<p className="text-sm text-gray-500">
									Monday - Friday: 9:00 AM - 6:00 PM
									<br />
									Saturday: 10:00 AM - 4:00 PM
									<br />
									Sunday: Closed
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
