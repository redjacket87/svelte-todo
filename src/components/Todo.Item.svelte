<script>
    export let todo;

    const onCheckboxChange = () => {
        todo.checked = !todo.checked;
    }
</script>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 16px 0 16px;
    }

    label {
        cursor: pointer;
    }

    input {
        margin: 0;
        cursor: pointer;
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .input-container {
        display: block;
        position: relative;
        padding-left: 50px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .input-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #F16D95;
    }

    .input-container:hover input ~ .checkmark {
        background-color: #F13C73;
    }

    .input-container input:checked ~ .checkmark {
        background-color: #AB2B52;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .input-container input:checked ~ .checkmark:after {
        display: block;
    }

    .input-container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>

<div>
    <label class="input-container">{todo.text}
        {#if todo.checked}
            <input type="checkbox" checked id={`todo-${todo.id}`} data-id={todo.id} on:change={onCheckboxChange}>
        {:else}
            <input type="checkbox" id={`todo-${todo.id}`} on:change={onCheckboxChange}>
        {/if}
        <span class="checkmark"></span>
    </label>
</div>
