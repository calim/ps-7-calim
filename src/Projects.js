import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then((data, i) => {
            console.log(data);
            this.setState({
                data: data
            })
        })
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Projects
                         { /* Render a card for each element in your data */}
            {this.state.data.map((d, i) => {
                return (

                    <Card key={"project" + i}>
                        <CardBody>
                            <CardTitle><a href={d.link}>{d.name}</a></CardTitle>
                            <CardText>{d.description}</CardText>
                        </CardBody>
                    </Card>
                )
            })}

        </div>
    }
}
