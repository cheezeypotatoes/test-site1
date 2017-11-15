console.log('Script Loaded');
let nodeList = document.querySelectorAll('.images-container img')

// console.log(nodeList);

for(let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i]);
  console.log(i);


  nodeList[i].addEventListener('mouseenter',function (e) {
    // console.log('mouse entered div, effects will take place');
    nodeList[i].classList.add('hilighted-image')
  })

  nodeList[i].addEventListener('mouseout',function (e) {
    // console.log('mouse exited div, effects will be removed');
    nodeList[i].classList.remove("hilighted-image");
  })


}
