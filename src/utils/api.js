import axios from "axios";

const api=axios.create({
    baseURL:"https://flight-radar1.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'c7e841179dmsh60ecd1c6b81154cp1aa3e5jsn11c26c90c500',
        'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
      }
})
export default api