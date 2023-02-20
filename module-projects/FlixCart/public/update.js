let updateProduct = async (id) => {
  const productName = document.getElementById('name')
  const productPrice = document.getElementById('price')
  const productDescription = document.getElementById('description')
  const productCategory = document.getElementById('category')
  const productImage = document.getElementById('image')

  const newName = productName.value
  const newPrice = productPrice.value
  const newDescription = productDescription.value
  const newCategory = productCategory.value
  const newImage = productImage.value

  let response = await fetch(`/product/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newName,
      price: newPrice,
      description: newDescription,
      category: newCategory,
      image: newImage
    })
  })
  window.location.assign(`/product/${id}`)
}
