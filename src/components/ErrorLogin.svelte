<script>
    import { msgErr } from "../stores";

    const handleClose = () => {
        $msgErr.displayErr = false;
    }
</script>

<div class="toast toast-error mx-2">
    <button class="btn btn-clear float-right" on:click={handleClose}></button>
    Login error. Please provide correct email and password.
</div>