Functions Overview

1. calculateCanvasDiagonal
   Calculates the diagonal length of a rectangular canvas using the Pythagorean theorem.

2. calculateCanvasSize
   Computes the total size of a rectangular canvas by summing its length and width, then multiplying by 2.

3. calculatePaintCost
   Calculates the total cost of paint required based on the quantity and cost per liter.

4. calculateTotalCost
   Calculates the total cost of painting by adding the paint cost and labor cost.

5. convertAreaToSquareFeet
   Converts an area from square meters to square feet using a conversion factor of 10.7639.

6. estimatePaintingTime
   Estimates the time required for painting based on the area to be painted and the painting speed.

7. paintRequiredCalculator
   Calculates the amount of paint required for a surface area given the coverage per liter.

8. paintRequiredForMultipleCoats
   Calculates the total amount of paint needed when multiple coats of paint are applied.

Test Coverage
calculateCanvasDiagonal
Tests cover the following cases:

Correctly calculates the diagonal for positive values.

Returns 0 for 0 dimensions.

Handles negative inputs correctly.

Returns NaN for non-numeric inputs.

calculateCanvasSize
Tests cover the following cases:

Correctly calculates the canvas size for positive values.

Returns NaN for non-numeric inputs.

Handles negative values correctly.

calculatePaintCost
Tests cover:

Correctly calculates the paint cost for positive values.

Handles cases where paint required or cost per liter is 0.

Handles negative values correctly.

calculateTotalCost
Tests cover:

Correctly calculates total cost for positive values.

Handles cases where paint cost or labor cost is 0.

Handles negative values correctly.

convertAreaToSquareFeet
Tests cover:

Correctly converts positive area values.

Returns 0 for an area of 0.

Handles negative area values correctly.

estimatePaintingTime
Tests cover:

Correctly calculates painting time for positive area and speed values.

Returns Infinity for a speed of 0.

Handles area of 0 correctly.

Handles negative area and speed values.

paintRequiredCalculator
Tests cover:

Correctly calculates the paint required for a given area and coverage per liter.

paintRequiredForMultipleCoats
Tests cover:

Correctly calculates paint required for multiple coats.

Handles cases where the area, coverage per liter, or number of coats is 0.

Handles negative values for area, coverage, and coats.

Conclusion
This repository provides the essential calculations for estimating the total cost and time required for painting. All functions are thoroughly tested to ensure they handle various edge cases such as negative values, 0 values, and non-numeric inputs.
