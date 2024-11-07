export default function generateOrderId() {
  const token = new Date().getTime();
  const inputDate = new Date(token);
  const year = inputDate.getFullYear() % 100;
  const month = inputDate.getMonth() + 1;
  const day = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();

  // Pad single-digit months, days, hours, and minutes with leading zeros
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Create the formatted string
  const formattedDateString = `${year}${formattedMonth}${formattedDay}${formattedHours}${formattedMinutes}`;

  // Return the generated order ID
  return formattedDateString;
}
