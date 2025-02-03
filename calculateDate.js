function calculateDate() {
    const todayDate = new Date();

    const weekLater = new Date(todayDate);
    const monthLater = new Date(todayDate);
    const threeMonthsLater = new Date(todayDate);
    const sixMonthsLater = new Date(todayDate);
    const yearLater = new Date(todayDate);

    weekLater.setDate(todayDate.getDate() + 7);
    monthLater.setMonth(todayDate.getMonth() + 1);
    threeMonthsLater.setMonth(todayDate.getMonth() + 3);
    sixMonthsLater.setMonth(todayDate.getMonth() + 6);
    yearLater.setFullYear(todayDate.getFullYear() + 1);

    return [
      weekLater.toLocaleDateString(),
      monthLater.toLocaleDateString(),
      threeMonthsLater.toLocaleDateString(),
      sixMonthsLater.toLocaleDateString(),
      yearLater.toLocaleDateString(),
    ];
}
    
