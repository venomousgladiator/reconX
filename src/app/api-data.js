import React, { useState, useEffect } from "react";

const callIPAPI = () => {
const [address , setApiData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        setApiData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    fetchData();
}, []);

return (
    <div>
    <h1>API Results:</h1>
    <ul>
    {apiData.map((item) => (
        <li key={item.id}>{item.title}</li>
        ))}
    </ul>
    </div>
);
};

export default ApiDataPage;
