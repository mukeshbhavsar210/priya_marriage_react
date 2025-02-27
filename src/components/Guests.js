import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container, Button } from 'reactstrap';

export default function Guests(){
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  },[]);

    return (
      <div>
        <h1>Guests</h1>

        <Table bordered={true}> 
            <thead> 
                <tr> 
                    <th>Name</th> 
                    <th>Surname</th>
                    <th>Phone</th>
                </tr> 
            </thead> 
            <tbody> 
            {loading && <div>Loading</div>}
              {!loading && (
                <tbody>
                  {
                    data.map(item => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.address.street}, {item.address.city}</td>
                          <td>{item.address.geo.lat}, {item.address.geo.lng}</td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              )}
            </tbody> 
        </Table>             
      </div>
    )
  }
