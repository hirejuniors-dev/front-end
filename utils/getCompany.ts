const URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Jobs`;

type LogoImage = {
	id: string;
	width: number;
	height: number;
	url: string;
	filename: string;
	size: number;
	type: string;
	thumbnails: {
		small: {
			width: number;
			height: number;
			url: string;
		};
		large: {
			width: number;
			height: number;
			url: string;
		};
		full: {
			width: number;
			height: number;
			url: string;
		};
	};
};

export type Company = {
	id: string;
	createdTime: Date;
	fields: {
		Homepage: string;
		Name: string;
		Jobs: Array<string>;
		Logo: Array<LogoImage>;
	};
};

export const revalidate = 3600; // revalidate the data at most every hour

export const getCompany = async (companyId: string) => {
	const res = await fetch(
		`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Companies/${companyId}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
			},
			cache: 'default',
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const result = (await res.json()) as Company;
	return result;
};
