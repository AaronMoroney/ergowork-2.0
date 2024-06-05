import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import  Water  from '../../widgets/water/ui/water';

function App() {
  return (
    <Box sx={{ height: "100vh", bgcolor: "rgba(243, 246, 249, 0.6)" }}>
      <Container>
        <Water />
      </Container>
    </Box>
  );
}

export default App;