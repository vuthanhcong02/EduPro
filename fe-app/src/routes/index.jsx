import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ROUTES } from "../constants/route";
import Contact from "../pages/Contact";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.CONTACT} element={<Contact />} />
				</Route>
				<Route path={ROUTES.LOGIN} element={<Login />} />
				<Route path={ROUTES.REGISTER} element={<Register />} />
				<Route path={ROUTES.NOTFOUND} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
