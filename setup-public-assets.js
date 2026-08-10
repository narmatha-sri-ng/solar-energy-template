import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicAssetsDir = path.join(rootDir, 'public', 'assets');

const folders = ['hero', 'about', 'services', 'projects', 'cta', 'avatars', 'brand'];
folders.forEach(folder => {
  const p = path.join(publicAssetsDir, folder);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

const downloads = [
  {
    path: path.join(publicAssetsDir, 'logo.png'),
    url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=200&h=200&q=90&fm=png'
  },
  {
    path: path.join(publicAssetsDir, 'hero', 'solar-hero.jpg'),
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'about', 'about-solar.jpg'),
    url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'about', 'solar-team.jpg'),
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'residential-solar.jpg'),
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'commercial-solar.jpg'),
    url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'industrial-solar.jpg'),
    url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'solar-installation.jpg'),
    url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'solar-maintenance.jpg'),
    url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'services', 'battery-storage.jpg'),
    url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'industrial-project.jpg'),
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'commercial-project.jpg'),
    url: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'residential-project.jpg'),
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'winery-project.jpg'),
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'corporate-project.jpg'),
    url: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'projects', 'luxury-project.jpg'),
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'cta', 'solar-cta.jpg'),
    url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'avatars', 'robert.jpg'),
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'avatars', 'sarah.jpg'),
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'avatars', 'marcus.jpg'),
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85'
  },
  {
    path: path.join(publicAssetsDir, 'avatars', 'elena.jpg'),
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=85'
  }
];

async function run() {
  console.log('Downloading natural photography assets into public/assets/...');
  for (const item of downloads) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed ${item.path}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(item.path, buffer);
      console.log(`✓ Saved ${path.relative(publicAssetsDir, item.path)} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error saving ${item.path}:`, err.message);
    }
  }
  console.log('Public assets setup complete!');
}

run();
