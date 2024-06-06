import React from 'react';
import Alarm from './Alarm'
import Volume from './Volume';
import Timer from './Timer';

const Settings: React.FC = () => {
    return (
        <div>
            <Volume />
            <Alarm />
            <Timer />
        </div>
    );
};

export default Settings