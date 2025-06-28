import React, { useEffect, useState} from 'react'

//React Jquery
import $ from 'jquery';

//React Bootstrap
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

//Custom CSS
import "../style.css"
const Calculator = (props) => {
    var given = parseInt(props.given);
    var b = parseInt(props.base);
    
    const [string, setString] = useState('');
    useEffect(() => {
        $('#myTable > tbody > tr').remove();
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

            $('#myTable > tbody:last-child').append('<tr><td>' + x + '</td><td>' + base + '</td><td>' + parseInt(quo) + '</td><td>' + parseInt(rem) + '</td></tr>');
            x = parseInt(quo);
        }

        $('#given').html("Given: " + initial);
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
    }, [given, b]);



    return (

        <>
            <Table responsive id="myTable" className="content-table border border-dark">
                <thead className="bg-primary">
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

        </>
    )
}

export default Calculator