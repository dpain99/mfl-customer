import {Col, Row} from "antd";
import './style.scss';

export default function Cart() {
    return (
        <div className="layout-cart pt-52 ">
            <div className="wrapper-mainCart">
                <div className="content-bodyCart">
                    <div className="container mx-auto px-4">
                        <Row>
                            <Col span={14}>14</Col>
                            <Col span={6}>6</Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
