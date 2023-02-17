type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
      artist,
      title,
    };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  
  // Example function calls
  console.log(make_album("Michael Jackson", "Thriller"));
  console.log(make_album("Queen", "A Night at the Opera", 12));
  console.log(make_album("The Beatles", "Abbey Road", 17));
  