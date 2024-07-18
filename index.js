// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

function superbowlWin(record){
    if (record[0].year === "W"){
        return record[0].year
    } else {
        return undefined;
    }
}


function superbowlWin(record) {
    const winObject = record.find(obj => obj.result === "W");
    if (winObject) {
        return winObject.year
    } else {
        return undefined;
    }
}