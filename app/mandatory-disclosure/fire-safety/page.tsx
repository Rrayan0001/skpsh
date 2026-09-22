import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Fire Safety Certificate"
      description="Fire Safety Recommendation issued by the District Fire Officer, Karnataka State Fire and Emergency Services, Belagavi after inspection of the school premises on 22-09-2025. Valid for one year from the date of issue."
      pdfUrl="/md2026/fire-safety-recommendation-2025.pdf"
      fileLabel="skpsh/md2026/fire-safety-recommendation-2025.pdf"
      meta={[
        { label: "Ref No", value: "C.NO/152/FSR/DFO/BELAGAVI/2025" },
        { label: "Dated", value: "24-09-2025" },
        { label: "Valid", value: "1 year" },
      ]}
    />
  );
}
