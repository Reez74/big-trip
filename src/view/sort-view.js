import ItemListView from './item-list-view.js';
import { capitalizedFirstChar } from '../utils/common.js';

function getSortItemTemplate({type, isChecked, isDisabled}) {
  return (
    `<div class="trip-sort__item  trip-sort__item--${type}">
      <input
        id="sort-${type}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        data-item="${type}"
        value="sort-${type}"
        ${isChecked ? 'checked' : ''}
        ${isDisabled ? 'disabled' : ''}
      >
      <label class="trip-sort__btn" for="sort-${type}">
        ${capitalizedFirstChar(type)}
      </label>
    </div>`
  );
}

function createSortTemplate(items) {
  const sorting = items.map((item) => getSortItemTemplate(item)).join('');
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sorting}
    </form>`
  );
}

export default class SortView extends ItemListView {

  get template() {
    return createSortTemplate(this._items);
  }
}
