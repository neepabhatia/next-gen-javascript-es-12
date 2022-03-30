// In the example, the ||= will check if the songsCount is false (0). If false, then the right value will be assigned to the left variable
// If true, then the value of the variable won’t change.
let playlist = {songsCount: 0, songs:[]};
playlist.songsCount ||= 101;
console.log(playlist); // This will print: {songsCount: 101, songs: Array(0)}
// to check when its value is not false
playlist.songsCount ||= 10;
console.log(playlist); // This will print: {songsCount: 101, songs: Array(0)}
