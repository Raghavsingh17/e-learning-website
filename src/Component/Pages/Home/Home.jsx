import React from "react";
import "./Home.css";
import Fab from "@mui/material/Fab";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <section>
      <div className="home-container">
        <div className="container">
          <div className="text">
            <h1 id="text-h1">Education Opens up the Mind</h1>
            <br />
            <p>
              Welcome to SeekhoOnline! Explore endless opportunities for
              learning, growth, and success. Start your journey today!
            </p>
            <br />
            <div className="button">
              <Fab variant="extended" size="medium" sx={{ mr: 1 }}>
                All Courses
              </Fab>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="popular-container">
          <div className="popular">
            <h1>Popular Courses</h1>
          </div>
          <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="background pic.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Covering HTML, CSS, JavaScript, ReactJs, NOdeJs,ExpressJs,
                  Mongodb and other essential technologies for building
                  websites.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={0} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="data science (2).png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Science and Machine Learning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Providing an introduction to data analysis, machine learning
                  algorithms, and data visualization techniques.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={2} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="digital-marketing (1).png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Digital Marketing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Offering courses on SEO, social media marketing, content
                  marketing, email Marketing Strategies and digital
                  advertising strategies.
                </Typography>
                <br />
                <Typography component="legend">Review</Typography>
                <Rating name="size-large" defaultValue={3} size="large" />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex-container1">
        <div className="choose-container">
          <div className="choose">
            <h1>Why Choose Us?</h1>
            <p>
              Our platform offers courses led by industry experts who bring
              real-world experience and knowledge to the virtual classroom.
              Whether you're looking to advance in your current career or switch
              to a new field, our courses provide the knowledge and skills
              needed to excel in today's competitive job market.
            </p>
          </div>
          <div className="review">
            <div className="best">
              <h2>
                <LocalFireDepartmentIcon className="icon" />
                Best Industry Leaders
              </h2>
              <p>
                Our online learning platform brings you courses curated by
                industry leaders, ensuring you receive top-tier expertise in
                every lesson.
              </p>
            </div>

            <div className="learn">
              <h2>
                <ScheduleIcon className="icon" />
                Learn Online at Your Own Place
              </h2>
              <p>
                Discover the freedom of learning at your own pace with our
                flexible online courses. Join our community of learners and
                access courses that allow you to study anytime, anywhere, and at
                your own speed.
              </p>
            </div>

            <div className="certificate">
              <h2>
                <BrightnessLowIcon className="icon" />
                Professional Certification
              </h2>
              <p>
                Enhance your career prospects with our Professional
                Certification courses, meticulously crafted to equip you with
                industry-recognized skills and credentials. With expert-led
                instruction and hands-on projects, you'll gain practical
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Welcome to our e-learning platform, where knowledge meets
                  innovation. At SeekhoOnline, we are passionate about
                  revolutionizing education, providing accessible and engaging
                  learning experiences for students of all ages and backgrounds.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1st Main Road, Hebbal Kempapura, Bangalore
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  raghavkashyap@gmail.com <br /> sk8651245603@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +91 7079483509
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  SeekhoOnline
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </section>
  );
};

export default Home;
