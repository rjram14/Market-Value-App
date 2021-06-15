import { Button } from "bootstrap";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const StackValue = () => {
  const [RealData, setRealData] = useState([
    {
      itot: "$283.3",
      index: "500",
      quality: "150",
      avgCost: "$44.5",
      investedAmount: "$1200.67",
      marketvalue: "$8000.98",
      portfolliovalue: "40%",
      unrealized: "$2900.78",
      return: "10%",
    },
    {
      itot1: "$283.3",
      index: "500",
      quality: "150",
      avgCost: "$44.5",
      investedAmount: "$1200.67",
      marketvalue: "$8000.98",
      portfolliovalue: "40%",
      unrealized: "$2900.78",
      return: "10%",
    },
  ]);
  return (
    <div className="mt-5 ml-mr-2">
      {console.log("ReaclData", RealData)}
      <Row>
        <Col sm>
          <Row>
            <Col>
              <i class="fal fa-bars"></i>
            </Col>
            <Col>
              <Row>ITOT</Row>
              <Row>{RealData[0].itot}</Row>
            </Col>
            <Col>
              <Row>iShares</Row>
              <Row>S&P {RealData[0].index} index</Row>
              <Row>US Equality</Row>
            </Col>
          </Row>
        </Col>
        <Col sm>
          <Row>
            <Col>
              <i class="fas fa-layer-group"></i> Quantity
            </Col>
            <Col>{RealData[0].quality}</Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <i class="fas fa-at"></i> Avg. Cost
            </Col>
            <Col>{RealData[0].avgCost}</Col>
          </Row>
          <Row>
            <Col>
              <i class="fas fa-money-bill-wave"></i> Invested Amount
            </Col>
            <Col>{RealData[0].investedAmount}</Col>
          </Row>
        </Col>
        <Col sm>
          <Row>
            <Col>Market Value</Col>
            <Col>{RealData[0].marketvalue}</Col>
          </Row>
          <Row>
            <Col>% of Portfolio Value</Col>
            <Col>{RealData[0].portfolliovalue}</Col>
          </Row>
          <Row className="progress" style={{ height: 10 }}>
            <Col
              className="progress-bar"
              style={{ width: "10%", height: 10 }}
            ></Col>
          </Row>
        </Col>
        <Col sm>
          {" "}
          <Row>
            <Col>Unrealized P&L</Col>
            <Col>{RealData[0].unrealized}</Col>
          </Row>
          <Row>
            <Col>% Return</Col>
            <Col>
              <i class="fas fa-sort-up"></i> {RealData[0].return}
            </Col>
          </Row>
          <Row className="progress" style={{ height: 10 }}>
            <Col
              className="progress-bar"
              style={{ width: "10%", height: 10 }}
            ></Col>
          </Row>
        </Col>
        <Col sm>
          <Button>BUY</Button>

          <Button>SELL</Button>
        </Col>
        <Col sm>sm=true</Col>
      </Row>
    </div>
  );
};
export default StackValue;
