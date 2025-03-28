# Description
This framwework is  data driven and built with playwright and Typescript. This Requires Node js version 14 or higher


# Testdata
All the test data is added under tests/testdata which drive the tests

# Run the tests

Clone the repo.

Run npm install 

Command to run the smoke tests in headless mode is 'npm run smoke'.

Command to run the regression tests in headless mode is 'npm run regression'.

To Run in headful mode, add --headed at the end of the command

# Generate Report
To open the test report run npx plawyright show-report



# Explanation

I have choosen to go with the data driven approach considering the calculator needs to be tested with different data input.
I have choosen functional testing approach over POM since this is not UI heavy with multiple pages. Entire test code is driven through functions.
I have automated the scenarios with different inputs for calculator but have validated only contribution rate in  projection. Other details can only be validated once we know the business logic.
I have configured 6 workers while running locally, since we have only 6 tests in total.
