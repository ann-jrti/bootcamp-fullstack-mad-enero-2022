import React, { useState } from 'react'

function Api() {
    const api = 'https://bootcamp.free.beeceptor.com/hello-ok';
    let [response, updateResponse] = useState('');
    let [statusCode, updateStatusCode] = useState('');

    function makeRequest(e) {
        async function postData() {
            const response = await fetch(api, {
                method: e.target.name,
            });
            const data = await response.json();
            if (response === undefined || response === '') updateResponse('Empty response');
            else updateResponse(response);
            updateStatusCode(response.status);
            return data;
        }
        postData().then(data => {
            console.log(data);
        });
    }

    return (
        <React.Fragment>

            <button name='POST' onClick={makeRequest} className="post-ok">POST ok</button>
            <button name='PUT' onClick={makeRequest} className="put-ok">PUT ok</button>
            <button name='DELETE' onClick={makeRequest} className="delete-ok">DELETE ok</button>
            <button name='POST-KO' className="post-ko">POST ko</button>

            <section>
                <h2>Response</h2>
                <p>{response}</p>
            </section>

            <section>
                <h2>Status code</h2>
                <p>{statusCode}</p>
            </section>

        </React.Fragment>
    )
}

export default Api;