import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="bg-white shadow-sm sticky top-0 z-50">
			{/* Desktop Header */}
			<nav className="mx-40 px-6 py-4 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex justify-center items-center gap-x-30">
						<Link to="/" className="flex items-center gap-2">
							<img
								src="src/assets/images/logo.jpg"
								alt="Logo"
								className="h-10 w-auto"
							/>
						</Link>
						<div className="flex gap-8">
							<Link
								to="/"
								className="relative text-[#591ab1] hover:text-[#591ab1] transition-colors duration-300 group text-[18px] font-semibold"
							>
								Home
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</Link>
							<Link
								to="/blog"
								className="relative text-gray-700 hover:text-[#591ab1] transition-colors duration-300 group text-[18px] font-normal"
							>
								Blog
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</Link>
							<Link
								to="/contact"
								className="relative text-gray-700 hover:text-[#591ab1] transition-colors duration-300 group text-[18px] font-normal"
							>
								Contact
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</Link>
						</div>
					</div>
					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-10">
						<div className="relative w-64">
							<input
								type="text"
								placeholder="Search..."
								className="w-full pl-4 pr-10 py-2 border border-[#591ab1] rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-[#591ab1] transition-all duration-300"
							/>
							<button
								type="submit"
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#591ab1] transition-colors duration-300 cursor-pointer"
							>
								<CiSearch />
							</button>
						</div>
						<div className="flex items-center gap-4 ml-8">
							<Link
								to="/login"
								className="px-4 py-2 text-[#591ab1] font-medium hover:bg-[#591ab1] hover:text-white text-[18px] rounded-full transition-colors duration-300"
							>
								Sign in
							</Link>
							<Link
								to="/register"
								className="px-6 py-2 bg-color-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-primary/30"
							>
								Sign up
							</Link>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden flex items-center">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-2xl"
							onClick={() => setMobileMenuOpen(true)}
						>
							<FaBars />
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
					<div className="fixed inset-y-0 left-0 w-full overflow-y-auto py-4">
						<div className="flex items-center justify-between">
							<Link to="/" className="flex items-center gap-2">
								<img
									src="src/assets/images/logo.jpg"
									alt="Logo"
									className="h-10 w-auto"
								/>
							</Link>
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-3xl right-0"
								onClick={() => setMobileMenuOpen(false)}
							>
								<IoClose />
							</button>
						</div>
						<div className="mt-12 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="py-3 border-y-1 shadow-amber-100">
									<Link
										to="/"
										className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-primary/10 text-center"
										onClick={() => setMobileMenuOpen(false)}
									>
										Home
									</Link>
									<Link
										to="/blog"
										className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-primary/10 text-center"
										onClick={() => setMobileMenuOpen(false)}
									>
										Blog
									</Link>
									<Link
										to="/contact"
										className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-primary/10 text-center"
										onClick={() => setMobileMenuOpen(false)}
									>
										Contact
									</Link>
								</div>
								<div className="py-6">
									<Link
										to="/login"
										className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-primary hover:bg-primary/10"
										onClick={() => setMobileMenuOpen(false)}
									>
										Sign in
									</Link>
									<Link
										to="/register"
										className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium bg-primary text-white mt-2 hover:bg-primary/90"
										onClick={() => setMobileMenuOpen(false)}
									>
										Sign up
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
