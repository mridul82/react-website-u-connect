import moment from 'moment-timezone';
import React, { useEffect, useRef, useState } from 'react';

const CountDown = ({ examDate, examTime }) => {

    const calculateTimeLeft = (examDate, examTime) => {
        const examDateTime = moment(`${examDate} ${examTime}`, 'YYYY-MM-DD HH:mm').tz('Asia/Kolkata');
        const currentTime = moment().tz('Asia/Kolkata');
        const difference = examDateTime.diff(currentTime);
       
        let timeLeft = {};
       
        if (difference > 0) {
           timeLeft = {
             days: Math.floor(moment.duration(difference).asDays()),
             hours: moment.duration(difference).hours(),
             minutes: moment.duration(difference).minutes(),
             seconds: moment.duration(difference).seconds(),
           };
        }
       
        return timeLeft;
       };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(examDate, examTime));
 const timerRef = useRef(null);





   useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(examDate, examTime));
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
 }, [examDate, examTime]);

  return (
    <div>
      {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
    </div>
  )
}

export default CountDown
