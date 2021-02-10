<template>
  <div class="progress"></div>
</template>

<script>
export default {
  name: 'ProgressIndeterminate'
};
</script>

<style scoped>
.progress {
  display: block;
  margin: 20vh auto;
}

.progress:before {
  display: block;
  margin: auto auto 0.25em;
  text-align: center;
  content: '';
  height: 4rem;
  width: 4rem;
  background: var(--color-primary);
  border-radius: 50%;
  animation: progress-scale 1.3s 0s ease-in-out infinite;
}

@keyframes progress-scale {
  0% {
    transform: scale(0.0);
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>
