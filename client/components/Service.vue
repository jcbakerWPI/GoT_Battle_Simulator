<template>
  <div class="container">
    <div class="row">
       <div class="col-md-4 vertical-line-right">
         <br>
         <img src="../assets/cachet.png" class="service-images">
         <br>
        <p class="landing-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p class="landing-button"><a class="btn btn-default" href="https://cachethq.io/" role="button">View details »</a></p>
      </div>
      <div class="col-md-4">
        <img src="../assets/aws.png" class="service-images" style="padding-bottom:25px">
        <p class="landing-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p class="landing-button"><a class="btn btn-default" href="https://aws.amazon.com" role="button">View details »</a></p>
     </div>
      <div class="col-md-4 vertical-line-left">
        <br>
          <img src="../assets/docker.png" class="service-images">
          <br>
        <p class="landing-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p class="landing-button"><a class="btn btn-default" href="https://docker.com/" role="button">View details »</a></p>
     </div>
    </div>
  </div>
</template>

<style lang="scss">
.service-images {
  width: 45%;
  height: 45%;
  display: block;
  margin: auto;
}
p.landing-text{
  text-align:left;
  font-size:16px;
}

p.landing-button {
  text-align:center;
}

div.vertical-line-right {
    border-right-width: 1px;
    border-right-style: solid;
    opacity: 0.90;
    border-left-color:#2d4b56;
}

div.vertical-line-left {
  border-left-width: 1px;
  border-left-style: solid;
  opacity: 0.90;
  border-left-color:#2d4b56;
}

</style>