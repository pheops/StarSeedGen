//~~~~STARSEED GENERATOR FOR STS9 by PHEOPS~~~~//

var amp;
var d = 8;
var numm = 5;
var button;
var button2;

var volhistory = [];
var allImages = [];

var state = 0;
let analyzer;
let img;

var Songs = [
  "2012",
  "A03",
  "ABCEES",
  "ADEXPLORATA",
  "AIMLESSLY",
  "ARIGATO",
  "ATLAS",
  "AWESOMECOOLKIDS",
  "BALANCING",
  "BENICE",
  "BEPUSLE",
  "BIGGS",
  "BYTHEMORNINGSUN",
  "CENTRAL",
  "CLICKLANGECHO",
  "CRYPTOCITY",
  "CRYSTAL",
  "ELSEWHERE",
  "ENCELADUS",
  "EHM",
  "EVASIVE",
  "EMPIRES",
  "ENDTITLES",
  "FWORD",
  "GETLOUD",
  "GIVE& AKE",
  "GOLDENGATE",
  "GREENLIGHTSTS9REMIX",
  "GLOGLI",
  "GRIZZLY",
  "HAVONAASCENT",
  "INSTANTLY",
  "JEBEZ",
  "KABUKI",
  "LOVEDONTTERRORIZE",
  "LOOKINGBACK",
  "LUMA",
  "MARCH",
  "MENACER",
  "METAMEME",
  "MUSICUS",
  "MOVEMYPEEPS",
  "MOD",
  "NEWDAWNNEWDAY",
  "NEWSOMA",
  "OHLITTLEBRAIN",
  "OILNWATER",
  "ONCETOLD",
  "ONEADAY",
  "ONETWOTHREE",
  "ONLYLIGHTREMAINS",
  "OUTOFTHISWORLD",
  "PEACEBLASTER",
  "PEOPLES",
  "POSEIDON",
  "POSSIBILITES",
  "PHONEME",
  "PRESENCEOFLIGHT",
  "PUSHTHESKY",
  "RABBLE",
  "REEMERGENCE",
  "REALANDIMAGINED",
  "REALLYWHAT",
  "RISEABOVEGETLOUD",
  "SEED",
  "SCHEME",
  "SCHEMEREPRISE",
  "SIMULATOR",
  "SHOCKDOCTRINE",
  "SOMESING",
  "SOW",
  "SPENDINGTIME",
  "SQUISHFACE",
  "STRANGEGAMES",
  "SUNMOON&STARS",
  "SKYHIGH",
  "THESPECTACLE",
  "THEUNIVERSEINSIDE",
  "THISUS",
  "TOTHEWORLD",
  "TOKYO",
  "TOOTH",
  "TODAY",
  "TOTEM",
  "TRINOC",
  "TWELVE",
  "TWILIGHT",
  "UNQUESTIONABLE",
  "VAPORS",
  "VIBYL",
  "WALKTOTHELIGHT",
  "WARRIOR",
  "WAVESPELL",
  "WMIOD",
  "WORLDGOROUND",
  "WORRYNOMORE",
  "WTDS",
  "WTDSREPRISE",
  "YOUDONTSAY",

  "4YEARPUMA",
  "986FTTALLTREES",
  "2001",
  "118",
  "ANDSOMEAREANGELS",
  "BARAKA",
  "BREATHE IN",
  "BEYONDRIGHTNOW",
  "BLUMOOD",
  "CALLJAM",
  "CIRCUS",
  "DANCE",
  "DAYSOUTOFTIME",
  "DRAGONCITY",
  "EB",
  "EQUINOX",
  "FREQUENCYALL",
  "FROMNOWON",
  "FIREWALL",
  "GROW",
  "GOBNUGGETT",
  "HHHF",
  "HIKEY",
  "HUBBLE",
  "INSPIRE",
  "ITZAMANA",
  "KAMUY",
  "KAYA",
  "KINGPHARAOHS",
  "LIFESSWEETBREATH",
  "LIGHTYEARS",
  "LOSWAGA",
  "MISCHIEF",
  "MOBSTERS",
  "MONKEYMUSIC",
  "MOONSOCKET",
  "NATIVEREEMERGENCE",
  "NAUTILUS",
  "OPENE",
  "ORBITAL",
  "PIANOIR",
  "POTAMUS",
  "RAMONE",
  "RENT",
  "RESTEREO",
  "ROYGBIV",
  "SATORI",
  "STS9",
  "SOUTHOFHERE",
  "SONG1",
  "SQUARESANDCUBES",
  "SUMMIT",
  "SUBLIMINALNATURE",
  "SURREALITY",
  "TAPIN",
  "THEPAINT",
  "WATERSONG",
  "WIKA",
  "WILDER",
  "WHATISLOVE",
  "YOURIT",
];

