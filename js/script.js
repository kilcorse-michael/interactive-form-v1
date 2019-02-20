const $name = $("#name");
const $selectJob = $("#title");
const $activities = $(".activities");
const $checkbox = $('[type="checkbox"]');
const $costSpan = $("<span class ='span-activities'></span>");
$activities.append($costSpan);
let cost = 0.00

//function to display other job text input
function createOther(){
  const $otherInput = $("#other-title");

    $otherInput.hide();

    $selectJob.change(function (e){
        if($(this).val() === "other"){
          $otherInput.slideDown();
        }else{
          $otherInput.slideUp();
      }
  });
};

//function to hide and reveal Tshirt colors based upon design selection
function tshirtColor(){
  const $tshirtDesign = $("#design");
  const $tshirtColors = $("#colors-js-puns");
  const $colors = $("#color");
  //color option hidden upon load
  $tshirtColors.hide();
//Event listener for tshirt color options
  $tshirtDesign.on('change', function(e){
    if($(this).val() === "js puns"){
      $tshirtColors.show();
          $colors.find("option:eq(0)").show().attr("selected", "selected");
          $colors.find("option:eq(1)").show();
          $colors.find("option:eq(2)").show();
          $colors.find("option:eq(3)").hide().removeAttr("selected");
          $colors.find("option:eq(4)").hide();
          $colors.find("option:eq(5)").hide();
    }else if($(this).val() === "heart js"){
      $tshirtColors.show();
          $colors.find("option:eq(3)").show().attr("selected", "selected");
          $colors.find("option:eq(4)").show();
          $colors.find("option:eq(5)").show();
          $colors.find("option:eq(0)").hide().removeAttr("selected");
          $colors.find("option:eq(1)").hide();
          $colors.find("option:eq(2)").hide();
        }
    });
};

//function to calculate total costs of choosen workshops
$checkbox.on('change', (e) => {
  const $eTarget = $(e.target);
  const $workshop = $eTarget.attr('name');
  if ($eTarget.is(':checked')) {
    if ($workshop == 'all') {
      cost = cost + 200;
    } else {
      cost = cost + 100;
    }
  } else {
    if ($workshop == 'all') {
      cost = cost - 200;
    } else {
      cost = cost - 100;
    }
  }
  $costSpan.text("Total Cost: $" + cost);
});

//function to disable conflicting activities
const schedule = () =>{

  const $all = $('[type="checkbox"] [name="all"]');
  const $frameworks = $('[type="checkbox"][name="js-frameworks"]');
  const $libs = $('[type="checkbox"][name="js-libs"]');
  const $express = $('[type="checkbox"][name="express"]');
  const $node = $('[type="checkbox"][name="node"]');
  const $buildTools = $('[type="checkbox"][name="build-tools"]');
  const $npm = $('[type="checkbox"][name="npm"]');




    $checkbox.on("change", (e) =>{

        if($frameworks.is(":checked")){
          $express.prop("disabled", "true");
          $express.parent().css("color", "grey");
        }else{
          $express.removeAttr("disabled");
          $express.parent().css("color", "black");

        }
        if($express.is(":checked")){
          $frameworks.prop("disabled", "true");
          $frameworks.parent().css("color", "grey");
        }else{
          $frameworks.removeAttr("disabled");
          $frameworks.parent().css("color", "black");
        }

        if($libs.is(":checked")){
          $node.prop("disabled", "true");
          $node.parent().css("color", "grey");
        }else{
          $node.removeAttr("disabled");
          $node.parent().css("color", "black");
        }

        if($node.is(":checked")){
          $libs.prop("disabled", "true");
          $libs.parent().css("color", "grey");
        }else{
          $libs.removeAttr("disabled");
          $libs.parent().css("color", "black");
        }
    });

};

//function to hide and reveal payment options
function payment(){
    const $creditInfo = $("#credit-card");
    const $paymentOptions = $("#payment");
    const $creditOption = $("[value='credit card']");
    const $select = $("[value='select_method']");
    const $paypalOption = $("[value='paypal']");
    const $bitCoin = $("[value='bitcoin']");
    const $paypalInfo = $creditInfo.next();
    const $bitCoinInfo = $paypalInfo.next();

    $select.prop("disabled", "true");
    $creditOption.attr("selected", "selected");
    $paypalInfo.hide();
    $bitCoinInfo.hide();

    $paymentOptions.on("change", (e) =>{
        if($paypalOption.is(":selected")){
            $creditOption.removeAttr("selected");
            $creditInfo.hide();
            $paypalInfo.show();
            $bitCoinInfo.hide();
        }else if($bitCoin.is(":selected")){
          $creditOption.removeAttr("selected");
          $creditInfo.hide();
          $paypalInfo.hide();
          $bitCoinInfo.show();

        }else{
          $creditOption.attr("selected", "selected");
          $creditInfo.show();
          $paypalInfo.hide();
          $bitCoinInfo.hide();

        }
    });
};
//function to validate credit info
function formValidation(){
  const $form = $("form");
  const $nameInput = $("input #name");
//validate all fields on form except credit info [will be seperate function]


};
//set focus to first text input when page loads
$name.focus();
//call function that reveals Other Job role text input
createOther();
//call function to hide and reveal Tshirt color options
tshirtColor();
//call function to avoid schedue conflicts
schedule();
//call to payment function
payment();
]
