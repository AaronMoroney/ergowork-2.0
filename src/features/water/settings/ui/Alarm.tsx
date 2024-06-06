import { FC } from 'react';
import { 
    RadioGroup, 
    Radio, 
    Stack, 
    Typography,
    FormControlLabel, 
    Button,
} from "@mui/material";
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';

const styles = {
    sound__choice__typography: {
        fontSize: '1rem', 
        fontWeight: 'medium', 
        marginTop: '0.5rem', 
        opacity: '50%'
    },
    stack__row:{
        display: 'flexbox', 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
}

// TODO: mov to shared component?
const Alarm: FC= () => {
    return (
        <>
            <Stack sx={styles.stack__row}>
                <Typography 
                    variant="h3"
                    sx={styles.sound__choice__typography}
                >
                    Choose sound
                </Typography>
                <audio />
                <Button
                    startIcon={<VolumeOffRoundedIcon />}
                    sx={{minWidth: 0}}
                />
            </Stack>
            <Stack sx={styles.stack__row}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Tweet"
                    name="radio-buttons-group"
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
                > 
                    <FormControlLabel 
                        value='./softChime.mp3' 
                        label="Soft Chime" 
                        control={<Radio  />}
                    />
                    <FormControlLabel 
                        value='./singingBowl.mp3'
                        label="Singing Bowl"
                        control={<Radio  />}
                    />
                    <FormControlLabel 
                        value="./ohm.mp3" 
                        label="Ohm" 
                        control={<Radio />}
                    /> 
                </RadioGroup>
            </Stack>
        </>
    )
}

export default Alarm;