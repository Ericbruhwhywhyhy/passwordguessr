let guesses = 0
let bgm = new Howl({
  src: ["./lobbytime.mp3"],
  preload: true
})
bgm.on("load", function(){
  document.querySelector("#load").remove()
  bgm.play();
})

let username = document.querySelector("#username")
let resulttitle = document.querySelector(".modal-title")
let body = document.querySelector(".modal-body")
let footer = document.querySelector("#yas")
let leaderboardname = document.querySelector("#leaderboard_name")
let wrong = new Howl({
src: ["./sfx/btb_break.ogg"],
preload: true
})
let correct = new Howl({
src: ["./sfx/worldrecord.ogg"],
preload: true
})
const wtf =["12.minight",
"creeperawman",
"pigsty",
"ligmaball",
"totheminecon",
"fortnite",
"aHR0cHM6Ly9jaC50ZXRyLmlvL3UvZXJpY2JydWh3aHl3aHloeQ==",
"plainrock124",
"bruh123Pepsi@55555IV",
"iloveaznguy",
"ericbruh.js",
"lmao@lmao.cock",
"lolonlylolis@myhouse123streetstreet!",
"123456",
"123456789",
"12345678",
"12345",
"qwerty",
"abc123",
"football",
"1234567",
"monkey",
"111111",
"letmein",
"1234",
"1234567890",
"dragon",
"baseball",
"sunshine",
"iloveyou",
"trustno1",
"princess",
"123123",
"welcome",
"login",
"admin",
"qwerty123",
"solo",
"1q2w3e4r",
"master",
"666666",
"1qaz2wsx",
"qwertyuiop",
"ashley",
"mustang",
"121212",
"starwars",
"654321",
"bailey",
"access",
"flower",
"555555",
"passw0rd",
"shadow",
"lovely",
"7777777",
"michael",
"!@#$%^&amp;*",
"jesus",
"password1",
"superman",
"hello",
"charlie",
"888888",
"696969",
"hottie",
"freedom",
"aa123456",
"qazwsx",
"ninja",
"azerty",
"loveme",
"whatever",
"donald",
"batman",
"zaq1zaq1",
"Football",
"000000",
"123qwe"
]
let chosen_password  = wtf[Math.floor(Math.random() * wtf.length)]
let psswrd_input = document.querySelector("#password")
console.log(chosen_password)
document.querySelector("#submit").onclick = function () {
if (psswrd_input.value === chosen_password && username.value.length > 1) {
correct.play()
console.log("its correct!")
resulttitle.innerHTML = "Correct!"
body.innerHTML = "Congrats, "+username.value+ "!. You've guessed the correct password! And you went on to leak national documents and wreak havoc and whatever lmao <br> You've tried to guess the password <h3>"+guesses+"</h3> time(s)"
  footer.innerHTML = `
          <button type="button" id="restart" class="btn btn-primary">Restart</button>          <button id="leaderboardsubmit" class="btn btn-primary">SUBMIT TO LEADERBOARD</button>`
          document.querySelector("#leaderboardsubmit").addEventListener("click", why)
  chosen_password = wtf[Math.floor(Math.random() * wtf.length)]
}
else if (username.value.length < 1) {
  resulttitle.innerHTML = "PLEASE CHOSE A USERNAME"
  body.innerHTML = ""
  footer.innerHTML = `<button type="button" id="close" class="btn btn-secondary" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#resultModal">Close</button>
          <button type="button" id="restart" class="btn btn-primary">Restart</button> `
}
else {
  footer.innerHTML = `<button type="button" id="close" class="btn btn-secondary" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#resultModal">Close</button>
          <button type="button" id="restart" class="btn btn-primary">Restart</button> `
  guesses += 1
wrong.play()
resulttitle.innerHTML = "Wrong!"
body.innerHTML = "Try and guess another one!"
console.log("WRONG LMAO 😂😂😂😂")
}
}
document.querySelector("#restart").onclick = function(){
window.location.reload()
}
document.querySelector("#generate"). onclick = function() {
  resulttitle.innerHTML = "RESET PASSWORD"
  body.innerHTML = "FORM: <a href='https://youtu.be/xvFZjo5PgG0?si=WY7yS8xsuCTOeo9C'>https://ericbruhwhywhyhy.github.io/passwordguessr/resetpasswords</a>"
  footer.innerHTML = `<button type="button" id="close" class="btn btn-secondary" data-dismiss="modal" data-bs-toggle="modal" data-bs-target="#resultModal">Close</button>
          <button type="button" id="restart" class="btn btn-primary">Restart</button> `
  chosen_password = wtf[Math.floor(Math.random() * wtf.length)]
  console.log(chosen_password)
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child, query, limitToFirst, orderByChild, orderByKey, startAt, startAfter, endAt, endBefore, equalTo } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import * as firebaseui from "https://www.gstatic.com/firebasejs/ui/6.1.0/firebase-ui-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyA-64d65BxJ0qZ5wjGQ67ZT9vwnhYOj7pk",
    authDomain: "ericsgameleaderboard.firebaseapp.com",
   databaseURL: "https://ericsgameleaderboard-default-rtdb.firebaseio.com",
   projectId: "ericsgameleaderboard",
  storageBucket: "ericsgameleaderboard.appspot.com",
    messagingSenderId: "736304763127",
    appId: "1:736304763127:web:acbd68677d3094356f43f2",
   measurementId: "G-EKDMFDMF5Y"
  };


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const provider = new GoogleAuthProvider()
const auth = getAuth()
console.log(provider)
const analytics = getAnalytics(app);
  console.log("done!")
const database = getDatabase(app)
function why(e){
  set(ref(database,'passwordguessr/'+username.value),
  {leaderboardusername: username.value,
guess: guesses
 })
.then(function(){
alert("SUBMITTED! (leaderboard coming soon ;) )")
  })
 .catch(function(error){
alert("FAILED"+error)
})}
