import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Recognition Certificate"
      description="CBSE affiliation / recognition document for Shri Kadasiddheshwar Public School, Hukkeri (Affiliation No. 830729). Shared with the Affiliation Letter file."
      pdfUrl="/md2026/affiliation-recognition-2022-27.pdf"
      fileLabel="skpsh/md2026/affiliation-recognition-2022-27.pdf"
      meta={[
        { label: "Affiliation No", value: "830729" },
        { label: "Period", value: "01.04.2022 – 31.03.2027" },
      ]}
      extraDocs={[
        {
          title: "Affiliation Letter (same file)",
          href: "/md2026/affiliation-recognition-2022-27.pdf",
        },
      ]}
    />
  );
}
