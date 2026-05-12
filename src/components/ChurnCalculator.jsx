import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChurnCalculator = () => {
  // --- State for Sliders ---
  const [rent, setRent] = useState(50000);
  const [vacancy, setVacancy] = useState(1);
  const [brokerage, setBrokerage] = useState(15);

  // --- Indian Currency Formatter ---
  const indianFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // --- Core Calculation Logic ---
  const results = useMemo(() => {
    const escalation = 0.05;
    const bFactor = brokerage / 30;

    let stableSum = 0;
    let currentStableRent = rent;

    let churnSum = 0;
    let currentChurnRent = rent;
    let cTimer = 0;

    // Stable: No initial brokerage (matches target)
    // Churn: Initial brokerage IS deducted
    churnSum -= rent * bFactor;

    for (let m = 1; m <= 36; m++) {
      // 1. Stable Calculation
      if (m === 13 || m === 25) {
        currentStableRent *= (1 + escalation);
      }
      stableSum += currentStableRent;

      // 2. Churn Calculation
      cTimer++;
      if (cTimer <= 11) {
        churnSum += currentChurnRent;
      } else if (cTimer <= 11 + vacancy) {
        // Vacant
      } else {
        cTimer = 1;
        currentChurnRent *= (1 + escalation);
        churnSum -= (currentChurnRent * bFactor);
        churnSum += currentChurnRent;
      }
    }

    const finalStable = Math.round(stableSum);
    const finalChurn = Math.round(churnSum);
    const finalLoss = finalStable - finalChurn;
    const yieldPerc = ((finalLoss / finalStable) * 100).toFixed(1);

    return { finalStable, finalChurn, finalLoss, yieldPerc };
  }, [rent, vacancy, brokerage]);

  // --- Chart Data & Options ---
  const chartData = {
    labels: ['11-Month (Churn)', '36-Month (Stable)'],
    datasets: [
      {
        data: [results.finalChurn, results.finalStable],
        backgroundColor: ['#ef9c00', '#0086AD'],
        borderRadius: 10,
        borderWidth: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => indianFormatter.format(ctx.raw),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9CA3AF',
          callback: (val) => '₹' + (val / 100000).toFixed(1) + 'L',
        },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      x: {
        ticks: { color: '#000', font: { size: 14, weight: 600 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div className="title-group">
          <h2 style={styles.head}>Cost of Churn Calculator</h2>
          <p style={styles.para}>
            You lose <span style={styles.lossText}>{indianFormatter.format(results.finalLoss)}</span> over 3 years due to tenant turnover.
          </p>
        </div>
        <div style={styles.summaryStats}>
          <div className="stat-block">
            <div style={styles.statLabel}>36-Month (Stable)</div>
            <div style={styles.statValue}>{indianFormatter.format(results.finalStable)}</div>
          </div>
          <div className="stat-block">
            <div style={styles.statLabel}>11-Month (Churn)</div>
            <div style={styles.statValue}>{indianFormatter.format(results.finalChurn)}</div>
          </div>
          <div className="stat-block">
            <div style={{...styles.statLabel, color: '#ef9c00'}}>Income Lost</div>
            <div style={{...styles.statValue, color: '#ef9c00'}}>{indianFormatter.format(results.finalLoss)}</div>
          </div>
        </div>
      </div>

      <div style={styles.chartSection}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div style={styles.yieldCard}>
        <p style={{ margin: 0,textAlign:'left' }}>
          Churn effectively reduces your yield by: <b>{results.yieldPerc}%</b>
        </p>
      </div>

      <div style={styles.controlsPanel}>
        {/* Monthly Rent */}
        <div style={styles.controlGroup}>
          <span style={styles.label}>Monthly Rent (₹)</span>
          <div style={styles.sliderRow}>
            <input 
              type="range" min="50000" max="100000" step="5000" 
              value={rent} onChange={(e) => setRent(Number(e.target.value))}
              style={styles.rangeInput}
            />
            <div style={styles.valueDisplay}>{rent}</div>
          </div>
        </div>

        {/* Vacancy */}
        <div style={styles.controlGroup}>
          <span style={styles.label}>Vacancy (Months)</span>
          <div style={styles.sliderRow}>
            <input 
              type="range" min="1" max="6" step="1" 
              value={vacancy} onChange={(e) => setVacancy(Number(e.target.value))}
              style={styles.rangeInput}
            />
            <div style={styles.valueDisplay}>{vacancy}</div>
          </div>
        </div>

        {/* Brokerage */}
        <div style={styles.controlGroup}>
          <span style={styles.label}>Brokerage (Days)</span>
          <div style={styles.sliderRow}>
            <input 
              type="range" min="1" max="30" step="1" 
              value={brokerage} onChange={(e) => setBrokerage(Number(e.target.value))}
              style={styles.rangeInput}
            />
            <div style={styles.valueDisplay}>{brokerage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- In-line Styles (Matching your CSS) ---
const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '900px',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '0 1px 2px 2px rgba(0,0,0,0.2)',
    border: '1px solid rgba(0,0,0,0.05)',
    margin: 'auto',
    fontFamily: 'sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    paddingBottom: '5px'
  },
  head: { margin: '-5px 0 0 0', fontSize: '20px', fontWeight:'700' },
  para: { margin: '5px 0 0', color:' var(--text-muted)', fontSize: '14px' },
  lossText: { color: '#ef9c00', fontWeight: 'bold' },
  summaryStats: { display: 'flex', gap: '25px', textAlign: 'right' },
  statLabel: { fontSize: '0.75rem', textTransform: 'uppercase', color: '#6B7280', marginBottom: '5px' },
  statValue: { fontSize: '18px', fontWeight: '700' },
  chartSection: { position: 'relative', height: '300px' },
  yieldCard: { textAlign: 'center', margin: '20px 0', fontSize: '1.1rem' },
  controlsPanel: {
    backgroundColor: '#d6ecf3',
    padding: '23px',
    borderRadius: '12px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '5px'
  },
  controlGroup: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: '0.9rem', color: '#6B7280', minWidth: '130px' },
  sliderRow: { display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1, marginLeft: '20px' },
  rangeInput: { flexGrow: 1, accentColor: '#EF9C00',backgroundColor:'#F8D57E', cursor: 'pointer' },
  valueDisplay: {
    backgroundColor: '#fff',
    border: '1px solid grey',
    padding: '8px 15px',
    borderRadius: '8px',
    fontWeight: '600',
    minWidth: '80px',
    textAlign: 'center'
  }
};

export default ChurnCalculator;