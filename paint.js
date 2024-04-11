
      /* This section contain the script needed to make the paintin project*/
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      let painting = false;
      let brushSize = 5;
      let brushColor = "black";

      function startPosition(e) {
        painting = true;
        draw(e);
      }

      function finishedPosition() {
        painting = false;
        ctx.beginPath();
      }

      function draw(e) {
        if (!painting) return;
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      }

      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup", finishedPosition);
      canvas.addEventListener("mousemove", draw);

      function changeColor(color) {
        brushColor = color;
      }

      function changeBrushSize(size) {
        brushSize = size;
        document.getElementById("brushSizeValue").textContent = size;
      }

      function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
