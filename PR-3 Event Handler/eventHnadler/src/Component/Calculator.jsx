import { useState } from "react";
import Screen from "./Screen";
import Key from "./Key";

function CalcBox(){
    const [text, setText] = useState("");

    const pressKey =(val)=>{
        const signs = ["+", "-", "*", "/"];
        const last = text.slice(-1);

        if(signs.includes(val) && signs.includes(last)){
            return;
        }

        setText(text + val);
    };

    const resetAll =()=>{
        setText("");
    };

    const showResult =()=>{
        try{
            const ans = eval(text);
            if(ans === Infinity){
                setText("Error");
            } else{
                setText(ans.toString());
            }
        }catch{
            setText("Error");
        }
    };

    return(
        <div className="calculator">
            <Screen data={text} />

            <div className="buttons">
                <Key label="7" action={pressKey} />
                <Key label="8" action={pressKey} />
                <Key label="9" action={pressKey} />
                <Key label="/" action={pressKey} />

                <Key label="4" action={pressKey} />
                <Key label="5" action={pressKey} />
                <Key label="6" action={pressKey} />
                <Key label="*" action={pressKey} />

                <Key label="1" action={pressKey} />
                <Key label="2" action={pressKey} />
                <Key label="3" action={pressKey} />
                <Key label="-" action={pressKey} />

                <Key label="0" action={pressKey} />
                <Key label="." action={pressKey} />
                <button onClick={resetAll}>C</button>
                <Key label="+" action={pressKey} />

                <button className="equal" onClick={showResult}>=</button>
            </div>
        </div>
    );
}

export default CalcBox;
