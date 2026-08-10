import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

const imageDownloads = [
  {
    dir: 'hero',
    name: 'solar-hero.jpg',
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    dir: 'about',
    name: 'about-installation.jpg',
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    dir: 'about',
    name: 'about-team.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
  },
  {
    dir: 'services',
    name: 'residential.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'services',
    name: 'commercial.jpg',
    url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'services',
    name: 'industrial.jpg',
    url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'services',
    name: 'installation.jpg',
    url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'services',
    name: 'maintenance.jpg',
    url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'services',
    name: 'battery-storage.jpg',
    url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'industrial-project.jpg',
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'commercial-project.jpg',
    url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'residential-project.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'winery-project.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'carport-project.jpg',
    url: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'projects',
    name: 'luxury-project.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    dir: 'cta',
    name: 'solar-cta.jpg',
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=85'
  }
];

async function downloadAll() {
  console.log('Targeting:', path.join(rootDir, 'src', 'assets', 'images'));
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
  console.log('All image downloads completed successfully!');
}

downloadAll();
