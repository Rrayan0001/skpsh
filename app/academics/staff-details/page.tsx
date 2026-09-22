import DisclosureDocument from "../../mandatory-disclosure/_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Staff Details"
      description="Teaching Staff Details of Shri Kadasiddheshwar Public School, Hukkeri for the academic year 2026-27."
      pdfUrl="/md2026/staff-details-2026-27.pdf"
      fileLabel="skpsh/md2026/staff-details-2026-27.pdf"
      meta={[{ label: "Year", value: "2026-27" }]}
      backHref="/"
      backLabel="Back to Home"
    />
  );
}
