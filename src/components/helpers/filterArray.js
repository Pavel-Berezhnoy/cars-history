export default function filterArray(filterable, filtering) {
  let filteringIds = filtering.map(filteringItem => filteringItem.id);
  return filterable.filter(filterableItem => filteringIds.includes(filterableItem.id) === false);
} 