import filterArray from "./filterArray";

export default function beforeSave(tableName, table) {
  const storagedTable = JSON.parse(localStorage.getItem(tableName))
  return JSON.stringify(Array.isArray(storagedTable)
    ? [...filterArray(storagedTable, table), ...table]
    : table);
}