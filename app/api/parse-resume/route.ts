import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_RESUME_PARSE_API_URL;
const url2 = process.env.NEXT_PUBLIC_RESUME_PARSE_API_URL;

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();

    // Forward the request to the external API
    const response = await axios.post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Return the response
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error parsing resume:", error);
    return NextResponse.json(
      { error: "Failed to parse resume" },
      { status: 500 }
    );
  }
}

// put request
export async function PUT(request: NextRequest) {
  try {
    const jsonData = await request.json();
    const response = await axios.put(`${url2}`, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// Configure the API route to handle large files
export const config = {
  api: {
    bodyParser: false,
  },
  maxDuration: 60,
};
