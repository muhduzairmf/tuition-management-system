<script>
    import NavManager from "../../components/NavManager.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";

    let isApprove = false;
    let isReject = false;
    let card = true;

    const approving = () => {
        isApprove = ! isApprove
    }
    const rejecting = () => {   
        isReject = ! isReject
        card = false;
    }
    
</script>

<NavManager />
<BasicHeader title="Approve Teacher Salary" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            {#if isApprove === true}
            <div class="toast toast-success">
                <button class="btn btn-clear float-right" on:click={approving}></button>
                The salary payment record has been approved.
            </div>
            <br><br>
            {/if}
            {#if isReject === true}
            <div class="toast toast-success">
                <button class="btn btn-clear float-right" on:click={rejecting}></button>
                The salary payment record has been rejected.
            </div>
            <br><br>
            {/if}
            {#if card === true}
            <div class="card shadow">
                <div class="card-header">
                    <div class="card-title text-center mb-2"><strong>Salary Payment Record</strong></div>
                    <div class="card-subtitle">Receiver : Mr. Ali</div>
                    <div class="card-subtitle">Month of salary : December 2021</div>
                    <div class="card-subtitle">Position : Teacher/Tutor</div>
                    <div class="card-subtitle">Subject to teach : Mathematics and Additional Mathematics</div>
                </div>
                <div class="card-body">
                    <div class="columns">
                        <div class="column">
                            Gross Pay : RM 1700.00
                            <br>Perfomance Allowance: RM 200.00 (100%)
                            <br>Bonus : RM 0
                        </div>
                        <div class="divider-vert"></div>
                        <div class="column">
                            KWSP : RM 100.00
                            <br>SOCSO : RM 100.00
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns">
                        <div class="column col-6 col-mx-auto">
                        <p class="text-right">TOTAL PAY: RM 1700.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <p class="text-right">
                <button class="btn" on:click={rejecting}>Reject</button>
                <button class="btn btn-primary" on:click={approving}>Approve</button>
            </p>
            {/if}
        </div>
    </div>
</section>

<style>
    .shadow {
        box-shadow: 2px 4px 1px 1px rgb(240, 240, 240);
    }
</style>
