const deleteButton = document.getElementById('deletebtn')
const productID = window.location.pathname.split('/product/')[1]
let warehouse = document.getElementById('warehouse')

let answer = warehouse.innerHTML
console.log(answer)

deleteButton.addEventListener('click', async () => {
  const response = await fetch(`/product/${productID}`, { method: 'delete' })
  window.location.assign(`/warehouse/${answer}`)
})
