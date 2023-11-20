import Image from 'next/image';
import Link from 'next/link';
import { getCompany } from '../utils/getCompany';
import type { Company } from '../utils/getCompany';

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

	return (
		<Link href={applicationUrl} passHref>
			<div className="mb-8 p-4 sm:p-6 rounded-lg overflow-hidden shadow-lg bg-white h-auto">
				<div className="sm:flex sm:justify-between">
					<div className="flex">
						<Image
							src={logoArr[0].thumbnails.large.url}
							alt={`Logo of ${companyName}`}
							width={75}
							height={75}
							className="align-middle"
						/>
						<div>
							<h3 className="text-lg sm:text-2xl max-w-md font-inter">
								{role}{' '}
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
