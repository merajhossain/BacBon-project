import React from 'react'
import Container from 'react-bootstrap/Container';
import TopBar from '../components/TopBar';

const Layouts = (props) => {
  return (
    <>
        <TopBar />
        <Container>
            <div className='w-100 mt-3'>
                {props.children}
            </div>
        </Container>
    </>
  )
}

export default Layouts
