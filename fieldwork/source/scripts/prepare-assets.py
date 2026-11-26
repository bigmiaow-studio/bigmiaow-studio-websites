from pathlib import Path
import re, random, zlib, struct, urllib.parse, subprocess, concurrent.futures

root = Path(__file__).resolve().parent.parent
fonts = root / 'public/fonts'
fonts.mkdir(parents=True, exist_ok=True)
source = '\n'.join(p.read_text() for p in (root / 'src').glob('*.js'))
chars = ''.join(sorted(set(re.findall(r'[\u3000-\u9fff]', source))))
chars += ''.join(chr(c) for c in range(32, 127)) + '©®·—–“”’。→×−'
ua = 'Mozilla/5.0 Chrome/124.0.0.0 Safari/537.36'

def get_font(family):
    query = urllib.parse.urlencode({'family': family + ':wght@400;500;600;700', 'display': 'swap', 'text': chars if family == 'Noto Sans SC' else ''.join(chr(c) for c in range(32,127)) + '©®·—–“”’'})
    css = subprocess.check_output(['curl', '-fsSL', '--retry', '2', '-A', ua, 'https://fonts.googleapis.com/css2?' + query], text=True)
    urls = list(dict.fromkeys(re.findall(r'url\((https[^)]+)\)', css)))
    for i, url in enumerate(urls):
        filename = family.lower().replace(' ', '-') + '-' + str(i) + '.woff2'
        subprocess.run(['curl', '-fsSL', '--retry', '2', url, '-o', str(fonts / filename)], check=True)
        css = css.replace(url, '/fonts/' + filename)
    return css

with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    styles = list(pool.map(get_font, ['IBM Plex Sans', 'Noto Sans SC']))
(fonts / 'fonts.css').write_text('\n'.join(styles))

# Original, subtle paper material. Every fiber is at most 4% opaque.
size = 256
rng = random.Random(2026)
alpha = [rng.randrange(0, 4) for _ in range(size * size)]
for _ in range(700):
    x, y = rng.randrange(size), rng.randrange(size)
    length = rng.randrange(2, 15)
    dx, dy = rng.choice([(1, 0), (1, 1), (0, 1), (-1, 1)])
    for step in range(length):
        px, py = (x + step * dx) % size, (y + step * dy) % size
        alpha[py * size + px] = rng.randrange(5, 11)
raw = b''.join(b'\0' + b''.join(bytes([23, 36, 44, alpha[y * size + x]]) for x in range(size)) for y in range(size))
def chunk(name, data):
    return struct.pack('>I', len(data)) + name + data + struct.pack('>I', zlib.crc32(name + data) & 0xffffffff)
png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
(root / 'public/paper-fiber.png').write_bytes(png)
print('Prepared local fonts and original 4% paper fibers.')
