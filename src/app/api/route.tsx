import { NextRequest, NextResponse } from "next/server";
import path from "path";
import * as fsPromises from "fs/promises";
import fs from "fs";
import nodemailer from "nodemailer";
import { transporter } from "../(backend)/action/Transporter";

export async function GET(req: NextRequest, res: NextResponse) {
  //**********Read Search params and set the value to variable  **********/
  const searchParams = req.nextUrl.searchParams;
  const afterPaymentToken = searchParams.get("after_payment_token") as string;
  const paymentStatus = searchParams.get("xxxpayment_status") as string;
  const OrderId = searchParams.get("payment_id") as string;

  //**********Reading Json File based on afterPaymentToken and get the Data********* */
  const filePath = path.join(
    process.cwd(),
    "order",
    `${afterPaymentToken}.json`
  );
  const fileData = await fsPromises.readFile(filePath, "utf8");
  const orderData = JSON.parse(fileData);
console.log("orderData",orderData);

  //**********Sending  Email to support ********* */
  const supportMailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILTO, // send to support email
    subject: `Payment Notification`,
    html: `
  <body>
    <h2>New Order Summary</h2>
    <p><strong>OrderID:</strong> ${orderData.orderId}</p>
    <p><strong>Name:</strong> ${orderData.name}</p>
    <p><strong>Email:</strong> ${orderData.email}</p>
    <p><strong>Phone:</strong> ${orderData.phone}</p>
    <p><strong>Country:</strong> ${orderData.country}</p>
    <h3>Order Details</h3>
    <ul>
      <li><strong>Topic:</strong> ${orderData.topic}</li>
      <li><strong>Pages:</strong> ${orderData.selectedValue}</li>
      <li><strong>Word Count:</strong> ${orderData.wordCount}</li>
      <li><strong>Academic Level:</strong> ${orderData.level}</li>
      <li><strong>Paper Quality:</strong> ${orderData.quality}</li>
      <li><strong>Subject:</strong> ${orderData.subject}</li>
      <li><strong>Language:</strong> ${orderData.language}</li>
      <li><strong>Paper Format:</strong> ${orderData.format}</li>
      <li><strong>Paper Type:</strong> ${orderData.paper}</li>
      <li><strong>No Of Sources:</strong> ${orderData.source}</li>
      <li><strong>Referencing:</strong> ${orderData.referencing}</li>
      <li><strong>Deadline:</strong> ${orderData.deadline}</li>
      <li><strong>Price Per Page:</strong> ${orderData.pricePerPage}</li>
      <li><strong>Total Price:</strong> ${orderData.symbol}${orderData.totalPrice}</li>
      <li><strong>Notes:</strong> ${orderData.notes}</li>
    </ul>
</body>
    `,
  };
  transporter.sendMail(supportMailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Email send error:", error);
    } else {
      console.log("Client Email sent: " + info.response);
    }
  });
  //**********Sending  Email to client **********/

  const clientPaymentMailOptions = {
    from: `Order Confirmed | Taking My Classes Online ${process.env.MAILFROM}`,
    to: orderData.email,
    subject: `Your Order #${orderData.orderId} is Confirmed - Thank You For Your Order! | Taking My Classes Online`,
    html: `
<body style="margin: 0; padding: 0;  background-color: #f0f0f0; ">
    <div style="background-position: center;background-size: cover; width: 100%; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #fffdfa; ">
    
   
    <div style="text-align: center; background-color: blueviolet; border-radius: 12px; ">
      <div style="display: inline-block;  padding: 15px;">
     <img src="https://muhammadumer.sirv.com/taking-logo-2-dark.png" alt="" style="display: inline-block; vertical-align: middle; height: 50px; width: auto; margin-right: 5px;">
   <p style="display: inline-block; vertical-align: middle; margin: 5px; font-size: 22px; color: whitesmoke;  font-weight: 600;">
           Taking My Classes Online
          </p>
      </div>
  </div>
    
      <p style="font-size: 22px;  line-height: 1.5; text-align: center; font-weight: 600;">
        Thank You For Your Order ${orderData.name} <br></p>

        <div style="text-align: center;">
          <a href="#" style="display: inline-block; color: whitesmoke; padding: 12px; background-color: #7d0bff;  text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 25px; margin: 5px 0; text-align: center; vertical-align: middle;">
            Payment Recieved
          </a>
        </div>
    
      <div style="text-align: start;">
        <h2 style="font-size: 26px; font-weight: 600;  padding-left: 20px; padding-right: 20px; padding-top: 5px; ">Personal Details</h2>
      </div>
    
      <div style="width:100%; height: 3px; background-color: #7d0bff; margin-bottom: 20px;"></div>


      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Name:</div>
          <div style="float: right;">${orderData.name}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Email:</div>
          <div style="text-decoration: none; float: right;">${orderData.email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Phone:</div>
          <div style="float: right;">${orderData.phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Country:</div>
          <div style="float: right;">${orderData.country}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Notes:</div>
          <div style="float: right;">${orderData.notes}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
 
      <div style="text-align: start;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <h2 style="font-size: 26px; font-weight: 600;  ">Order Summary</h2>
      </div>

      <div style="width:100%; height: 3px; background-color: #7d0bff; margin-bottom: 20px;"></div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Topic:</div>
          <div style="float: right;">${orderData.topic}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">No Of Pages:</div>
          <div style="float: right;">${orderData.selectedValue}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Word Count:</div>
          <div style="float: right;">${orderData.wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Academic Level:</div>
          <div style="float: right;">${orderData.level}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Paper Type:</div>
          <div style="float: right;">${orderData.paper}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Paper Quality:</div>
          <div style="float: right;">${orderData.quality}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Deadline:</div>
          <div style="float: right;">${orderData.deadline}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Subject:</div>
          <div style="float: right;">${orderData.subject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Language:</div>
          <div style="float: right;">${orderData.language}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">No Of Sources:</div>
          <div style="float: right;">${orderData.source}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Paper Format:</div>
          <div style="float: right;">${orderData.format}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Referencing:</div>
          <div style="float: right;">${orderData.referencing}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

        <div style="text-align: start;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <h2 style="font-size: 26px; font-weight: 600;  ">Order Pricing</h2>
      </div>
      
    <div style="width:100%; height: 3px; background-color: #7d0bff; margin-bottom: 20px;"></div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Discount:</div>
          <div style="float: right;">40% OFF</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Turnitin Report:</div>
          <div style="float: right; background-color: blueviolet; border: 2px solid #4c00ff; border-radius: 15px; color: whitesmoke; width: 100px; padding: 2px;  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">Free</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Price Per Page:</div>
          <div style="float: right;">${orderData.symbol}${orderData.pricePerPage}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;  padding-left: 20px; padding-right: 20px; padding-top: 5px;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; ">
          <div style="float: left;">Total Price:</div>
          <div style="float: right;">${orderData.symbol}${orderData.totalPrice}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="text-align: center; ">
        <p style="font-size: 20px;  font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
        <a href="https://wa.me/447418374184?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?" style="display: inline-block;color: #f0f0f0;  padding: 10px 30px; background-color: #3dad32;  text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 10px; margin: 10px 0; text-align: center; vertical-align: middle;">
          <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding-top: 10px; font-size: 12px; padding-bottom: 20px; ">
        <p>Taking My Classes Online is a registered trademark of Taking My Classes Online, Inc. All rights reserved.</p>
      </div>
    
    </div>
    </body>
    `,
  };
  transporter.sendMail(clientPaymentMailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Email send error:", error);
    } else {
      console.log("Client Email sent: " + info.response);
    }
  });

  //**********Delete the json **********//

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting the file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });

  //**********Redirect the user to thankyou page**********//
  return NextResponse.redirect("https://takingmyclassesonline.com/thank-you");
}
// http://localhost:3000/thank-you

//https://scholarhelp.vercel.app/thank-you

//https://takingmyclassesonline.com/thank-you
