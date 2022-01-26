import { useState, useEffect } from "react";

function FetchApi () {
    const [data, setData] = useState([]);

    const apiGet = () => {

        fetch("https://api.github.com/users/Jura40/repos")
        .then ((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };
    useEffect(() => {
        apiGet();
        
    }, [] );

    return (
        <div>
            Nån namn<br/>
            <button onClick={apiGet}> Hämta Fetch</button> 
            <br/>
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <a href = {item.html_url}></a>

                                <a></a>{item.name}<a/></li>

                    

                    ))}
                </ul>
                item.id= 
            </div>
        </div>
     );
}
 
export default FetchApi;