// Create function calculating the take home pay. It will receive salary before tax, tax in percentage, NI in percentage.

const salaryCalculator = (salary, tax, NI) => {
    const taxOnSalary = (salary * tax) / 100
    const niOnSalary = (salary * NI) / 100
    const netSalary = salary - (taxOnSalary + niOnSalary)
    console.log(taxOnSalary, niOnSalary, netSalary)
}
salaryCalculator(5000, 20, 30)