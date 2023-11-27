import React from 'react';
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container, Card, Button } from 'react-bootstrap';
import jobListings from './jobListings';

const JobPage = () => {
  const cardStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#333',
    backgroundColor: 'lavender',
    height:'320px'
  };

  return (
    <div>
      <Container>
        <h1 className='text-center py-3'>Available jobs with us!</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {
            jobListings.map((item, idx) => <div className="col" key={idx}>
              <Card style={cardStyle}>
                <Card.Header>
                  <strong>
                    {item.title}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{item.body}</Card.Text>
                  <Button>Apply</Button>
                </Card.Body>
              </Card>
            </div>)
          }
        </div>
      </Container>
    </div>
  );
}

export default JobPage;
