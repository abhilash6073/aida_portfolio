import { differenceInMonths, differenceInYears, parseISO } from "date-fns";

export function calculateDuration(startDate: string, endDate: string | "Present"): string {
    const start = parseISO(startDate);
    const end = endDate === "Present" ? new Date() : parseISO(endDate);

    const totalMonths = differenceInMonths(end, start) + 1; // +1 to include the partial month/current month
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mos`;
    if (months === 0) return `${years} yrs`;
    return `${years} yrs ${months} mos`;
}

export function calculateTotalExperience(startDate: string): string {
    return calculateDuration(startDate, "Present");
}
