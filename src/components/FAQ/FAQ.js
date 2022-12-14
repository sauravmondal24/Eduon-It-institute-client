import React from 'react';

const FAQ = () => {
	return (
		<div className="md:container md:m-auto py-20">
			<h2 className="text-4xl text-center text-warning font-bold pb-10">
				FAQ PAGE
			</h2>
			<div>
				<div className="overflow-x-auto md:w-full">
					<table className="table w-full">
						<thead>
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="https://www.filmibeat.com/img/popcorn/profile_photos/sree-leela-20191016105248-40142.jpg"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Hart Hagerty</div>
											<div className="text-sm opacity-50">United States</div>
										</div>
									</div>
								</td>
								<td>
									Zemlak, Daniel and Leannon
									<span className="badge badge-ghost badge-sm">
										Desktop Support Technician
									</span>
								</td>
								<td>Purple</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>

							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="https://newsresolution.com/wp-content/uploads/2021/01/katherine-Copy.jpg"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Brice Swyre</div>
											<div className="text-sm opacity-50">China</div>
										</div>
									</div>
								</td>
								<td>
									Carroll Group
									<span className="badge badge-ghost badge-sm">
										Tax Accountant
									</span>
								</td>
								<td>Red</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>

							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="https://www.filmibeat.com/img/popcorn/profile_photos/sree-leela-20191016105248-40142.jpg"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Marjy Ferencz</div>
											<div className="text-sm opacity-50">Russia</div>
										</div>
									</div>
								</td>
								<td>
									Rowe-Schoen
									<span className="badge badge-ghost badge-sm">
										Office Assistant I
									</span>
								</td>
								<td>Crimson</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>
							{/* <!-- row 4 --> */}
							<tr>
								<th>
									<label>
										<input type="checkbox" className="checkbox" />
									</label>
								</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdC_2mNzsBT3YlLAWlnWPkMa-Q0O2Va2fLDQ&usqp=CAU"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Yancy Tear</div>
											<div className="text-sm opacity-50">Brazil</div>
										</div>
									</div>
								</td>
								<td>
									Wyman-Ledner
									<span className="badge badge-ghost badge-sm">
										Community Outreach Specialist
									</span>
								</td>
								<td>Indigo</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>
						</tbody>
						{/* <!-- foot --> */}
						<tfoot>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Job</th>
								<th>Favorite Color</th>
								<th></th>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
