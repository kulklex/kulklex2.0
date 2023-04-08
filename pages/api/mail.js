import nodemailer from 'nodemailer'




export default async function handler(req, res) {
  const {username, email, phoneNumber, subject, message}  = req.body


  let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD, 
        }
  })


  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: subject,
      text: `${username} (${email}) and phone No:${phoneNumber} says: ${message}`
    })

    res.status(200).json({msg:"Email sent successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Error sending email"});
  }
}
