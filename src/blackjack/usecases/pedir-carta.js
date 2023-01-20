/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Ejemplo: ['H1','H2','H3','H4']
 * @returns {string} retorna una carta
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}