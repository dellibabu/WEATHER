import axios from "axios";

const API_key ='55118dc481f743b3028854e6bd0f8b03';
const URL='https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async(query)=>{
    const { data }= await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_key,
        }
    })
    return data;
}
