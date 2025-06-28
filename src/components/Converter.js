import React, { useEffect, useState } from 'react'

//React Jquery
import $ from 'jquery';

//React Bootstrap
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom CSS
import "../style.css"

const Converter = (props) => {
    var given = parseFloat(props.given);
    var b = parseInt(props.base);

    const [string, setString] = useState('');


    const computeWholeNumber = given => {


        $('#whole > tbody > tr').remove();
        var x = given;
        var quo = 0;

        var base = b;

        var rem = 0;
        var initial = x;
        const arr = [];
        var ctr = 0;

        while (x !== 0) {
            quo = x / base;
            rem = x % base;

            arr[ctr] = rem;
            ctr += 1;

            $('#whole > tbody:last-child').append('<tr><td>' + x + '</td><td>' + base + '</td><td>' + parseInt(quo) + '</td><td>' + parseInt(rem) + '</td></tr>');
            x = parseInt(quo);
        }

        $('#given').html("Integer: " + initial);
        var y = ctr - 1;
        if (base === 2) {
            setString("Binary: ");
            $('#result').html(" ");
            for (let i = y; i >= 0; i--) {
                $('#result').append(arr[i] + " ");
            }
        }
        else if (base === 8) {
            setString("Octal: ");
            $('#result').html(" ");
            for (let i = y; i >= 0; i--) {
                $('#result').append(arr[i] + " ");
            }
        }
        else if (base === 16) {
            setString("Hexadecimal: ");
            $('#result').html(" ");
            for (let i = y; i >= 0; i--) {
                if (arr[i] >= 10) {
                    switch (arr[i]) {
                        case 10:
                            $('#result').append("A");
                            break;
                        case 11:
                            $('#result').append("B");
                            break;
                        case 12:
                            $('#result').append("C");
                            break;
                        case 13:
                            $('#result').append("D");
                            break;
                        case 14:
                            $('#result').append("E");
                            break;
                        case 15:
                            $('#result').append("F");
                            break;
                        default:
                            break;
                    }
                }
                else {
                    $('#result').append(arr[i]);
                }
            }
        }
        else {
            var letter = 65;
            setString('Conversion: ');
            $('#result').html(' ');
            for (let i = y; i >= 0; i--) {
                if (arr[i] >= 10) {
                    for (var j = 10; j < arr[i]; j++) {
                        letter += 1;
                    }
                    $('#result').append(String.fromCharCode(letter));
                    letter = 65;
                }
                else {
                    $('#result').append(arr[i]);
                }
            }
        }
    }

    const computeFraction = given => {
        $('#fraction > tbody > tr').remove();
        var x = given;
        var pro = 0;
        var base = b;
        var whole = 0;
        var decimal = 0;
        var initial = x;
        const arr = [];
        var ctr = 0;
        while (ctr < 6) {
            pro = x * base;
            whole = parseInt(pro);
            decimal = pro - whole;

            arr[ctr] = whole;
            ctr += 1;

            $('#fraction > tbody:last-child').append('<tr><td>' + x.toPrecision(6) + '</td><td>' + base + '</td><td>' + pro.toPrecision(6) + '</td><td>' + parseInt(whole) + '</td></tr>');
            x = decimal;
            if (decimal == 0) {
                break;
            }
        }

        $('#given2').html("Decimal: " + initial.toPrecision(3));

        if (base === 2) {
            setString("Binary: ");
            $('#result2').html("<b class='fs-1'>.</b> ");
            for (var i = 0; i < ctr; i++) {
                $('#result2').append(arr[i]);
            }
        }
        else if (base === 8) {
            setString("Octal: ");
            $('#result2').html("<b class='fs-1'>.</b> ");

            for (var i = 0; i < ctr; i++) {
                $('#result2').append(arr[i]);
            }
        }
        else if (base === 16) {
            setString("Hexadecimal: ");
            $('#result2').html("<b class='fs-1'>.</b> ");

            for (let i = 0; i <= ctr; i++) {
                if (arr[i] >= 10) {
                    switch (arr[i]) {
                        case 10:
                            $('#result2').append("A");
                            break;
                        case 11:
                            $('#result2').append("B");
                            break;
                        case 12:
                            $('#result2').append("C");
                            break;
                        case 13:
                            $('#result2').append("D");
                            break;
                        case 14:
                            $('#result2').append("E");
                            break;
                        case 15:
                            $('#result2').append("F");
                            break;
                        default:
                            break;
                    }
                }
                else {
                    $('#result2').append(arr[i]);
                }
            }
        }
        else {
            var letter = 65;
            setString('Conversion: ');
            $('#result2').html("<b class='fs-1'>.</b> ");

            for (let i = 0; i <= ctr; i++) {
                if (arr[i] >= 10) {
                    for (var j = 10; j < arr[i]; j++) {
                        letter += 1;
                    }
                    $('#result2').append(String.fromCharCode(letter));
                    letter = 65;
                }
                else {
                    $('#result2').append(arr[i]);
                }
            }
        }
    }





    useEffect(() => {
        var whole = parseInt(given);
        var decimal = given - whole;
        if (whole > 0 && decimal > 0.000) {
            computeWholeNumber(whole);
            computeFraction(decimal);
        }
        else if (whole > 0) {
            computeWholeNumber(whole);
            computeFraction(0);
        }
        else {
            computeFraction(decimal);
            computeWholeNumber(0);
        }
    }, [given, b]);



    return (

        <>
            <Row>
                <Col>
                    <Table responsive striped bordered id="whole" className="content-table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Base</th>
                                <th>Quotient</th>
                                <th>Remainder</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>

                    <h3 className="mt-3" id="given">{""}</h3>
                    <h3 className="mt-3 mb-3">{string}<u id="result"></u></h3>
                </Col>
                <Col>
                    <Table responsive striped bordered id="fraction" className="content-table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Base</th>
                                <th>Product</th>
                                <th>Integer</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </Table>

                    <h3 className="mt-3" id="given2">{""}</h3>
                    <h3 className="mt-3 mb-3">{string}<u id="result2"></u></h3>
                </Col>
            </Row>


        </>
    )
}

export default Converter