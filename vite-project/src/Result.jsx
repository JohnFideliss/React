import React from 'react'

const Result = ({ term, secretNum }) => {
    let result;
    if (term) {
        if (secretNum > term) {
            result = 'Digite um número maior'
        }

        else if (secretNum < term) {
            result = 'Digite um numero menor'
        }

        else {
            result = 'Exato voce acertou'
        }

    }
    return <h3>{result}</h3>
}

export default Result