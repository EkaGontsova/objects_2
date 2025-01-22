import { character } from '../character.js';
import extractSpecialAttacks from '../app.js';

describe('extractSpecialAttacks', () => {
    it('should return an array of special attacks with descriptions', () => {
        const expectedOutput = [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно' 
            }
        ];

        const result = extractSpecialAttacks(character);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle special attacks with missing descriptions', () => {
        const customCharacter = {
            name: 'Воин',
            type: 'Warrior',
            health: 60,
            level: 2,
            attack: 50,
            defence: 20,
            special: [
                {
                    id: 1,
                    name: 'Сильный удар',
                    icon: 'http://...'
                },
                {
                    id: 2,
                    name: 'Защитная стойка',
                    icon: 'http://...',
                    description: 'Увеличивает защиту на 20%'
                }
            ]
        };

        const expectedOutput = [
            {
                id: 1,
                name: 'Сильный удар',
                icon: 'http://...',
                description: 'Описание недоступно' 
            },
            {
                id: 2,
                name: 'Защитная стойка',
                icon: 'http://...',
                description: 'Увеличивает защиту на 20%'
            }
        ];

        const result = extractSpecialAttacks(customCharacter);
        expect(result).toEqual(expectedOutput);
    });
});