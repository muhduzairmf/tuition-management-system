<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    let salaryRecord = false;
    const generateSalary = () => {
        salaryRecord = true;
    }

    let teachers = ['Mr. Chong', 'Ms. Aqila', 'Mr. Puvaan', 'Mr. Ben', 'Mrs. Jane', 'Mr. Ali']
</script>

<NavClerk />
<BasicHeader title="Teacher salary status" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <h5 class="text-center">Generate Teacher salary</h5>
            <hr><br>
            <form action="" on:submit|preventDefault={generateSalary} class="form-horizontal">
                <div class="form-group">
                    <div class="col-3">
                        <label for="teacher" class="form-label">Select Teacher</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="teacher" class="form-select">
                            <option value="">Choose an option</option>
                            {#each teachers as teacher}
                            <option value={teacher}>{teacher}</option>
                            {/each}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="month" class="form-label">Select Month</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="month" class="form-select">
                            <option value="">Choose an option</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="grosspay" class="form-label">Gross Pay</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-input">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="bonus" class="form-label">Bonus</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-input">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="kwsp" class="form-label">KWSP</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-input">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="socso" class="form-label">SOCSO</label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-input">
                    </div>
                </div>
                <br>
                <p class="text-right">
                    <button class="btn btn-primary" type="submit">Generate</button>
                </p>
            </form>
            <br><br>
            {#if salaryRecord === true}
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
                <button class="btn btn-primary">Request Approval to Manager</button>
            </p>
            {/if}
            <br><br>
        </div>
    </div>
</section>

<style>
    .shadow {
        box-shadow: 2px 4px 1px 1px rgb(240, 240, 240);
    }
</style>
