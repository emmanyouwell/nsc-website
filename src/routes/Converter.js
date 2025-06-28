import React, { useState, useRef, useEffect } from 'react'

//Custom Components
import Navbar from "../components/Navbar";
import Calculator from "../components/Converter";
import Info from "./WholeNumber/Info";
import Footer from "../components/Footer.js";
import ScrollTop from '../components/ScrollTop';

//React Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

//Image
import arrow1 from '../image/arrow1.svg';

//Custom CSS
import "./style.css";

//React Jquery
import $ from 'jquery';

const Converter = () => {
  const ref = useRef(null)

  const [given, setGiven] = useState(0);
  const [base, setBase] = useState(0);

  const [state, setState] = useState(true);
  useEffect(() => {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 100);
  }, []);
  useEffect(() => {
    const handleClick = event => {

      if (!state) {
        var numBase = document.getElementById("numBase").value;
        var num = document.getElementById("num").value;
        if (isNumeric(num) && isNumeric(numBase)) {
          if (isFloat(numBase)) {
            
            if (isFloat(numBase)) {
              document.getElementById('error2').innerHTML = 'Please enter a whole number.';
              document.getElementById('error').innerHTML = '';

            }
            else {
              document.getElementById('error2').innerHTML = '';
              document.getElementById('error').innerHTML = '';
            }
          }
          else {
            var b = parseInt(document.getElementById("numBase").value);
            var given = parseFloat(document.getElementById("num").value);
            if (b < 0 || given < 0) {
              if (b < 0) {
                document.getElementById('error2').innerHTML = 'Please enter a positive number.';
              }
              else {
                document.getElementById('error2').innerHTML = '';
              }
              if (given < 0) {
                document.getElementById('error').innerHTML = 'Please enter a positive number.';
              }
              else {
                document.getElementById('error').innerHTML = '';
              }
            }
            else {
              if (b === 0 || b === 1 || b === 2 || b === 8 || b === 16 || b === 10) {
                document.getElementById('error2').innerHTML = 'Cannot choose 0, 1, 2, 8, 10, 16.';
                document.getElementById('error').innerHTML = '';

              }
              else {

                setGiven(given);
                setBase(b);
                document.getElementById('error').innerHTML = '';
                document.getElementById('error2').innerHTML = '';
                document.getElementById('error3').innerHTML = '';


              }
            }
          }

        }
        else {
          if (!isNumeric(num)) {
            document.getElementById('error').innerHTML = 'Please enter a number.';
            document.getElementById('error2').innerHTML = '';
            document.getElementById('error3').innerHTML = '';
          }
          else {
            document.getElementById('error').innerHTML = '';
            document.getElementById('error2').innerHTML = '';
            document.getElementById('error3').innerHTML = '';
          }
          if (!isNumeric(numBase)) {
            document.getElementById('error2').innerHTML = 'Please enter a number.';
          }
          else {
            document.getElementById('error2').innerHTML = '';
            document.getElementById('error').innerHTML = '';
            document.getElementById('error3').innerHTML = '';
          }


        }
      }
      else {
        if (base == 0) {
          document.getElementById('error').innerHTML = '';
          document.getElementById('error2').innerHTML = '';

          document.getElementById('error3').innerHTML = 'Please select a base.';

        }
        else {
          num = document.getElementById("num").value;
          if (isNumeric(num)) {



            given = parseFloat(document.getElementById("num").value);
            if (given < 0) {
              document.getElementById('error').innerHTML = 'Please enter a positive number.';
            }
            else {
              setGiven(given);
              document.getElementById('error').innerHTML = '';
              document.getElementById('error3').innerHTML = '';
              document.getElementById('error2').innerHTML = '';


            }



          }
          else {
            document.getElementById('error').innerHTML = 'Error please enter a number.';
            document.getElementById('error3').innerHTML = '';
            document.getElementById('error2').innerHTML = '';

          }
        }

      }


    }

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);

    };
  }, [state, base]);

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  function isFloat(str) {
    let pattern = /^-?\d*(\.\d+)?$/;
    if (!str.match(pattern)) return false;
    let val = parseFloat(str);
    const isInteger = Number.isInteger(val);
    return isInteger ? false : true;
  }
  const check = event => {
    console.log(event.target.value);
    if (event.target.value == -1) {
      console.log(state)
      setState(false);
      setBase(0);
      setGiven(0);
    }
    else if (event.target.value == 0) {
      setGiven(0);
      document.getElementById("numBase").value = "";

      setState(true);
      setBase(event.target.value);
    }
    else {
      console.log(state)
      document.getElementById("numBase").value = "";
      setState(true);
      setBase(event.target.value);
    }

  }
  return (
    <>
      <div className="" id="container">

        <Navbar />
        <Container className="p-3 p-sm-3 px-md-4 py-md-6">
          <div className="d-flex justify-content-center title align-items-center">
            <div className="ins-1">
              <Image src={arrow1}></Image>
              <p className="lead fw-bold text-info">Choose base first!</p>
            </div>
            <h1 className="text-center display-6 me-3">Convert to</h1>
            <Form.Group>
              <Form.Select className="fs-4 border border-dark" id="dropdown" onChange={check}>
                <option value={0}>Select base</option>
                <option value={2}>Binary</option>
                <option value={8}>Octal</option>
                <option value={16}>Hexadecimal</option>
                <option value={-1}>Any Base</option>

              </Form.Select>
              <small className="text-danger" id="error3"></small></Form.Group>
          </div>




          <Card className="my-3 p-4 border border-dark" >

            <Card.Body className="">
              <div id="input" className="p-2">
                <Row>
                  <Col>
                    <div className="mb-3">
                      <label className="form-label text-success"><h2>Enter number</h2></label>
                      <input type="text" id="num" className="form-control border border-dark" placeholder='e.g. 1.25, 100, 0.30'></input>
                      <small className="text-danger" id="error"></small>
                    </div>
                    <div className="my-3" id="baseInput">
                      <label className="form-label text-success"><h2>Enter Base</h2></label>
                      <input type="text" id="numBase" className="form-control border border-dark" disabled={state} placeholder={!state ? 'e.g. 4' : 'Disabled'}></input>
                      <small className="text-danger" id="error2"></small>
                    </div>
                    <Button className="mb-3 w-100 btn-outline-primary" ref={ref}>Convert</Button>
                  </Col>
                  <Col md={9}>
                    <Calculator given={given} base={base} />
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          {/* <Info base={parseInt(base)} /> */}
        </Container>

      </div >
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Converter