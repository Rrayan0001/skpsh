import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="NOC (No Objection Certificate)"
      description="No Objection Certificate issued by the Department of Education, Government of Karnataka for affiliation of Shri Kadasiddheshwar Public School, Hukkeri to CBSE, New Delhi."
      pdfUrl="/md2026/noc-karnataka-2019.pdf"
      fileLabel="skpsh/md2026/noc-karnataka-2019.pdf"
      meta={[
        { label: "NOC No", value: "ED 200 PBS 2019" },
        { label: "Dated", value: "01/06/2019" },
        { label: "Issued by", value: "Govt. of Karnataka" },
      ]}
    />
  );
}
