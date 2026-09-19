import RegionDetails from "@/features/history/components/RegionDetails";

export default async function RegionDetailsPage({
  params,
}: {
  params: Promise<{ regionId: string }>;
}) {
  const { regionId } = await params;
  return <RegionDetails regionId={regionId} />;
}
