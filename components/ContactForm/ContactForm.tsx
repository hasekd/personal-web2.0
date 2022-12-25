import React, { useEffect, useState } from "react";
import { send } from "emailjs-com";
import {
  Flex,
  FormControl,
  useToast,
  Input,
  FormLabel,
  Textarea,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const emailSend = async (formData: any): Promise<any> => {
    try {
      const emailRes = await send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (emailRes.status === 200) {
        return { emailRes, isSuccess: true };
      }
    } catch (err) {
      console.log(err);
      return { err, isSuccess: false };
    }
  };

  useEffect(() => {
    setToSend({
      name: nameInput,
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
      return toast({
        title: "Successfully submited!",
        description: "Received your message, thank you :)",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
    return toast({
      title: "This didn't work.",
      description: "Something went wrong.",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        fontSize={{ base: "2.5rem", md: "3.3rem" }}
        textAlign={"center"}
        mt={"4rem"}
      >
        <Text>Thanks for taking the time to reach out.</Text>
        <Text>How can I help you?</Text>
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl maxW={"70rem"} m={"5rem auto"} p={"0 2rem"}>
          <Flex flexDir={"column"}>
            <Flex
              gap={"2rem"}
              mb={"2rem"}
              flexDir={{ base: "column", sm: "unset" }}
            >
              <Flex flexDir={"column"} w={"100%"}>
                <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
                  Name
                </FormLabel>
                <Input
                  size={"lg"}
                  h={"4.8rem"}
                  fontSize={"1.5rem"}
                  borderColor={"black"}
                  _hover={{ borderColor: theme.color.primary.blue }}
                  onChange={(e: any) => setNameInput(e.target.value)}
                  value={nameInput}
                  required
                />
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
                  E-mail
                </FormLabel>
                <Input
                  type={"email"}
                  size={"lg"}
                  h={"4.8rem"}
                  fontSize={"1.5rem"}
                  borderColor={"black"}
                  _hover={{ borderColor: theme.color.primary.blue }}
                  onChange={(e: any) => setEmailInput(e.target.value)}
                  value={emailInput}
                  required
                />
              </Flex>
            </Flex>
            <FormLabel fontSize={"2rem"} mb={"1rem"} textColor={"#666666"}>
              Message
            </FormLabel>
            <Textarea
              minHeight="23rem"
              fontSize={"1.5rem"}
              borderColor={"black"}
              _hover={{ borderColor: theme.color.primary.blue }}
              onChange={(e: any) => setMessageInput(e.target.value)}
              value={messageInput}
              required
            />
            <Button
              mt="3.5rem"
              p={{ base: "2.1rem 4rem", sm: "2.3rem 5.7rem" }}
              fontSize={"1.7rem"}
              bgColor={"transparent"}
              borderRadius={"5rem"}
              fontWeight={500}
              alignSelf={"center"}
              border={`2px solid ${theme.color.primary.blue}`}
              textColor={theme.color.primary.blue}
              _hover={{
                bgColor: theme.color.hover.blue,
                textColor: theme.color.text.white,
              }}
              transition={"all 0.4s ease-out"}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
};

export default ContactForm;
