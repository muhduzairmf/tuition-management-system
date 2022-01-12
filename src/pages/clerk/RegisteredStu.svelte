<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    const student = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
</script>

<NavClerk />
<BasicHeader title="Registered student" />
<section class="container">
    <div class="columns">
        <div class="column col-10 col-mx-auto">
            <br><br><br>
            <h5 class="text-center"><strong>Pending List</strong></h5>
            <hr><br>
            <table class="table table-scroll table-striped table-hover">
                <thead>
                    <tr>
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
                        <th class="px-2">Payment method<br> for Initial fee</th>
                        <th class="px-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                        <td class="px-2">Cash</td>
                        <td class="px-2"><button class="btn">Remove</button>&nbsp;<button class="btn btn-primary">Confirm</button></td>
                    </tr>
                    <tr>
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
                        <td class="px-2">Cash</td>
                        <td class="px-2"><button class="btn">Remove</button>&nbsp;<button class="btn btn-primary">Confirm</button></td>
                    </tr>
                    <tr>
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
                        <td class="px-2">Online Banking<br><u class="text-primary c-hand">(receipt.pdf)</u></td>
                        <td class="px-2"><button class="btn">Remove</button>&nbsp;<button class="btn btn-primary">Confirm</button></td>
                    </tr>
                </tbody>
            </table>
            <br><br><br>
            <h5 class="text-center"><strong>Official List</strong></h5>
            <hr><br>
            <div class="columns">
                <div class="column col-4 col-mx-auto">
                    <div class="input-group">
                        <input type="text" class="form-input" placeholder="Search Student">
                        <button class="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
                    </div>
                </div>
            </div>
            <br>
            <table class="table table-scroll table-striped table-hover">
                <thead>
                    <tr>
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
                    {#each student as s}
                    <tr>
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
            <br><br><br>
        </div>
    </div>
</section>
