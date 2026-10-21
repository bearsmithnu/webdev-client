export default function ForLoops() {
  let stringArray1 = ["string1", "string3"];
  let stringArray2: string[] = [];

  let numArray: number[] = [];
  let stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
    stringLengths.push(string1.length)
    numArray.push(i);
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2}
      <br />
      stringLengths = {stringLengths}
      <br />
      numArray = {numArray}
      <hr />
    </div>
  );
}
