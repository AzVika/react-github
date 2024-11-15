import imgStar from '../images/star.svg';
import imgFork from '../images/fork.svg';

export const Repos = ({ repos }) => {
	return (
		<>
			{repos.map(repo => (
				<div className='card mb-3' key={repo.id}>
					<div className='card-body'>
						<h5>
							<a
								href={repo.html_url}
								target="_blanck"
							// rel="noopener noreferrer"
							>{repo.name}</a>
						</h5>
						<p>{repo.description}</p>
						<p>
							<img src={imgStar} alt="star" />
							{repo.watchers} stars
							<img src={imgFork} alt="fork" className='ms-5' />
							{repo.forks_count} forks</p>
					</div>
				</div>
			))}
		</>
	)
}
