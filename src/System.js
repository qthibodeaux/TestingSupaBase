import { useState } from "react"
import supabase from "./supa-client"

const [data, setData] = useState(null)

const getAll = async () => {
  const {data, error} = await supabase
      .from('employees')
      .select()

      if (error) {
        console.error("error retrieving session", error)
      } else {
        setData(data.session)
        console.log("Session: ", data.session)
      }
}

function System() {
  return (
    <div>
        data
        <button onClick={getAll}>Get Data</button>
        {data 
        ? "true"
        : "false"
        }
    </div>
  )
}

export default System