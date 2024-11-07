import fs from "fs/promises";
import path from "path";

// Ensure absolute path for JSON file
const dataFilePath = path.join(process.cwd(), "homedata", "heroSection.json");

export async function PUT(req: any, res: any) {
  try {
    // Parse incoming request data
    const data = await req.json();

    // Log the incoming data and the file path to ensure it's correct
    console.log("Incoming data:", JSON.stringify(data, null, 2));
    console.log("Data file path:", dataFilePath);

    // Read the existing JSON file content
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    // Recursive function to update text by ID in a nested structure
    function updateTextById(dataObj: any, jsonDataObj: any) {
      for (const key in jsonDataObj) {
        if (jsonDataObj[key] && typeof jsonDataObj[key] === "object") {
          if (jsonDataObj[key].id && dataObj[key]?.id === jsonDataObj[key].id) {
            console.log(`Updating key: ${key} with new text: ${dataObj[key]?.text}`);
            jsonDataObj[key].text = dataObj[key].text;
          } else {
            updateTextById(dataObj, jsonDataObj[key]);
          }
        }
      }
    }

    // Update jsonData with values from data
    updateTextById(data, jsonData);

    // Log the updated jsonData before writing
    console.log("Updated JSON data:", JSON.stringify(jsonData, null, 2));

    // Ensure absolute path for writing back to the file
    const writePath = path.join(process.cwd(), "homedata", "heroSection.json");

    // Write the updated content back to the JSON file
    await fs.writeFile(writePath, JSON.stringify(data, null, 2));

    // Confirm the file was written successfully
    console.log("File written successfully");

    // Respond with success
    return new Response(
      JSON.stringify({
        success: true,
        message: "Content updated successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error updating data:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
      }
    );
  }
}