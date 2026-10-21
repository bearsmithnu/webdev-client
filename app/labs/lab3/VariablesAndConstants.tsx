export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let me = "bear";
  const morning = "dzien dobry";
  const sampleSum = functionScoped + blockScoped;

  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      me = {me}
      <br />
      morning = {morning}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
