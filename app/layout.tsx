import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';

import Header from '../components/Header';

export const metadata: Metadata = {
	title: 'Hire Junior Developers',
	description: 'A job board to get you into tech',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" sizes="any" />
			</head>
			<body className="bg-aliceBlue">
				<Header />
				{children}
				<footer className="bg-ruddyBlueDark w-full py-4">
					<p className="text-center text-aliceBlue">
						Built & maintained by{' '}
						<a href="https://harshil.dev" target="_blank">
							Harshil Agrawal
						</a>
					</p>
				</footer>
			</body>
			<Script
				src={`${process.env.UMAMI_URL}`}
				data-website-id={`${process.env.UMAMI_WEBSITE_ID}`}
			/>
		</html>
	);
}
