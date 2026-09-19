"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body className="flex min-h-screen items-center justify-center bg-[#0b0d17] px-6 text-center text-white">
				<div>
					<h2 className="text-3xl font-bold">Something went wrong!</h2>
					<p className="mt-4 text-slate-300">
						The app hit an unexpected error.
					</p>
					<button
						type="button"
						onClick={() => reset()}
						className="mt-8 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0b0d17] transition hover:bg-slate-200"
					>
						Try again
					</button>
					<p className="mt-4 text-xs text-slate-400">{error.message}</p>
				</div>
			</body>
		</html>
	);
}
