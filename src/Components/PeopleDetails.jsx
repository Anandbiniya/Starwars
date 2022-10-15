import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
export const PeopleDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData(1);
  }, []);
  console.log(params);
  const getData = () => {
    Axios({
      method: "GET",
      url: `https://swapi.dev/api/people/${params.id}`,
    })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  console.log(params);
  return (
    <Center>
      <Flex>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGqMUWEBulhM1y0ZXXrkokwwaxqciSTyqow&usqp=CAU" />
        <Box
          p="40px"
          color="white"
          bg="teal.500"
          rounded="md"
          shadow="md"
          display={"flex"}
        >
          <UnorderedList key={data.name} spacing={3} textAlign="left">
            <ListItem>
              <span style={{ margin: "0 10px" }}>Name:</span> {data.name}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Height:</span>
              {data.height}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Mass:</span>
              {data.mass}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Hair Color:</span>
              {data.hair_color}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Skin Color:</span>
              {data.skin_color}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Eye Color:</span>
              {data.eye_color}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Birth Color:</span>
              {data.birth_year}
            </ListItem>
            <ListItem>
              <span style={{ margin: "0 10px" }}>Gender:</span>
              {data.gender}
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Center>
  );
};
