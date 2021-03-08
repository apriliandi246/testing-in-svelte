<script>
   let items = [];
   let value = "";

   function addItem() {
      items = [...items, { todo: value, id: Math.random() }];
      value = "";
   }

   function deleteItem(id) {
      items = items.filter((item) => item.id !== id);
   }

   function deleteAllItems() {
      items = [];
   }
</script>

<div class="container">
   <h1>Todo App</h1>

   <h3>Items : {items.length}</h3>
   <button
      class="delete_all"
      on:click={deleteAllItems}
      class:disabled={items.length === 0}
      disabled={items.length === 0}>delete all items</button
   >

   <form on:submit|preventDefault={addItem}>
      <input type="text" placeholder="todo...." bind:value />
   </form>

   <div class="items">
      {#each items as item}
         <div class="item">
            <p>{item.todo}</p>
            <span on:click={() => deleteItem(item.id)} class="delete">🗑️</span>
         </div>
      {/each}
   </div>
</div>

<style>
   .container {
      width: 700px;
      display: flex;
      font-size: 2rem;
      margin: 60px auto;
      flex-direction: column;
      justify-content: center;
   }

   .item {
      display: flex;
      align-items: center;
   }

   button {
      width: 725px;
      padding: 10px;
      font-size: 2rem;
      cursor: pointer;
      margin-bottom: 20px;
   }

   input {
      width: 700px;
      padding: 10px;
      font-size: 2rem;
   }

   p::before {
      content: ">  ";
   }

   span {
      cursor: pointer;
   }

   .disabled {
      cursor: default;
   }
</style>
