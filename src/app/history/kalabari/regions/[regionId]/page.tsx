import RegionDetails from "@/features/history/components/RegionDetails";
import { notFound } from "next/navigation";
import regions from "@/features/history/data/regions.json";

export default async function RegionDetailsPage({
	params,
}: {
	params: Promise<{ regionId: string }>;
}) {
	const { regionId } = await params;
	const regionExists = regions.some((region) => region.slug === regionId);

	if (!regionExists) {
		notFound();
	}

	return <RegionDetails regionId={regionId} />;
}
