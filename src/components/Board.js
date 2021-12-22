import React, { useState, useEffect } from 'react';
import Box from './Box';

function Board() {
    const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const boardContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "space-between",
        width: "1000px"
    }
    return (
        <div style={boardContainerStyle}>
            {boxes.map(e=>((e === 7 || e === 8 || e === 9 || e === 12 || e === 13 || e === 14)? <Box invisible={true}/>:<Box/>) )}
            
        </div>
    );
}

export default Board;