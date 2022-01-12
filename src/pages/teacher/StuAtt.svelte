<script>
    import NavTeacher from "../../components/NavTeacher.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";
    import { Students } from "../../stores";

    let listStudent = false;
    const chosingClass = () => {
        listStudent = true;
    }

    let students = $Students
</script>

<NavTeacher />
<BasicHeader title="Student Attendance" />
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
            <div class="divider text-center" data-content="OR"></div>
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <div class="col-3">
                        <label for="classes" class="form-label">Choose replacement class</label>
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
                        <td>{(students.indexOf(s)+1)}</td>
                        <td>{s.name}</td>
                        <td>{s.icNum}</td>
                        <td>
                            <div class="form-group">
                                <label class="form-switch">
                                  <input type="checkbox">
                                  <i class="form-icon"></i>
                                </label>
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
