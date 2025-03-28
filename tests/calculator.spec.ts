import { test, expect } from '@playwright/test';
import { calculatorToBuyHome,calculatorToRetire } from './testdata/calculatorData';
import { openCalculator,calculateSavingsHome,calculateSavingsRetirement, validateProjection } from '../src/calculator/calculator';


calculatorToBuyHome.forEach(({ id,age, salary,salaryFrequency,balance,fundType,TimetobuyHome,contribution }) => {
  test.describe(() => {
    test.beforeEach(async ({ page }) => {
      await openCalculator(page);
    });
    test(`calculate savings for home- ${id}`, {
      tag: '@smoke',
    },async ({ page }) => {
      await calculateSavingsHome(page,age, salary,salaryFrequency,balance,contribution,fundType,TimetobuyHome)
      await validateProjection(page,contribution)
    });
  });
});
calculatorToRetire.forEach(({ id,age, salary,salaryFrequency,balance,fundType,contribution }) => {
  test.describe(() => {
    test.beforeEach(async ({ page }) => {
      await openCalculator(page);
    });
    test(`calculate savings for retirement- ${id}`, {
      tag: '@regression',
    },async ({ page }) => {
      await calculateSavingsRetirement(page,age, salary,salaryFrequency,balance,contribution,fundType)
      await validateProjection(page,contribution)
    });
  });
});
