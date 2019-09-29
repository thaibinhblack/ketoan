<template>
  <pdf src="@/assets/pdf/pdf.pdf" :page="1">
    <template slot="loading">
      loading content here...
    </template>
  </pdf>
</template>

<script>
import pdf from 'pdfvuer'

export default {
  components: {
    pdf
  }
}