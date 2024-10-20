import React from 'react';
import { Grow, Card, CardContent, Typography } from '@mui/material';

const AnimatedCard = ({ match }) => (
    <Grow in={true} timeout={1000}>
        <Card>
            <CardContent>
                <Typography variant="h6">{match.round}</Typography>
                <Typography>{match.team1} vs {match.team2}</Typography>
                <Typography>Score : {match.score}</Typography>
            </CardContent>
        </Card>
    </Grow>
);

export default AnimatedCard;
