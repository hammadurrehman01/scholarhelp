import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  if (process.env.NODE_ENV === "development") {
    // Hardcoded IP for local development
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.ip || 'Unknown IP';
     console.log("ip",req.ip);
    // const clientIp = "39.51.106.66";
    console.log("Development mode: IP successfully retrieved:", clientIp);
    return NextResponse.json({ ip: clientIp });
  } else if (process.env.NODE_ENV === "production") {
    try {
      // Attempt to retrieve IP from x-forwarded-for or req.ip
      const forwardedFor = req.headers.get('x-forwarded-for');
      const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.ip || 'Unknown IP';
      
      // Log successful IP retrieval
      console.log("Production mode: x-forwarded-for header:", forwardedFor);
      console.log("Production mode: Final IP resolved:", clientIp);
      console.log("ip",req.ip);

      return NextResponse.json({ ip: clientIp });
    } catch (error) {
      // Ensure error is typed as an Error to access error.message
      if (error instanceof Error) {
        console.error("Error retrieving client IP:", error.message);
      } else {
        console.error("Unknown error occurred while retrieving client IP");
      }
      return NextResponse.json({ ip: 'Error retrieving IP' });
    }
  } else {
    console.warn("Unhandled NODE_ENV environment:", process.env.NODE_ENV);
    return NextResponse.json({ ip: 'Environment not supported' });
  }
}