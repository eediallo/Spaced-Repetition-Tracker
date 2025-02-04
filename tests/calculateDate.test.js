import { formatDate } from "../calculateDate.js"; I

describe("formatDate function", () => {
    test("Should format the date correctly", () => {
        const date = new Date("2025-05-16");
        const result = formatDate(date);
        expect(result).toBe("16th May 2025");
    });

    test("Should handle 1st, 2nd, 3rd and 21st, 22nd, 23rd correctly", () => {
        const date1 = new Date("2025-02-01");
        const date2 = new Date("2025-03-02");        
        const date3 = new Date("2025-04-03");
        const date4 = new Date("2025-05-21");
        const date5 = new Date("2025-06-22");
        const date6 = new Date("2025-07-23");
        expect(formatDate(date1)).toBe("1st February 2025");
        expect(formatDate(date2)).toBe("2nd March 2025");
        expect(formatDate(date3)).toBe("3rd April 2025");
        expect(formatDate(date4)).toBe("21st May 2025");
        expect(formatDate(date5)).toBe("22nd June 2025");
        expect(formatDate(date6)).toBe("23rd July 2025");
    });
});

