import './App.css';
import { Table, Container, } from 'reactstrap';
import { useState, useEffect } from 'react';

export default function App() {

  const [brands, setBrands] = useState([]);    

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/brands')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>Welcome to Priya's Marriage</h1>
        <p>Guest list</p>
        <Table bordered={true}> 
            <thead> 
                <tr> 
                    <th>Name</th> 
                    <th>Surname</th>
                    <th>Phone</th>
                </tr> 
            </thead> 
            <tbody> 
              {/* {brands.map((brand) => (
                  <p key={brand.id}></p>
              ))}        */}
            </tbody> 
        </Table>             
      </Container>
    </div>
  );
}