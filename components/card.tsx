import Image from 'next/image';
import Link from 'next/link';
import { getCompany } from '../utils/getCompany';
import type { Company } from '../utils/getCompany';
import '../styles/Home.module.css';

export default async function Card({
	role,
	salary,
	applicationUrl,
	location,
	companyId,
}) {
	const companyDetails = (await getCompany(companyId)) as Company;
	const {
		Name: companyName,
		Homepage: homepageUrl,
		Logo: logoArr,
	} = companyDetails.fields;

	const capitalizeFirstLetter = (str) => {
		const wordsToSkip = ['AI', 'ML', 'UX', 'UI', 'AI/ML', 'LTH', 'IT', 'IT-Techniker']; // Add more words as needed
		const words = str.split(' ');

		const capitalizedWords = words.map((word) => {
			return wordsToSkip.includes(word.toUpperCase()) ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		});

		return capitalizedWords.join(' ');
	};

	const unifiedRole = capitalizeFirstLetter(role);

	return (
		<Link href={applicationUrl} passHref>
			<div className="mb-8 p-4 sm:p-6 rounded-lg overflow-hidden shadow-lg bg-white h-auto">
				<div className="sm:flex sm:justify-between">
					<div className="flex">
						<div className='image-wrapper'>
							<Image
								src={logoArr[0].thumbnails.large.url}
								alt={`Logo of ${companyName}`}
								width={90}
								height={45}
								className="align-middle"
							/>
						</div>
						<div className="pl-4">
							<h3 className="font-inter">
								{unifiedRole}{' '}
							</h3>
							<p className="text-gray-400">{companyName}</p>
						</div>
					</div>
					<div>
						<ul className="text-sm sm:text-right">
							<li>
								<span role="image" aria-label="map pin">
									📍
								</span>
								{location}{' '}
							</li>
							<li>{salary}</li>
						</ul>
					</div>
				</div>
			</div>
		</Link>
	);
}