
function calculateRelation() {
  var flames = "FLAMES";
  var personName = document.getElementById("name1").value.toUpperCase();
  var partnerName = document.getElementById("name2").value.toUpperCase();
  var count = 0;
  var newPersonName = personName;
  var newPartnerName = partnerName;
  // to find the number of distinct characters in 2 names
  for (var i = 0; i < personName.length; i++) {
    for (var j = 0; j < partnerName.length; j++) {
      if (newPartnerName.includes(personName.charAt(i))) {
        newPersonName = newPersonName.replace('' + personName.charAt(i), '');
        newPartnerName = newPartnerName.replace('' + personName.charAt(i), '');
        break;
      } else {
        tempcount = 0;
      }
    }
    count = newPartnerName.length + newPersonName.length;
  }
  // find the letter from FLAMES by using number of characters we find above
  while (flames.length > 1) {
    tempcount = count;
    while (tempcount > flames.length) {
      tempcount -= flames.length;
    }
    if (tempcount != 0) {
      flames = flames.substring(tempcount) + flames.substring(0, tempcount - 1);
    } else {
      flames = flames.substring(tempcount - 1) + flames.substring(0, tempcount);
    }
  }
  var relation = "";
  switch (flames) {
    case 'F':
      relation = "Friendship";
      break;
    case 'L':
      relation = "Love";
      break;
    case 'A':
      relation = "Affection";
      break;
    case 'M':
      relation = "Marriage";
      break;
    case 'E':
      relation = "Enemy";
      break;
    case 'S':
      relation = "Siblings";
      break;
  }
  document.getElementById('result').style.visibility = 'visible';
  document.getElementById('result').innerHTML = "<h2>The relation between <span>" + personName + "</span> and <span>" + partnerName + "</span> is " + relation + "</h2></br>";
  var image = document.createElement("IMG");
  var imgsrc = "images/" + relation + ".png";
  image.setAttribute("src", imgsrc);
  image.setAttribute("class", "relation_logo");
  document.getElementById("result").appendChild(image);
}

function clearData() {
  document.getElementById("name1").value = null;
  document.getElementById("name2").value = null;
}
