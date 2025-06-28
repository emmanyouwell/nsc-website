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
            product: 0,
            integer: 0,
            answer: ''
        },
        base: '',
        given: '',
        note: ''
    });

    useEffect(() => {

        if (b === 2) {

            setState({ head1: 'What is a Binary Number?', body1: 'Binary numbers are a way of counting using only two digits, 0 and 1. This is much simpler than the decimal system, which uses 10 digits. Binary numbers are important in computers because they can be used to represent data and perform operations very quickly.The binary system uses only two digits making it a base-2 system.', head2: 'How to convert Fraction to Binary?', body2: { target: 'binary numbers', targetBase: '2, because we want to convert it to binary.', product: '.245', integer: '0', answer: '. 0 0 0 1 1 1' }, base: '2', given: '0.1225' })
            $('#steps > #info').remove();
            $('#steps').append('<div id="info"><p>Example: </p><p>0.1225 x 2 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold">.245</span></p><p>0.245 x 2 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold">.490</span></p><p>0.490 x 2 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold">.980</span></p><p>0.980 x 2 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold">.960</span></p><p>0.960 x 2 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold">.920</span></p><p>0.920 x 2 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold">.84</span></p></div>');

        }
        else if (b === 8) {
            setState({ head1: 'What is a Octal Number?', body1: "Octal numbers are a base-8 numeral system, which means they utilize eight digits to represent numbers rather than the ten digits (0-9). The digits used in octal are 0, 1, 2, 3, 4, 5, 6, and 7. Octal was once popular in computers due to its neat grouping of binary bits, but it's largely replaced by the more efficient hexadecimal system in modern computing. However, octal is still used in specific cases like Unix file permissions.", head2: 'How to convert Fraction to Octal?', body2: { target: 'octal numbers', targetBase: '8, because we want to convert it to octal.', product: '.980', integer: '0', answer: '. 0 7 6 5 6 0' }, base: '8', given: '0.1225' })
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>0.1225 x 8 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold">.980</span></p><p>0.980 x 8 = <span class="text-primary fw-bold">7</span><span class="text-danger fw-bold">.84</span></p><p>0.840 x 8 = <span class="text-primary fw-bold">6</span><span class="text-danger fw-bold">.720</span></p><p>0.720 x 8 = <span class="text-primary fw-bold">5</span><span class="text-danger fw-bold">.760</span></p><p>0.760 x 8 = <span class="text-primary fw-bold">6</span><span class="text-danger fw-bold">.08</span></p><p>0.080 x 8 = <span class="text-primary fw-bold">0</span><span class="text-danger fw-bold">.640</span></p></div>');
        }
        else if (b === 16) {
            setState({ head1: 'What is a Hexadecimal Number?', body1: 'Hexadecimal numerals, abbreviated "hex," are a base-16 numeric system. This system uses sixteen distinct symbols to represent integers, giving it a more compact manner of representing binary data than decimal. The following symbols are used in Hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. Overall, hexadecimal is a flexible numbering system that is extensively utilized in different computer-related sectors due to the ease with which binary data may be represented and manipulated.', head2: 'How to convert Fraction to Hexadecimal?', body2: { target: 'hexadecimal numbers', targetBase: '16, because we want to convert it to hexadecimal.', product: '.96', integer: '1', answer: '. 1 F 5 C 2 8' }, base: '16', given: '0.1225', note: 'Note: If the remainder is 10-15, it will be denoted with A-F respectively.' })
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>0.1225 x 16 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold">.960</span></p><p>0.960 x 16 = <span class="text-primary fw-bold">15</span><span class="text-danger fw-bold">.360</span></p><p>0.360 x 16 = <span class="text-primary fw-bold">5</span><span class="text-danger fw-bold">.760</span></p><p>0.760 x 16 = <span class="text-primary fw-bold">12</span><span class="text-danger fw-bold">.160</span></p><p>0.160 x 16 = <span class="text-primary fw-bold">2</span><span class="text-danger fw-bold">.560</span></p><p>0.560 x 16 = <span class="text-primary fw-bold">8</span><span class="text-danger fw-bold">.960</span></p></div>');
        }
        else {
            setState({ head1: 'Did you know we can convert Fraction to any base?', body1: 'Understanding the place value system of both the decimal and target bases is required when converting a decimal number to another base. When dividing the decimal number by the base, the rightmost digit in the target base indicates the residual, and this operation is repeated from right to left. Each digit in the target base is represented by a unique symbol or character, with the maximum digit equal to the base itself. Leading zeros may be used to fill any gaps in the target base.', head2: 'How to convert Fraction to Any Base?', body2: { target: 'any base numbers', targetBase: '18, we can choose any base besides 0, 1, 2, 8, 10, 16.', product: '.205', integer: '2', answer: '. 2 3 C 7 A 1' }, base: '18', given: '0.1225', note: 'Note: If the remainder is greater than 10, it will be denoted with A-Z respectively.' })
            $('#steps > #info').remove()
            $('#steps').append('<div id="info"><p>Example: </p><p>0.1225 x 18 = <span class="text-primary fw-bold">2</span><span class="text-danger fw-bold">.205</span></p><p>0.205 x 18 = <span class="text-primary fw-bold">3</span><span class="text-danger fw-bold">.690</span></p><p>0.690 x 18 = <span class="text-primary fw-bold">12</span><span class="text-danger fw-bold">.420</span></p><p>0.420 x 18 = <span class="text-primary fw-bold">7</span><span class="text-danger fw-bold">.560</span></p><p>0.560 x 18 = <span class="text-primary fw-bold">10</span><span class="text-danger fw-bold">.080</span></p><p>0.080 x 18 = <span class="text-primary fw-bold">1</span><span class="text-danger fw-bold">.440</span></p></div>');
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
                            <li>Multiply the given by the base.
                                <p>Example: {state.given} x {state.base}</p>
                            </li>
                            <li>Separate the <span className="text-primary fw-bold">whole number</span> from the <span className="text-danger fw-bold">decimal numbers</span>.
                                <p>Example: {state.given} x {state.base} = <span className="text-primary fw-bold">{state.body2.integer}</span><span className="text-danger fw-bold">{state.body2.product}</span></p>
                            </li>
                            <li id="steps">The decimal will be the next given. Repeat steps 1 to 5 until <span className="text-primary fw-bold">decimal = 0</span> or if we have gathered <span className="text-primary fw-bold">6 decimal places</span>.

                            </li>
                            <li>When decimal is now 0 or if we reached 6 decimal places. Collect all the integers in the table and write it from top to bottom.
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