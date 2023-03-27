import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

export default function VideoType({ title, desc, content }) {
  return (
    <Box
      h="580px"
      bg="#FDFDFD"
      borderRadius={"15px"}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Box
        w="100%"
        h="50px"
        bg="#000000"
        color={"#FFFFFF"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        position={"relative"}
        borderTopRadius={"15px"}
      >
        <Text>{title}</Text>
        <Box position="absolute" right={"14px"}>
          <BsInfoCircleFill color={"#FFFFFF"} />
        </Box>
      </Box>
      <Box px="11px" my="20px">
        <Text color={"#000000"}>
          {" "}
          <Text fontWeight={"bold"} display="inline-block">
            Description:
          </Text>{" "}
          {desc}
        </Text>
      </Box>
      <Box>
        <iframe src={content} allowFullScreen width={"100%"} height="291px" />
      </Box>
    </Box>
  );
}
