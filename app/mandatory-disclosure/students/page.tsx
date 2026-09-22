import DisclosureDocument from "../_components/DisclosureDocument";

export default function Page() {
  return (
    <DisclosureDocument
      title="Student Strength"
      description="Class-wise school strength of S. K. Public School, Hukkeri for the academic year 2026-27. Total strength: 900 students."
      pdfUrl="/md2026/school-strength-2026-27.pdf"
      fileLabel="skpsh/md2026/school-strength-2026-27.pdf"
      meta={[
        { label: "Year", value: "2026-27" },
        { label: "Total", value: "900 students" },
      ]}
    />
  );
}
