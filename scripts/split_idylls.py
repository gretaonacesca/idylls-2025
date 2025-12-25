import re
from pathlib import Path

RAW = Path(__file__).resolve().parents[0] / 'idylls_raw.txt'
POEMS_DIR = Path(__file__).resolve().parents[1] / 'src' / 'poems'
POEMS_DIR.mkdir(parents=True, exist_ok=True)

text = RAW.read_text(encoding='utf-8')

# Split into lines and find headings like 'Idyll I', 'Idyll II', etc.
lines = text.splitlines()

# Find all indices where a line matches /^Idyll\s+[IVXLCDM]+/i
pattern = re.compile(r'^Idyll\s+([IVXLCDM]+)\b', re.IGNORECASE)
indices = []
for i, line in enumerate(lines):
    if pattern.match(line.strip()):
        indices.append(i)

# Add end index
indices.append(len(lines))

# helper: convert roman numerals to int for sorting
rom_map = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

def roman_to_int(s):
    s = s.upper()
    total = 0
    prev = 0
    for ch in reversed(s):
        val = rom_map.get(ch,0)
        if val < prev:
            total -= val
        else:
            total += val
            prev = val
    return total

poems = []
for k in range(len(indices)-1):
    start = indices[k]
    end = indices[k+1]
    block_lines = lines[start:end]
    # The first line is the heading
    heading = block_lines[0].strip()
    body = '\n'.join(line.rstrip() for line in block_lines[1:]).strip()
    # Skip obvious Table of Contents entries or very short blocks
    if not body:
        continue
    if body.strip().replace('--PAGE_BREAK--','').strip() == '':
        continue
    if len(body.split()) < 7:
        # too short; likely TOC or index
        continue

    m = pattern.match(heading)
    roman = m.group(1) if m else ''
    num = roman_to_int(roman) if roman else 9999

    # Make an id from the heading
    id_safe = heading.lower().replace(' ', '-').replace('\n','')
    filename = f"{id_safe}.js"
    poems.append((num, heading, id_safe, filename, body))

# Sort poems by numeric order
poems.sort(key=lambda x: x[0])

# Write files
for idx, title, id_safe, filename, body in poems:
    out = f"const text = `" + body.replace('`', "\\`") + "`\n\n"
    out += f"export default {{\n  id: '{id_safe}',\n  title: '{title}',\n  author: 'George Popovic',\n  illustration: null,\n  text,\n}}\n"
    p = POEMS_DIR / filename
    p.write_text(out, encoding='utf-8')
    print(f"Wrote {p}")

# Remove any leftover TOC-like files we might have created earlier
maybe_bad = ['idyll-xvi-69.js']
for name in maybe_bad:
    p = POEMS_DIR / name
    if p.exists():
        p.unlink()
        print(f"Removed {p}")

# Update poemsData.js to import all poems and export as array in order
imports = []
names = []
for i, (_, title, id_safe, filename, _) in enumerate(poems, start=1):
    var = f"p{i}"
    imports.append(f"import {var} from './{filename[:-3]}'")
    names.append(var)

poemsdata = "\n".join(imports) + "\n\nconst poems = [\n  " + ",\n  ".join(names) + "\n]\n\nexport default poems\n"

(POEMS_DIR / 'poemsData.js').write_text(poemsdata, encoding='utf-8')
print('Updated poemsData.js')
