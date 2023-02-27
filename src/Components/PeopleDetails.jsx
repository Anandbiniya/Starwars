import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

export const PeopleDetails = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Axios({
      method: "GET",
      url: `https://swapi.dev/api/people/${props.match.params.id}`,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Heading as="h2" size="xl">
            {data.name}
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Gender: {data.gender}
          </Text>
          <Text fontSize="lg" color="gray.500">
            Birth year: {data.birth_year}
          </Text>
          <Text fontSize="lg" color="gray.500">
            Height: {data.height} cm
          </Text>
          <Text fontSize="lg" color="gray.500">
            Mass: {data.mass} kg
          </Text>
          <Text fontSize="lg" color="gray.500">
            Hair color: {data.hair_color}
          </Text>
          <Text fontSize="lg" color="gray.500">
            Eye color: {data.eye_color}
          </Text>
          <Text fontSize="lg" color="gray.500">
            Skin color: {data.skin_color}
          </Text>
          <Box mt={5}>
            <Heading as="h3" size="md">
              Films
            </Heading>
            <List mt={3} spacing={3}>
              {data.films.map((film) => (
                <ListItem key={film}>{film}</ListItem>
              ))}
            </List>
          </Box>
        </>
      )}
    </Box>
  );
};
