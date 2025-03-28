# Description
This framework is data driven and built with playwright and Typescript. This Requires Node js version 14 or higher


# Testdata
All the test data is added under tests/testdata which drive the tests

# Run the tests

Clone the repo

npm install 
## Run smoke tests
npm run smoke
## Run regression tests
npm run regression 
## Run headful mode 
ENV=test npx playwright test --grep @smoke --headed

# Generate Report
To open the test report run npx plawyright show-report



# Explanation

I have choosen to go with the data driven approach considering the calculator needs to be tested with different data input.
By default, all the tests run in headles mode unless specified explicitly.
I have choosen functional testing approach over POM since this is not UI heavy with multiple pages. Entire test code is driven through functions.

Since the validation page contain text, graph and some values, I have used visual regression testing to compare the screenshot for validation.
We can add more validations on the exact numbers shown once we know the business logic.
I have tagged tests with smoke and regression tags 
I have configured 6 workers while running locally, since we have only 6 tests in total.
