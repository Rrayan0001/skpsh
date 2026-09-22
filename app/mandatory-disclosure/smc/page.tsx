import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="School Management Committee (SMC)"
      description="School Management Committee of Shri Kadasiddheshwar Public School, Hukkeri for the year 2026-27 — Manager, parent, teacher and member representatives."
      pdfUrl="/md2026/smc-2026-27.pdf"
      fileLabel="skpsh/md2026/smc-2026-27.pdf"
      meta={[
        { label: "Year", value: "2026-27" },
        { label: "Members", value: "13" },
      ]}
      extraDocs={[
        {
          title: "Managing Committee Members list 2026-27",
          href: "/md2026/smc-managing-committee-2026-27.pdf",
        },
      ]}
    />
  );
}
