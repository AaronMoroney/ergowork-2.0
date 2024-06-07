import { useState } from "react";
import {
    Button,
    Card, 
    Stack, 
    Typography,   
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MinimizeIcon from '@mui/icons-material/Minimize';

import { Settings } from "../../../features/water/settings";
import { ControlPanel } from "../../../features/water/control-panel";

const styles = {
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    styled__card: {
        padding: '20px', 
        borderRadius: '30px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    }, 
    title__typography: {
        fontSize: '1.75rem', 
        fontWeight: 'medium'
    }, 
    content__stack: {
        display: 'flexbox', 
        justifyContent: 'space-evenly', 
        padding: '15px 30px', 
        height: '90%', 
        backgroundColor: '#dad3ff14', 
        borderRadius: '30px'
    }
}

const WaterWidget = () => {
    const [toggleSettings, setToggleSettings] = useState(false);

    const handleToggleSettings = () => {
        setToggleSettings(!toggleSettings)
    }

    return (
        <>
            <Card sx={styles.styled__card}>
                <Stack sx={styles.header}>
                    <Typography 
                        variant="h1"
                        sx={styles.title__typography}
                    >
                        Water Timer
                    </Typography>
                    <Button 
                        onClick={handleToggleSettings}
                        disableRipple
                        disableTouchRipple
                    >
                        <MinimizeIcon />
                        { toggleSettings ? <AccessAlarmIcon /> : <SettingsIcon/> }
                    </Button>  
                </Stack>
                <Stack sx={styles.content__stack}>
                    {toggleSettings 
                        ? <Settings />
                        : <ControlPanel />
                    }
                </Stack>
            </Card>
        </>
    );
};


export default WaterWidget;