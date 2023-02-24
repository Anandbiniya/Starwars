import "./App.css";
import { PeopleList } from "./Components/PeopleList";
import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { PeopleDetails } from "./Components/PeopleDetails";
function App() {
  console.log("first");
  return (
    <Box className="app">
      <div className="back">
        <img
          src="https://starwars-codex-next.vercel.app/assets/svg/star-logo.svg"
          alt=""
        />
      </div>

      <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/:id" element={<PeopleDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
