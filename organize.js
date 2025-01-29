const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const categories = {
    'Archives': ['.zip', '.tar', '.gz', '.rar'],
    'Audio': ['.mp3', '.wav', '.flac'],
    'Code': ['.js', '.css', '.html', '.py', '.java', '.cpp'],
    'Documents': ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'],
    'Images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'],
    'Videos': ['.mp4', '.mkv', '.avi', '.mov', '.wmv'],
    'Others': []
};

program
    .name('file-organizer')
    .description('CLI tool to organize files into categories based on file extensions')
    .version('1.0.0')
    .argument('<directory>', 'Directory to organize')
    .action((directory) => {
        const targetDir = directory;

        if (!fs.existsSync(targetDir)) {
            console.error(`Directory does not exist: ${targetDir}`);
            process.exit(1);
        }

        fs.readdir(targetDir, (err, files) => {
            if (err) {
                console.error(`Error reading directory: ${err}`);
                process.exit(1);
            }

            files.forEach(file => {
                const filePath = `${targetDir}/${file}`;
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(`Error getting stats for file: ${err}`);
                        return;
                    }

                    if (stats.isFile()) {
                        const ext = file.slice(((file.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();
                        let fileCategory = 'Others'; 

                        for (const [key, extensions] of Object.entries(categories)) {
                            if (extensions.includes(`.${ext}`)) {
                                fileCategory = key;
                                break;
                            }
                        }

                       const categoryDir = `${targetDir}/${fileCategory}`;
                        if (!fs.existsSync(categoryDir)) {
                            fs.mkdirSync(categoryDir, { recursive: true });
                        }
                 
                        const newFilePath = `${categoryDir}/${file}`;
                        fs.rename(filePath, newFilePath, (err) => {
                            if (err) {
                                console.error(`Error moving file: ${err}`);
                            } else {
                                console.log(`Moved ${file} to ${fileCategory}`);
                            }
                        });
                    }
                });
            });
        });
    });

program.parse(process.argv);
