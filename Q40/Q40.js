"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Queen", "A Night at the Opera", 12));
console.log(make_album("The Beatles", "Abbey Road", 17));
