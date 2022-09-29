
<template>
  <div class="body-rankings bg-repeat-y pt-3 relative text-black bg-yellow-100 w-100">
    <img src="@/assets/images/conner-left.svg" class="absolute top-0 left-0" />

    <div  id="ranking-tables"  class="sm:container  text-white p-10">
      <div class="w-full top-three text-center items-center">
        <div class="w-full lg:w-3/4 xxl:w-1/2 font-svn mt-32 mx-auto md:grid grid-cols-3 gap-16">
          <div class="tops-col flex flex-col justify-between p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-ctf.png" class="mx-auto w-2/3 mt-32" />
              <div class="my-10 mb-20">
                <b class="font-open-sans text-lg"> TOP 1 CTF </b> <br> <br>
                <span class="uppercase text-3xl text-ellipsis overflow-hidden truncate"> tên đội </span>
              </div>
          </div>
          <div class="tops-col flex flex-col mt-5 md:mt-0 p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-all.png" class="mx-auto w-3/4 mt-16" />

              <div class="my-10 mb-20">
                <b class="font-open-sans text-lg"> TOP 1 chung cuộc </b> <br> <br>
                <span class="uppercase text-3xl"> tên đội </span>
              </div>
          </div>
          <div class="tops-col flex flex-col mt-5 md:mt-0 justify-between p-5 wow slideInLeft">
              <img src="@/assets/images/medals/top1-code.png" class="mx-auto w-2/3  mt-32" />

              <div class="my-10 mb-20">
                <b class="font-open-sans text-lg"> TOP 1 Code </b> <br> <br>
                <span class="uppercase text-3xl"> tên đội </span>
              </div>
          </div>
        </div>
      </div>
      <div class="rankings mt-10 mb-10 sm:mt-36">
        <div class="font-svn text-5xl lg:text-8xl relative text-center rankings-header pb-16">
          <img src="@/assets/images/cup.png" class="w-1/5 lg:w-1/4 mx-auto mb-10 sm:hidden bottom-0 left-0" />
          bảng xếp hạng
          <img src="@/assets/images/cup.png" class="w-1/5 lg:w-1/4 float-x mx-auto absolute hidden sm:block bottom-0 left-0" />
        </div> 
        <div class="mx-auto ranking-table-cover mt-4">
          <RankingTable />
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup>
  import RankingTable from './RankingTable.vue'
</script>
<style scoped>
.body-rankings {
  background-image: url('../assets/images/background-body.png');
  background-size: 100%;
}
@media (max-width: 640px) {
  .ranking-table-cover {
    max-width: 100%;
    overflow-x: scroll;
  }
}

.rankings-header {
  text-shadow: 0px 3px 3px #43dcff;
}
.tops-col {
  background: linear-gradient(180deg, #0D2755 3.25%, rgba(15, 45, 100, 0.97) 13.74%, rgba(17, 55, 124, 0.92) 34.71%, rgba(18, 58, 132, 0.9) 50.91%, rgba(16, 53, 122, 0.91) 63.31%, rgba(12, 40, 94, 0.95) 81.42%, #07193F 98.58%);
}
</style>
