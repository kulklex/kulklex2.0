import React, {useState} from 'react'
import axios from 'axios'

type Props = {}

export default function Contact({}: Props) {

  const [username, setUserName] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState<string>("")
  const [successMsg, setSuccessMsg] = useState<string>("")
  
  
  const formData = {
    username, phoneNumber, email, subject, message,
  }

  // Email Validation Start
  const emailValidation = (email:any) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // Email Validation End


  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (username === "") setErrorMsg("Name Field is required!")
    else if (phoneNumber === "") setErrorMsg("Phone Number Field is required!")
    else if (email === "") setErrorMsg("Email Field is required!")
    else if (!emailValidation(email)) setErrorMsg("Invalid Email Type")
    else if (message === "") setErrorMsg("Message Field is required!")
    

    try {
      await  axios.post('/api/sendEmail', {username, phoneNumber, email, subject, message})
      .then(() => {
        setSuccessMsg(`Thank you ${username}, Your Message has been sent!`)
        setErrorMsg("");
        setUserName("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      
      
    } catch (err) {
      console.error(err)
    }  
    
  }

  return (  
        <div className="w-full md:w-[55%] h-full flex flex-col items-end justify-between mt-10 md:mx-4 lg:mx-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col gap-4 lg:gap-6 py-2 lg:py-5">              
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white upppercase tracking-wide">YOUR NAME</p>
                  <input type="text" value={username} onChange={(e) => setUserName(e.target?.value)} className={`${errorMsg === "Name Field is required!" && "outline-designColor"} contactInput`} />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white upppercase tracking-wide">PHONE NUMBER</p>
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target?.value)} className={`${errorMsg === "Phone Number Field is required!" && "outline-designColor"} contactInput`} />
                </div>
              </div>

              <div className="w-full flex flex-col gap-8">
                <p className="text-sm text-white upppercase tracking-wide">EMAIL</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target?.value)} className={`${errorMsg === "Email Field is required!" && "outline-designColor"} ${errorMsg === "Invalid Email Type" && "outline-designColor"} contactInput`} />
              </div>

              <div className="w-full flex flex-col gap-8">
                <p className="text-sm text-white upppercase tracking-wide">SUBJECT</p>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target?.value)} className={`contactInput`} placeholder="optional" />
              </div>

              <div className="w-full flex flex-col gap-8">
                <p className="text-sm text-white upppercase tracking-wide">MESSAGE</p>
                <textarea cols={30} rows={10} value={message} onChange={(e) => setMessage(e.target?.value)} className={`${errorMsg === "Message Field is required!" && "outline-designColor"} contactTextArea`} />
              </div>

              <div className="w-full">
                <button type="submit" onClick={(e) => handleSubmit(e)} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>

              {errorMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                  {errorMsg} 
                </p>
              )}

            </form>
        </div>
 )
}