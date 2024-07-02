const timeStampToSentence = (timestamp) => {
    const date = new Date(timestamp);

    // Function to get month name from month number
    function getMonthName(monthNumber) {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        return months[monthNumber];
    }

    // Format the date
    const formattedDate = `${date.getDate()} ${getMonthName(
        date.getMonth()
    )} ${date.getFullYear()}`;
    const time = `${date.getHours()}:${
        (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    }`;

    // Construct the sentence
    const sentence = `Created on ${formattedDate} at ${time}`;

    return sentence;
};

export default timeStampToSentence;
