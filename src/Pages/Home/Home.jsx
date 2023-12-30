import { useLoaderData } from 'react-router-dom';
import FetchData from './FetchData';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    const fetchData = useLoaderData();
    return (
      <>
        <Row xs={1} md={3} xl={4} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
                       fetchData.map(user=>     <FetchData 
                        user={user}
                        idx={idx}></FetchData>)
                   
            
            ))}
        </Row>
      </> 
      
    );
};

export default Home;