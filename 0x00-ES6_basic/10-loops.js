export default function appendToEachArrayValue(array, appendString) {
  const Newvalue = [];
  for (let value of array) {
   Newvalue.push(appendString + value);
  }

  return Newvalue;
}
