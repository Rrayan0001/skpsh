import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Building Safety Certificate"
      description="Safety / stability certificate for the existing school building issued by the Public Works Department, Hukkeri Sub-Division, Government of Karnataka."
      pdfUrl="/md2026/building-safety-certificate-2026.pdf"
      fileLabel="skpsh/md2026/building-safety-certificate-2026.pdf"
      meta={[
        { label: "Issued by", value: "PWD, Hukkeri" },
        { label: "Dated", value: "27-07-2026" },
      ]}
    />
  );
}
