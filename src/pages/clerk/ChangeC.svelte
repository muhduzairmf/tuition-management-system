<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    let currentPassword = '';
    let newPassword = '';
    let confirmPassword = '';
    let successSave = false;

    const savePassword = () => {
        currentPassword = '';
        newPassword = '';
        confirmPassword = '';
        successSave = true;
    }
    const clearForm = () => {
        currentPassword = '';
        newPassword = '';
        confirmPassword = '';
    }
    const closeSuccess = () => {
        successSave = false;
    }
</script>

<NavClerk />
<BasicHeader title="Change password" />
<br><br>
<div class="columns">
    <div class="column col-6 col-mx-auto">
        {#if successSave === true}
            <div class="toast toast-success p-2 py-2">
                <button class="btn btn-clear float-right" on:click={closeSuccess}></button>
                Password has been successfully saved.
            </div>
            <br><br>
        {/if}
    </div>
</div>
<section class="container">
    <div class="columns">
        <div class="column col-4 col-mx-auto">
            <form action="" on:submit|preventDefault={savePassword} class="form-horizontal">
                <div class="form-group">
                    <div class="col-5">
                        <label for="currentPassword" class="form-label">Current Password</label>
                    </div>
                    <div class="col-7">
                        <input type="password" class="form-input" id="currentPassword" autocomplete="current-password" bind:value={currentPassword}>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-5">
                        <label for="newPassword" class="form-label">New Password</label>
                    </div>
                    <div class="col-7">
                        <input type="password" class="form-input" id="newPassword" autocomplete="new-password" bind:value={newPassword}>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-5">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                    </div>
                    <div class="col-7">
                        <input type="password" class="form-input" id="confirmPassword" autocomplete="new-password" bind:value={confirmPassword}>
                    </div>
                </div>
                <br>
                <p class="text-right">
                    <button type="button" class="btn" on:click={clearForm}>Clear</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </p>
            </form>
        </div>
    </div>
</section>
