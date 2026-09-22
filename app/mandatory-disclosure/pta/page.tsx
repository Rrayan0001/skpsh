import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Parents Teacher Association (PTA)"
      description="Parent–Teacher Association Executive Committee of S. K. Public School, Hukkeri for the year 2026-27, jointly prepared by PTA representatives and school management."
      pdfUrl="/md2026/pta-2026-27.pdf"
      fileLabel="skpsh/md2026/pta-2026-27.pdf"
      meta={[
        { label: "Year", value: "2026-27" },
        { label: "Members", value: "25" },
      ]}
    />
  );
}
