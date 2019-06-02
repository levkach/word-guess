<template>
  <div id="records">
    <h2>Table of Records</h2>

    <router-link
      v-if="canReturn"
      id="save"
      :to="{name:'Result', params:{ previousName: newUsername, records: newRecord }}"
    >Back to results</router-link>

    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="r in records"
          :key="r.id"
          v-bind:class="{newInstance: r.username === newUsername }"
        >
          <td>{{r.username}}</td>
          <td>{{r.score}}</td>
        </tr>
      </tbody>
    </table>

    <router-link to="/home">Back</router-link>
  </div>
</template>

<script>
import { db } from "../main.js";

const diffEnum = { Beginner: 1, Intermediate: 2, Advanced: 3 };

export default {
  name: "Records",
  props: ["newUsername", "newRecord", "canReturn"],
  data() {
    return {
      records: []
    };
  },

  mounted: function() {
    this.addNewRecord();
    this.loadRecords();
  },

  methods: {
    addNewRecord: function() {
      // Save the record if it is valid
      if (this.newUsername && this.newRecord) {
        // Compute weighted score (base on difficulty)
        const score = this.newRecord.reduce((acc, curr) => {
          return acc + curr.result * diffEnum[curr.word.level];
        }, 0);
        db.records.add({ username: this.newUsername, score: score });
      }
    },

    loadRecords: async function() {
      this.records = await db.records
        .orderBy("score")
        .reverse()
        .toArray();
    }
  }
};
</script>

<style >
#records {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#records table {
  border-collapse: collapse;
  width: 70%;
}

#records table th {
  border: 1px solid black;
  padding: 10px;
  padding-bottom: 15px;
}

#records table td {
  padding: 5px;
  border: 1px dotted black;
}

#records a {
  margin-top: 15px;
}

#records tr.newInstance {
  background: lightgreen;
}
</style>
