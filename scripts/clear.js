const fs = require('fs');
const path = require('path');

const DIST_DIR = "./dist";

function clearDist(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            clearDist(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    })
    if (dir != DIST_DIR) fs.rmdirSync(dir);
}

console.log("clearing dist files");
clearDist(DIST_DIR);
console.log("dist files cleared");