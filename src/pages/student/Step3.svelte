<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavStudent from "../../components/NavStudent.svelte";

    let methodPay = 'Cash';
</script>

<NavStudent />
<BasicHeader title="Register new student: Step 3" />
<section class="container py-2">
    <div class="columns">
        <div class="column col-6 col-sm-11 col-mx-auto">
            <form class="form-horizontal my-2">
                <div class="form-group">
                    <div class="col-6 col-sm-12">
                        <label for="methodPay" class="form-label">Payment method for initial fee</label>
                    </div>
                    <div class="col-6 col-sm-12">
                        <label class="form-radio">
                            <input type="radio" name="methodPay" bind:group={methodPay} value="Cash">
                            <i class="form-icon"></i> Cash 
                        </label>
                        <label class="form-radio">
                            <input type="radio" name="methodPay" bind:group={methodPay} value="Online banking">
                            <i class="form-icon"></i> Online banking 
                        </label>
                    </div>
                </div>
                {#if methodPay === 'Cash'}
                <div class="divider"></div>
                <p class="text-center"><strong>Cash</strong></p>
                <br>
                <p class="text-center"><strong>Please pay the initial fee to the clerk on duty</strong></p>
                {:else if methodPay === 'Online banking'}
                <div class="divider"></div>
                <p class="text-center"><strong>Online banking</strong></p>
                <div class="form-group">
                    <div class="col-6 col-sm-12">
                        <label for="onlineBanking" class="form-label">Upload the payment receipt here</label>
                    </div>
                    <div class="col-6 col-sm-12">
                        <input type="file" name="onlineBanking" id="onlineBanking">
                    </div>
                </div>
                {/if}
                <p class="text-right">
                    <a href="/student/register/step-2" class="btn">Back</a>
                    <a href="/student/register/finish" class="btn btn-primary">Finish</a>
                </p>
            </form>
        </div>
    </div>
</section>
