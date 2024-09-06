import { Box } from "@mui/material";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
      border: "1px solid black"
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flex: "1 auto"
      }}>
        <Box sx={{
          flex: "1 auto"
        }}>
          <Header />
        </Box>
        <Box>
          aside
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
