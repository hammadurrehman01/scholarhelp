"use server";
import nodemailer from "nodemailer";

export default async function EmailAction2(state: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Simple email validation
    if (!email || typeof email !== 'string' || !email.includes("@")) {
      return { error: "Invalid email address" };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.HOST as string,
      port: process.env.PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD, // your SMTP password
      },
    });

    // Mail options for the client
    const clientMailOptions = {
      from: `Taking My Classes Online® Alert - <${process.env.MAILFROM}>`,
      to: email,
      subject: `New Contact Form Entry | Taking My Classes Online`,
      html: `
<body style="margin: 0; padding: 0; color: black;">
    <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd; font-family: system-ui;">
        <div style="text-align: center; padding: 10px; background-color:#7f05f0c2; border-radius: 10px;">
            <div style="display: inline-block;">
                <img src="https://muhammadumer.sirv.com/taking-logo-2-dark.png" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 80px; width: auto;">
                <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: x-large; font-weight: 600; color: whitesmoke;">Taking My Classes Online</p>
            </div>
        </div>
        <div style="padding: 10px 0; text-align: center;">
            <div style="margin: 10px 0;">
                <img style="border-radius: 10px;" height="100" src="https://muhammadumer.sirv.com/dlf-form.png" alt="">
            </div>
        </div>
        <p style="font-size: 20px; text-align: center; font-weight: 600;">Thanks for reaching out! We're on it!<br></p>
        <div style="text-align: center;">
            <div style="margin: 5px 0;">
                <p style="font-size: medium; text-align: center; color: gray; font-weight: 600; padding-left: 10px; padding-right: 10px;">
                    When Taking My Classes Online gives you a deal,
                    Jump on the chance—make it real!
                    Grab your spot and give it a whirl,
                    Order now and watch your dreams swirl!
                </p>
            </div>
        </div>
        <div style="padding: 10px 0; text-align: center;">
            <div style="margin: 10px 0;">
                <p style="font-size: 20px; text-align: center; font-weight: 500;">Apply this discount code to begin your journey!</p>
                <a href="https://eduresearchers.com/Order?coupon=off45">
                    <img style="border-radius: 10px;" height="100" src="https://muhammadumer.sirv.com/coupon-2.png" alt="">
                </a>
            </div>
        </div>
        <div style="text-align: center;">
            <p style="font-size: 18px; font-weight: 400;">You Can Contact Our Support Team 24/7.</p>
            <a href="https://wa.me/447418374184?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?" style="display: inline-block; padding: 10px 20px; background-color: #07cc08; text-decoration: none; font-size: 16px; vertical-align: middle; font-weight: bold; border-radius: 5px; margin: 5px 0; text-align: center; color: whitesmoke;">
                <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
                Whatsapp Now
            </a>
        </div>
        <div style="text-align: center; padding: 10px; font-size: 12px;">
            <p>Taking My Classes Online is a registered trademark of Taking My Classes Online, Inc. All rights reserved.</p>
        </div>
    </div>
</body>
      `,
    };

    // Mail options for support
    const supportMailOptions = {
      from: `Taking My Classes Online® Alert - <${process.env.MAILFROM}>`,
      to: process.env.MAILTO, // Replace with your support email
      subject: `New Contact Form Submission from ${name}`,
      html: `
<body style="margin: 0; padding: 0; color: black;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; font-family: system-ui;">
        <h2 style="text-align: center;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong>${message} </p>
        
        <p style="text-align: center; color: gray; font-size: small;">This is an automated message. Please do not reply.</p>
    </div>
</body>
      `,
    };

    // Send both emails
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(supportMailOptions);

    console.log("Emails sent successfully.");
    return { success: "Form Submitted Successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }
}
