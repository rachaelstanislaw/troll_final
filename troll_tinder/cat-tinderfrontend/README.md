<ListGroup>
    {this.props.trolls.map((troll, index)=>{
        return(
            <ListGroup.Item key={index}>
            <h4>
                <span className="test"> {troll.name} </span>
            </h4>
                <span>Age: {troll.age} </span>
            <br></br>
                <span> <img src={troll.image}/> </span>
            <br></br>
                <span> Enjoys: {troll.enjoys} </span>
            <br></br>
            <button type="button" class="btn btn-outline-success">💋 Match</button>&nbsp
            <button type="button" class="btn btn-outline-primary">🤢 Pass</button>
            </ListGroup.Item>
        )
    })}
</ListGroup>


<Container>
    <Row>
        <Col>
            {this.props.trolls.map((troll, index)=>{
                return(
                    <Card className="Troll-card" bg="primary" style={{ width: '18rem', border: 'solid 1px gray', margin: '15px' }}>
                    <Card.Img variant="top" src={troll.image} />
                    <Card.Body>
                        <Card.Title>{troll.name}</Card.Title>
                        <Card.Text>
                          <p>Age: {troll.age}</p>
                          <p> Enjoys: {troll.enjoys}</p>
                          <button type="button" class="btn btn-success" style={{ border: 'solid 1px white' }}>💋 Match</button>&nbsp;
                          <button type="button" class="btn btn-secondary" style={{ border: 'solid 1px white' }}>🤢 Pass</button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                )
            })}
        </Col>
    </Row>
</Container>
