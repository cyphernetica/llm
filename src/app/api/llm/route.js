import { NextResponse } from "next/server";
export async function POST(request) {
   
    let bodyReponse = {}
    try{
        
        const requestBody = await request.json();
        const headers =  new Headers({
            'Authorization': 'Bearer pizza',
            'Content-type' : 'application/json'
        });
        const response = await fetch('https://llm.tintamarre.be/api/generate' , {
            'method' : 'POST' ,
            'headers': headers,
            'body' : JSON.stringify( {
                "model" : "mistral",
                "prompt" : requestBody.prompt,
                "stream" : false
            })
        });
        // console.log( 'Response status' , response.status + ' :' + response.statusText );
        if( response.status === 200){
            bodyReponse = await response.json();
            // console.log( 'repsonse from LLM' , bodyReponse);
        }
        
    }
    catch(e){
        console.log(e);
    }
    
    return NextResponse.json(bodyReponse, { status: 200 })
}