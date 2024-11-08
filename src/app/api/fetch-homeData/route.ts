import { heroSection } from "@/constants/fileDateRoutes";
import fs from "fs/promises";  // Use fs.promises to work with async/await

export async function GET(req: Request) {
  try {
    const data = await fs.readFile(heroSection, "utf-8");

    // Create a response object
    const response = new Response(
      JSON.stringify({ success: true, data: JSON.parse(data) }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',  // Ensures fresh data is always served
        },
      }
    );
    return response;
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
