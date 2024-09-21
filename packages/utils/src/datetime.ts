import { format, parseISO } from 'date-fns';
import { tz } from "@date-fns/tz";


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
  return format(date, 'dd/MM/yyyy HH:mm', {
    in: tz('America/Sao_Paulo')
  });
}

export function formatTime(date: Date|string): string {
  if (typeof date === 'string') {
        date = parseDate(date);
    }
  
  return format(date, 'HH:mm', {
    in: tz('America/Sao_Paulo')
  });
}

export function formatDayMonthLong(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
  }).format(date);
}