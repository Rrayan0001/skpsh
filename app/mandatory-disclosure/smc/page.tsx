import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="School Management Committee (SMC)"
      description="List of Managing Committee Members of C. S. Tubachi Education Society for the year 2026-27."
      pdfUrl="/md2026/smc-managing-committee-2026-27.pdf"
      fileLabel="skpsh/md2026/smc-managing-committee-2026-27.pdf"
      meta={[
        { label: "Year", value: "2026-27" },
        { label: "Members", value: "9" },
      ]}
    />
  );
}
