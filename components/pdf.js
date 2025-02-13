import Image from 'next/image';
import styles from '../styles/pdf.module.css';

export default function PDFComponent(props) {
  const { pdf, onChange, onDelete } = props;

   console.log("PDF props: ", pdf);

    if (!pdf) {
      console.error("PDFComponent is rendered without pdf data.");
      return <div>Missing PDF data!</div>; // Handling unexpected missing data
    };

  return (
    <div className={styles.pdfRow}>
      <input
        className={styles.pdfCheckbox}
        name="selected"
        type="checkbox"
        checked={pdf.selected}
        onChange={(e) => onChange(e, pdf.id)}
      />
      <input
        className={styles.pdfInput}
        autoComplete="off"
        name="name"
        type="text"
        value={pdf.name}
        onChange={(e) => onChange(e, pdf.id)}
      />
      <a
        href={pdf.file}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewPdfLink}
      >
        <Image src="/task-view.svg" width="22" height="22" alt="view file" />
      </a>
      <button
        className={styles.deleteBtn}
        onClick={() => onDelete(pdf.id)}
      >
        <Image src="/delete-outline.svg" width="24" height="24" alt="delete file " />
      </button>
    </div>
  );
}
