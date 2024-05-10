import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { CheckIcon, AtSignIcon, SunIcon } from "@chakra-ui/icons";
import { FaPeopleLine } from "react-icons/fa6";
import { IoMdWifi } from "react-icons/io";
import { PiBezierCurveThin } from "react-icons/pi";

function Box1() {
  return (
    <>
      <Box
        //   bgGradient="linear(to-br,lightblue 15%, #FEEBC8 40%, #FED7E2 50%)"
        bgImage={
          "https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75"
        }
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        mt="3pc"
        h="80vh"
      >
        <Box w="40%" p={6} ml="10pc" pt="5pc" color="black">
          <Heading size="lg" fontSize="60px" fontWeight="600px">
            We are at the forefront of AI
          </Heading>
          <Text fontSize="25px">
            From Conserving Wildlife to Automatically Generating Caricatures– We
            Do It All
          </Text>
          <Button bgColor="black" color="white" size="lg" mt="10px">
            Learn More
          </Button>
        </Box>
      </Box>

      <Box h="auto" p="1pc" pb="2.5pc">
        <Box w="22%" margin={"auto"}>
          <Heading
            fontSize="60px"
            size="lg"
            align={"center"}
            borderBottom={"3px solid lightskyblue"}
            fontWeight="600px"
            p="0.5pc"
          >
            About Us
          </Heading>
        </Box>
        <Box
          display="flex"
          gap="60px"
          justifyContent="space-between"
          w="80%"
          margin="auto"
          mt="40px"
          bgColor="#EBF8FF"
          p="2pc"
          borderRadius={"1pc"}
        >
          <Box w="40%" mt="30px" color="black">
            <Heading fontSize="40px" size="lg" fontWeight="600px">
              Welcome to LENS
            </Heading>
            <Text fontSize="25px" mt="10px">
              We put our hearts, souls and sweat into designing and developing
              custom AI - powered solutions for your business so you don't have
              to.
            </Text>
            <Button border="1px solid black" mt="10px" color="black">
              Learn More
            </Button>
          </Box>
          <Box p="10px" borderRadius={"10px"} bgColor="white" w="50%" h="350px">
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

      <Box bgColor={"#EBF8FF"} color="black">
        <Box w="8%" margin={"auto"} pt="20px">
          <Text
            fontSize="20px"
            size="lg"
            align={"center"}
            borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            SERVICES
          </Text>
        </Box>

        <Box
          w="45%"
          margin={"auto"}
          mt="1pc"
          pt="20px"
          border={"0px solid black"}
          alignContent="center"
        >
          <Heading
            fontSize="60px"
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
          gridTemplateColumns={"repeat(2,1fr)"}
          w="75%"
          margin="auto"
          gap="3pc"
          p="1pc"
          mt="3pc"
        >
          <Box
            p="1pc"
            bgColor="white"
            borderRadius="1pc"
            className=""
            _hover={{
              border: "1px solid #68D391",
              transition: "ease-in-out 1s",
              bgColor: "#F0FFF4",
            }}
          >
            <Heading
              display="flex"
              justifiyContent="center"
              alignItems="baseline"
              color="lightgray"
            >
              <Text fontSize="80px">01</Text>
              <Text fontWeight="600" fontSize="40px" color="#68D391">
                Biomertics
              </Text>
            </Heading>
            <Heading
              fontSize="20px"
              alignContent="center"
              color="grey"
              p="0.5pc"
              margin={"auto"}
              justifyContent="center"
              lineHeight="2pc"
            >
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </Heading>
          </Box>

          <Box
            p="1pc"
            bgColor="white"
            borderRadius="1pc"
            className=""
            _hover={{
              border: "1px solid #63B3ED",
              transition: "ease-in-out 1s",
              bgColor: "#EBF8FF",
            }}
          >
            <Heading
              display="flex"
              justifiyContent="center"
              alignItems="baseline"
              color="lightgray"
            >
              <Text fontSize="80px">02</Text>
              <Text fontWeight="600" fontSize="40px" color="#63B3ED">
                Image Analysis
              </Text>
            </Heading>
            <Heading
              fontSize="20px"
              alignContent="center"
              color="grey"
              p="0.5pc"
              margin={"auto"}
              justifyContent="center"
              lineHeight="2pc"
            >
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </Heading>
          </Box>

          <Box
            p="1pc"
            bgColor="white"
            borderRadius="1pc"
            _hover={{
              border: "1px solid #FC8181",
              transition: "ease-in-out 1s",
              bgColor: "#FFF5F5",
            }}
          >
            <Box display="flex" justifiyContent="center" alignItems="baseline">
              <Heading fontSize="80px" color="lightgray">
                03
              </Heading>
              <Text
                fontWeight="600"
                fontSize="40px"
                color="#FC8181"
                pl={"0.1pc"}
              >
                Cross-Media Transaction
              </Text>
            </Box>
            <Heading
              fontSize="20px"
              alignContent="center"
              color="grey"
              p="0.5pc"
              margin={"auto"}
              justifyContent="center"
              lineHeight="2pc"
            >
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </Heading>
          </Box>

          <Box
            p="1pc"
            bgColor="white"
            borderRadius="1pc"
            className=""
            _hover={{
              border: "1px solid #FC8181",
              transition: "ease-in-out 1s",
              bgColor: "#FFFAF0",
            }}
          >
            <Box display="flex" justifiyContent="center" alignItems="baseline">
              <Heading fontSize="80px" color="lightgray">
                04
              </Heading>
              <Text fontWeight="600" fontSize="40px" color="#F6AD55">
                3D Modelling and Design
              </Text>
            </Box>
            <Heading
              fontSize="20px"
              alignContent="center"
              color="grey"
              p="0.5pc"
              margin={"auto"}
              justifyContent="center"
              lineHeight="2pc"
            >
              Academia-backed & In-house researched State-of-the-Art Face,
              Fingerprint, and Iris Recognition SDKs. Enable real-time automated
              Biometric applications on edge devices even without an active
              internet connection.
            </Heading>
          </Box>
        </Box>
      </Box>

      <Box>
        {/* Content */}

        <Box w="18%" margin={"auto"} pt="20px">
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            WHY CHOOSE LENS
          </Text>
        </Box>

        <Box
          w="58%"
          margin={"auto"}
          mt="1pc"
          pt="20px"
          border={"0px solid black"}
        >
          <Heading fontSize="60px" fontWeight="600px" align="center" p="0.5pc">
            AI-driven solutions backed by science
          </Heading>

          <Text
            mt="1pc"
            fontSize="22px"
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
            display="grid"
            mt="1pc"
            gridTemplateColumns="repeat(2,1fr)"
            gap="3pc"
          >
            <Box>
              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  State-of-the-art solutions
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  Fast & Efficient
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  No extra computation fee
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  No licensing fee
                </Text>
              </Flex>
            </Box>

            <Box>
              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  Lifetime support & upgrades
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  Plug-and-Play
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
                  24x7 Progress Monitoring
                </Text>
              </Flex>

              <Flex gap="0.7pc" alignItems="center">
                <CheckIcon />
                <Text fontSize="20px" fontWeight="500">
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
            gridTemplateColumns="repeat(4,1fr)"
            bgColor="#f0fcfc"
            p="1pc"
            py="3pc"
            my="2.5pc"
          >
            <Box
              p="1pc"
              bgColor="white"
              borderRadius="1pc"
              className=""
              _hover={{
                border: "1px solid #68D391",
                transition: "ease-in-out 1s",
                bgColor: "#F0FFF4",
              }}
            >
              <Text fontSize="35px" fontWeight="600" color="black">
                Exclusive Rights
              </Text>
              <Image
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=256&q=75"
                margin={"auto"}
                my="1pc"
              />
              <Text fontSize="18px" color="grey" p="0.5pc">
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </Text>
            </Box>

            <Box
              p="1pc"
              bgColor="white"
              borderRadius="1pc"
              className=""
              _hover={{
                border: "1px solid #63B3ED",
                transition: "ease-in-out 1s",
                bgColor: "#EBF8FF",
              }}
            >
              <Text fontSize="35px" fontWeight="600" color="black">
                Research Driven
              </Text>
              <Image
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=256&q=75"
                margin={"auto"}
                my="1pc"
              />
              <Text fontSize="18px" color="grey" p="0.5pc">
                We regularly benchmark our solutions via comparing industry-vide
                evaluations so our partners only get the best that AI can offer.
              </Text>
            </Box>

            <Box
              p="1pc"
              bgColor="white"
              borderRadius="1pc"
              className=""
              _hover={{
                border: "1px solid #F687B3",
                transition: "ease-in-out 1s",
                bgColor: "#FFF5F7",
              }}
            >
              <Text fontSize="35px" fontWeight="600" color="black">
                Plug-and-Play
              </Text>
              <Image
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=128&q=75"
                margin={"auto"}
                my="1pc"
              />
              <Text fontSize="18px" color="grey" p="0.5pc">
                We provide AI-driven solutions into businesses where they can
                bring tangible value. Each solution is customized as per your
                needs and deployed on any computing device of your choice.
              </Text>
            </Box>

            <Box
              p="1pc"
              bgColor="white"
              borderRadius="1pc"
              className=""
              _hover={{
                border: "1px solid #FC8181",
                transition: "ease-in-out 1s",
                bgColor: "#FFFAF0",
              }}
            >
              <Text fontSize="35px" fontWeight="600" color="black">
                Lifetime Support
              </Text>
              <Image
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=256&q=75"
                margin={"auto"}
                my="1pc"
              />
              <Text fontSize="18px" color="grey" p="0.5pc" lineHeight="1.8pc">
                Should you face any issues, we are always at your service. We
                provide lifetime technical support & upgrade options.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        {/* Content */}

        <Box w="15%" margin={"auto"} pt="20px" my="3pc">
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            OUR VISION
          </Text>
        </Box>
        <Box w="60%" margin="auto">
          {" "}
          <Heading fontSize="65px" fontWeight="600px" align="center" p="1pc">
            AI for Social Good
          </Heading>
          <Text
            mt="1pc"
            fontSize="22px"
            fontWeight="400"
            color="grey"
            align="center"
          >
            Explainable AI (XAI) is an emerging subject of machine learning
            research that refers to strategies that try to provide transparency
            to typically opaque AI models and their predictions.
          </Text>
        </Box>
        <Box w="70%" display="flex" m="auto" mt="3pc">
          <Box
            // borderRight="2px dashed black"
            w="100%"
            display="grid"
            pr="1pc"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="repeat(3, 1fr)"
            justifyContent="space-between"
            mb="3pc"
          >
            <Box
              // align="left"
              gridRow="1 / 2"
              gridColumn="1 / 2"
              borderRight="2px dashed grey"
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
              gridRow="2 / 3"
              gridColumn="2 / 3"
              borderLeft="2px dashed grey"
              p="1pc"
              my="0.5pc"
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
              gridRow="3 / 4"
              gridColumn="1 / 2"
              borderRight="2px dashed grey"
              p="1pc"
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

      <Box my="2pc" bgColor="#FFF5F7" color="black" p="2pc">
        <Box w="18%" margin={"auto"} pt="20px">
          <Text
            fontSize="25px"
            size="lg"
            align={"center"}
            borderBottom={"3px solid lightskyblue"}
            p="0.5pc"
          >
            WHY CHOOSE LENS
          </Text>
        </Box>
        <Box w="60%" margin="auto">
          {" "}
          <Heading fontSize="65px" fontWeight="600px" align="center" p="1pc">
            Inhouse Mindscape
          </Heading>
        </Box>
        <Box
          w="80%"
          display="grid"
          margin="auto"
          gridTemplateColumns={"repeat(2,1fr)"}
          gap="1pc"
        >
          <Box borderRadius="0.5pc" p="2pc" bgColor="white">
          <Text fontSize="20px" my='1pc'fontWeight="500px" color='red'>
              New!
            </Text>
            <Text fontSize="30px" fontWeight="500px">
              Generative AI
            </Text>
            <Box
              borderRadius="1pc"
              fontSize={"20px"}
              p="2pc"
              bgColor="#FFFAF0"
              my="1pc"
            >
              <Text>
                In today's data-driven marketing world, keeping up with content
                creation demands can be a challenge. Read our latest blog to
                explore the power of Generative AI and its potential to reshape
                the marketing landscape....
              </Text>
            </Box>
            <Button color="red" border="0px" bgColor="white">
              Read More{" "}
            </Button>
          </Box>
          <Box borderRadius="0.5pc" p="2pc" bgColor="white">
          <Text fontSize="20px" my='1pc'fontWeight="500px">
              April 25, 2024 
            </Text>
            <Text fontSize="30px" fontWeight="500px">
              The Evolution of AI in Games
            </Text>
            <Box
              borderRadius="1pc"
              p="2pc"
              fontSize={"20px"}
              bgColor="#EBF8FF"
              my="1pc"
            >
              <Text>
                The integration of artificial intelligence (AI) within the
                gaming industry has been a remarkable journey, marked by
                continual innovation. Read our latest blog to dive deep into the
                evolution that continues to shape the future of play!...
              </Text>
            </Box>
            <Button color="red" border="0px" bgColor="white">
              Read More{" "}
            </Button>
          </Box>

          <Box
            borderRadius="0.5pc"
            p="2pc"
            bgColor="white"
            gridRow={"2/4"}
            gridColumn={"1/3"}
          >
            <Text fontSize="20px" my='1pc'fontWeight="500px">
              April 18, 2024 
            </Text>
            <Text fontSize="30px" fontWeight="500px">
              Unmasking the Misconceptions of Artificial
              Intelligence in the Workplace
            </Text>
            <Box
              borderRadius="1pc"
              p="2pc"
              fontSize={"20px"}
              bgColor="#FFF5F7"
              my="1pc"
            >
              <Text>
                The rise of Artificial Intelligence (AI) has sparked both
                excitement and apprehension. Many professionals are unsure how
                AI impacts their work....
              </Text>
            </Box>
            <Button color="red" border="0px" bgColor="white">
              Read More{" "}
            </Button>
          </Box>
        </Box>
      </Box>

      
    </>
  );
}

export default Box1;
