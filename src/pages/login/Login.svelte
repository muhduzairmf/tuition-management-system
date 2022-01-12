<script>
    import NavStudent from "../../components/NavStudent.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";
    import ErrorLogin from "../../components/ErrorLogin.svelte";
    import { msgErr, Users } from "../../stores";

    let email = '';
    let password = '';
    let isError = true;
    
    let users = $Users
    const handleSubmit = () => {
        
        users.forEach(user => {
            if (email === user.email && password === user.password) {
                isError = false;
                window.location.href = `/${user.role}`;
                email = '';
                password = '';
            }
        });
        
        if (isError === true) {
            $msgErr.displayErr = true;
            email = '';
            password = '';
        }
    }
</script>

<NavStudent />
<BasicHeader title="Login to dashboard" />
<section class="container">
    <div class="columns">
        <div class="column col-4 col-sm-12 col-mx-auto">
            <br><br>
            {#if $msgErr.displayErr}
                <ErrorLogin />
            {/if}
            <br><br>
            <form class="form-horizontal my-2" on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="email">Email</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="email" bind:value={email} id="email" class="form-input" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="password">Password</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="password" bind:value={password} id="password" class="form-input" placeholder="Password" autocomplete="current-password">
                    </div>
                </div>
                <p class="text-right">
                    <button class="btn btn-primary" type="submit">Log in</button>
                </p>
            </form>
        </div>
    </div>
</section>
