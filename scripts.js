$(document).ready(function() {
  $("button#button").click(function() {
    event.preventDefault();
    var arr = [];
    for(var i=1; i<4; i++) {
      arr.push($(`#thing${i}`).val())
    }
    console.log(arr)
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
    console.log(friends)
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

    var newArr = $("#sentence").val();
    console.log(newArr);
    var newObj = {};

    for (var i = 0; i < newArr.length; i++) {
      var word = newArr[i];
      console.log(word);

      if (Number.isNaN(newObj[word]) === true) {
          newObj[word] = 1;
      } else {
          newObj[word] += 1;
      }
    }
    console.log(newObj);

  }); 

});