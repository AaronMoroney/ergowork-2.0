import {
    Card, 
    Stack, 
    Typography,   
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import { Settings } from "../../../features/water/settings";

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

const PostureWidget = () => {
    return (
        <>
            <Card sx={styles.styled__card}>
                <Stack sx={styles.header}>
                    <Typography 
                        variant="h1"
                        sx={styles.title__typography}
                    >
                        Water Timer 💧
                    </Typography>
                    <SettingsIcon/>
                </Stack>
                <Stack sx={styles.content__stack}>
                    <Settings/> 
                </Stack>
            </Card>
        </>
    );
};


export default PostureWidget;