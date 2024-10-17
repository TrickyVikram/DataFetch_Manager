import React, { useState, useEffect } from 'react';
import DataList from './componenets/DataList';

function App() {
    const [data, setData] = useState([]);
     

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/api/users');  // Fetch from backend
                if (!response.ok) throw new Error('Network response was not ok');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // if (loading) return <p>Loading data...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User List</h1>
            <DataList data={data} />
            
        </div>
    );
}

export default App;
