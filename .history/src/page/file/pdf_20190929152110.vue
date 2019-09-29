<template>
 <div>
     <iframe
        src="@/assets/pdf/pdf.pdf"
        width="800px"
        height="600px"
        style="border: none;" />
      <!-- <pdf src="@/assets/pdf/pdf.pdf" :page="1"> -->
 </div>
</template>

<script>
import pdf from 'pdfvuer'
export default {
  components: {
    pdf
  }
}
</script>