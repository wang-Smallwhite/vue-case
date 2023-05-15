<template>
  <div class="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<style>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-top-color: #333;
  animation: loading-spinner 1s linear infinite;
}

@keyframes loading-spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>