import React from 'react';
import { Box, Link } from '@mui/material';

function HeaderNav() {
  const sections = [
    { id: 'selected-credits', label: 'Selected Credits' },
    { id: 'about', label: 'About' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'mixing', label: 'Mixing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        backgroundColor: '#000',
        zIndex: 1200,
        py: 3,
        px: '17%',
        my: 7
      }}
    >
      {/* Logo Left */}
      <Box component="a" href="#selected-credits" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src="/logos/Ryan Allam Logo_name.png"
          alt="Logo"
          sx={{ height: 45 }}
        />
      </Box>

      {/* Navigation Links Center */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            underline="none"
            sx={{
              fontWeight: 'bold',
              color: '#f44336',
              '&:hover': { color: '#d32f2f' },
            }}
          >
            {label}
          </Link>
        ))}
      </Box>

      {/* IMDb & LinkedIn Right */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="https://www.imdb.com/name/nm8775035/" target="_blank" rel="noopener noreferrer">
          <Box
      component="img"
      src="/logos/imdb-logo.avif"
      alt="IMDb"
      sx={{ height: 40 }}
    />
        </Link>
        <Link href="https://ca.linkedin.com/in/ryanjoeallam" target="_blank" rel="noopener noreferrer">
          <Box
      component="img"
      src="/logos/linked-logo.avif"
      alt="LinkedIn"
      sx={{ height: 40 }}
    />
        </Link>
      </Box>
    </Box>
  );
}

export default HeaderNav;
