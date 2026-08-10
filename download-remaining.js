import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '.');

const imageDownloads = [
  {
    dir: 'services',
    name: 'battery-storage.jpg',
    url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'carport-project.jpg',
    url: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=1000&q=85'
  }
];

async function downloadRemaining() {
  console.log('Downloading remaining 2 verified photos...');
  for (const item of imageDownloads) {
    const targetFolder = path.join(rootDir, 'src', 'assets', 'images', item.dir);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
    const filePath = path.join(targetFolder, item.name);
    try {
      const response = await fetch(item.url);
      if (!response.ok) {
        console.error(`FAILED ${item.dir}/${item.name}: Status ${response.status}`);
        continue;
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(filePath, buffer);
      console.log(`✓ Downloaded ${item.dir}/${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`ERROR downloading ${item.name}:`, err.message);
    }
  }
}

downloadRemaining();
