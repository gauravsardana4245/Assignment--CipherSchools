import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';
import '../styles.css';
import "../react-calendar-heatmap.css"

const today = new Date();

const ReactCalenderMapbox = (props) => {
    const { mode } = props;
    const randomValues = getRange(365).map(index => {
        return {
            date: shiftDate(today, -index),
            count: 0,
        };
    });
    return (
        <div >
            <CalendarHeatmap
                startDate={shiftDate(today, -365)}
                endDate={today}
                values={randomValues}
                classForValue={value => {
                    if (!value && mode === 'light') {
                        return 'color-empty-light';
                    }
                    else if (!value && mode === 'dark') {
                        return 'color-empty-dark';
                    }
                    else if (value.count === 0 && mode === 'dark') {
                        return 'color-empty-dark';
                    }
                    else {
                        return `color-github-${value.count}`;
                    }
                }}
                tooltipDataAttrs={value => {
                    return {
                        'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count
                            }`,
                    };
                }}
                showWeekdayLabels={true}
                onClick={value => alert(`Clicked on value with count: ${value.count}`)}
            />
            {/* <ReactTooltip /> */}
        </div>
    );
}

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default ReactCalenderMapbox;
