import { Col, Row } from "react-bootstrap"
import Itemcard from "../components/Itemcard"
export function Category() {
    return (
    <>
    <div className="justify-content-center align-items-center d-flex mt-2">
    <img style={{ height: '400px', width: 'auto' }} srcSet="/mockimgs/PTO.png" alt="Store Banner" />
    </div>
      <h1>Category</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        <Itemcard/>
      </Row>
    </>

    )


}
export default Category;