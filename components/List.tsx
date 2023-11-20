import { getAllJobs } from '../utils/getAllJobs';
import Card from './card';

export default async function JobList() {
	const jobs = await getAllJobs();

	return (
		<ul>
			{jobs.map((job) => {
				const {
					Role: role,
					Salary: salary,
					'Application URL': applicationUrl,
					Location: location,
					Company: company,
				} = job.fields;
				return (
					<li key={job.id}>
						<Card
							role={role}
							salary={salary}
							applicationUrl={applicationUrl}
							location={location}
							companyId={company[0]}
						/>
					</li>
				);
			})}
		</ul>
	);
}
