let img = document.querySelectorAll('.images-container img')
let aboutMsg = document.querySelectorAll('.about-container')
let isBold = false

for(let i = 0; i < img.length; i++) {

  img[i].addEventListener('mouseenter',function (e) {
    // console.log('mouse entered div, effects will take place')
    img[i].classList.add('hilighted-image')
  })

  img[i].addEventListener('mouseout',function (e) {
    // console.log('mouse exited div, effects will be removed')
    img[i].classList.remove('hilighted-image')
  })

  //click listener to display larger version of thumbnail.
  img[i].addEventListener('click', function(e) {
    displayImage(this.src, this.alt)
  })
}

//Adds effects to About box when clicked
for(let i2 = 0; i2 < aboutMsg.length; i2++) {
  console.log(aboutMsg[i2])
  aboutMsg[i2].addEventListener('click', function (e) {
    if(isBold) {
      //code to remove class and toggle isBold
      this.classList.remove('bold')
      isBold = !isBold
    } else {
      // code to add class and toggle isBold
      this.classList.add('bold')
      isBold = !isBold
    }
  })
}

function displayImage(image, alt) {
  //while loop checks for previous img and deletes it before dislplaying next img clicked.
  var displayImage = document.querySelector(".display-image");
    while (displayImage.hasChildNodes()) {
        displayImage.removeChild(displayImage.firstChild);
    }
  //creates img in div id display of the img clicked
  var newImage = document.createElement("IMG");
  newImage.setAttribute("src", image);
  document.querySelector(".display-image").appendChild(newImage);
}
