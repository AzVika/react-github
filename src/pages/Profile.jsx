import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContext';
import { useParams, Link } from 'react-router-dom';
import { Repos } from '../components/Repos';

export const Profile = () => {
	const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
	const { urlName } = useParams();

	useEffect(() => {
		if (urlName) {
			getUser(urlName);
			getRepos(urlName);
			// eslint-disable-next-line
		}
	}, []);

	if (loading) {
		return <p className="text-center">Loading...</p>
	}

	if (!urlName) {
		return <h3>Nothing found for your request.</h3>
	}

	const {
		name, company, avatar_url,
		location, bio, blog,
		login, html_url, followers,
		following, public_repos, public_gists
	} = user;

	return (
		<>
			<Link to="/" className="btn btn-link">Main page</Link>

			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-4 text-center">
							<img src={avatar_url} alt={name} style={{ width: "150px" }} />
							<h1>{name}</h1>
							{location && <p>Location: {location}</p>
							}
						</div>
						<div className="col">
							{
								bio && <>
									<h3>BIO</h3>
									<p>{bio}</p>
								</>
							}
							<a
								href={html_url}
								target="_blanck"
								// rel="noopener noreferrer"
								className="btn btn-dark mb-3"
							>Open profile</a>
							<ul>
								{login && <li>
									<strong>User name: </strong> {login}
								</li>}
								{company && <li>
									<strong>Company: </strong> {company}
								</li>}
								{blog && <li>
									<strong>Website: </strong> {blog}
								</li>}
							</ul>

							<div className="badge bg-primary p-2">Followers: {followers}</div>
							<div className="badge bg-success p-2 ms-1">Following: {following}</div>
							<div className="badge bg-info p-2 ms-1">Repositories: {public_repos}</div>
							<div className="badge bg-dark p-2 ms-1">Gists: {public_gists}</div>
						</div>
					</div>
				</div>
			</div>
			<Repos repos={repos} />
		</>
	)
}