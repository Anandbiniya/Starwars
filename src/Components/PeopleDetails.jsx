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
import styles from "./PeopleDetail.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";

export const PeopleDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData(1);
  }, []);

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

  return (
    <Center>
      <Flex className={styles.container}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGqMUWEBulhM1y0ZXXrkokwwaxqciSTyqow&usqp=CAU"
          className={styles.image}
        />
        <Box
          p="40px"
          color="white"
          bg="gray.900"
          rounded="md"
          shadow="md"
          className={styles.details}
        >
          <UnorderedList
            key={data.name}
            spacing={3}
            textAlign="left"
            className={styles.list}
          >
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Name:</span> {data.name}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Height:</span>
              {data.height}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Mass:</span>
              {data.mass}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Hair Color:</span>
              {data.hair_color}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Skin Color:</span>
              {data.skin_color}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Eye Color:</span>
              {data.eye_color}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Birth Year:</span>
              {data.birth_year}
            </ListItem>
            <ListItem className={styles.listItem}>
              <span className={styles.label}>Gender:</span>
              {data.gender}
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Center>
  );
};
