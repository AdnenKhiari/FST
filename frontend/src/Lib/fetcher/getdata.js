import fetcher from "./fetchers"
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

const getData = (get,link)=>{
    const {data,error} = get(process.env.REACT_APP_MOCK_URL+link,fetcher);
    if(error)
        console.log("ERROR : ",error);
    if(!data) 
        console.log("Loading")
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
export const fetchMutable = (link)=>{
    return getData(useSWR,link);
}
export const fetchImmutable = (link)=>{
    return getData(useSWRImmutable,link);
}