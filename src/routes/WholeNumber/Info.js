import React, { useEffect, useState } from 'react'


//React Bootstrap
import Accordion from "react-bootstrap/Accordion"
import "bootstrap/dist/css/bootstrap.min.css"

//React Jquery
import $ from "jquery"



const Info = ({ base }) => {
    const b = base;

    const [state, setState] = useState({
        head1: '',
        body1: '',
        head2: '',
        body2: {
            target: '',
            targetBase: '',
            quotient: 0,
            remainder: 0,
            answer: ''
        },
        base: '',
        given: '',
        note: ''
    });
   
    useEffect(() => {

        if (b === 2) {
           
            setState({ head1: 'What is a Binary Number?', body1: 'Binary numbers are a way of counting using only two digits, 0 and 1. This is much simpler than the decimal system, which uses 10 digits. Binary numbers are important in computers because they can be used to represent data and perform operations very quickly.The binary system uses only two digits making it a base-2 system.', head2: 'How to convert Decimal to Binary?', body2: {target: 'binary numbers', targetBase: '2, because we want to convert it to binary.', quotient: '12', remainder: '1', answer:'1 1 0 0 1' }, base: '2', given: '25' })
            $('#steps > #info').remove();
            $('#steps').append('<div id="info"><p>Example: </p><p>12 ÷ 2 = <span class="text-primary fw-bold">6</span><span class="text-danger fw-bold"> R 0</span></p><p>6 ÷ 2 = <span class="text-primary fw-bold">3</span><span class="text-danger fw-bold"> R 0</span></p><p>3 ÷ 2 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold"> R 1</span></p><p>1 ÷ 2 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold"> R 1</span></p></div>');

        }
        else if (b === 8) {
            setState({ head1: 'What is a Octal Number?', body1: "Octal numbers are a base-8 numeral system, which means they utilize eight digits to represent numbers rather than the ten digits (0-9). The digits used in octal are 0, 1, 2, 3, 4, 5, 6, and 7. Octal was once popular in computers due to its neat grouping of binary bits, but it's largely replaced by the more efficient hexadecimal system in modern computing. However, octal is still used in specific cases like Unix file permissions.", head2: 'How to convert Decimal to Octal?', body2: {target: 'octal numbers', targetBase: '8, because we want to convert it to octal.', quotient: '3', remainder: '1', answer:'3 1' }, base: '8', given: '25' })
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>25 ÷ 8 = <span class="text-primary fw-bold">3</span><span class="text-danger fw-bold"> R 1</span></p><p>3 ÷ 8 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold"> R 3</span></p></div>');
        }
        else if (b===16){
            setState({ head1: 'What is a Hexadecimal Number?', body1: 'Hexadecimal numerals, abbreviated "hex," are a base-16 numeric system. This system uses sixteen distinct symbols to represent integers, giving it a more compact manner of representing binary data than decimal. The following symbols are used in Hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. Overall, hexadecimal is a flexible numbering system that is extensively utilized in different computer-related sectors due to the ease with which binary data may be represented and manipulated.', head2: 'How to convert Decimal to Hexadecimal?', body2: {target: 'hexadecimal numbers', targetBase: '16, because we want to convert it to hexadecimal.', quotient: '156', remainder: '4', answer:'9 C 4' }, base: '16', given: '2500', note: 'Note: If the remainder is 10-15, it will be denoted with A-F respectively.'})
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>2500 ÷ 16 = <span class="text-primary fw-bold">156</span><span class="text-danger fw-bold"> R 4</span></p><p>156 ÷ 16 = <span class="text-primary fw-bold">9</span><span class="text-danger fw-bold"> R 12</span></p><p>9 ÷ 16 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold"> R 9</span></p></div>');
        }
        else{
            setState({ head1: 'Did you know we can convert decimal to any base?', body1: 'Understanding the place value system of both the decimal and target bases is required when converting a decimal number to another base. When dividing the decimal number by the base, the rightmost digit in the target base indicates the residual, and this operation is repeated from right to left. Each digit in the target base is represented by a unique symbol or character, with the maximum digit equal to the base itself. Leading zeros may be used to fill any gaps in the target base.', head2: 'How to convert Decimal to Any Base?', body2: {target: 'any base numbers', targetBase: '18, we can choose any base besides 0, 1, 2, 8, 10, 16.', quotient: '138', remainder: '16', answer:'7 C G' }, base: '18', given: '2500', note: 'Note: If the remainder is greater than 10, it will be denoted with A-Z respectively.'})
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>2500 ÷ 18 = <span class="text-primary fw-bold">138</span><span class="text-danger fw-bold"> R 16</span></p><p>138 ÷ 18 = <span class="text-primary fw-bold">7</span><span class="text-danger fw-bold"> R 12</span></p><p>7 ÷ 18 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold"> R 7</span></p></div>');
        }
    }, [b]);
  
    return (
        <>
            <Accordion className="border border-dark">
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="head">{state.head1}</Accordion.Header>
                    <Accordion.Body>
                        {state.body1}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{state.head2}</Accordion.Header>
                    <Accordion.Body>
                        <p>We can convert decimal numbers to {state.body2.target} using this simple method. Writing it in a table will help us visualize the outcome.</p>
                        <p className="fw-bold">Steps:</p>
                        <ol>
                            <li>Define the given.
                                <p>Example: {state.given}</p>
                            </li>
                            <li>Define the target base.
                                <p>Base: {state.body2.targetBase}</p>
                            </li>
                            <li>Divide the given by the base.
                                <p>Example: {state.given} ÷ {state.base}</p>
                            </li>
                            <li>Separate the <span className="text-primary fw-bold">quotient</span> from the <span className="text-danger fw-bold">remainder</span>.
                                <p>Example: {state.given} ÷ {state.base} = <span className="text-primary fw-bold">{state.body2.quotient}</span><span className="text-danger fw-bold"> R {state.body2.remainder}</span></p>
                            </li>
                            <li id="steps">The quotient will be the next given. Repeat steps 1 to 5 until <span className="text-primary fw-bold">quotient = 0</span>.
                                
                            </li>
                            <li>When quotient is now 0. Collect all the remainders in the table and write it from the bottom to the top.
                                <p>Example: <span className="text-success fw-bold"> {state.body2.answer}</span></p>
                                <p className="text-muted">{state.note}</p>

                            </li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}

export default Info