import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Water, Health & Sanitation Certificate"
      description="Safe Drinking Water and Sanitary Condition Certificate (Annexure-C) with drinking water sample test result — Satisfactory. Inspected on 6/7/26, valid till 5/7/27."
      pdfUrl="/md2026/water-health-sanitation-2026-27.pdf"
      fileLabel="skpsh/md2026/water-health-sanitation-2026-27.pdf"
      meta={[
        { label: "Inspected", value: "6/7/26" },
        { label: "Valid till", value: "5/7/27" },
        { label: "Water test", value: "08/07/2026 · Satisfactory" },
      ]}
      extraDocs={[
        {
          title: "Water & sanitary certificate copy",
          href: "/md2026/water-test-report-2026.pdf",
        },
      ]}
    />
  );
}
