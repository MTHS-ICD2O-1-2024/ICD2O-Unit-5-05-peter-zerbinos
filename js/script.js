// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculatePay() {
  const TAX_RATE = 0.18
  
  // Input
  const hoursWorked = document.getElementById("hours").value
  const hourlyWage = document.getElementById("rate").value

  // Process
  const taxes = hoursWorked * hourlyWage * TAX_RATE
  const takeHomeSalary = hoursWorked * hourlyWage - taxes

  // Output
  document.getElementById("pay").innerHTML =
    "Your pay will be: $" + takeHomeSalary.toFixed(2)
  document.getElementById("tax").innerHTML =
    "The government will take: $" + taxes.toFixed(2)
}
