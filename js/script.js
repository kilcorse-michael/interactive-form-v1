const $name = $("#name");
const $selectJob = $("#title");

//function to display other job text input
function createOther(){
  const $otherInput = $("#other-title");

    $otherInput.css("display", "none");

        $selectJob.change(function (e){
            if($(this).val() === "other"){
              $otherInput.css("display", "block");
            }else{
              $otherInput.css("display", "none");
          }
      });
};

//function to hide and reveal Tshirt colors based upon design selection
function tshirtColor(){
  const $tshirtDesign = $("#design");
  const $tshirtColors = $("#colors-js-puns");
  const $colors = $("#color");

  //color option hidden upon load
  $tshirtColors.css("display", "none");

    //function to reveal and limit the color options
  $tshirtDesign.change(function(e){
    if($(this).val() === "js puns"){
      $tshirtColors.css("display", "block");


    }else if($(this).val() === "heart js"){
      $tshirtColors.css("display", "block");

    }
  });
};

//set focus to first text input when page loads
$name.focus();
//call function that reveals Other Job role text input
createOther();
//call function to hide and reveal Tshirt color options
tshirtColor();
