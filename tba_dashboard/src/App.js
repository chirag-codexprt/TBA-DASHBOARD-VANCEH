import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Show from "./components/Show";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Permissões from "./pages/Permissões";
import Documents from "./pages/Documents";
import Protected from "./components/Protected";
import Perfil from "./pages/Perfil";
import Logout from "./pages/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./helper/prototype";

function App() {
	return (
		<>
			<ToastContainer position='top-center' />

			<Routes>
				<Route path='/' element={<Show />} />
				<Route
					path='/login'
					element={<Protected Component={Login} />}
				/>

				<Route
					path='/Insights'
					element={<Protected Component={Insights} />}
				/>
				<Route
					path='/Contatos'
					element={<Protected Component={Contact} />}
				/>
				<Route
					path='/Documentos'
					element={<Protected Component={Documents} />}
				/>
				<Route
					path='/Permissoes'
					element={<Protected Component={Permissões} />}
				/>
				<Route
					path='/perfil'
					element={<Protected Component={Perfil} />}
				/>
				<Route
					path='/logout'
					element={<Protected Component={Logout} />}
				/>
			</Routes>
		</>
	);
}

export default App;
