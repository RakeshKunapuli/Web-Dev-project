let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

let playerData = document.getElementById("player-details-con");

for (var i = 0; i < playersDetails.length; i++) {
    if (playersDetails[i].playerName == playerUrl) {
        var playingOrN = "";
        if (playersDetails[i].isPlaying == true) {
            playingOrN = "Playing";
        } else {
            playingOrN = "On Bench";
        }
        playerData.innerHTML += `
            <div id="player_detail-img">
                <img src="${playersDetails[i].playerImg}" alt="">
            </div>
            <div id="new-player-det">
                <table>
                    <tr>
                        <td>Player Name</td>
                        <td>${playersDetails[i].playerName}</td>
                    </tr>
                    <tr>
                        <td>Team Name</td>
                        <td>${playersDetails[i].playerTeam}</td>
                    </tr>
                    <tr>
                        <td>Team Code</td>
                        <td>${playersDetails[i].from}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>${playersDetails[i].price}</td>
                    </tr>
                    <tr>
                        <td>Is playing</td>
                        <td>${playingOrN}</td>
                    </tr>
                </table>
            </div>
        `
    }
}





