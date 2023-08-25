import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  const { email, fullName, message } = await request.json();

  const user = process.env.USER_GMAIL;
  const pass = process.env.APP_PASS;

  const data = { email, fullName, message };

  const transporter = nodemailer.createTransport({
    // pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user,
      pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "sabirwin10@hotmail.com , mrsabir4@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${fullName} `,
      html: `
        <p>Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message} </p>
      `,
    });
  } catch (error) {
    console.log(error);
  }

  console.log("api log", email, fullName, message);

  return NextResponse.json({ email });
}
