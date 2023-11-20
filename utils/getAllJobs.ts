const URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Jobs`;

export type JobListing = {
	id: string;
	createdTime: Date;
	fields: {
		Role: string;
		Location: string;
		Salary: string;
		Company: Array<string>;
		Active: boolean;
		'Name (from Company)': Array<string>;
		'Application URL': string;
	};
};

export const revalidate = 3600; // revalidate the data at most every hour

export const getAllJobs = async () => {
	const res = await fetch(URL, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
		},
		cache: 'default',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const result = await res.json();
	const jobs = result.records as Array<JobListing>;
	return jobs;
};
