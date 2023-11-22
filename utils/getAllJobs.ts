const URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Jobs?fields%5B%5D=Role&fields%5B%5D=Location&fields%5B%5D=Company&fields%5B%5D=Salary&fields%5B%5D=Application+URL&filterByFormula=%7BActive%7D%3Dtrue()&sort%5B0%5D%5Bfield%5D=Last+Modified&sort%5B0%5D%5Bdirection%5D=desc`;

export type JobListing = {
	id: string;
	createdTime: Date;
	fields: {
		Role: string;
		Location: string;
		Salary: string;
		Company: Array<string>;
		'Application URL': string;
	};
};

export const revalidate = 3600; // revalidate the data at most every hour

export const getAllJobs = async () => {
	const res = await fetch(URL, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
		},
		next: {
			revalidate: 3600,
		},
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const result = await res.json();
	const jobs = result.records as Array<JobListing>;
	return jobs;
};
