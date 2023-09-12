import React from "react";
import "./App.css";
import img from "./cat-551554_640.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Sam Minor says Hello World!
                <Container>
                    <Row>
                        <Col>
                            <div className="App">
                                <div className="App-rectangle"></div>
                            </div>
                        </Col>
                    </Row>
                    <p> </p>
                    <Row>
                        <Col>
                            <div className="App">
                                <div className="App-rectangle"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <img src={img} alt="a picture of a kitty cat"></img>
                <p>some attributes of a cat</p>
                <ul>
                    <li> ears </li>
                    <li> whiskers </li>
                    <li> fur </li>
                </ul>
            </p>
        </div>
    );
}

export default App;
