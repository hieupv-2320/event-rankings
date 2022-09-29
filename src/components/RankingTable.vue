<template>
  <div>
    <div class="mb-10">
      <img width="30" title="Tải lại" src="@/assets/images/icons/refresh.svg" @click="fetchData" class="transition hover:scale-110 cursor-pointer" />
    </div>
    <table v-if="!loading && !error && rankings.length > 0" class="rank-table mx-auto"> 
      <thead>
        <tr class="bg-primary text-bluedark">
          <th class="border border-slate-300">STT</th>
          <th class="border border-slate-300">Tên đội</th>
          <th class="border border-slate-300">Viblo Code</th>
          <th class="border border-slate-300">Viblo CTF</th>
          <th class="border border-slate-300">Tổng điểm</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in rankings" :key="index" class="bg-primary-dark"> 
          <td class="border border-slate-300">
            <img v-if="item.rank <= 5" :src="`/images/medals/${item.rank}.png`" width="50" />
            <span v-else > {{ item.rank }} </span>
          </td>
          <td class="border border-slate-300 padding-h-4">{{ item.name }}</td>
          <td class="border border-slate-300 padding-h-4">{{ item.score_code }}</td>
          <td class="border border-slate-300 padding-h-4">{{ item.score_ctf }}</td>
          <td class="border border-slate-300 padding-h-4">{{ item.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="!loading && !error && rankings.length < 1" class="flex text-center items-center justify-center mt-10 text-lg">
    <img width="40" src="@/assets/images/icons/sad.svg" class="mr-5">
    Chưa có dữ liệu
  </div>
  <div v-if="!loading && error" class="flex text-center text-red-300 items-center justify-center mt-10 text-lg">
    <img width="40" src="@/assets/images/icons/sad.svg" class="mr-5">
    Có lỗi xảy ra khi tải dữ liệu !
  </div>
  <div v-if="loading" class="w-full">
    <img src="@/assets/images/icons/ring-loading.svg" class="mx-auto m-0" />
  </div>
</template>

<script>
  export default {
    props: {
      rankings: {
            type: Array,
            required: true,
        },
      loading: Boolean,
      error: Boolean
    }
  }
</script>
<style scoped>
.rank-table  th, td  {
  font-family: 'Open-Sans';
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
}
.rank-table td { 
  text-align: center;
}
@media  (min-width: 1440px){
  .rank-table td { 
    padding-right: 2em;
    padding-left: 2em;
  }

  .padding-h-4 {
    padding-right: 4em !important;
    padding-left: 4em !important;

  }
}

</style>
