import React, { useState } from 'react'
import { send } from "emailjs-com";
import {theme} from "../../styles/theme"

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const emailSend = async (formData: any): Promise<any> => {
    try {
      const emailRes = await send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (emailRes.status === 200) {
        return { emailRes, isSuccess: true };
      }
    } catch (err) {
      return { err, isSuccess: false };
    }
  };

  useEffect(() => {
    setToSend({
      fullName: nameInput,
      email: emailInput,
      message: messageInput,
    });
  }, [nameInput, emailInput, messageInput]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const result = await emailSend(toSend);

    setNameInput("");
    setEmailInput("");
    setMessageInput("");

    if (result.isSuccess) {
      return toast.success("Successfully submited!");
    }
    return toast.error("This didn't work.");
  };
  return (
    
  )
}

export default ContactForm