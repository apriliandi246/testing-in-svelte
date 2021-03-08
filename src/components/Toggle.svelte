<script>
   let status = false;
</script>

<button on:click={() => (status = !status)}>{status}</button>

<style>
   button {
      padding: 20px;
      font-size: 2rem;
   }
</style>
