<script>
    import NavTeacher from "../../components/NavTeacher.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";

    let listStudent = false;
    const chosingClass = () => {
        listStudent = true;
    }

    let students = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>

<NavTeacher />
<BasicHeader title="My Student List" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <div class="col-3">
                        <label for="classes" class="form-label">Choose class</label>
                    </div>
                    <div class="col-9">
                        <select name="" id="classes" on:change={chosingClass} class="form-select">
                            <option value="">Choose an option</option>
                            <option value="">Mathematics (Form 1-3), Mon 8.00 PM</option>
                            <option value="">Additional Mathematics (Form 4-5), Tue 9.00 PM</option>
                        </select>
                    </div>
                </div>
            </form>
            <br><br>
        </div>
    </div>
</section>
<section class="container">
    <div class="columns">
        <div class="column col-9 col-mx-auto">
            {#if listStudent === true}
            <table class="table table-striped table-hover table-scroll">
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="px-2">Full Name</th>
                        <th class="px-2">IC Number</th>
                        <th class="px-2">Age</th>
                        <th class="px-2">Phone Number</th>
                        <th class="px-2">Email</th>
                        <th class="px-2">Category of study</th>
                        <th class="px-2">Parent Name</th>
                        <th class="px-2">Parent Phone Number</th>
                        <th class="px-2">Home Address</th>
                        <th class="px-2">School Address</th>
                        <th class="px-2">Subject to take</th>
                    </tr>
                </thead>
                <tbody>
                    {#each students as s}
                    <tr>
                        <td>{s}</td>
                        <td class="px-2">James Bond</td>
                        <td class="px-2">070707-07-0707</td>
                        <td class="px-2">15</td>
                        <td class="px-2">+11 1111 1111</td>
                        <td class="px-2">james@email.com</td>
                        <td class="px-2">Form 1-3</td>
                        <td class="px-2">Jack Bond</td>
                        <td class="px-2">+11 2222 2222</td>
                        <td class="px-2">New York City</td>
                        <td class="px-2">SK New York City</td>
                        <td class="px-2">English, Mathematics, Science</td>
                    </tr> 
                    {/each}
                </tbody>
            </table>
            {/if}
            <br><br><br>
        </div>
    </div>
</section>
