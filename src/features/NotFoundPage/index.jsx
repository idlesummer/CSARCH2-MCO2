import { Card, Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'; // For navigation if necessary

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full screen centering
    padding: '2rem',
    textAlign: 'center', // Center text
  },
  card: {
    padding: '3rem 4rem', // Add some padding inside the paper
  },
  button: {
    marginTop: '2rem', // Add margin to separate the button from text
    height: '2.25rem',
  },
  typographyHeader: {
    marginBottom: '1rem', // Add space after the header
    textAlign: 'left',
  },
  typographyBody: {
    marginBottom: '2rem', // Space before any action (e.g., button)
  },
};

export default function NotFoundPage() {

  return (
    <Box sx={styles.box}>
      <Card elevation={0} sx={styles.card}>
        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          sx={styles.typographyHeader}
        >
          Oops!
        </Typography>

        <Typography variant="h4" sx={styles.typographyBody}>
          {`This page doesn't exist.`}
        </Typography>

        <Button 
          component={Link} 
          to="/" 
          variant="contained" 
          color="primary" 
          sx={styles.button}
          disableElevation
          fullWidth
        >
          Back to Home
        </Button>
      </Card>
    </Box>
  );
}
