import nodemailer from 'nodemailer'



  let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_PASSWORD, 
        }
  })

  export default async function sendEmail(req, res) {
    const {email, subject, message, phoneNumber, username} = req.body
    
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: subject,
      text: `${username} with email: ${email} and phone No:${phoneNumber}  says: 
      
      
      ${message}`
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  }

  
