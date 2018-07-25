(function(){
  $(document).ready(initialize);

    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyBecPWQPP6B-NUITunDvktd2h8sPzbOBqE",
     authDomain: "work-to-win.firebaseapp.com",
     databaseURL: "https://work-to-win.firebaseio.com",
     projectId: "work-to-win",
     storageBucket: "work-to-win.appspot.com",
     messagingSenderId: "380858713180"
   };

  function initialize(){
    firebase.initializeApp(config);
    $('#submit').click(writeData);
    loadData();
  }

  function writeData(){
    //get value from inputs
    var username = $('#username').val();
    var email = $('#semail').val();
    var password = $('#spassword').val();

    console.log(username, email, password);

    //create object
    var data = {
      username:username,
      email:email,
      password:password,
    };

    // Send data to firebase and reload page
    var ref = firebase.database().ref('Project').push(data).then(function(){
      window.location.replace('groupProject.html');
    });
  }

  function loadData(){
    firebase.database().ref('Project').on('child_added', function(snapshot){
      var data = snapshot.val();
      $('.emailList').append('<p>' + data.email + '</p>');
    });
  }

})();
