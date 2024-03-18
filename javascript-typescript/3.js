// https://exercism.org/tracks/javascript/exercises/elyses-enchantments

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}

/**
 * Builder pattern
 */

class Card {
  #cards = [];

  constructor(cards) {
    this.#cards = cards;
  }

  static Builder = class {
    #cards = [];

    constructor(cards) {
      this.#cards = cards;
    }

    setItem(position, replacementCard) {
      this.#cards.splice(position, 1, replacementCard);
      return this;
    }

    insertItemAtTop(newCard) {
      this.#cards.push(newCard);
      return this;
    }

    removeItem(position) {
      this.#cards.splice(position, 1);
      return this;
    }

    removeItemFromTop() {
      this.#cards.pop();
      return this;
    }

    insertItemAtBottom(newCard) {
      this.#cards.unshift(newCard);
      return this;
    }

    removeItemAtBottom() {
      this.#cards.shift();
      return this;
    }

    checkSizeOfStack(stackSize) {
      return this.#cards.length === stackSize;
    }

    build() {
      return new Card(this.#cards);
    }
  }

  toString() {
    return `cards: ${this.#cards}`;
  }
}

const card = new Card
  .Builder([1, 2, 3])
  .insertItemAtTop(4)
  .build();
console.log(card.toString());