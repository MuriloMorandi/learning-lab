import { describe, it, expect } from '@jest/globals';
import {
    capitalize,
    normalize,
 } from '../src/string';

describe('capitalize', () => {
  it('deve capitalizar a primeira letra de uma string normal', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('deve retornar uma string vazia quando for passada uma string vazia', () => {
    expect(capitalize('')).toBe('');
  });

  it('deve retornar uma string vazia quando for passada uma string só com espaços', () => {
    expect(capitalize('   ')).toBe('');
  });

  it('deve funcionar corretamente com strings já capitalizadas', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('deve capitalizar corretamente quando a primeira letra for um caractere especial', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });
});


describe('normalize', () => {
  it('deve remover acentos de uma string', () => {
    expect(normalize('café')).toBe('cafe');
  });

  it('deve retornar uma string vazia quando for passada uma string vazia', () => {
    expect(normalize('')).toBe('');
  });

  it('deve remover acentos de letras maiúsculas', () => {
    expect(normalize('ÁRVORE')).toBe('ARVORE');
  });

  it('deve lidar corretamente com strings que não possuem acentos', () => {
    expect(normalize('hello')).toBe('hello');
  });

  it('deve funcionar corretamente com caracteres especiais que não são acentuados', () => {
    expect(normalize('!@#$%')).toBe('!@#$%');
  });
});
