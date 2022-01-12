<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    let listStudent = false;
    const filterCats = () => {
        listStudent = true;
    }

    let students = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>

<NavClerk />
<BasicHeader title="Student fee status" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <form action="" on:submit|preventDefault={filterCats} class="form-horizontal">
                <div class="form-group">
                    <div class="col-3">
                        <label for="months" class="form-label">Choose month</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="months" class="form-select">
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
                        <label for="years" class="form-label">Choose year</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="years" class="form-select">
                            <option value="">Choose an option</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="cats" class="form-label">Choose student list category</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="cats" class="form-select">
                            <option value="">Choose an option</option>
                            <option value="">Standard 4-6</option>
                            <option value="">Form 1-3</option>
                            <option value="">Form 4-5</option>
                        </select>
                    </div>
                </div>
                <br>
                <p class="text-right">
                    <button class="btn btn-primary" type="submit">Apply</button>
                </p>
            </form>
            <br><br>
            {#if listStudent === true}
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>IC Number</th>
                        <th>Attend</th>
                    </tr>
                </thead>
                <tbody>
                    {#each students as s}
                    <tr>
                        <td>{s}</td>
                        <td>James Bond</td>
                        <td>070707-07-0707</td>
                        <td>
                            <div class="form-group">
                                {#if s === 3 || s === 6 || s === 9}
                                <label class="form-switch">
                                    <input type="checkbox" checked>
                                    <i class="form-icon"></i>
                                </label>
                                {:else}
                                <label class="form-switch">
                                    <input type="checkbox">
                                    <i class="form-icon"></i>
                                </label>
                                {/if}
                            </div>
                        </td>
                    </tr> 
                    {/each}
                </tbody>
            </table>
            {/if}
            <br><br><br>
        </div>
    </div>
</section>
