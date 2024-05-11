import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function Services({ t1, t2, content, color, colorMode,shadowcolor }) {
  const [mouseIn, setMouseIn] = useState(false);
  const demo = colorMode === "light" ? "white" : "rgba(0, 0, 0, 0.24)"
  return (
    <>
      <Box
        p="1pc"
        bgColor={`${demo}`}
        borderRadius="1.5pc"
        className=""
        onMouseEnter={() => setMouseIn(true)}
        onMouseOut={() => setMouseIn(false)}
        _hover={{
          border: `1px solid ${color}`,
          transition: "ease-in-out 1s",
          boxShadow:`inset -50px 20px 120px -36px ${shadowcolor}`
        }}
      >
        <Heading
          display="flex"
          justifiyContent="center"
          transitiom="ease-in-out 1s"
          alignItems="baseline"
          // gap={mouseIn ? "1pc" : "0.5pc"}
          color="lightgray"
          onMouseEnter={() => setMouseIn(true)}
          onMouseOut={() => setMouseIn(false)}
        >
          <Text fontSize="80px" color={mouseIn ? color : ""}>
            {t1}
          </Text>
          <Text
          transitiom="ease-in-out 1s"
          ml={mouseIn ? "1pc" : "0.5pc"}
            fontWeight="600"
            fontSize="40px"
            color={mouseIn ? "grey" : color}
          >
            {t2}
          </Text>
        </Heading>
        <Heading
          fontSize="20px"
          alignContent="center"
          color="grey"
          p="0.5pc"
          fontWeight="500"
          margin={"auto"}
          justifyContent="center"
          lineHeight="2pc"
          onMouseEnter={() => setMouseIn(true)}
          onMouseOut={() => setMouseIn(false)}
        >
          {content}
        </Heading>
      </Box>
    </>
  );
}

export default Services;
