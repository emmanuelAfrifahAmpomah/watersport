import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import search from '../ProjectFiles/search.svg';


export default function SearchBar() {
    return (
        <>
          <Form className="d-flex searchBut mx-4">
          <InputGroup className="mb-3 border rounded-4 border-2">
              <InputGroup.Text className="bg-transparent">
              <img src={search} alt='Search icon'></img>
              </InputGroup.Text>
              <FormControl type="search" 
              className="bg-transparent border-0" 
              placeholder="What are you looking for?" />
            </InputGroup>
          </Form>
        </>
    )
}