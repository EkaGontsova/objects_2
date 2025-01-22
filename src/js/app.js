import { character } from './character.js';
export default function extractSpecialAttacks({ special }) {
    const attacks = special.map(({ id, name, icon, description }) => ({
        id,
        name,
        icon,
        description: description || 'Описание недоступно'
    }));
    
    console.log(attacks);
    
    return attacks;
}
extractSpecialAttacks(character);