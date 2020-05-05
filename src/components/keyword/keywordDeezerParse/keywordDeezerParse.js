let trackTitleK;
let trackArtistK;
let trackMP3K;
const rounds = 10;
let invalid = false;
let numRounds = rounds;
function keywordDeezerParse(response){
    const dataArray = Array.from(response.data.data);
    trackTitleK = [];
    trackArtistK = [];
    trackMP3K = [];
    if(dataArray.length === 0){
        alert("No songs found with that search query")
        invalid = true;
    }else{ 
        numRounds = rounds < dataArray.length ? rounds : dataArray.length;
        for(let i =0; i<numRounds;i++){
            while(true){
                const randomNum = Math.floor(Math.random()*dataArray.length);
                if(!trackTitleK.includes(dataArray[randomNum].title_short)){
                    trackTitleK.push(dataArray[randomNum].title_short)
                    trackMP3K.push(dataArray[randomNum].preview)
                    trackArtistK.push(dataArray[randomNum].artist.name)
                    break;
                }
            }

        }
    }
}


export {trackTitleK, trackArtistK, trackMP3K, keywordDeezerParse, numRounds, invalid}