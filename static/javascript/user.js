let request = null;
// var userresponse=""
function getMyResult(id) {
  request = new XMLHttpRequest();
  let x =id;
  console.log(typeof(id))
    
  request.onreadystatechange = function () {
      if (request.readyState == 4) {
        console.log("came")
        let res =  JSON.parse(request.responseText);
        let div = document.getElementById("settitle");
        div.innerHTML = "<br><br><h1 style='color:red;'>RESULT<h1>";
        let div2 = document.getElementById("result");
        result = "<center><h1 style='color:blue;'>User input : " + res["user_input"] + "</h1>"+ "<center><h1 style='color:blue;'>Computer pick : " + res["computer_pick"] + "</h1>";
        result += "<center><h1 style='color:green;'>Winner : " + res.winner + "</h1>";
        result +="<button type='button' onclick='location.reload()' class='btn' style='background-color:black;color:white;padding:15px;border-radius:15px;'  >Play Again</button></><br><br>"
        div2.innerHTML = result;
        console.log(x)
      } 
    };
    console.log("s")
    request.open(
      "GET",
      "/resultapi?userans="+x,
      true
    );
    request.send(null);
}


