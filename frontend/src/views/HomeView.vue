<template>
  <div>
    <div class="home">
        <div class="text">
          <h1>Power Outage Innovations</h1>
        </div>
        <div class="text">
          <h2>"lighting your way through every blackout"</h2>
        </div>
      </div>
      <div class="featuredProducts">
        <h3>FEATURED PRODUCTS</h3>
        <div class="row">
          <div class="col-4">
            <img src="https://i.postimg.cc/RZTCCvWc/images-8.jpg" alt="generator" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/90wYdx6B/download-7.jpg" alt="generator" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/fbLswmnN/download-9.jpg" alt="generator" loading="lazy" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="https://i.postimg.cc/XYJtR36H/download-4.jpg" alt="inverter" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/KzXV3Mkw/download-5.jpg" alt="inverter" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/x8p3Hwp8/images-5.jpg" alt="inverter" loading="lazy" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="https://i.postimg.cc/R0CxVftR/download-1.jpg" alt="ups" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/fLFGKrr2/download-2.jpg" alt="ups" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/SR1JDkh0/download-3.jpg" alt="ups" loading="lazy" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img src="https://i.postimg.cc/0ybN5Tqj/images-1.jpg" alt="gas stoves" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/8czSKvpc/images-2.jpg" alt="gas stoves" loading="lazy" class="img-fluid">
          </div>
          <div class="col-4">
            <img src="https://i.postimg.cc/MGpmGKpR/download.jpg" alt="gas stoves" loading="lazy" class="img-fluid">
          </div>
        </div>
        <button class="btn1" href="/about">ABOUT US</button>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.featuredProducts{
  background-color: #040D12;
}

h1{
  font-size: 7rem;
  font-weight: bolder;
  text-shadow: 2px 2px black;
}

h2{
  font-size: 2rem;
  font-weight: bolder;
  text-shadow: 2px 2px black;
}

.text {
  position: relative;
  top: 30%;
  color: white;
  text-shadow: 2px 2px black;
}

.heading{
  font-size: xx-large;
  font-weight: 900;
}

.img-fluid{
  margin-bottom: 1rem;
  aspect-ratio: 1/1;
}

.btn1{
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #93B1A6;
  padding: .4rem;
  border-radius: 1rem;
  width: 10rem;
  color: white;
}

.home{
  background-image: url("https://i.postimg.cc/26ZM96Yh/ehteshamul-haque-adit-w-RUz-D8k-MGo-A-unsplash.jpg");
  background-attachment: fixed;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

h3{
  text-shadow: 2px 2px white;
}
</style>