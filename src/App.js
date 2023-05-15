import { MyFooter } from "./components/MyFooter"
import { MyNav } from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import { Welcome } from "./components/Welcome"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./components/Homepage"
import { NotFound } from "./components/NotFound"
import { BookDetails } from "./components/BookDetails"
class App extends React.Component {
  state = {
    query: "",
  }
  setQuery = (data) => {
    this.setState({ query: data })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <MyNav query={this.state.query} getQuery={this.setQuery} />
          <Welcome />
          <Routes>
          <Route element={<Homepage query={this.state.query} />} path="/" />
            <Route element={<BookDetails  />} path="/details/:id" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </>
    )
  }
}

export default App
