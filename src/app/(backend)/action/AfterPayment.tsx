"use server"
import nodemailer from "nodemailer";
import fs from 'fs'
import * as fsPromises from 'fs/promises';
import { join } from "path";

interface EmailData {
  topic: string;
  selectedValue: number;
  wordCount: number;
  level: string;
  paper: string;
  quality: string;
  deadline: string;
  subject: string;
  language: string;
  source: number;
  format: string;
  referencing: string;
  pricePerPage: number;
  totalPrice: number;
  file: FileList|null
  name: string;
  email: string;
  phone: string;
  country: string;
  notes: string;

}

export const AfterPayment = async (formData: FormData) => {

    // Extracting variables separately
    const topic = formData.get("topic") as string;
    const selectedValue = Number(formData.get("selectedValue"));
    const wordCount = Number(formData.get("wordCount"));
    const level = formData.get("level") as string;
    const paper = formData.get("paper") as string;
    const quality = formData.get("quality") as string;
    const deadline = formData.get("deadline") as string;
    const subject = formData.get("subject") as string;
    const language = formData.get("language") as string;
    const source = Number(formData.get("source"));
    const format = formData.get("format") as string;
    const referencing = formData.get("referencing") as string;
    const pricePerPage = Number(formData.get("pricePerPage"));
    const totalPrice = Number(formData.get("totalPrice"));
    const file = formData.get("file") as FileList | null;
    const name = formData.get("name") as string;
    const phone= formData.get("phone") as string;
    const country= formData.get("country") as string;
    const email= formData.get("email") as string;
    const notes= formData.get("notes") as string;
    const symbol = formData.get("symbol") as string;
    const ppp = formData.get("ppp") as string;
    const unit = formData.get("unit") as string;


  ///// Check for an Attachment folder /////
  const path = "./Attachments";

  // Check if the "Attachment" folder exists; if not, create one
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log("Folder created: Attachments");
  } else {
    console.log("Folder already exists: Attachments");
  }

  // Parse form data
  const filer: any = file

  const attachments = [];
  if (filer?.length > 0) {
    for (let i = 0; i < filer.length; i++) {
      const file = filer[i];
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const lastModifiedDate = new Date(file.lastModified);
      const filenameWithDate = `${lastModifiedDate.toISOString()}_${file.name}`;
      const filePath = join(path, filenameWithDate);

      try {
        await fsPromises.writeFile(filePath, buffer);
        console.log(`File saved: ${filePath}`);
        attachments.push({
          filename: `${i + 1}_${file.name}`,
          path: filePath,
        });
      } catch (error) {
        console.error("Error saving file:", error);
      }
    }
  } else {
    console.log("No files to upload.");
  }


  const transporter = nodemailer.createTransport({
    host: process.env.HOST as string,
    port: process.env.PORTS as unknown as number,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD // your SMTP password
    }
  });

  const clientPaymentMailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `New Order from ${process.env.NEXT_PUBLIC_NAME}`,
    text: 'Thank You For Order',
    html: `
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0; ">
    <div style="background-position: center;background-size: cover; width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #fffdfa; padding: 20px;">
    
        <div style="text-align: center;">
            <div style="display: inline-block; padding: 5px;">
           <img src="https://muhammadumer.sirv.com/edu-logo.png" alt="" style="display: inline-block; vertical-align: middle; height: 50px; width: auto;">
         <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: x-large;  font-weight: 700; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
                 Taking My Classes Online
                </p>
            </div>
        </div>
    
      <p style="font-size: 22px;  line-height: 1.5; text-align: center; font-weight: 700;">
        Thank You For Your Order ${name} <br></p>

        <div style="text-align: center;">
          <a href="" style="display: inline-block; padding: 12px; background-color: #ff8615; color: whitesmoke;  text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 25px; margin: 5px 0; text-align: center; vertical-align: middle;">
            Payment Recieved
          </a>
        </div>
    
     

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Name:</div>
          <div style="float: right;">${name}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Email:</div>
          <div style="text-decoration: none; float: right;">${email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Phone:</div>
          <div style="float: right;">${phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Country:</div>
          <div style="float: right;">${country}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Notes:</div>
          <div style="float: right;">${notes}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
 
      <div style="text-align: center;">
        <h2 style="font-size: 24px;  font-style: italic;">Order Summary</h2>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Topic:</div>
          <div style="float: right;">${topic}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Pages:</div>
          <div style="float: right;">${selectedValue}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Word Count:</div>
          <div style="float: right;">${wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Academic Level:</div>
          <div style="float: right;">${level}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Type:</div>
          <div style="float: right;">${paper}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Quality:</div>
          <div style="float: right;">${quality}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Deadline:</div>
          <div style="float: right;">${deadline}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Subject:</div>
          <div style="float: right;">${subject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Language:</div>
          <div style="float: right;">${language}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Sources:</div>
          <div style="float: right;">${source}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Format:</div>
          <div style="float: right;">${format}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Referencing:</div>
          <div style="float: right;">${referencing}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

        <div style="text-align: center;">
        <h2 style="font-size: 24px;  font-style: italic;">Order Pricing</h2>
      </div>
    

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Discount:</div>
          <div style="float: right;">40% OFF</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Turnitin Report:</div>
          <div style="float: right; background-color: orange; border: 2px solid #FFA500; border-radius: 15px; width: 100px; padding: 2px; color:white ; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">Free</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Price Per Page:</div>
          <div style="float: right;">${symbol}${pricePerPage}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Total Price:</div>
          <div style="float: right;">${symbol}${totalPrice}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="text-align: center;">
        <p style="font-size: x-large;  font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
        <a href="https://wa.me/447418374184" style="display: inline-block; padding: 15px 30px; background-color: #15ff00; color: black;  text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0; text-align: center; vertical-align: middle;">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding-top: 10px; font-size: 12px; ">
        <p>Taking my classes online is a registered trademark of Taking my classes online, Inc. All rights reserved.</p>
      </div>
    
    </div>
    </body>
    `,
  };

  try {
    const info2 = await transporter.sendMail(clientPaymentMailOptions);
    console.log("client Email sent:", info2);
    return { success: true, info: info2 }; 
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Error sending order" };
  }
};


