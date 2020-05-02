

let trackTitle = [];
let chosenIndices = [];
let trackMP3  = [];
const rounds = 10;

function parseResponse(response){
    const dataArray = Array.from(response.data.data);
    const numRounds = rounds < dataArray.length ? rounds : dataArray.length;
    for(let i =0; i<numRounds;i++){
        const randomNum = generateRandomIndex(dataArray.length)
        trackTitle.push(dataArray[randomNum].title_short)
        trackMP3.push(dataArray[randomNum].preview)
    }
}

function generateRandomIndex(length){
    let randomNum;
    while(true){
        randomNum =  Math.floor(Math.random()*length)
        if(!chosenIndices.includes(randomNum)){
            chosenIndices.push(randomNum);
            break;
        }
    }
    return randomNum;
}


export {trackTitle, trackMP3, parseResponse}