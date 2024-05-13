const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const now = new Date();

const currentDateParams = {
	day: now.getDay(),
	month: now.getMonth(),
	date: now.getDate(),
	year: now.getFullYear(),
};

const currentDate = `${days[currentDateParams.day]}, ${months[currentDateParams.month]} ${currentDateParams.date}, ${currentDateParams.year}`;

const nextDay = new Date(currentDate);
const nextWeek = new Date(currentDate);
const nextOneMonth = new Date(currentDate);
const nextThreeMonths = new Date(currentDate);
const nextFiveYears = new Date(currentDate);

nextDay.setDate(nextDay.getDate() + 1);
nextWeek.setDate(nextWeek.getDate() + 7);
nextOneMonth.setMonth(nextOneMonth.getMonth() + 1);
nextThreeMonths.setMonth(nextThreeMonths.getMonth() + 3);
nextFiveYears.setFullYear(nextFiveYears.getFullYear() + 5);

export { currentDate, nextDay, nextWeek, nextOneMonth, nextThreeMonths, nextFiveYears };
