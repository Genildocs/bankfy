'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        label: 'Bank 1',
        data: [1250, 350, 250],
        backgroundColor: ['#3B82F6', '#FBBF24', '#F87171'],
      },
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: '60%', plugins: { legend: { display: false } } }}
    />
  );
}
