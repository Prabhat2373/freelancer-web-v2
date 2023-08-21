import React from "react"

const fetchData = async () => {
  const result = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  )
  console.log("result", result)

  const response = await result
  console.log("response", response)
  return response
}

export default async function Page() {
  const products = await fetchData()

  console.log("products", products)

  return (
    <div>
      {products?.products?.map((product) => {
        return <div>{JSON.stringify(product?.title)}</div>
      })}
    </div>
  )
}
