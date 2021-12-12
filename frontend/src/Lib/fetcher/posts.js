import {fetchImmutable} from "./getdata"
import * as ROUTES from "./../../Constants/api"
export const getPosts = ()=>{
    return fetchImmutable(ROUTES.POSTS);
}