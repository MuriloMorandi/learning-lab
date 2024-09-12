import { format, parseISO } from 'date-fns';

export function parseDate(date: string): Date {
  return parseISO(date);
}

export function formatDate(date: Date | string): string {
    if (typeof date === 'string') {
        date = parseDate(date);
    }
  return format(date, 'dd/MM/yyyy');
}

export function formatDateTime(date: Date | string): string {
  if (typeof date === 'string') {
        date = parseDate(date);
    }
    return format(date, 'dd/MM/yyyy HH:mm');
}

export function formatTime(date: Date|string): string {
  if (typeof date === 'string') {
        date = parseDate(date);
    }
    return format(date, 'HH:mm');
}

