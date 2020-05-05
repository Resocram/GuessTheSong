
let trackTitleG;
let trackArtistG;
const rounds = 10;
let invalid = false;
let numRounds = rounds;
function genreLastFMParse(response){
    const dataArray = Array.from((response.data.tracks.track));
    trackTitleG = [];
    trackArtistG = [];
    if(dataArray.length === 0 ){
        alert("An unexpected error has occurred");
        invalid = true;
    }
    else{
        numRounds = rounds< dataArray.length ? rounds : dataArray.length;
        for(let i = 0; i<numRounds;i++){
            while(true){
                const randomNum = Math.floor(Math.random()*dataArray.length);
                if(!trackTitleG.includes(dataArray[randomNum].name)){
                    trackTitleG.push(dataArray[randomNum].name);
                    trackArtistG.push(dataArray[randomNum].artist.name)
                    break;
                }

            }
        }
    }

}


export {trackTitleG, trackArtistG, genreLastFMParse, numRounds, invalid}