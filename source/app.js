console.log('Script Loaded')
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
}

for(let i2 = 0; i2 < aboutMsg.length; i2++) {
  console.log(aboutMsg[i2])
  aboutMsg[i2].addEventListener('click', function (e) {

    if(isBold) {
      //code to remove class
      aboutMsg[i2].classList.remove('bold')
      isBold = !isBold
      // console.log(aboutMsg[i2] + ' should be false here, real value is ' + isBold)
    } else {
      // code to add class
      aboutMsg[i2].classList.add('bold')
      isBold = !isBold
      // console.log(aboutMsg[i2] + ' should be true here, real value is ' + isBold)
    }
  })
}
