# BMI Calculator

## Project Description
This project is a **BMI Calculator** that allows users to calculate their Body Mass Index (BMI) based on their height (in cm) and weight (in kg). It provides an interactive interface to input the data, calculates the BMI, and categorizes the result into various health ranges (e.g., Underweight, Normal, Overweight, Obese). The project uses HTML, CSS, and JavaScript to deliver functionality and styling.

---

## File Descriptions

### 1. `index.html`
**Description:**  
The `index.html` file defines the structure and content of the BMI Calculator. Key features include:  
- A form to input height (in cm) and weight (in kg).  
- A "Calculate" button that triggers the BMI calculation.  
- A dynamic display of the calculated BMI and its category (e.g., Underweight, Normal).  
- A reference guide that explains BMI categories.  
This file also links the external CSS for styling and JavaScript for functionality.

---

### 2. `style.css`
**Description:**  
The `style.css` file is responsible for styling the BMI Calculator interface. It:  
- Sets a clean and centered layout with a light gray background.  
- Styles the input fields for height and weight, ensuring they are user-friendly.  
- Provides a visually appealing design for the "Calculate" button, including hover and active states.  
- Ensures the page is responsive and visually balanced.

---

### 3. `script.js`
**Description:**  
The `script.js` file manages the interactive functionality of the calculator. It:  
- Listens for the "submit" event on the form and prevents the default page reload behavior.  
- Retrieves user inputs for height and weight, validates them, and calculates BMI using the formula:  
  \[
  \text{BMI} = \frac{\text{weight (kg)}}{\left(\frac{\text{height (cm)}}{100}\right)^2}
  \]  
- Dynamically updates the webpage to display the calculated BMI and the corresponding health category:  
  - **Underweight:** BMI < 18.5  
  - **Normal:** 18.5 ≤ BMI ≤ 24.9  
  - **Overweight:** 25 ≤ BMI ≤ 29.9  
  - **Obese:** BMI ≥ 30  
- Provides error messages if inputs are invalid (e.g., negative numbers or non-numeric values).

---

## How It Works
1. The user enters their height in cm and weight in kg into the input fields.
2. Upon clicking the "Calculate" button:  
   - The BMI is calculated using the provided formula.  
   - The result is displayed dynamically in the "Your BMI is" section.  
   - The health category (e.g., Normal, Overweight) is displayed below the result in color-coded text.
3. A BMI Weight Guide is included on the page for reference.

---

## Example
- **Input:** Height = 170 cm, Weight = 70 kg  
- **Output:** BMI = 24.22 (Normal)

---

Feel free to contribute or suggest improvements to enhance this project!
