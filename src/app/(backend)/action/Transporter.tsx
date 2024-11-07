import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: process.env.HOST as string,
  port: process.env.PORTS as unknown as number,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER, // your SMTP username
    pass: process.env.PASSWORD, // your SMTP password
  },
});
