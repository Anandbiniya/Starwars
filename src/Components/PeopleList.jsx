import { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import {
  Box,
  Heading,
  Text,
  List,
  Container,
  SimpleGrid,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { PeopleDetails } from "./PeopleDetails";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
export const PeopleList = () => {
  let favv = JSON.parse(localStorage.getItem("favor")) || [];
  const [data, setData] = useState([]);
  const [fav, setFav] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [remove, setRemove] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });
  useEffect(() => {
    getData(1);
  }, []);
  console.log(data);
  const getData = (i) => {
    Axios({
      method: "GET",
      url: `https://swapi.dev/api/people/?page=${i}`,
    })
      .then((res) => {
        setData(res.data.results);
        setLastPage(res.data.count / 10 + 1);
      })
      .catch((err) => console.log(err));
  };
  const pageBtn = (i) => {
    getData(i);
    setCurPage(1);
  };

  useEffect(() => {
    if (fav) {
      favv.push(fav);
      localStorage.setItem("favor", JSON.stringify(favv));
      setFav("");
    }
  }, [fav, favv]);

  return (
    <Box>
      {loading ? (
        <section class="star-wars">
          <div class="skew-wrapper">
            <div class="title">
              <p class="intro">* Star Wars theme playing in the background *</p>
              <p class="title">Episode IV</p>
              <h1>A New Hope</h1>
            </div>
            <p>
              It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil
              Galactic Empire.
            </p>
            <p>
              During the battle, Rebel spies managed to steal secret plans to
              the Empire’s ultimate weapon, the DEATH STAR, an armored space
              station with enough power to destroy an entire planet.
            </p>
            <p>
              Pursued by the Empire’s sinister agents, Princess Leia races home
              aboard her starship, custodian of the stolen plans that can save
              her people and restore freedom to the galaxy…
            </p>
            <p>
              You are still here? Good. Let me tell you little bit about what I
              did here.
            </p>
          </div>
        </section>
      ) : (
        <div className="peoplelist">
          {data.map((item, i) => {
            return (
              <Box
                className="list-group"
                key={item.name}
                p={4}
                // borderWidth={1}
                margin={2}
              >
                <List className="list-group-item">
                  <Flex justifyContent="space-between" alignItems="center">
                    <div>
                      <Image
                        borderRadius="full"
                        boxSize="150px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGqMUWEBulhM1y0ZXXrkokwwaxqciSTyqow&usqp=CAU"
                        alt="Dan Abramov"
                      />
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="lg"
                        letterSpacing="wide"
                        color="yellow.600"
                      >
                        {item.name}
                      </Text>
                    </div>
                    <Flex gap={10} direction="column">
                      <Button
                        src="https://cdn-icons-png.flaticon.com/512/1581/1581673.png"
                        cursor={"pointer"}
                        onClick={() => {
                          setFav(item);
                          alert("Item added to favourite");
                        }}
                        border="50%"
                        color="teal.600"
                      >
                        Add to favorite
                      </Button>

                      <Link to={`/${i + 1}`}>
                        <Button color="teal.600" border={50}>
                          Show More
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                </List>
              </Box>
            );
          })}
        </div>
      )}
      <Pagination curPage={curPage} lastPage={lastPage} pageBtn={pageBtn} />
    </Box>
  );
};
