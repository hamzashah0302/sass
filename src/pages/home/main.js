
import React from 'react'
import { Card , Button } from 'react-bootstrap'
import Intro from './intro'
const Main = () => {
    
    let cards =[]
    let card =( <div className="card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
    
    for (let i = 0; i < 10; i++) {
        cards.push(card)
        }
        console.log(cards)
        return (<>
            <Intro/>
            <div className ="home-main">
            {cards}
            </div>
        </>
        
    )
}

export default Main 