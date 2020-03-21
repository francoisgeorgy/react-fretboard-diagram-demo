import React, {useState} from "react";
import {Tuning} from "fretboard-api";
import FD from "react-fretboard-diagram";
import DiagramStyle from "react-fretboard-diagram/dist/utils/DiagramStyle";
import "./Demo1.css";

//TODO: intervals should be automatically computed

const S: string[] = [
    "---010",
    "X32010",
    "X02220",
    "320003",
    "022100",
    "XX0232"
];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const randomShape = (m: number): string => {
    let shape = '';
    for (let s=0; s < 6; s++) {
        let frets: number[] = [];
        for (let f=0; f<m; f++) {
            let r = getRandomInt(m);
            if (!frets.includes(r)) frets.push(r);
        }
        if (shape !== '') shape += ',';
        shape += frets.join('');
    }
    return shape;
};

const Demo1: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [random, setRandom] = useState("");
    return (
    <div>
        <div>
            <h4>Defaults</h4>
            <ul>
                <li>Tuning: standard guitar tuning = {Tuning.guitar.standard}</li>
                <li>Number of strings: {Tuning.guitar.standard.length} (determined by the tuning)</li>
            </ul>
        </div>

        <h3>E major chord:</h3>
        <div style={{width:"400px"}}>
            <FD.Diagram frets={4} shapes={[S[index]]} text='interval' className="foo" />
        </div>

        <button onClick={() => setIndex((index + 1) % S.length)}>
            next
        </button>

        <h3>Random shape:</h3>
        <h4>{random}</h4>
        <div style={{width:"1200px"}}>
            <FD.Diagram frets={9} shapes={[random]} className="foo" />
        </div>

        <button onClick={() => setRandom(randomShape(10))}>
            random
        </button>


        {/*
        <h3>Major scale with intervals:</h3>
        <div style={{width:"400px"}}>
            <Diagram frets={4} text={"interval"} shapes={["2 4, 1 2 4, 1 3 4, 1 3 4, 2 4, 1 2 4"]} />
        </div>

        <h3>Major scale with fingers:</h3>
        <div style={{width:"400px"}}>
            <Diagram frets={4} text={"finger"} shapes={[
                {
                    frets: "2 4, 1 2 4, 1 3 4, 1 3 4, 2 4, 1 2 4",
                    fingers: "2 4, 1 2 4, 1 3 4, 1 3 4, 2 4, 1 2 4"
                }
            ]} />
        </div>
*/}

{/*
        <div style={{width:"300px"}}>
            <Diagram strings={6} frets={4} diagramStyle={ {
                paddingLeft: 200,
                paddingRight: 50,
                paddingTop: 100,
                paddingBottom: 100,
                stringInterval: 200,
                stringWidth: 20,
                fretInterval: 300,
                fretWidth: 30,
                dotIn: 150,
                dotOut: 100,
                dotRadius: 60,
                dotStroke: 10,
                fontSize: 50
            }} />
        </div>
*/}
    </div>
);
};

export default Demo1;
