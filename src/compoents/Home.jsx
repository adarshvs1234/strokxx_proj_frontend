import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDestination, fetchTopSelling } from '../services/employeeService';
import {
  Box, Typography, Button, Grid, Card, CardContent, CardMedia,
} from '@mui/material';
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryFn: fetchDestination,
    queryKey: ["fetchDestinations"],
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });

  const { data: top } = useQuery({
    queryFn: fetchTopSelling,
    queryKey: ["fetchtop"],
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });

  if (isLoading)
    return <div>Loading transactions...</div>


  return (
    <Box>


      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          backgroundImage: `url('https://blogassets.airtel.in/wp-content/uploads/2023/05/felix-rostig-UmV2wr-Vbq8-unsplash.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >

        <Box sx={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
          <Typography variant="h3" fontWeight="bold">Discover Your Next</Typography>
          <Typography variant="h3" fontWeight="bold" mt={1}>Adventure</Typography>
          <Typography variant="body1" mt={3}>Choose from our curated experiences, customised for every kind of traveler.</Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: '#facc15',
              color: 'black',
              borderRadius: 10,
              px: 5,
              '&:hover': { backgroundColor: '#fbbf24' },
            }}
          >
            BOOK NOW

          </Button>

        </Box>


        <Box sx={{ position: 'absolute', bottom: 0, bgcolor: 'rgba(0,0,0,0.4)', p: 1 }}>
          <Typography variant="body2" pl={2}>
            Easy Booking | Curated Destinations | Trusted Support
          </Typography>
        </Box>
      </Box>



      {/* Destinations Section */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" color="green">Explore Most Popular Destinations</Typography>
        <Typography variant="body2" mt={1}>
          Plan your perfect trip with our most loved tour packages
        </Typography>

        <Grid container spacing={2} justifyContent="center" mt={3}>
          {Array.isArray(data?.destinations) &&
            data.destinations.slice(0, 6).map((item, i) => (
              <Grid item xs={4} key={i}> {/* 3 items per row */}
                <Card sx={{ maxWidth: 300, mx: 'auto' }}>
                  <CardMedia component="img" height="180" image={item.image} alt={item.name} />


                  <CardContent>
                    <Typography variant="body2" fontWeight="bold" color="green">{item.name}</Typography>

                    <Typography variant="body2">Starting from ₹{item.startingFrom}</Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}
        </Grid>
      </Box>


      <Box display="flex" justifyContent="flex-end" px={3} mt={4}>

        <IoArrowBackCircle size={40} color="gray" />
        <IoArrowForwardCircle size={40} color="gold" />

      </Box>


      <Box bgcolor="green" py={6} color="white" textAlign="center">

        <Typography variant="h4" fontWeight="bold" mb={2}>Our Advantages</Typography>

        <Typography variant="body2" mb={1}>Rely on our experience and quality of services</Typography>

        <Typography variant="body2" mb={4}>Here are more reasons to book tours at Treat Holidays</Typography>

        <Grid container spacing={4} justifyContent="center">

          {[
            { icon: <CiClock2 size={40} />, title: "Save Time", desc: "No More Switching For Packages Or Plans." },

            { icon: <AiFillDollarCircle size={40} />, title: "Save Money", desc: "Compare, Negotiate, And Choose The Best." },

            { icon: <GiNetworkBars size={40} />, title: "Trusted Network", desc: "A Trusted Network of 7000+ Travel Agents" },

            { icon: <MdOutlineMenuBook size={40} />, title: "Multiple Options", desc: "Itineraries & Travel Tips From Trusted Agents" },
            
          ].map((item, i) => (

            <Grid item xs={12} sm={6} md={3} key={i}>

              <Box display="flex" flexDirection="column" alignItems="center">

                <Box bgcolor="white" color="green" p={2} borderRadius="50%">{item.icon}</Box>

                <Typography variant="subtitle1" mt={1}>{item.title}</Typography>

                <Typography variant="body2" textAlign="center">{item.desc}</Typography>

              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Top Selling Tours */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h5" fontWeight="bold">Top Selling Tour Packages of India</Typography>

        <Typography variant="body2">Stay updated with our latest offerings on Informe</Typography>

        <Grid container spacing={2} justifyContent="center" mt={3}>

          {Array.isArray(top?.tours) && top.tours.map((tour, i) => (

            <Grid item xs={4} key={i}> {/* 3 cards per row */}

              <Card sx={{ maxWidth: 300, mx: 'auto' }}>

                <CardMedia
                  component="img"
                  height="180"
                  image={tour.image}
                  alt={tour.name}
                />

                <CardContent>
                  <Typography variant="body1" fontWeight="bold" color="green">{tour.name}</Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, borderRadius: 20, backgroundColor: '#2f855a' }}
                  >
                    VIEW DETAILS
                  </Button>

                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box mt={6} px={3}>
        <Typography variant="h5" fontWeight="bold" mb={3}>Testimonials</Typography>

        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Card sx={{ bgcolor: '#e2e8f0', p: 2, maxWidth: 420 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>

                <Box sx={{ minWidth: 80 }}>

                  <CardMedia component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQQ0lKviAx8hg3Q0KWTpfsuRQg_5PFrFpzg&s"
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                  </Typography>

                  <Typography variant="subtitle2" fontWeight="bold">
                    Name
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    Company / Designation
                  </Typography>

                </Box>
              </Box>
            </Card>
          </Grid>


          <Grid item xs={4}>
            <Card sx={{ bgcolor: '#e2e8f0', p: 2, maxWidth: 420 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ minWidth: 80 }}>
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqbGRov722AyNrCPDyYSOd_G8rl8KA42syw&s"
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Name
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Company / Designation
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ bgcolor: '#e2e8f0', p: 2, maxWidth: 420 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ minWidth: 80 }}>
                  <CardMedia
                    component="img"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFepZGtR7u-aNc592F4YPqUfi-8BIxz9e0smYvJuLOzdjvjxfbhkOnxANP6aeTK3vjOYw&usqp=CAU"
                    sx={{
                      width: 80,
                      height: 80,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Name
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Company / Designation
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>




      <Box display="flex" justifyContent="flex-end" px={3} mt={4}>
        <IoArrowBackCircle size={40} color="gray" />
        <IoArrowForwardCircle size={40} color="gold" />
      </Box>
    </Box>
  );
};

export default Home;
