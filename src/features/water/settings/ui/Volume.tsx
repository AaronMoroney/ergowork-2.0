import { FC } from 'react';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';
import { Slider, Stack, Typography } from "@mui/material";

const styles = {
    volume__stack: {
        marginBottom: 1
    },
    alert__typography:{
        fontSize: '1rem',
        fontWeight: 'medium',
        marginTop: '0.5rem',
        opacity: '50%'
    },
}

const VolumeUI: FC = () => {
    return (
        <>
            <Typography 
                variant="h3"
                sx={styles.alert__typography}
            > 
                Alert volume
            </Typography>
            <Stack 
                spacing={2} 
                direction="row" 
                alignItems="center"
                sx={styles.volume__stack}
            >
                <VolumeDown />
                <Slider 
                    aria-label="Volume" 
                />
                <VolumeUp />
            </Stack>
        </>
    );
}

export default VolumeUI;