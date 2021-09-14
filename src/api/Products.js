const URL_BASE = "http://192.168.100.86:3000/api/products"

/*

const insertProduct = (product = {product : {type: ""}})=>{

  // let datatest = {product:{name: "Hola", description: "hola", type: "SIMPLE", stock: 200, price: "4000"}}

  axios.post(`${URL_BASE}`, product)
  .then(res => console.log(res.data))
  .catch(err => console.log(err.response.data))
}
*/

const getAllProducts = async()=>{

  const response = await fetch(`${URL_BASE}/`)
  const data = await response.json()
  return data.products
}


module.exports = {
//insertProduct,
  getAllProducts
}