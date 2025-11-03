import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

/**
 * CalculatorRouteWrapper
 * This component is designed to wrap a group of routes (the calculators)
 * and ensure they have a stable and isolated MUI Theme context.
 * This is a critical fix for inconsistent desktop breakpoints (md, lg) 
 * in production environments (like Render) where global style injection
 * order issues often interfere with MUI's responsive logic.
 * * Note: It uses the existing theme from the parent MuiRootProvider context
 * and reapplies it, which is an aggressive technique to force consistency.
 */
export default function CalculatorRouteWrapper() {
  // Get the current theme from the parent MuiRootProvider context
  // This ensures we use the theme defined in main.jsx
  const theme = useTheme();

  // Outlet renders the nested route element (e.g., MonthlyBudgetCalculator)
  return (
    // Reapplying the ThemeProvider forces MUI to recalculate breakpoints 
    // within this component's subtree.
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}