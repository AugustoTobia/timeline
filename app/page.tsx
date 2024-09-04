import Link from "next/link";
import './i18next/i18n';

export default function Home() {
	const headerLinkStyles = 'uppercase text-grey-1 hover:font-black'

	return (
		<main className="bg-grey-base">
			<div className="flex min-h-screen flex-col items-center justify-start p-24">
				<h1 className="text-[5rem] text-grey-1">Holiwis</h1>
				<Link className={headerLinkStyles} href={'/about'}>About the artist</Link>
				<Link className={headerLinkStyles} href={'/portfolio'} as={'/portfolio'}>Portfolio</Link>
			</div>
		</main>
	);
}
