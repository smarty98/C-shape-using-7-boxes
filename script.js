const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
let queue =[];

container.addEventListener('click',function(e){
  let index = e.target.dataset.index;
  console.log(index);
 
  if(index!==undefined){
    boxes[index].classList.add('green')
    queue.push(index)
  }
  if(queue.length===7){
    let count = 0;
    while(queue.length>0){
      let ind = queue.shift();
      count++
      setTimeout(()=>{
        boxes[ind].classList.remove('green');
      },count*1000)
    }
  }
})
