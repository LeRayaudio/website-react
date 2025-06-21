import React from 'react';
import { Container, Divider, Grid, Typography, Box, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { theme } from './theme';
import AudioPlayer from './components/AudioPlayer';
import { adamSongs, coffeSongs, credits, kennedySongs, panisSongs, podcasts } from './data';


function Section({ title, children }) {
  return (
<Container sx={{ pl: 1, pr: 1, mb: 4 }}>
  <Box sx={{ pt: 3 }}>
    <Typography
      variant="h5"
      sx={{ fontWeight: 900, display: "inline-block" }}
      id="section-title"
    >
      {title}
    <Divider
      sx={{
        mt: 0,
        mb: 3,
        width: 'auto',
        maxWidth: '100%',
        backgroundColor: '#f44336',
        height: 3,
      }}
      />
      </Typography>
  </Box>
  <Box>{children}</Box>
</Container>


  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header */}
      <Container
        sx={{
          pl: { xs: 2, md: 10 },
          pr: { xs: 2, md: 10 },
          my: 4,
          textAlign: "center",
        }}
      >
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ pr: '80px'}}>
          <Box component="img"
            src="/logos/Ryan Allam Logo.png"
            alt="Logo"
            sx={{ width: '10%', pr: 2 }}
          />
          <Box component="img"
            src="/logos/Ryan Allam Logo_name.png"
            alt="Logo Name"
            sx={{ width: '16%' }}
          />
        </Grid>
      </Container>

      <Section title="Selected Credits">
      <Grid container spacing={2} justifyContent="center">
  {credits.map((src, i) => (
    <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component="img"
        src={`/pics/${src}`}
        alt={`Credit ${i + 1}`}
        sx={{
          width: '100%',
          maxWidth: { xs: 280, sm: 300, md: 350 },
          height: 'auto',
          borderRadius: 1,
          display: 'block',
          px: 1
        }}
      />
    </Grid>
  ))}
</Grid>
</Section>


      {/* About */}
      <Section title="About">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 3,
          }}
        >
          <Box
            component="img"
            src="/pics/Ryan_bio.jpg"
            alt="Bio"
            sx={{
              width: { xs: '100%', md: 250 },
              height: 'auto',
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ textAlign: 'justify', pr: 1, fontSize: '16px' }}>
            Ryan Joe Allam is a trilingual sound editor and sound designer based in Toronto. He has a diverse body of work in Film, Television, Commercial and Radio Production. His passion for music started early on. At the age of fifteen, he taught himself to play the guitar and piano. By the time he was 17, he had started his own soft rock band, called Camel's Night Out. In addition to being the lead vocalist and rhythm guitarist, he started composing soft rock tracks and added them to the band’s portfolio.
            <br /><br />
            After spending his early years in the IT industry, he decided to return to his passion in 2008 and start a career in what he loved doing the most: Sound.
            <br /><br />
            Sound is an integral part of any feature film. It can set the mood, inform the story and ignite emotions. Imagine looking at a close up of a character’s face without any sound. You may think that nothing interesting is going on. Now add some background sound such as fast-moving traffic, car horns, a distant police siren and a few shout outs. The story suddenly takes shape and you can’t help but wonder: Why is she standing so close to a highway? Is she lost? What if she gets hit by a car?

            When executed skillfully, sound transforms the audience’s experience while remaining a seamless part of the film.
          </Typography>
        </Box>
      </Section>


      {/* Podcasts */}
      <Section title="Podcasts">
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'flex-start',
      gap: 3,
    }}
  >
    <Box sx={{ flexBasis: { md: '50%' }, flexGrow: 1 }}>
      <Typography sx={{ textAlign: 'justify', pl: 1 }}>
        In February 2009, I was asked to produce a podcast with Nanette Midwood, a British radio host. The show was to be broadcast aboard all flights on Etihad Airlines, a United Arab Emirates airline. It consisted of 30 minute episodes showcasing various touristic attractions in Abu Dhabi.
        The show was so well received that it went from a quarterly to a bimonthly production.
        Our team criss-crossed the region from the city to the desert, to feature the best that Abu Dhabi had to offer, from the well-known to off the beaten path.
        The airline passengers, more than 11 million per year, were able to discover all of it from the comfort of their seats, and could decide on what to do, once their journey started in Abu Dhabi.
      </Typography>
    </Box>

    <Box sx={{ flexBasis: { md: '50%' }, width: '100%' }}>
      <AudioPlayer tracks={podcasts} logo="/logos/etihad_logo.png" />
    </Box>
  </Box>
</Section>


      {/* Mixing */}
      <Section title="Mixing">
        <Typography sx={{textAlign: 'justify', mb: 2, px: 1}} >
          In my constant quest to better myself, I joined Berklee College of Music to study Music Theory in 2013, followed by Mixing and Mastering in 2014, at which time I started mixing demo albums.
        </Typography>
      <AudioPlayer tracks={kennedySongs} logo="/logos/kennedy.png"/>
      <AudioPlayer tracks={adamSongs} logo="/logos/adam.png"/>
      <AudioPlayer tracks={panisSongs} logo="/logos/panis.png"/>
      <AudioPlayer tracks={coffeSongs} logo="/logos/coffe.png"/>

      </Section>

      {/* Contact */}
      <Section title="Contact">
        <Typography>
          Do you have any question? Or just thinking about a project? Drop me a line at {" "}
          <Box
            component="a"
            href="mailto:ryanallam@gmail.com"
            sx={{ color: "#f44336", fontWeight: 500, textDecoration: "none" }}
        >
            ryanallam@gmail.com
          </Box>{" "}
           or just reach me through my Linkedin page  below and we'll be in touch!
        </Typography>

      </Section>

      {/* Footer */}
      <Container sx={{ py: 4 }}>
        <Typography variant="body2" align="center" className="stretch-text">
          2008 - 2025 © by Ryan Joe Allam<br />
The content, logos and brand name appearing on this Site are the property of their respective owners. No Material may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without a written consent from the owner. 

        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;