import call_api from "../src/services/call_api.js"


const fetchData = async () =>{
   const res = await call_api('rankings/drivers', {season: 2023 })
   const data = res.response
   console.log(data.driver);
   return data
}

fetchData().then(data => {
        const pilots = data.map(element => element.driver.name)
        console.log(pilots);
    });
