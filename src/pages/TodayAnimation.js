import React, { useState, useEffect } from 'react';
import { Dialog, Typography, Box } from '@mui/material';
import './TodayAnimation.css';

const TodayAnimation = ({ open, onClose }) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(onClose, 7000); // Close after 7 seconds
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    return (
        <Dialog open={open} fullScreen PaperProps={{ style: { background: 'black', opacity: 0.9 } }}>
            <Box className="today-animation-container">
                <Typography variant="h1" className="flame-effect">
                    Match du Jour
                </Typography>
            </Box>
        </Dialog>
    );
};

export default TodayAnimation;
