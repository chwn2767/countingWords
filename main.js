let put = document.querySelector('.put')
let random = document.querySelector('.random')
let push = document.querySelector('.push')


random.addEventListener('click', function() {
   let length =  put.value.length
   push.value = put.value.replace(/(\s*)/g,"").length
})


