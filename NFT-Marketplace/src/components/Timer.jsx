import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState({
        hours: 59,
        minutes: 59,
        seconds: 59,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime((prevTime) => {
                const newTime = { ...prevTime };

                if (newTime.seconds > 0) {
                    newTime.seconds -= 1;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes -= 1;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours -= 1;
                        } else {
                            clearInterval(countdown);
                        }
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);


    const getLabel = (key) => {
        switch (key) {
            case 'hours':
                return 'Hours';
            case 'minutes':
                return 'Minutes';
            case 'seconds':
                return 'Seconds';
            default:
                return '';
        }
    };

    return (
        <div className="flex text-white text-[2.375rem]">

            {Object.keys(time).map((item) =>(
                <>
                    <span className="ml-4 text-[2.375rem] first:hidden">:</span>
                    <div className="flex flex-col items-center">
                        <span className='font-bold'>{String(time[item])}</span>
                        <span className=" text-xs font-normal">{getLabel(item)}</span>
                    </div> 
                </>
               
            ))}
        </div>
    );
};

export default Timer;
