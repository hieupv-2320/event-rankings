<template>
  <table class="rank-table mx-auto"> 
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
          <img v-if="index+1 <= 5" :src="`/images/medals/${index+1}.png`" width="50" />
          <span v-else > {{ index + 1 }} </span>
        </td>
        <td class="border border-slate-300 padding-h-4">{{ item.name }}</td>
        <td class="border border-slate-300 padding-h-4">{{ item.score_code }}</td>
        <td class="border border-slate-300 padding-h-4">{{ item.score_ctf }}</td>
        <td class="border border-slate-300 padding-h-4">{{ sumScore(item.score_code, item.score_ctf) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    data() {
      return {
        rankings: [
          {
            name: 'Team 1',
            score_code: 8000,
            score_ctf: 7000,
          },
          {
            name: 'Team 2',
            score_code: 8000,
            score_ctf: 7000,
          },
          {
            name: 'Team 3',
            score_code: 8000,
            score_ctf: 7000,
          },
          {
            name: 'Team 44',
            score_code: 8000,
            score_ctf: 7000,
          },
          {
            name: 'Team 5555',
            score_code: 8000,
            score_ctf: 7000,
          },
          {
            name: 'Team 5555',
            score_code: 8000,
            score_ctf: 7000,
          }
        ],
      }
    },
    methods: {
      sumScore(scoreCode, scoreCtf)
      {
        return parseInt(scoreCode, 10) + parseInt(scoreCtf, 10);
      },
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
