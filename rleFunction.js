const InvalidType = require('./customErrorInvalidType');

const rle = (input, status = true) => {

    if (typeof input !== 'string' || typeof status !== 'boolean')
    { 
        throw InvalidType('Invalid Type');
    }
    
    if (status) {

        let count = 1;
        let compressed = '';

        for (let i = 0; i < input.length; i++) 
        {
            if (input[i] === input[i + 1])
            {
                count++;
            }
            else
            {
                compressed += input[i] + count;
                count = 1;
            }
        }
        return compressed;
    }

    else 
    {
        let decompressed = '';

        for (let i = 1; i < input.length; i += 2) 
        {
            const convertedNumber = parseInt(input[i]);
            
            for (let k = 0; k < convertedNumber; k++) 
            {
                decompressed += input[i - 1];
            }
        }
        return decompressed;
    }
}

module.exports = rle;