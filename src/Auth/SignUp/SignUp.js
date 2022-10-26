import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
	const [error, setError] = useState('');
	const { createUser } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError('');
				form.reset();
			})
			.catch((error) => {
				console.error('error', error);
				setError(error.message);
			});
	};
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="card flex-shrink-0 w-full max-w-6xl shadow-2xl bg-base-100">
						<form onSubmit={handleSubmit} className="card-body">
							<div className="text-center lg:text-left">
								<h1 className="text-3xl font-bold">
									Please Create a New Account
								</h1>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">User Name</span>
								</label>
								<input
									name="name"
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									name="photoURL"
									type="text"
									placeholder="Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									name="email"
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									name="password"
									type="text"
									placeholder="password"
									className="input input-bordered"
								/>

								<label className="label">
									<p
										href="#"
										className="label-text-alt text-red-600 link link-hover"
									>
										{error}
									</p>
									<p href="#" className="label-text-alt link link-hover">
										<Link to="/login">
											Already have an account Please LogIn
										</Link>
									</p>
								</label>
							</div>
							<div class="mb-3 form-check">
								<input
									type="checkbox"
									className="form-check-input checkbox-sm checkbox-sm"
									id="exampleCheck1"
								/>
								<label className="form-check-label" for="exampleCheck1">
									Accept <Link>terms and condition</Link>
								</label>
							</div>
							<div className="form-control mt-2">
								<button className="btn btn-primary">SignUP</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
