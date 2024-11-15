export const About = () => {

	return (
		<div className="card" style={{ width: '95%' }}>
			<div className="card-body">
				<h1 className="card-title">Info</h1>
				<p className="card-text">You can search for GitHub users by nickname on the main page of this site.</p>
				<p className="card-text">In the resulting list, you can select the desired user and find out more information about him without visiting the GitHub site.</p>
				<p className="card-text"><strong>Skills:</strong> React, React-router, Vite, Axios, Bootstrap 5</p>
				<p className="card-text"><strong>Frontend developer: </strong>
					<a href="https://github.com/AzVika/" target="_blank" className="card-link">Azomova Vika</a>
				</p>
			</div>
		</div>
	)
}