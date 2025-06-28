import React, { useEffect, useState } from 'react'

//React Jquery
import $ from 'jquery';

//React Bootstrap
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom CSS
import "../style.css"
const FCalculator = (props) => {
    var given = parseFloat(props.given);
    var b = parseInt(props.base);

    const [string, setString] = useState('');
    useEffect(() => {

        $('#myTable > tbody > tr').remove();
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

            $('#myTable > tbody:last-child').append('<tr><td>' + x.toPrecision(6) + '</td><td>' + base + '</td><td>' + pro.toPrecision(6) + '</td><td>' + parseInt(whole) + '</td></tr>');
            x = decimal;
            if (decimal == 0) {
                break;
            }
        }

        $('#given').html("Given: " + initial);

        if (base === 2) {
            setString("Binary: ");
            $('#result').html("<b class='fs-1'>.</b> ");
            for (var i = 0; i < ctr; i++) {
                $('#result').append(arr[i]);
            }
        }
        else if (base === 8) {
            setString("Octal: ");
            $('#result').html("<b class='fs-1'>.</b> ");

            for (var i = 0; i < ctr; i++) {
                $('#result').append(arr[i]);
            }
        }
        else if (base === 16) {
            setString("Hexadecimal: ");
            $('#result').html("<b class='fs-1'>.</b> ");

            for (let i = 0; i <= ctr; i++) {
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
            $('#result').html("<b class='fs-1'>.</b> ");

            for (let i = 0; i <= ctr; i++) {
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
    }, [given, b]);



    return (

        <>
            <Table responsive striped bordered id="myTable" className="content-table">
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

            <h3 className="mt-3" id="given">{""}</h3>
            <h3 className="mt-3 mb-3">{string}<u id="result"></u></h3>

        </>
    )
}

export default FCalculator