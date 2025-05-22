import { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/route";

export default function Register() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
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
		// Handle registration logic here
		console.log(formData);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
						Sign up
					</h2>
				</div>

				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						{/* Email */}
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
									placeholder="Email address"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* Password */}
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<MdLock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="new-password"
									required
									className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
									placeholder="Password (min 8 characters)"
									minLength="8"
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* Confirm Password */}
						<div>
							<label htmlFor="confirmPassword" className="sr-only">
								Confirm Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<MdLock className="h-5 w-5 text-gray-400" />
								</div>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									autoComplete="new-password"
									required
									className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#591ab1] focus:border-[#591ab1] focus:z-10 sm:text-sm"
									placeholder="Confirm Password"
									value={formData.confirmPassword}
									onChange={handleChange}
								/>
							</div>
						</div>
					</div>

					<div className="flex items-center">
						<input
							id="terms"
							name="terms"
							type="checkbox"
							required
							className="h-4 w-4 text-[#591ab1] focus:ring-[#591ab1] border-gray-300 rounded"
						/>
						<label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
							I agree to the{" "}
							<a href="#" className="text-[#591ab1] hover:text-[#4a1699]">
								Terms and Conditions
							</a>
						</label>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#591ab1] hover:bg-[#4a1699] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#591ab1] transition-colors"
						>
							Sign up
						</button>
					</div>
				</form>
				<p className="mt-2 text-center text-sm text-gray-600">
					Already have an account?{" "}
					<Link
						to={ROUTES.LOGIN}
						className="font-medium text-[#591ab1] hover:text-[#4a1699]"
					>
						Sign in
					</Link>
				</p>
				<div className="mt-6">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-gray-50 text-gray-500">
								Or sign up with
							</span>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-2 gap-3">
						<a
							href="#"
							className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							<FaGoogle className="h-5 w-5 text-red-600" />
							<span className="ml-2">Google</span>
						</a>
						<a
							href="#"
							className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							<FaFacebook className="h-5 w-5 text-blue-600" />
							<span className="ml-2">Facebook</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
