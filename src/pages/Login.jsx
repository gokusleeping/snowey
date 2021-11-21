import { useState, useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
//import FirebaseContext from "../context/firebase"
//import * as ROUTES from "../constants/routes"

export default function Login() {
	const history = useHistory()
	//const { firebase } = useContext(FirebaseContext)

	const [emailAddress, setEmailAddress] = useState("")
	const [password, setPassword] = useState("")

	const [error, setError] = useState("")
	const isInvalid = password === "" || emailAddress === ""

	const handleLogin = async (event) => {
		event.preventDefault()

		try {
			//await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
			//history.push(ROUTES.DASHBOARD)
		} catch (error) {
			setEmailAddress("")
			setPassword("")
			setError(error.message)
		}
	}

	useEffect(() => {
		document.title = "Login - Instagram"
	}, [])

	return (
		<div className="h-screen w-full flex items-center justify-center p-6">
			<div className="w-3/5 "></div>
			<div className="flex-grow-1 w-2/5 flex flex-col items-center gap-4 border-2 p-16 ">
				{error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

				<form className="aui" onSubmit={handleLogin} method="POST">
					<div class="">
						<input
							aria-label="Enter your email address"
							type="text"
							placeholder="Email address"
							className=" w-full ring ring-blue-800 px-4 py-2 mt-3"
							onChange={({ target }) => setEmailAddress(target.value)}
							value={emailAddress}
						/>
						<input
							aria-label="Enter your password"
							type="password"
							placeholder="Password"
							className="w-full ring ring-blue-800 px-4 py-2 mt-3"
							onChange={({ target }) => setPassword(target.value)}
							value={password}
						/>
					</div>
					<button
						disabled={isInvalid}
						type="submit"
						className={` mt-32 w-full py-2 ring ring-green-700 bg-green-900 text-white
            ${isInvalid && "opacity-50"}`}
					>
						Login
					</button>
				</form>

				<p className="text-left w-full">
					Don't have an account?{` `}
					{/* <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
							Sign up
						</Link> */}
				</p>
			</div>
		</div>
	)
}
