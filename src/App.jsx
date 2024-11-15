import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { NavbarSite } from './components/NavbarSite';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/GithutState';

function App() {

	return (
		<GithubState>
			<AlertState>
				<NavbarSite />
				<div className="container pt-4">
					<Alert alert={{ text: "test-alert" }} />
					<Routes>
						<Route path="/" index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/profile/:urlName" element={<Profile />} />
					</Routes>
				</div>
			</AlertState>
		</GithubState>
	)
}

export default App
