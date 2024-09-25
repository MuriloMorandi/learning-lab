import { describe, it, expect } from '@jest/globals';
import {
  formatDate,
  formatDateTime,
  formatDayMonthLong,
  formatTime,
  parseDate
} from '../src/datetime';

describe('Formatação ISO', () => { 

    it('deve converter uma string ISO em um objeto Date', () => {
    const dateStr = '2023-09-18T12:00:00Z';
    const result = parseDate(dateStr);
    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe('2023-09-18T09:00:00.000-03:00');
    });

    it('deve lidar com diferentes formatos ISO', () => {
    const dateStr = '2024-01-01';
      const result = parseDate(dateStr);
      console.log(result);
    expect(result.toISOString()).toBe('2024-01-01T03:00:00.000Z');
  });

});

describe('Formatação de data', () => {
  it('deve formatar uma data corretamente', () => {
    const date = new Date('2023-09-18T12:00:00Z');
    const result = formatDate(date);
    expect(result).toBe('18/09/2023');
  });

  it('deve aceitar uma string ISO e formatar a data corretamente', () => {
    const dateStr = '2023-09-18T12:00:00Z';
    const result = formatDate(dateStr);
    expect(result).toBe('18/09/2023');
  });
});

describe('Formatação de Data e Hora', () => {
  it('deve formatar uma data e hora corretamente', () => {
    const date = new Date('2024-09-21T12:13:09.805Z');
    const result = formatDateTime(date);
    expect(result).toBe('21/09/2024 09:13');
  });

  it('deve aceitar uma string ISO e formatar a data e hora corretamente', () => {
    const dateStr = '2024-09-21T12:13:09.805Z';
    const result = formatDateTime(dateStr);
    expect(result).toBe('21/09/2024 09:13');
  });
});

describe('Formatação de hora', () => {
  it('deve formatar o horário corretamente', () => {
    const date = new Date('2024-09-21T12:22:27.931Z');
    const result = formatTime(date);
    expect(result).toBe('09:22');
  });

  it('deve aceitar uma string ISO e formatar o horário corretamente', () => {
    const dateStr = '2024-09-21T12:22:27.931Z';
    const result = formatTime(dateStr);
    expect(result).toBe('09:22');
  });
});

describe('Formatação data por extenço', () => {
  it('deve formatar a data corretamente no estilo "dia de mês"', () => {
    const date = new Date('2024-09-21T12:13:09.805Z');
    const result = formatDayMonthLong(date);
    expect(result).toBe('21 de setembro');
  });

  it('deve lidar corretamente com meses diferentes', () => {
    const date = new Date('2024-03-16T12:13:09.805Z');
    const result = formatDayMonthLong(date);
    expect(result).toBe('16 de março');
  });

  it('deve formatar corretamente datas com um dígito no dia', () => {
    const date = new Date('2024-05-05T12:13:09.805Z');
    const result = formatDayMonthLong(date);
    expect(result).toBe('05 de maio');
  });
});