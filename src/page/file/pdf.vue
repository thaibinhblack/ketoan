<template>
 <div>
      <canvas id="pdf"></canvas>
      <!-- <pdf src="@/assets/pdf/pdf.pdf" :page="1"> -->
 </div>
</template>

<script>
// simple.js
import PDFJS from 'pdfjs'
var loadingTask = PDFJS.getDocument("@/assets/pdf/pdf.pdf");
loadingTask.promise.then(
  function(pdf) {
    // Load information from the first page.
    pdf.getPage(1).then(function(page) {
      var scale = 1;
      var viewport = page.getViewport(scale);

      // Apply page dimensions to the <canvas> element.
      var canvas = document.getElementById("pdf");
      var context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the page into the <canvas> element.
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext).then(function() {
        console.log("Page rendered!");
      });
    });
  },
  function(reason) {
    console.error(reason);
  }
);

import pdf from 'pdfvuer'
export default {
  components: {
    pdf
  }
}
</script>