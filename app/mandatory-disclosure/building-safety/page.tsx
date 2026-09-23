import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Building Safety Certificate"
      description="Building Safety Certificate for Sri Kadasiddheshwar Public School, Hukkeri — inspected by PWD and certified fit for occupancy for running the school for a period of 2 years."
      pdfUrl="/md2026/building-safety-certificate-2026.pdf"
      fileLabel="skpsh/md2026/building-safety-certificate-2026.pdf"
      meta={[
        { label: "Certificate No", value: "462" },
        { label: "Dated", value: "27-07-2026" },
        { label: "Valid", value: "2 years" },
      ]}
    />
  );
}
