import React, { useState, useEffect } from 'react';
import { Button, Input } from 'semantic-ui-react';

function Box({priceInput, invisible}){
    const boxStyle = {
        width: "180px",
        height: "180px",
        margin: "5px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //alignContent: "space-between"
    };

    const houseContainerStyle = {
        width: "35px",
        height: "35px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const inputStyle = {
        width: "90%",
        marginTop: "5px"
    };

    const [focus, setFocus] = useState(false); //people pass through this box
    const [owner, setOwner] = useState(0);
    const [price, setPrice] = useState(100);
    const [houses, setHouses] = useState(["vocabs", "vocabs"]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        if (priceInput > 0) {
            setPrice(priceInput);
        }
    }, [priceInput]);

    return (
        <div style={{
            ...boxStyle,  
            backgroundColor: owner === 0? "white":"black",
            border: "2px solid black",
            visibility: invisible? "hidden":"visible"
        }}>
            <div style={{display: "flex"}}>
                <div style={{marginRight: "10px"}}>Price: 123</div>
                <div style={{marginLeft: "10px"}}>Exp. Paid: 234</div>
            </div>
            {houses.map(e => <div>{e}</div>)}
            <div style={{display: "flex"}}>
                <div style={houseContainerStyle}>1</div>
                <div style={houseContainerStyle}>2</div>
                <div style={houseContainerStyle}>3</div>
                <div style={houseContainerStyle}>4</div>
            </div>
            <input style={inputStyle}/>
        </div>
    );
}

export default Box;