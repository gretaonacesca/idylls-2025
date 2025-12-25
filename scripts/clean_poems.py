from pathlib import Path
POEMS_DIR = Path(__file__).resolve().parents[1] / 'src' / 'poems'
for p in POEMS_DIR.glob('*.js'):
    if p.name == 'poemsData.js':
        continue
    s = p.read_text(encoding='utf-8')
    if '--PAGE_BREAK--' in s:
        new = s.replace('\n--PAGE_BREAK--\n','\n')
        new = new.replace('\n--PAGE_BREAK--\n\n','\n\n')
        new = new.replace('--PAGE_BREAK--\n','')
        new = new.replace('\n--PAGE_BREAK--','\n')
        p.write_text(new, encoding='utf-8')
        print('Cleaned', p.name)
    else:
        print('No marker in', p.name)
