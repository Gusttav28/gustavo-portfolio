import React, { useState, useEffect} from "react"

export default function dataApi() {
  const {data, setData} = useState(null)
  async function fetchData(){
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTENTFUL)
      const datta = await res.json()
      const titleAdd = datta.fields.description1
      console.log(titleAdd)
      setData(titleAdd)   
      return datta
    } catch (error) {
      console.log("this is the data err", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}