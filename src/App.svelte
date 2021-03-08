<script>
   import Toggle from "./components/Toggle.svelte";
   import Todo from "./components/Todo.svelte";
   import ToggleCompoonent from "./components/ToggleCompoonent.svelte";
</script>

<div class="container">
   <Todo />

   <br />

   <Toggle />

   <ToggleCompoonent />
</div>

<br /><br /><br /><br />

<style>
   .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
   }
</style>
