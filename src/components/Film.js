import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Chip,
  Grid,
  Icon,
  Rating,
  Typography,
} from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MovieIcon from "@mui/icons-material/Movie";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { filmsData } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";


const style = {
  position: 'absolute',
  top: '50%',
  left: '25%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const styles = {
  media: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "auto",
    height: "500px",
  },
};


export default function Film() {

  const { theme, toggle, dark } = useContext(ThemeContext);

  const userName = useParams();
  const film = filmsData.find((obj) => {
    return obj.id == userName.id;
  });



  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    
    const backgroundColor =
      theme.palette.mode === ""
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   

    <Grid
      container
      pt={{xs: 12, sm: 12}}
      style={{
        backgroundColor: theme.backgroundColor,
      }}
      pl={{ sm: 30 }}
      pb={20}
    >
      {/* <Grid item xs={12} pb={{xs: 1, sm: 5}} pl={{xs: 3, sm: 6}}>
        <Breadcrumbs separator="›" style={{color:'white'}} aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledBreadcrumb icon={<MovieIcon fontSize="small" />} label="Phim" />
          </Link>
          <StyledBreadcrumb label={film.title} />
        </Breadcrumbs>
      </Grid> */}
      {/* <Grid item xs={12} sm={4}>
        <img
          src={`../${film.img}`}
          className="card-img-top film-detail-image"
          alt="..."
          style={styles.media}
        />
      </Grid> */}
      <Grid item xs={12} sm={8} pl={{xs:2}}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            color="white"
            align="left"
            style={{ fontWeight: "bold" }}
          >
            {film.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="white" align="left" mb={2}>
            {film.engTitle} ({film.year})
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h7" color="white" align="left">
            Available in: {film.quality}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
            More information 1: {film.director}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
          More information 2: {film.actors}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
            Genres: {film.type}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
            Nation: {film.nation}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
            Duration: {film.time} min
          </Typography>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography variant="h7" color="white" align="left">
            Release Date: {film.year}
          </Typography>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={2} sm={1} mt={1}>
            <Card>
              <Typography
                variant="h5"
                color="white"
                backgroundColor={theme.backgroundColor}
                align="center"
                p={2}
              >
                {film.rating}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={10} sm={11} mt={1} pl={2}>
            <Grid xs={12}>
              <Rating
                name="simple-controlled"
                value={film.rating}
                precision={0.5}
                size="large"
              />
            </Grid>
            <Grid xs={12}>
              <Typography variant="h7" color="white">
                {film.numOfRating} Ratings
              </Typography>
            </Grid>
          </Grid>
        {/* </Grid>
        <Grid container mt={5} columnSpacing={3}>
          <Grid item>
            <Button
              size="large"
              variant="outlined"
              color="warning"
              startIcon={<LiveTvOutlinedIcon />}
            >
              xem phim
            </Button>
          </Grid> */}
          <Grid item>
            <Button
              size="large"
              variant="outlined"
              color="info"
              startIcon={<RemoveRedEyeOutlinedIcon />}
              onClick={handleOpen}
            >
              Watch the Trailer
            </Button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <iframe src={film.trailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Box>
        </Fade>
      </Modal>            
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={6} pr={{ sm: 30 }}>
        <Accordion
          style={{ backgroundColor: theme.backgroundColor, color: "white" }}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Button
              size="large"
              variant="text"
              startIcon={<InfoOutlinedIcon />}
              endIcon={<ExpandMoreIcon />}
              style={{ color: "white" }}
            >
              What's in it?
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{film.info}</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
