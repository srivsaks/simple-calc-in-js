import "./styles.css";

const buttons = document.querySelectorAll("button");
const current = document.querySelector(".current");

//let prevNum = null;

let dot = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const input = e.target.textContent;
    if (input === "+" || input === "-" || input === "/" || input === "*") {
      const last = current.textContent[current.textContent.length - 1];
      if (last === "+" || last === "-" || last === "/" || last === "*") {
        return;
      }

      current.textContent = current.textContent + "" + e.target.textContent;
      dot = false;
    } else if (input === "AC") {
      current.textContent = "";
      dot = false;
    } else if (input === "=") {
      if (current.textContent.length === 0) {
        return;
      }
      const last = current.textContent[current.textContent.length - 1];
      if (last === "+" || last === "-" || last === "/" || last === "*") {
        if (
          current.textContent.length === 2 &&
          current.textContent[0] === "."
        ) {
          current.textContent = 0;
          return;
        }
        current.textContent = eval(
          current.textContent.slice(0, current.textContent.length - 1)
        );
        return;
      }
      const res = eval(current.textContent);
      current.textContent = res;
      dot = false;
    } else if (input === "X") {
      if (!current.textContent) return;
      const last = current.textContent[current.textContent.length - 1];
      current.textContent = current.textContent.slice(
        0,
        current.textContent.length - 1
      );
      if (last === ".") dot = false;
    } else if (input === ".") {
      if (dot) return;
      dot = true;
      current.textContent = current.textContent + "" + input;
    } else {
      if (
        current.textContent[current.textContent.length - 1] === "0" &&
        input !== "0" &&
        (current.textContent.length <= 1 ||
          current.textContent[current.textContent.length - 2] === "+" ||
          current.textContent[current.textContent.length - 2] === "-" ||
          current.textContent[current.textContent.length - 2] === "/" ||
          current.textContent[current.textContent.length - 2] === "*")
      ) {
        //   current.textContent = input;
        current.textContent = current.textContent.slice(
          0,
          current.textContent.length - 1
        );
        current.textContent += input;
        return;
      } else if (
        current.textContent[current.textContent.length - 1] === "0" &&
        input === "0" &&
        (current.textContent.length <= 1 ||
          current.textContent[current.textContent.length - 2] === "+" ||
          current.textContent[current.textContent.length - 2] === "-" ||
          current.textContent[current.textContent.length - 2] === "/" ||
          current.textContent[current.textContent.length - 2] === "*")
      ) {
        current.textContent = current.textContent.slice(
          0,
          current.textContent.length - 1
        );
        current.textContent += input;
        //current.textContent = current.textContent + "" + e.target.textContent;
        // current.textContent = input;
        return;
      }
      current.textContent = current.textContent + "" + e.target.textContent;
    }
  });
});
