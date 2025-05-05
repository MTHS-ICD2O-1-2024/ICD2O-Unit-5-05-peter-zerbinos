// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function determines the type of triangle.
 */
function determineTypeOfTriangle() {
  const lengthA = parseInt(document.getElementById("length-a").value);
  const lengthB = parseInt(document.getElementById("length-b").value);
  const lengthC = parseInt(document.getElementById("length-c").value);


  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI);
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI);
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI);
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2));

  console.log(angleA);
  console.log(angleB);
  console.log(angleC);
  console.log(sumOfAngles);

  if (sumOfAngles != 180 || (lengthA + lengthB <= lengthC || lengthA + lengthC <= lengthB || lengthB + lengthC <= lengthA)) {
    document.getElementById("result").innerText = "The triangle is not a real triangle.";
  } else if (lengthA == lengthB && lengthB == lengthC && lengthA == lengthC) {
    document.getElementById("result").innerText = "The triangle is equilateral.";
  } else if (lengthA != lengthB && lengthB != lengthC && lengthA != lengthC) {
    document.getElementById("result").innerText = "The triangle is scalene.";
  } else {
    document.getElementById("result").innerText = "The triangle is isosceles.";
  }
}
