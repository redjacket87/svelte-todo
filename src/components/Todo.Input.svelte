<script>
    export let todos;

    const onKeyPress = (event) => {
        if (event.which === 13) {
            todos.set([...$todos, {
                checked: false,
                text: event.target.value,
                id: $todos.length ? $todos[$todos.length-1].id + 1 : 1
            }]);
            event.target.value = '';
        }
    }
</script>

<style>
    input {
        width: 100%;
        height: 40px;
        font-size: 20px;
        border: 2px solid #F16D95;
    }

    input:focus {
        background-color: #F16D95;
        border-color: #AB2B52;
        outline: 0;
    }
</style>

<input type="text" on:keypress={onKeyPress}>
