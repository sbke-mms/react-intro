//https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

function QueryExercise() {
    const URL = 'https://jsonplaceholder.typicode.com/posts'

const postData = {
    title: "hasdkajsd",
    body:"dfksjdflk"
}

    const {data, isLoading, isError, refetch} = useQuery({
        queryKey:['posts'],
        queryFn: async () => {
            try {
                return await axios.post(URL, postData)
            } catch (err) {
                console.log("error", err)
            }
        }
    })

  return (
    <div>QueryExercise <br/>
    <button onClick={() => refetch}>refetch</button>
        {JSON.stringify(data)}
    </div>
  )
}

export default QueryExercise