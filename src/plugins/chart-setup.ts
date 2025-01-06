// chart-setup.js
import { Chart, registerables } from 'chart.js';
import { defineChartComponent } from 'vue-chart-3';

// Registra los elementos base de Chart.js
Chart.register(...registerables);

// Define el plugin personalizado
const customTextPlugin = {
  id: 'customText',
  beforeDraw(chart:any) {
    const { width, height, options } = chart;
    const ctx = chart.ctx;

    // console.log('customTextPlugin', options?.plugins);
    
    const customOptions = options.plugins?.customText || {};
    const centerText = customOptions.centerText || 'Default';
    const secondaryText = customOptions.secondaryText || '';
    const thirdText = customOptions.thirdText || '';

    const centerX = width / 2;
    const centerY = (height / 2) - 30;

    ctx.save();
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FF5733';
    ctx.fillText(centerText, centerX, centerY);

    if (secondaryText) {
      ctx.font = '16px Arial';
      ctx.fillStyle = '#3498DB';
      ctx.fillText(secondaryText, centerX, centerY + 30);
    }

    if (thirdText) {
      ctx.font = '14px Arial';
      ctx.fillStyle = '#12B76A';
      ctx.fillText(thirdText, centerX, centerY + 50);
    }

    ctx.restore();
  },
};

// Registra el plugin personalizado
Chart.register(customTextPlugin);

// Define y exporta el componente DoughnutChart personalizado
const DoughnutChartWithText = defineChartComponent('DoughnutChartWithText', 'doughnut');
export default DoughnutChartWithText;
