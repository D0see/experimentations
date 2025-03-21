const fs = require('fs');
const path = require('path');

const pieceService = {
    getAllPieces() {
        const pieces = [];
        const files = fs.readdirSync(path.join(__dirname, '../pieces'));
        for (const file of files) {
            const pieceLines = fs.readFileSync(path.join(__dirname, '../pieces/' + file), "utf-8").split("\r\n");
            pieces.push({
                "name" : pieceLines[0],
                "body" : pieceLines.slice(1)
            })
        }
        console.log(pieces);
        return pieces;
    } 
}
console.log(pieceService.getAllPieces());
module.exports = pieceService