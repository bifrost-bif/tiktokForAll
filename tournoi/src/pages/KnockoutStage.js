import React from 'react';
import { Grid, Grow, Card, CardContent, Typography } from '@mui/material';

// Composant AnimatedCard pour afficher chaque match avec une animation "Grow"
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

const KnockoutStage = () => {
    const matches = [
        { round: 'Quarts de finale', team1: 'Équipe 1', team2: 'Équipe 8', score: '3-1' },
        { round: 'Quarts de finale', team1: 'Équipe 2', team2: 'Équipe 7', score: '2-2 (4-3 pen)' },
        // Ajouter les autres matchs ici
    ];

    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>Phases à élimination directe</Typography>
            <Grid container spacing={4}>
                {matches.map((match, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <AnimatedCard match={match} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default KnockoutStage;
