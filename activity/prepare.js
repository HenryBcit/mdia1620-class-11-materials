const fs = require('fs');
const path = require('path');
const {ac1, ac2, ac3} = require("./jscontent")

/**
 * Create nested folders from a path string and write init.js file at the end.
 * @param {string} folderPath - The folder path string (e.g., "test/next/go")
 */
function createNestedFoldersAndInitFile(folderPath, jscontent) {
    const fullPath = path.resolve(folderPath); // Convert to absolute path

    // Create nested folders
    fs.mkdirSync(fullPath, { recursive: true });

    // Path to the init.js file
    const initFilePath = path.join(fullPath, 'init.js');

    // Content for init.js
    const fileContent = jscontent;

    // Write the file (overwrites if already exists)
    fs.writeFileSync(initFilePath, fileContent);

    console.log(`Created folders and file: ${initFilePath}`);
}

// Example usage:
let inputPath = 'mdia1620_class11_exercise_problem_1';
createNestedFoldersAndInitFile(inputPath, ac1);
inputPath = 'mdia1620_class11_exercise_problem_2';
createNestedFoldersAndInitFile(inputPath, ac2);
inputPath = 'mdia1620_class11_exercise_problem_3';
createNestedFoldersAndInitFile(inputPath, ac2);

