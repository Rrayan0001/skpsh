import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Class X Results — Last 3 Years"
      description="Board results of Class X students for the last three years: 100% in 2025 and 2024, 97.44% in 2023."
      pdfUrl="/md2026/class-x-results-2023-25.pdf"
      fileLabel="skpsh/md2026/class-x-results-2023-25.pdf"
      meta={[
        { label: "2025", value: "62/62 · 100%" },
        { label: "2024", value: "42/42 · 100%" },
        { label: "2023", value: "38/39 · 97.44%" },
      ]}
    />
  );
}
