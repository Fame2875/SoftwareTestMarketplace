import React from 'react'
import { Button, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function Itemcard() {
return (
  <>
    <Card className="h-100" style={{border: "5px solid black"}}>
      <Card.Img
        variant="top"
        height="200px"
        src= "mockimgs/PTO.png"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <div class="row">
          <div>
          <span className="fs-2">test</span>
          </div>
          <div>
          <span className="ms-2 text-muted">หลายบาท</span>
          </div>
        </div>
        </Card.Title>
        <div className="mt-auto">
          
            <Button className=" w-100" style={{ background : "LimeGreen"}}>
              + ใส่ตะกร้า
            </Button> 
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                
              </div>
            </div>
        </div>
      </Card.Body>
    </Card>
  </>
  )
}
  export default Itemcard;