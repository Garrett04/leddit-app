import { formatDistanceToNow, parseISO } from 'date-fns';
import React from 'react'

const TimeAgo = ({timestamp}) => {
    const date = new Date(timestamp * 1000).toISOString();
    const dateISO = parseISO(date);
    const timePeriod = formatDistanceToNow(dateISO);
    
    return <p>{`${timePeriod} ago`}</p>
}

export default TimeAgo