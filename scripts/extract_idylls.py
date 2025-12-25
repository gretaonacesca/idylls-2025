import pdfplumber
from pathlib import Path

PDF_PATH = Path(__file__).resolve().parents[0] / '..' / 'idylls.pdf'
OUT_PATH = Path(__file__).resolve().parents[0] / 'idylls_raw.txt'

PDF_PATH = PDF_PATH.resolve()
OUT_PATH = OUT_PATH.resolve()

print(f"Reading: {PDF_PATH}")

all_text = []
with pdfplumber.open(str(PDF_PATH)) as pdf:
    for i, page in enumerate(pdf.pages, start=1):
        text = page.extract_text()
        if text:
            all_text.append(text)
        else:
            all_text.append('')

joined = "\n\n--PAGE_BREAK--\n\n".join(all_text)
OUT_PATH.write_text(joined, encoding='utf-8')
print(f"Wrote extracted text to: {OUT_PATH}")
