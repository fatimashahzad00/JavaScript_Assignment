// Album: 
// Write a function called make_album() that builds a Object describing a music album.The function should take in an artist name and an album title
function make_album(artist, title){
    // return a Object containing these two pieces of information.
    album_dict = {
        'artist' : artist,
        'title' : title
    }
    //  return value to show that Objects are storing the album information correctly
    return album_dict;
}
// Use the function to make three dictionaries representing different albums. Print each return value
album = make_album('metallica', 'ride the lightning')
console.log(album);
album = make_album('beethoven', 'ninth symphony')
console.log(album);
album = make_album('willie nelson','red-headed stranger')
console.log(album);

// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album

function make_album(artist, title, tracks=0){
    // add that value to the album’s Object.
    album_dict = {
        'artist': artist,
        'title': title
    }
    if(tracks){
        album_dict['tracks'] = tracks
    }
    return album_dict;
}
album = make_album('metallica', 'ride the lightning')
console.log(album);
album = make_album('beethoven', 'ninth symphony')
console.log(album);
album = make_album('willie nelson','red-headed stranger')
console.log(album);
album = make_album('iron maiden', 'piece of mind', tracks=8)
console.log(album);