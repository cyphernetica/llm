'use client';

import { useState } from "react";

export function LLMPrompt() {
    const [response,setResponse] = useState();
    
    const askSomething = async (e) => {
        const input = document.querySelector('#askInput');
        const headers = new Headers( {
            'Content-Type' : 'application/json'
        });
        const response = await fetch('/api/llm' , {
          'method' : 'POST',
          'headers' : headers,
          'body' : JSON.stringify( {
            'prompt' :  input.value
          })
        });
        
        const llm = await response.json();
        setResponse( llm.response  );
      }

    return (
        <div>
            <input type="text" name="ashInput" id="askInput" /><br/>
            <button onClick={(e) => {askSomething(e);}}>Ask</button>
            <div>{response}</div>
        </div>
    
    );
}