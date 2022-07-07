import { Stack,Box,Card,CardContent,Typography,CardMedia } from "@mui/material"


export const References = () => {
  return (
   <Stack
        width="100%"
        height="608px"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#dddddd" }}
        direction= 'row'
        spacing={4}
    >
        <Box width='385px'>
            <Card elevation={3}>
                <CardMedia 
                    component='img'
                    height='235px'
                    image="components/image/photodune1.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='#4ec1e0'>
                        Outdoor Desktop
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                    Compétition d'algorithme karakarain'ny C2E sy AlgoMada izay atao amin'ny 23 juillet à 13h ato @ ENI.
                    Tournoi individuel ahitana catégories roa: newbie (L1 ihany) sy rookie (L2 miakatra). 
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box width='385px'>
            <Card>
                <CardMedia 
                    component='img'
                    height='235px'
                    image='url(components/image/photodune1.png)'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='#4ec1e0'>
                        Outdoor Desktop
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                    Compétition d'algorithme karakarain'ny C2E sy AlgoMada izay atao amin'ny 23 juillet à 13h ato @ ENI.
                    Tournoi individuel ahitana catégories roa: newbie (L1 ihany) sy rookie (L2 miakatra). 
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box width='385px'>
            <Card>
                <CardMedia 
                    component='img'
                    height='235px'
                    image='url(components/image/photodune1.png)'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color='#4ec1e0'>
                        Outdoor Desktop
                    </Typography>
                    <Typography variant="body2" color='text.secondary'>
                    Compétition d'algorithme karakarain'ny C2E sy AlgoMada izay atao amin'ny 23 juillet à 13h ato @ ENI.
                    Tournoi individuel ahitana catégories roa: newbie (L1 ihany) sy rookie (L2 miakatra). 
                    </Typography>
                </CardContent>
            </Card>
        </Box>
   </Stack>
  )
}
