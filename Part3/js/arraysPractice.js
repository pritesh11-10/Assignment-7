//STEP 1
var favMovies = ["Tamasha", "Prisoners", "Udaan", "MoneyBall", "TooBigToFail"];
window.console.log(favMovies[1]);

window.console.log("--------");
//STEP 2
var movies = new Array(5);
movies[0] = "Tamasha";
movies[1] = "Prisoners";
movies[2] = "Udaan";
movies[3] = "MoneyBall";
movies[4] = "TooBigToFail";
window.console.log(movies[0]);

window.console.log("--------");
//STEP 3
var movies2 = new Array(5);
movies2[0] = "Tamasha";
movies2[1] = "Prisoners";
movies2[2] = "Udaan";
movies2[3] = "MoneyBall";
movies2[4] = "TooBigToFail";

movies2.splice(2, 0, "ForrestGump");
window.console.log(movies2.length);

window.console.log("--------");
//STEP 4
var favMovies2 = [];
favMovies2[0] = "Tamasha";
favMovies2[1] = "Prisoners";
favMovies2[2] = "Udaan";
favMovies2[3] = "MoneyBall";
favMovies2[4] = "TooBigToFail";

delete favMovies2[0];
window.console.log(favMovies2);

window.console.log("--------");
//STEP 5
var favMovies3 = [];
favMovies3[0] = "Tamasha";
favMovies3[1] = "Prisoners";
favMovies3[2] = "Udaan";
favMovies3[3] = "MoneyBall";
favMovies3[4] = "TooBigToFail";
favMovies3[5] = "IntoTheWild";
favMovies3[6] = "Deadpool";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

window.console.log("--------");
//STEP 6
var favMovies4 = [];
favMovies4[0] = "Tamasha";
favMovies4[1] = "Prisoners";
favMovies4[2] = "Udaan";
favMovies4[3] = "MoneyBall";
favMovies4[4] = "TooBigToFail";
favMovies4[5] = "IntoTheWild";
favMovies4[6] = "Deadpool";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

window.console.log("--------");
//STEP 7
var favMovies5 = [];
favMovies5[0] = "Tamasha";
favMovies5[1] = "Prisoners";
favMovies5[2] = "Udaan";
favMovies5[3] = "MoneyBall";
favMovies5[4] = "TooBigToFail";
favMovies5[5] = "IntoTheWild";
favMovies5[6] = "Deadpool";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

window.console.log("--------");
//STEP 8
var favMovies6 = [];
favMovies6[0] = "Tamasha";
favMovies6[1] = "Prisoners";
favMovies6[2] = "Udaan";
favMovies6[3] = "MoneyBall";
favMovies6[4] = "TooBigToFail";
favMovies6[5] = "IntoTheWild";
favMovies6[6] = "Deadpool";

var leastFavMovies = [];
leastFavMovies[0] = "Housefull 3";
leastFavMovies[1] = "Happy New year";
leastFavMovies[2] = "Dabang 3";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

window.console.log("--------");
//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

window.console.log("--------");
//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());