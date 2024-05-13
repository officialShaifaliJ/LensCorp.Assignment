import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function BlogAnimation({ t1, t2, content, i ,colorMode}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Box
        borderRadius="1.5pc"
        p={{md:"2pc",base:"1pc"}}
        // h="500px"
        bgColor={colorMode === "light" ? "white" : "rgba(0, 0, 0, 0.24)"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        gridRow={{lg:`${i === 2 ? "2/4" : ""}`}}
        gridColumn={{lg:`${i === 2 ? "1/3" : ""}`}}
        transition={"ease-in-out 2s"}
      >
        {isHovered === false ? (
          <Text fontSize={{md:"20px",base:"15px"}} fontWeight="500px" color="red">
            {t1}
          </Text>
        ) : (
          ""
        )}
        <Text fontSize={{base:"25px",md:"30px"}} fontWeight="500px">
          {t2}
        </Text>
        <Box
          borderRadius="1.5pc"
          fontSize={{md:"20px",sm:"15px"}}
          p={{md:"2pc",base:"1pc"}}
          bgColor={colorMode === "light" ? "#FFFAF0" : "rgba(0, 0, 0, 0.16)"}
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
