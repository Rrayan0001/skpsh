import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Affiliation Letter"
      description="CBSE Extension of General Affiliation issued to Shri Kadasiddheshwar Public School, Hukkeri. Affiliation No. 830729, valid from 01.04.2022 to 31.03.2027."
      pdfUrl="/md2026/affiliation-recognition-2022-27.pdf"
      fileLabel="skpsh/md2026/affiliation-recognition-2022-27.pdf"
      meta={[
        { label: "Affiliation No", value: "830729" },
        { label: "School No", value: "45845" },
        { label: "Valid till", value: "31.03.2027" },
      ]}
      extraDocs={[
        {
          title: "Recognition Certificate (same CBSE affiliation file)",
          href: "/md2026/affiliation-recognition-2022-27.pdf",
        },
      ]}
    />
  );
}
