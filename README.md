# Mortgage Calculator

## Overview
The Mortgage Calculator is a web-based application that allows users to calculate monthly repayments for a mortgage based on input parameters such as the mortgage amount, term, interest rate, and repayment type.

## Features
- **Input Fields**: 
  - Mortgage Amount (£)
  - Mortgage Term (Years)
  - Interest Rate (%)
- **Mortgage Types**:
  - Repayment
  - Interest Only
- **Clear Functionality**: Users can reset all input fields with a "Clear All" option.
- **Calculation Results**: Displays the monthly repayment results dynamically.

## UI Design
- **Left Panel**: 
  - User input fields and calculation button.
  - Clear and calculate repayment options.
  - Styled with a clean, minimalistic design.
- **Right Panel**:
  - Placeholder for calculation results.
  - Illustration with financial and calculator-themed icons.
  - Attribution: "Developed By: Mollalign Daniel."
- **Color Scheme**:
  - Background: Light blue for clarity.
  - Buttons: Yellow for prominence.
  - Text: Black for legibility.

## Technology Stack
- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (for dynamic calculations)
- **Tools Used**:
  - Design and prototyping tools (if applicable).

## How to Use
1. Enter the mortgage amount in pounds (£).
2. Specify the mortgage term in years.
3. Provide the annual interest rate as a percentage.
4. Choose the mortgage type:
   - **Repayment**: Calculate monthly payments, including principal and interest.
   - **Interest Only**: Calculate only the interest payments.
5. Click the **Calculate Repayments** button.
6. View results displayed on the right panel.
7. Use the "Clear All" option to reset the form.

## Formula Used
- **Repayment Mortgage**:
  - Monthly Repayment = 
    $$\frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}$$
  - Where:
    - *P* = Loan amount
    - *r* = Monthly interest rate (annual rate divided by 12, then by 100)
    - *n* = Total number of monthly payments (years × 12)
- **Interest Only Mortgage**:
  - Monthly Repayment = 
    $$P \times r$$

## File Structure
- **index.html**: Contains the structure of the calculator.
- **styles.css**: Defines the layout and design.
- **script.js**: Includes logic for calculations and UI interactivity.

## Developer Attribution
Project developed by **Mollalign Daniel**, a passionate developer specializing in AI and full-stack development.
