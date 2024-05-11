import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function BlogAnimation({ t1, t2, content, i }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box
        borderRadius="0.5pc"
        p="2pc"
        // h="500px"
        bgColor="white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        gridRow={i === 2 ? "2/4" : ""}
        gridColumn={i === 2 ? "1/3" : ""}
        transition={"ease-in-out 2s"}
      >
        {isHovered === false ? (
          <Text fontSize="20px" fontWeight="500px" color="red">
            {t1}
          </Text>
        ) : (
          ""
        )}
        <Text fontSize="30px" fontWeight="500px">
          {t2}
        </Text>
        <Box
          borderRadius="1pc"
          fontSize={"20px"}
          p="2pc"
          bgColor="#FFFAF0"
          my="1pc"
        >
          <Text>{content}</Text>
        </Box>
        {isHovered ? <Text color="red">Read More </Text> : ""}
      </Box>
    </>
  );
}

export default BlogAnimation;
