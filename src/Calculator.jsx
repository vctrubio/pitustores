import React from 'react';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { BarChart } from '@mui/x-charts/BarChart';
import './css/Calculator.css'

const CalculatorQuestion = ({ question, min, max, value, setValue }) => {
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    return (
        <div className='calculator-question'>
            <span style={{ fontSize: '1.4em', width: '100%' }}>{question}</span>
            <div className='calculator-question-units'>
                <Slider
                    value={value}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    min={min}
                    max={max}
                    style={{ marginRight: '1em' }}
                    color="secondary"
                />
                <TextField
                    value={value}
                    onChange={handleInputChange}
                    inputProps={{
                        step: 1,
                        min: min,
                        max: max,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    style={{
                        padding: '10px !important',
                        width: '90px',
                        height: '80px',

                    }}
                />
            </div>
        </div>
    );
};

const CalculatorChart = ({ data }) => {
    const config = {
        width: 500,
        height: 300,
    };

    const chartData = [
        { x: 'Tradicional', y: 2400, color: '#8884d8' },
        { x: 'Warme', y: 1398, color: '#8811d8' },
    ];

    return (
        <BarChart
            {...config}
            hideAxis
            xAxis={[
                {
                    data: chartData.map(item => item.x),
                    scaleType: 'band',
                },
            ]}
            height={200}
            series={[
                {
                    data: chartData.map(item => item.y),
                    itemStyle: (params) => ({
                        color: chartData[params.dataIndex].color,
                    }),
                },
            ]}
        >
        </BarChart>

    );
};

export const Calculator = () => {
    const [questions, setQuestions] = React.useState([
        { text: 'Cuantas estufas tienes', min: 1, max: 10, value: 1 },
        { text: 'Cada cuanto cambias la bombona', min: 1, max: 30, value: 1 },
        { text: 'Cuanto pagas por la luz', min: 1, max: 500, value: 1 },
        { text: 'Cuanto pagarias por la luz', min: 1, max: 500, value: 1 },
    ]);

    const handleValueChange = (index, newValue) => {
        setQuestions(prevQuestions => {
            const newQuestions = [...prevQuestions];
            newQuestions[index].value = newValue;
            return newQuestions;
        });
    };

    return (
        <div className='calculator'>
            <h1 style={{ marginBottom: '2em' }}>Calcula tu ahorro cambiándote a Warme</h1>
            <flex>
                <div className='calculator-qs'>
                    {questions.map((question, index) => (
                        <CalculatorQuestion
                            key={index}
                            question={question.text}
                            min={question.min}
                            max={question.max}
                            value={question.value}
                            setValue={newValue => handleValueChange(index, newValue)}
                        />
                    ))}
                    <p style={{ textAlign: 'left' }}>*Los cálculos se basan en lámparas de calor de 1,5 kWh,<br />
                        quemadores de gas de 12 kWh y un precio de la energía de 3€ por kWh.</p>
                </div>
                <div className='d-flex flex-column'>
                    <CalculatorChart />
                    <CalculatorChart />
                </div>
            </flex>
            <div className='calculator-chart'>
            </div>
        </div>
    )
}