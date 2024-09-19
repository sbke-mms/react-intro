//https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

import { useQuery } from "@tanstack/react-query"

function QueryExercise() {
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const {data, isLoading, isError, refetch} = useQuery({
        queryKey:['posts'],
        queryFn: async () => {
            const response = await fetch(URL)
            return await response.json()
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