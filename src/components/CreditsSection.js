import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { credits } from '../data';
import { imdbData } from '../data';
 
function CreditsSection() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {credits.map((src, i) => {
        const info = imdbData[src];
        return (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box className="credit-item" sx={{ width: '100%', maxWidth: { xs: 280, sm: 300, md: 350 }, position: 'relative' }}>
              <Box
                component="img"
                src={`/pics/${src}`}
                alt={src}
                sx={{ width: '100%', height: 'auto', borderRadius: 1, display: 'block' }}
              />
                <Box className="dark-overlay" />

              {info && (
                <Box className="hover-info">
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} className="title">
                    {info.title}
                  </Typography>
                  <Typography variant="caption" className="details">
                    {info.director && <>Director: {info.director}<br/></>}
                    Job: {info.job}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CreditsSection;
