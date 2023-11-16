const call_api  = async (endpoint, params = {}) => 
{
    let parameters = new URLSearchParams(params).toString()
    console.log(parameters);
    if(parameters){
        parameters = '?' + parameters
    }
    try {
        const response = await fetch("https://v1.formula-1.api-sports.io/" + endpoint + parameters, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
                "x-rapidapi-key": "ff572422952988d718b7577f2a31d7fa"
            }
        });
        const data = await response.json();
        return data
    } catch (err) {
        console.log(err);
    }
}

export default call_api
