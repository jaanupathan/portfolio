from pypdf import PdfReader

reader = PdfReader("karim.pdf")
text_parts = []
for page in reader.pages:
    text = page.extract_text()
    if text:
        text_parts.append(text)

with open("karim.txt", "w", encoding="utf-8") as f:
    f.write("\n\n".join(text_parts))

print("extracted karim.txt")
