<script>
    import TodoItem from './components/Todo.Item.svelte';
    import TodoInput from './components/Todo.Input.svelte';

    export let todos;

    const clearAll = () => {
        todos.set([]);
    };

    const clearDone = () => {
        const actualTasks = $todos.filter((todo) => !todo.checked);

        todos.set(actualTasks);
    }
</script>

<style>
    .layout{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    h1 {
        font-size: 30px;
        color: #333;
    }
    .container {
        border: 2px solid hotpink;
        padding: 16px;
        margin-top: 20px;
        width: 600px;
    }

    .buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        width: 200px;
        border-radius: 5px;
        font-size: 20px;
    }
</style>

<div class="layout">
    <div class="container">
        <h1>What we must do today</h1>
        <TodoInput todos={todos} />
        {#each $todos as todo}
            <TodoItem todo={todo} />
        {/each}
        {#if $todos.length}
            <div class="buttons-container">
                <button on:click={clearDone}>Clear done</button>
                <button on:click={clearAll}>Clear all</button>
            </div>
        {/if}
    </div>
</div>


