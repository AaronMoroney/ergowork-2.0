import { FC } from "react";

import StopWatch from './StopWatch';
import WaterCount from './WaterCount';

const ControlPanel: FC = () => {
    return (
        <div>
            <StopWatch >
                <WaterCount />
            </StopWatch>
        </div>
    );
};

export default ControlPanel