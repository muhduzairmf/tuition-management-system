<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavTeacher from "../../components/NavTeacher.svelte";
</script>

<NavTeacher />
<BasicHeader title="Salary Payment History" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <h5><strong>December 2021</strong></h5>
            <hr><br>
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
            <br><br>
            <h5><strong>November 2021</strong></h5>
            <hr><br>
            <div class="card shadow">
                <div class="card-header">
                    <div class="card-title text-center mb-2"><strong>Salary Payment Record</strong></div>
                    <div class="card-subtitle">Receiver : Mr. Ali</div>
                    <div class="card-subtitle">Month of salary : November 2021</div>
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
        </div>
    </div>
</section>
<br><br>

<style>
    .shadow {
        box-shadow: 2px 4px 1px 1px rgb(240, 240, 240);
    }
</style>
