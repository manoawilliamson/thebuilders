import { NextResponse } from "next/server";

// Connect to your email provider (ConvertKit, Resend, Mailchimp, etc.)
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Add your email service integration here
    // Example with Resend: 
    // await resend.emails.send({
    //   from: 'team@thebuilders.com',
    //   to: email,
    //   subject: 'Welcome to The Builders!',
    //   html: '<p>Thanks for joining our community of AI builders. Check your inbox for our latest resources and workshops.</p>'
    // });
    
    // For now we capture emails for our community
    console.log("[The Builders] New community member:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
