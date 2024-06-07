import { FC, ReactNode } from "react";
import { 
    Button, 
    Stack, 
    Typography 
} from "@mui/material";

const styles = {
    button:{
        borderRadius: '30px'
    },
    stack__row:{
        display: 'flexbox', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: '15px 30px', 
        backgroundColor: '#dad3ff14', 
        borderRadius: '30px',
        alignItems: 'baseline',
    },
    timer__typography :{
        fontSize: '100px'
    },
}

interface StopWatchProps {
    children?: ReactNode
}

const StopWatch: FC<StopWatchProps> = ({ children }) => {

    let minutes = 3;
    let seconds = '00';
    return (
        <>
            <Typography sx={styles.timer__typography}>{`${minutes}:${seconds}`}</Typography>
            <Stack sx={styles.stack__row}>
                <Button sx={styles.button}>Start</Button>
                    {children}
                <Button sx={styles.button}>Reset</Button>
            </Stack>
        </>
    )
}

export default StopWatch