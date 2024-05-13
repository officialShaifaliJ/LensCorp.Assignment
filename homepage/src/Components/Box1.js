import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Input,
  Avatar,
  // LightMode,
} from "@chakra-ui/react";
import { CheckIcon, AtSignIcon, SunIcon } from "@chakra-ui/icons";
import { FaPeopleLine } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";
import { PiBezierCurveThin } from "react-icons/pi";
import BlogAnimation from "./BlogAnimation";
import Services from "./Services";

function Box1({ colorMode }) {
  const whyChooseLens = [
    {
      t1: "New!",
      t2: "Generative AI",
      content:
        "In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....",
    },
    {
      t1: "April 25, 2024",
      t2: "The Evolution of AI in Games",
      content:
        "In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....",
    },
    {
      t1: "April 18, 2024",
      t2: "Unmasking the Misconceptions of Artificial Intelligence in the Workplace",
      content:
        "The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....",
    },
  ];

  const videoSource =
    colorMode === "light"
      ? "https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75"
      : "https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4";

  const services = [
    {
      shadowcolor: "#9AE6B4",
      shadowcolor2: "#F0FFF4",
      color: "#68D391",
      t1: "01",
      t2: "Biometrics",
      content:
        "Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.",
    },
    {
      color: "#63B3ED",
      shadowcolor: "#90CDF4",
      t1: "02",
      shadowcolor2: "#EBF8FF",
      t2: "Image Analysis",
      content:
        " Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.",
    },
    {
      color: "#FC8181",
      shadowcolor2: "#FFF5F7",
      shadowcolor: "#FBB6CE",
      t1: "03",
      t2: "Cross-Media Translation",
      content:
        " Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.",
    },
    {
      color: "#f7d181",
      shadowcolor2: "#FFFAF0",
      shadowcolor: "#FBD38D",
      t1: "04",
      t2: "3D Modelling and Design",
      content:
        "We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.",
    },
  ];

  const plugplay = [
    {
      t: "Exclusive Right",
      color: "#68D391",
      shadowcolor: "#9AE6B4",
      shadowcolor2: "#F0FFF4",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75",
      content:
        "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    },
    {
      t: "Research Driven",
      color: "#63B3ED",
      shadowcolor: "#90CDF4",
      shadowcolor2: "#EBF8FF",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75",
      content:
        "We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.",
    },
    {
      t: "Plug-and-Play",
      color: "#F687B3",
      shadowcolor: "#FBB6CE",
      shadowcolor2: "#FFF5F7",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75",
      content:
        "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    },
    {
      t: "Lifetime Support",
      color: "#FC8181",
      shadowcolor: "#FBD38D",
      shadowcolor2: "#FFFAF0",
      img: "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75",
      content:
        "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    },
  ];

  return (
    <Box
      bgImage={`url(${videoSource})`}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"fit"}
    >
      <Box
        //   bgGradient="linear(to-br,lightblue 15%, #FEEBC8 40%, #FED7E2 50%)"
        bgImage={`url(${videoSource})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        h={{ md: "80vh", sm: "60vh" }}
      >
        <Box
          w={{ lg: "40%", md: "60%", sm: "80%", base: "100%" }}
          p={6}
          ml={{ md: "10pc" }}
          pt={{ md: "7pc", base: "5pc" }}
        >
          <Heading
            size="lg"
            fontSize={{ md: "60px", sm: "50px", base: "50px" }}
            fontWeight="600px"
          >
            We are at the forefront of AI
          </Heading>
          <Text fontSize={{ lg: "25px", md: "20px", sm: "20px", base: "20px" }}>
            From Conserving Wildlife to Automatically Generating Caricatures– We
            Do It All
          </Text>
          <Button
            bgColor="black"
            color="white"
            size={{ md: "lg", base: "sm" }}
            mt="10px"
            position="relative"
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box h="auto" p="1pc" pb="2.5pc">
        <Box w={{ md: "22%", sm: "77%" }} margin={"auto"}>
          <Heading
            fontSize={{ md: "60px", sm: "50px", base: "50px" }}
            size="lg"
            align={"center"}
            // borderBottom={"3px solid lightskyblue"}
            fontWeight="600px"
            p="0.5pc"
          >
            About Us
          </Heading>
        </Box>
        <Box
          display="flex"
          gap={{ md: "60px" }}
          justifyContent="space-between"
          w={{ md: "80%", base: "95%" }}
          margin="auto"
          flexDirection={{ md: "row", base: "column" }}
          mt="40px"
          bgColor={colorMode === "light" ? "#EBF8FF" : "rgba(0, 0, 0, 0.24)"}
          p="2pc"
          borderRadius={"1pc"}
        >
          <Box w={{ md: "40%" }} mt="30px">
            <Heading
              fontSize={{ md: "40px", base: "30px" }}
              size="lg"
              fontWeight="600px"
            >
              Welcome to LENS
            </Heading>
            <Text fontSize={{ md: "25px", base: "20px" }} mt="10px">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don't have
              to.
            </Text>
            <Button border="1px solid black" mt="10px">
              Learn More
            </Button>
          </Box>
          <Box
            p="10px"
            borderRadius={"10px"}
            bgColor="white"
            w={{ md: "50%" }}
            h="350px"
          >
            <Image
              src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
              borderRadius={"10px"}
              w="100%"
              objectFit="cover"
              h="100%"
            />
          </Box>
        </Box>
      </Box>

      <Box
        //  backgroundColor='var(--gr-4, linear-gradient(54deg, #0091ff 0, #9cfeff 100%))'

        bgColor={colorMode === "light" ? "#EBF8FF" : ""}
      >
        <Box w={{ lg: "8%", md: "20%", sm: "40%" }} margin={"auto"} pt="20px">
          <Text
            fontSize="20px"
            size="lg"
            align={"center"}
            // borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            SERVICES
          </Text>
        </Box>

        <Box
          w={{ lg: "45%", md: "70%", sm: "100%" }}
          margin={"auto"}
          mt="1pc"
          pt="20px"
          border={"0px solid black"}
          alignContent="center"
        >
          <Heading
            fontSize={{ md: "60px", sm: "50px", base: "40px" }}
            fontWeight="600px"
            align="center"
            p="0.5pc"
            margin={"auto"}
            justifyContent="center"
          >
            We provide Artificial Intelligence Services
          </Heading>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ lg: "repeat(2,1fr)", md: "repeat(1,1fr)" }}
          w={{ md: "75%", base: "90%" }}
          margin="auto"
          gap="3pc"
          p="1pc"
          mt="3pc"
        >
          {services.map((e) => {
            return (
              <Services
                t1={e.t1}
                t2={e.t2}
                content={e.content}
                color={e.color}
                colorMode={colorMode}
                shadowcolor={
                  colorMode === "light" ? e.shadowcolor2 : e.shadowcolor
                }
              />
            );
          })}
        </Box>
      </Box>

      <Box>
        {/* Content */}

        <Box w={{ md: "18%", sm: "40%" }} margin={"auto"} pt="20px">
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            // borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            WHY CHOOSE LENS
          </Text>
        </Box>

        <Box
          w={{ md: "58%", sm: "98%" }}
          margin={"auto"}
          p={1}
          mt="1pc"
          pt="20px"
          border={"0px solid black"}
        >
          <Heading
            fontSize={{ md: "60px", sm: "50px", base: "38px" }}
            fontWeight="600px"
            align="center"
            p="0.5pc"
          >
            AI-driven solutions backed by science
          </Heading>

          <Text
            mt="1pc"
            fontSize={{ md: "22px", base: "20px" }}
            fontWeight="400"
            color="grey"
            align="center"
          >
            Every piece of AI technology shipped from LENS is thoroughly
            benchmarked via rigorous evaluations. With a global network of
            experts and academicians, we guarantee the most accurate and robust
            solutions in the market.
          </Text>

          <Box
            w={{ md: "100%", base: "100%" }}
            display="grid"
            mt="1pc"
            margin="auto"
            gridTemplateColumns={{ md: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
            gap="3pc"
            align="center"
            justifyContent={"center"}
          >
            <Box>
              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  State-of-the-art solutions
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  Fast & Efficient
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  No extra computation fee
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  No licensing fee
                </Text>
              </Flex>
            </Box>

            <Box>
              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  Lifetime support & upgrades
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  Plug-and-Play
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  24x7 Progress Monitoring
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize={{ md: "20px", base: "18" }} fontWeight="500">
                  Incremental Updates
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            display="grid"
            gap="1pc"
            gridTemplateColumns={{
              lg: "repeat(4,1fr)",
              md: "repeat(3,1fr)",
              sm: "repeat(1,1fr)",
              base: "repeat(1,1fr)",
            }}
            bgColor={colorMode === "light" ? "#f0fcfc" : ""}
            p="1pc"
            py="3pc"
            my="2.5pc"
          >
            {plugplay.map((e) => {
              return (
                <Box
                  p="1pc"
                  bgColor={
                    colorMode === "light" ? "white" : "rgba(0, 0, 0, 0.24)"
                  }
                  borderRadius="1pc"
                  _hover={{
                    border: `1px solid ${e.color}`,
                    transition: "ease-in-out 1s",
                    boxShadow: `inset -50px 20px 120px -36px ${
                      colorMode === "light" ? e.shadowcolor2 : e.shadowcolor
                    }`,
                    // bgColor: "#F0FFF4",
                  }}
                >
                  {/* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */}
                  <Text
                    fontSize={{ md: "35px", base: "30px" }}
                    fontWeight="600"
                  >
                    {e.t}
                  </Text>
                  <Box h="40%" align="center">
                    <Image
                      src={e.img}
                      margin={"auto"}
                      h="80%"
                      align="center"
                      // objectFit='contain'
                      // border= "1px solid #68D391"
                      my="1pc"
                    />
                  </Box>
                  <Text
                    fontSize={{ md: "18px", base: "16px" }}
                    color="grey"
                    p="0.5pc"
                  >
                    {e.content}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box>
        {/* Content */}

        <Box w={{ md: "18%", sm: "50%" }} margin={"auto"} pt="20px" my="3pc">
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            // borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            OUR VISION
          </Text>
        </Box>
        <Box w={{ lg: "60%", md: "100%" }} margin={{ md: "auto", sm: "1pc" }}>
          {" "}
          <Heading
            fontSize={{ md: "60px", sm: "50px", base: "38px" }}
            fontWeight="600px"
            align="center"
            p="1pc"
          >
            AI for Social Good
          </Heading>
          <Text
            mt="1pc"
            fontSize={{md:"22px",base:"19px"}}
            fontWeight="400"
            color="grey"
            align="center"
          >
            Explainable AI (XAI) is an emerging subject of machine learning
            research that refers to strategies that try to provide transparency
            to typically opaque AI models and their predictions.
          </Text>
        </Box>
        <Box
          w={{ md: "70%", base: "100%" }}
          display="flex"
          m={{ md: "auto", base: "0.5pc" }}
          mt="3pc"
        >
          <Box
            // borderRight="2px dashed black"
            w="100%"
            display="grid"
            pr="1pc"
            gridTemplateColumns={{
              md: "repeat(2, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            gridTemplateRows={{ base: "repeat(3, 1fr)" }}
            justifyContent="space-between"
            mb="3pc"
          >
            <Box
              // align="left"
              gridRow={{ md: "1 / 2" }}
              gridColumn={{ md: "1 / 2" }}
              bgColor={
                colorMode === "light"
                  ? "rgba(0, 0, 0, 0.04)"
                  : "rgba(0, 0, 0, 0.24)"
              }
              borderLeftRadius={"1.5pc"}
              borderRight={{ md: "2px dashed grey" }}
              p="1pc"
            >
              {" "}
              <Avatar
                bg="black"
                icon={<FaPeopleLine fontSize="2pc" />}
                m="auto"
              />
              <Heading>Diversity & Fairness</Heading>
              <Text fontSize="18px" color="grey" p="0.5pc">
                When training our AI models, we consider ethical and social
                implications of algorithm-based decision making. Our solutions
                use high-quality and fairly-represented data sets to eliminate
                human cognitive biases.
              </Text>
            </Box>

            <Box
              gridRow={{ md: "2 / 3" }}
              gridColumn={{ md: "2 / 3" }}
              borderLeft={{ md: "2px dashed grey" }}
              p="1pc"
              my="0.5pc"
              bgColor={
                colorMode === "light"
                  ? "rgba(0, 0, 0, 0.04)"
                  : "rgba(0, 0, 0, 0.24)"
              }
              borderRightRadius={"1.5pc"}
            >
              {" "}
              <Avatar
                bg="black"
                icon={<IoMdWifi fontSize={"2pc"} />}
                m="auto"
              />
              <Heading>Regulatory Compliance</Heading>
              <Text fontSize="18px" color="grey" p="0.5pc">
                Working with clients globally, LENS acknowledges applicable data
                privacy regulations, such as the GDPR, HIPAA and others, in all
                our solutions handling sensitive data. We also ensure our
                algorithms allow for the required level of decision-making
                transparency and explainability.
              </Text>
            </Box>

            <Box
              // align="center"
              gridRow={{ md: "3 / 4" }}
              gridColumn={{ md: "1 / 2" }}
              borderRight={{ md: "2px dashed grey" }}
              p="1pc"
              bgColor={
                colorMode === "light"
                  ? "rgba(0, 0, 0, 0.04)"
                  : "rgba(0, 0, 0, 0.24)"
              }
              borderLeftRadius={"1.5pc"}
            >
              {" "}
              <Avatar
                bg="black"
                icon={<PiBezierCurveThin fontSize={"2pc"} />}
                m="auto"
              />
              <Heading>Code of Ethics</Heading>
              <Text fontSize="18px" color="grey" p="0.5pc">
                LENS believes in a just, non-violent world of equality and
                fairness. We prize democratic values, civil liberties and open
                and informed debate. When used to further these values,
                algorithm-based decision-making models can continue to make the
                world a safer, better place for everyone.
              </Text>
            </Box>
          </Box>
          {/* <Box borderLeft="2px dashed black" w="50%"></Box> */}
        </Box>
      </Box>

      <Box
        my="2.5pc"
        bgColor={colorMode === "light" ? "#FFF5F7" : ""}
        p={{ md: "3pc" }}
        py="2pc"
      >
        <Box w={{ md: "15%", sm: "40%" }} margin={"auto"} pt="20px" >
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            // borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            OUR BLOGS
          </Text>
        </Box>
        <Box w={{ md: "60%", base: "100%" }} margin="auto">
          {" "}
          <Heading
            fontSize={{ md: "60px", sm: "50px", base: "38px" }}
            fontWeight="600px"
            align="center"
            p="1pc"
          >
            Inhouse Mindscape
          </Heading>
        </Box>
        <Box
          w={{ lg: "80%", md: "100%" }}
          display="grid"
          margin="auto"
          p="10px"
          gridTemplateColumns={{ lg: "repeat(2,1fr)", base: "repeat(1,1fr)" }}
          gap="1pc"
        >
          {whyChooseLens.map((e, i) => {
            return (
              <BlogAnimation
                key={i}
                t1={e.t1}
                t2={e.t2}
                content={e.content}
                i={i}
                colorMode={colorMode}
              />
            );
          })}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
        }}
        gap="3pc"
        p={{md:"3pc",base:"1pc"}}
      >
        <Box>
          <Heading size="lg" fontSize={{ md: "60px", sm: "50px", base: "38px" }} mt={{md:"3pc",base:"1pc"}}>
            Get in touch with us
          </Heading>
          <Text mt="2pc" fontSize="22px" fontWeight="400">
            Send your enquiry now!
          </Text>
          <Box
            display="flex"
            flexDirection={{ md: "row", base: "column" }}
            my="2pc"
          >
            <Input placeholder="Enter Email Address" border="1px solid black" />
            <Button
              borderRadius={"lg"}
              border="1px solid black"
              bgColor="black"
              color="white"
              _hover={{ bgColor: "black", color: "white" }}
            >
              Request Demo
            </Button>
          </Box>
        </Box>
        <Image
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
          w={{ base: "100%", md: "60%", lg: "50%" }}
        />
      </Box>

      {/* Footer */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{ md: "row", base: "column" }}
        bgColor="#2A4365"
        p="2.5pc"
        color="lightgrey"
      >
        <Heading fontSize="18px" fontWeight={"500"}>
          2023 LENS, Inc. All rights reserved.
        </Heading>
        <Heading fontSize="18px" fontWeight={"500"}>
          Code of conduct Sustainability Goals
        </Heading>
      </Box>
    </Box>
  );
}

export default Box1;