function openLink() {
  window.open("https://www.sts9.com/starseed-gallery");
}

function preload() {
  song = loadSound("assets/SuperCluster.m4a");
}

function getRandomString(length) {
  var result = "";
  for (var i = 0; i < length; i++) {
    result += random(Songs);
  }
  return result;
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

function GalleryFeed() {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  storageRef
    .listAll()
    .then(function (result) {
      result.items.forEach(function (imageRef) {
        displayImage(imageRef);
      });
    })
    .catch(function (error) {
      // Handle any errors
    });
  /////////////////////
  function displayImage(imageRef) {
    imageRef
      .getDownloadURL()
      .then(function (url) {
        //console.log(url)///get yer urls

        //////make a gallery from urls!!!!!!!!!
        createImg(url, "");
      })

      .catch(function (error) {
        // Handle any errors
      });
  }
 
}

function uploadImage() {
  var SetlistID = getRandomString(10);
  saveCanvas(SetlistID);

  var Simage = new Image();
  Simage.id = "pic";
  Simage.src = canvas.toDataURL();
  //console.log(Simage.src);

  const ref = firebase.storage().ref();
  ref
    .child(new Date() + "-" + "base64" + "-" + SetlistID)
    .putString(Simage.src, "data_url")
    .then(function (snapshot) {
      console.log("Uploaded a data_url string!");
      alert("StarSeed Added");
    });

  //GalleryFeed();
}

function setup() {
  const firebaseConfig = {
    apiKey: "AIzaSyBzEdz5so2JjlKk9Os_1-OYdfXDOS2VXVQ",
    authDomain: "sts9artgen.firebaseapp.com",
    projectId: "sts9artgen",
    storageBucket: "sts9artgen.appspot.com",
    messagingSenderId: "212920308716",
    appId: "1:212920308716:web:8f8e39fe6f4e75b78266c9",
    measurementId: "G-T0KZN7ZX3M",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let cnv = createCanvas(400, 400);
  angleMode(DEGREES);

  s1 = createSlider(1, 25, 5, 1); 
  sd = createSlider(1, 10, 5, 1);
  sn = createSlider(1, 10, 5, 1); 
  srad = createSlider(2, 500, 120, 1); 
  s3 = createSlider(3, 30, 3, 1); 
  s6 = createSlider(0.01, 0.2, 0.1, 0.01); 
  s7 = createSlider(1, 75, 5, 1); 
  s8 = createSlider(0.1, 5, 0.5, 0.1); 

  button2 = createButton("SEND TRANSMISSION");
  button2.mousePressed(uploadImage);
  button2.style("font-size", "13px");

  button = createButton("UNIVERSE");
  button.mousePressed(openLink);
  button.style("font-size", "13px");
  button.style("font", "bold");
  button.style("background-color", "#000000");
  button.style("color", "#da4e24");

  cnv.mousePressed(userStartAudio);
  cnv.mousePressed(toggleSong);

  fill(218, 78, 36);
  ellipse(width / 2, height / 2, 200, 200);
  fill(0);
  textAlign(CENTER);
  textSize(13);
  stroke(0);
  text("TAP TO PLAY", width / 2, height / 2 + 8);

  amp = new p5.Amplitude();
}

function draw() {
  if (state === 1) {
    background(0);
    var vol = amp.getLevel();
    volhistory.push(vol);
    strokeWeight(s8.value * 100);
    strokeWeight(s8.value());
    noFill();
    push();

    translate(width / 2, height / 2);
    beginShape();
    for (var n = 0; n < s1.value(); n++) {
      var rVal = s7.value() + n;
      var gVal = s7.value() - n;
      colorMode(HSB, 100);

      stroke(rVal, 100, 100);

      var k = sn.value() / sd.value();
      for (var i = 0; i < 360; i += s3.value()) {
        var rad = srad.value() * cos(k * i) + map(volhistory[i], 0, 1, 10, 200);

        var x = rad * cos(i);
        var y = rad * sin(i);
        vertex(x, y);
      }
      endShape();
      rotate(frameCount * s6.value());
    }

    if (volhistory.length > width - 50) {
      // Remove first item from array
      volhistory.splice(0, 1);
    }
  }
}

function mousePressed() {
  if (state === 0) {
    state++;
  }
}

function saveDrawing() {
  saveCanvas();
}
