import React from 'react';
// import Diagram from "../../src/component/Diagram";
import {STYLES} from "../../src/utils/styles";
import FD from "react-fretboard-diagram";

const GridExamples = () => (
    <div id="grids" className={"debug"}>
        <div>
            <FD.Diagram frets={1} tuning={['E2', 'A2']} diagramStyle={STYLES.test1} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test2} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test3} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test4} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test5} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test6} debug={true} />
        </div>
        <div>
            <FD.Diagram diagramStyle={STYLES.test7} debug={true} />
        </div>
        <div className={"big"}>
            <FD.Diagram diagramStyle={STYLES.test8} debug={true} />
        </div>
        <div className={"big"}>
            <FD.Diagram />
        </div>
    </div>
);

export default GridExamples;
