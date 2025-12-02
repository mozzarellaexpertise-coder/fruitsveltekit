<script lang="ts">
  export let data;
  let fruits = data.fruits;
  let name = '';

  async function refresh() {
    const res = await fetch('/fruits');
    fruits = await res.json();
  }

  async function addFruit() {
    await fetch('/fruits', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
    name = '';
    await refresh();
  }

  async function updateFruit(id: number) {
    const newName = prompt('New name:');
    if (!newName) return;
    await fetch('/fruits', {
      method: 'PUT',
      body: JSON.stringify({ id, name: newName }),
    });
    await refresh();
  }

  async function deleteFruit(id: number) {
    if (!confirm('Delete?')) return;
    await fetch('/fruits', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    await refresh();
  }
</script>

<main class="p-10">
  <h1 class="text-3xl font-bold mb-4">Fruits CRUD 🍊</h1>

  <!-- Create -->
  <div class="flex gap-2 mb-4">
    <input
      class="border p-2 rounded"
      bind:value={name}
      placeholder="Fruit name"
    />
    <button
      on:click={addFruit}
      class="bg-green-600 text-white px-4 py-2 rounded"
    >
      Add
    </button>
  </div>

  <!-- List -->
  <ul>
    {#each fruits as fruit}
      <li class="flex gap-2 mb-2 items-center">
        <span>{fruit.name}</span>

        <button
          on:click={() => updateFruit(fruit.id)}
          class="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>

        <button
          on:click={() => deleteFruit(fruit.id)}
          class="bg-red-600 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </li>
    {/each}
  </ul>
</main>