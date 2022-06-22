import axios from 'axios';

const getResult = username => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}`)
            console.log(data)
            return data
        } catch (err) {
            throw new Error(err.message)
        }
}



export default getResult







// useEffect(() => {
//     async function getRepos() {
//       let apiCall = await axios.get(`https://api.github.com/${username}`)
//       console.log(apiCall)
//       setRepos(apicall)
//     }
//   },[])
