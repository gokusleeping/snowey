import { lazy, Suspense, useState } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import ErrorBoundary from "./components/Catch"
import Login from "./pages/Login"
//const Home = lazy(async () => await import("./pages/Home"))
//const About = lazy(async () => await import("./pages/About"))
//const Login = lazy(async () => await import("./pages/Login"))

import Loading from "./components/Loading"
import NotFound from "./pages/NotFound"
const App = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ErrorBoundary>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<main className="mt-12" onClick={() => setVisible(false)}>
						<Switch>
							<Route exact path="/" component={Login} />
							{/* <Route exact path="/about" component={About} /> */}

							<Route component={NotFound} />
						</Switch>
					</main>
				</Suspense>
			</BrowserRouter>
		</ErrorBoundary>
	)
}

export default App
