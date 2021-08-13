user_name = localStorage.getitem("user_name");
room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
const config = {
      apiKey: "AIzaSyDPHboyIDGwCGXAqYoR1YtkJaPba3FU6Rs",
      authDomain: "kwitter2-bfd28.firebaseapp.com",
      databaseURL: "https://kwitter2-bfd28-default-rtdb.firebaseio.com",
      projectId: "kwitter2-bfd28",
      storageBucket: "kwitter2-bfd28.appspot.com",
      messagingSenderId: "652405783025",
      appId: "1:652405783025:web:a9bacb79177819543fac50"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg, 
      Like:0
      });
      document.getElementById("msg").value = "";
}

