"use client"
import React, { useState, useEffect} from "react"

export default function dataApi() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_CONTENTFUL)
        if (!response.ok) {
          throw new Error("this the error ", response.status)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.log("this is the error ", error)
      }
    };
    fetchData()
  }, [])
}