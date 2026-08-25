const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src', 'app', 'core', 'services'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('http://localhost:3000/api')) {
    // Replace the URL part
    // For things like private apiUrl = 'http://localhost:3000/api/projects';
    // We want to replace it with: private apiUrl = `${environment.apiUrl}/projects`;
    content = content.replace(/'http:\/\/localhost:3000\/api(.*?)'/g, '`${environment.apiUrl}$1`');
    
    // Add import statement at the top if it doesn't exist
    if (!content.includes('import { environment }')) {
      // Find the first line that is an import and calculate depth based on file location
      const depth = file.split(path.sep).length - path.join(__dirname, 'src').split(path.sep).length;
      const relativeDots = '../'.repeat(depth) + 'environments/environment';
      const importStatement = `import { environment } from '${relativeDots}';\n`;
      content = importStatement + content;
    }
    
    fs.writeFileSync(file, content);
    console.log('Updated:', file);
  }
});
