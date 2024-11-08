import { heroSection } from "@/constants/fileDateRoutes";
import fs from "fs/promises";  // Use fs.promises to work with async/await

export async function GET(req: Request, res: Response) {
  try {
    const data = await fs.readFile(heroSection, "utf-8");
    return new Response(
      JSON.stringify({ success: true, data: JSON.parse(data) }),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      {
        status: 500,
      }
    );
  }
}
