<script>
   let isHide = false;
</script>

{#if isHide === false}
   <div class="main">
      <h1>Hello World</h1>

      <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, hic
         neque aut, ducimus sunt illo eum dolorum fugit eligendi laboriosam
         mollitia vero earum optio voluptas quidem sit adipisci deserunt illum?
      </p>
   </div>
{/if}

<button class="btn" on:click={() => (isHide = !isHide)}>{isHide}</button>

<style>
   div {
      width: 300px;
      padding: 20px;
      margin-top: 60px;
      background-color: antiquewhite;
   }

   button {
      padding: 10px;
      font-size: 2rem;
      cursor: pointer;
      margin-top: 30px;
   }
</style>
