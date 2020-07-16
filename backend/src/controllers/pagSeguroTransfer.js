const axios = require('axios');
const js2xmlparser = require("js2xmlparser");
//import axios from 'axios';


module.exports = {

    //be0a09ac-3bc0-438c-99e8-5bb1377943ac6a58173145ddb5e0ef80a892d643bee5117d-f3ae-4eaf-a941-23434d0a9dff  <- token
    async balance(request, response){
        try{
                    const get = await axios.get(`https://ws.sandbox.pagseguro.uol.com.br/transfer/balance`, 
                    {
                        params: {
                            email: "cc19377@g.unicamp.br",
                            token: "A23C1C87C36648118B73AC99B90D57CB",
                        },
                        headers: {
                            'Content-Type': 'application/vnd.pagseguro.com.br.v1+json',
                            'Accept':'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
                            
                        },
                    });
                        
                    
                        //console.log({get});

                        const ret = {
                            value:get.value,
                        }
                        
                        
                        return response.json(ret);
        }
        catch(err)
        {
            console.error(err);
            //console.error(JSON.stringify(err.response.data.errors));
            
        }
        
    },

    async solicitationAuthAccount(request, response){
        try{
                    const get = await axios.post(`https://ws.sandbox.pagseguro.uol.com.br/transfer/requests`, request.body,{
                    params: {
                        email: "cc19377@g.unicamp.br",
                        token: "A23C1C87C36648118B73AC99B90D57CB",
                    },
                    headers: {
                        'Content-Type': 'application/vnd.pagseguro.com.br.v1+json',
                        'Accept':'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
                        
                    },
                });
             
                                
                    
                        console.log({get});

                        const ret = {
                            status:get.status,
                            statusText: get.statusText,
                        }
                        
                        
                        return response.json(ret);
        }
        catch(err)
        {
            console.error(err);
            //console.error(JSON.stringify(err.response.data.errors));
            
        }
        
    },

    
    async authorization(request, response){
        try{
                    
                const get = await axios.post(`	https://ws.sandbox.pagseguro.uol.com.br/transfer/authorize`, request.body,{
                    params: {
                        email: "cc19377@g.unicamp.br",
                        token: "A23C1C87C36648118B73AC99B90D57CB",
                    },
                    headers: {
                        'Content-Type': 'application/vnd.pagseguro.com.br.v1+json',
                        'Accept':'application/vnd.pagseguro.com.br.v3+json;charset=ISO-8859-1'
                        
                    },
                });
                
                    
                        console.log({get});

                        const ret = {
                            status:get.status,
                        }
                        
                        
                        return response.json(ret);
        }
        catch(err)
        {
            console.error(err);
            //console.error(JSON.stringify(err.response.data.errors));
            
        }
        
    },
    
}
