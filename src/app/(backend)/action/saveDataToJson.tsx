import fs from "fs";
import path from "path";

export default function saveFormDataToJson(formDataObj: any) {

  // Define the directory path
  const dirPath = path.join(process.cwd(), "order");

  // Check if the directory exists, if not, create it
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true }); // Recursive to create parent directories if needed
    console.log(`Directory created at ${dirPath}`);
  }

  // Define the file path where the JSON will be saved
  const filePath = path.join(dirPath, `${formDataObj.orderId}.json`);

  // Convert form data object to JSON string
  const jsonData = JSON.stringify(formDataObj, null, 2); // Pretty-print with 2 spaces

  // Save JSON to file
  try {
    fs.writeFileSync(filePath, jsonData);
    console.log(`Data saved to ${filePath}`);
  } catch (err) {
    console.error("Error writing file", err);
  }
}
