import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0d17] px-6 text-center text-white">
			<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">404</h1>
			<p className="mt-4 text-lg text-slate-300">This page does not exist.</p>
			<Link
				href="/"
				className="mt-8 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0b0d17] transition hover:bg-slate-200"
			>
				Return home
			</Link>
		</main>
	);
}
