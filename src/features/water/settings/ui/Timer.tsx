import { FC } from 'react';
import { 
    Stack,
    Typography, 
    Button, 
    Switch, 
    FormControlLabel, 
} from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const styles = {
    title__typography:{
        fontSize: '1rem', 
        fontWeight: 'medium', 
        marginTop: '0.5rem', 
        opacity: '50%'
    },
    interval__stack:{
        marginBottom: 1, 
        display: 'flex', 
        justifyContent: 'space-between'
    },
    time__display__stack:{
        display: 'flex', 
        flexDirection: 'row', 
        width: '50%'
    },
    time__typography:{
        fontSize: '1rem',
        fontWeight: 'medium',
        marginTop: '0.5rem',
        opacity: '50%'
    },
    button__stack:{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: 2,
    },
    time__adjust__button:{
        width: '10px', 
        minWidth: '0', 
        height: '30px',
        '&:last-child': {
            marginLeft: '5px'
        }
    }, 
}

const Timer: FC = () => {

    let minutes = 3;
    let seconds = '00';
  
    return (
        <>
            <Typography 
                variant="h3"
                sx={styles.time__typography}
            >
                Set interval
            </Typography>
            <Stack 
                spacing={2} 
                direction="row"
                sx={styles.interval__stack}
            >
                <Stack sx={styles.time__display__stack}>
                    <Typography
                        variant='h4'
                    >
                        {`${minutes}:${seconds}`}
                    </Typography>
                    <Stack sx={styles.button__stack}>
                        <Button 
                            variant="outlined"
                            sx={styles.time__adjust__button}
                        >
                            <AddRoundedIcon />
                        </Button>
                        <Button 
                            variant="outlined"
                            sx={styles.time__adjust__button}
                        >
                            <RemoveRoundedIcon/>
                        </Button>
                    </Stack>
                </Stack>
                <FormControlLabel 
                    control={<Switch centerRipple checked={true} />} 
                    label={'alerts '} 
                />
            </Stack>
        </>
    );
}

export default Timer;

