import { 
    Container,
    Stack, 
    Typography 
} from "@mui/material";

const styles = {
    stack__row:{
        display: 'flexbox', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'baseline'
    },
}

const WaterCount = () => {
    return (
        <Container>
            <Stack sx={styles.stack__row}>
                <Typography>
                    💧
                </Typography>
            </Stack>
        </Container>
    )
}

export default WaterCount