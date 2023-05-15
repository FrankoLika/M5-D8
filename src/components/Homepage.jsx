import { Col, Row } from "react-bootstrap"
import { LatestRelease } from "./LatestRelease"
import { CommentArea } from "./CommentArea"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Homepage = (props) => {
  const [selected, setSelected] = useState("0316389706")

  return (
    <>
      {" "}
      <Row className="home-row justify-content-around">
        <Col xl={7}>
          <LatestRelease
            setSelected={(id) => setSelected(id)}
            selected={selected}
            query={props.query}
          />
        </Col>
        <Col xl={3}>
        <h2><Link to={`/details/${selected}`}>Vedi dettagli</Link></h2>
          <CommentArea id={selected} />
        </Col>
      </Row>
    </>
  )
}
