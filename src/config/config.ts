import { config as conf } from "dotenv";
conf();
const _config = {
  
    apiUrl: process.env.ApiUrl,
    
}


export const config = Object.freeze(_config);