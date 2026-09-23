import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Certificate of Land"
      description="Certificate of Land (Annexure-B) — 8,093.71 sq. metres at Plot No. 54-1-586, Hukkeri, leased to Shri Kadasiddheshwar Public School, Hukkeri for 30 years from 25/06/2015 to 24/06/2045."
      pdfUrl="/md2026/land-certificate-2015.pdf"
      fileLabel="skpsh/md2026/land-certificate-2015.pdf"
      meta={[
        { label: "Area", value: "8,093.71 sq m" },
        { label: "Plot No", value: "54-1-586" },
        { label: "Lease", value: "25/06/2015 – 24/06/2045" },
      ]}
    />
  );
}
