import {Button} from "react-bootstrap"
import React from "react"
export class Welcome extends React.Component {
  render() {
    return (
        <div>
        <h1>Negozio di libri</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    )
  }
}
