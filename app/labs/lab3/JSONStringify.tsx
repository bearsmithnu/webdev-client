export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const course = { course: "CS4550", credits: 400, students: ["bear"]};
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <br />
      course = {JSON.stringify(course)}
      <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
