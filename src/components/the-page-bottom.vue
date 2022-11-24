<template>
  <footer></footer>
</template>

<script>
export default {
  name: "page-bottom"
}
</script>

<style scoped>
footer {
  height: 12.75rem;
  padding: 2rem;
  background-color: var(--primary-color);
}

@media screen and (max-width: 1440px) {
  footer{
    max-height: 10rem;

  }
}

@media screen and (max-width: 1200px) {
  footer{
    max-height: 8rem;
  }
}

@media screen and (max-width: 992px) {
  footer{
    max-height: 6rem;
  }
}

@media screen and (max-width: 768px) {
  footer{
    max-height: 5rem;
  }
}
@media screen and (max-width: 576px) {
  footer{
    max-height: none;
  }
}
</style>