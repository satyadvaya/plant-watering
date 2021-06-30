// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPlantHealth } from '../utils.js';

const test = QUnit.test;

test('waterLevel less than 3 should return thirsty', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'thirsty';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPlantHealth(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('waterLevel between 3 and 10 should return healthy', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'healthy';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPlantHealth(6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('waterLevel between greater than 10 should return overwatered', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'overwatered';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPlantHealth(12);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});