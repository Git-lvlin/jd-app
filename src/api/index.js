import goodApi from './good'
import userApi from './user'
export default{
    ...goodApi,
    ...userApi
}