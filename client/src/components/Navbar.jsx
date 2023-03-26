import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { FaTools, FaHome } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";

export default function Navbar({ link }) {
  return (
    <Box
      w="100%"
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
      h="90px"
      display={"flex"}
      justifyContent="space-between"
      alignItems={"center"}
      px="10%"
      bg="#F0F0F0"
    >
      <Image src={link} alt="error" />
      <HStack gap={"15px"}>
        <Box
          w="30px"
          h="33px"
          bg="#3683F0"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          borderRadius="50%"
        >
          <FaHome color="#FFFFFF" size={"15px"} />
        </Box>
        <Box
          w="30px"
          h="33px"
          bg="#3683F0"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          borderRadius="50%"
        >
          <FaTools color="#FFFFFF" size={"15px"} />
        </Box>
        <Box
          w="30px"
          h="33px"
          bg="#3683F0"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          borderRadius="50%"
        >
          <BsFillBellFill color="#FFFFFF" size={"15px"} />
        </Box>
        <Box w="37px">
          <Image src="assets/avatar.png" w="100%" />
        </Box>
        <Box
          w="30px"
          h="33px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <GoKebabVertical />
        </Box>
      </HStack>
    </Box>
  );
}
