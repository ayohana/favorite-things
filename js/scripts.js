$(document).ready(function() {
  $("button#button").click(function() {
    event.preventDefault();
    var arr = [];
    for(var i=1; i<4; i++) {
      arr.push($(`#thing${i}`).val())
    }
    // console.log(arr)
    arr.forEach(function(thing) {
      $("ul").append(`<li>${thing}</li>`);
    })
  })

  $("button#friendButton").click(function() {
    event.preventDefault();
    var friends = [];
    for(var i=1; i<4; i++) {
      friends.push($(`#friend${i}`).val())
    }
    // console.log(friends)
    //friends.forEach(function(friend) {
      //alert(`Hello, ${friend}.`)
      //$("ul#friendResult").append(`<li>${friend}</li>`);
    //})
  })

  $("button#friendButton").click(function() {
    event.preventDefault();
    var iceCream = ["vanilla", "chocolate", "stawberry"]
    iceCream.forEach(function(flavor){
      $("ul#dessertResult").append(`<li>${flavor}</li>`);
    })
  })

  $("button#filterButton").click(function() {
    event.preventDefault();

    var sentence = $("#sentence").val();
    console.log(sentence);
    var words = sentence.split(" ");
    console.log(words);
    var newObject = {};

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      console.log(word);
      newObject[word] += 1;
      if (Number.isNaN(newObject[word]) === true) {
          newObject[word] = 1;
      }
    }
    console.log(newObject);

  }); 
  

});