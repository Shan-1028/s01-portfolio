import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>About Me!</h1>
            <p>Just call me Shan. I am interested in conspiracy theories. I am always watching world news. I want to be a successful web developer in the nearest future. I like only to work from home because it is very convenient and you have time freedom.</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    )
}