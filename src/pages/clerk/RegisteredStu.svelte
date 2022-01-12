<script>
    import { Students } from "../../stores";
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    const students = $Students
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
                        <td class="px-2">Alex Marlon</td>
                        <td class="px-2">080707-08-0707</td>
                        <td class="px-2">15</td>
                        <td class="px-2">+11 1133 3311</td>
                        <td class="px-2">alex@email.com</td>
                        <td class="px-2">Form 1-3</td>
                        <td class="px-2">Larry Marlon</td>
                        <td class="px-2">+11 4222 4222</td>
                        <td class="px-2">Cape Town</td>
                        <td class="px-2">SMK Cape Town</td>
                        <td class="px-2">English, Mathematics, Science</td>
                        <td class="px-2">Cash</td>
                        <td class="px-2"><button class="btn">Remove</button>&nbsp;<button class="btn btn-primary">Confirm</button></td>
                    </tr>
                    <tr>
                        <td class="px-2">Marie Larrson</td>
                        <td class="px-2">070404-04-0708</td>
                        <td class="px-2">15</td>
                        <td class="px-2">+11 2223 3322</td>
                        <td class="px-2">marie@email.com</td>
                        <td class="px-2">Form 1-3</td>
                        <td class="px-2">Joe Larrson</td>
                        <td class="px-2">+11 4333 6356</td>
                        <td class="px-2">Helsinki</td>
                        <td class="px-2">SK Helsinki</td>
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
                        <th class="px-2">#</th>
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
                        <td class="px-2">{(students.indexOf(s)+1)}</td>
                        <td class="px-2">{s.name}</td>
                        <td class="px-2">{s.icNum}</td>
                        <td class="px-2">{s.age}</td>
                        <td class="px-2">{s.phoneNumber}</td>
                        <td class="px-2">{s.email}</td>
                        <td class="px-2">{s.category}</td>
                        <td class="px-2">{s.pName}</td>
                        <td class="px-2">{s.pPhoneNum}</td>
                        <td class="px-2">{s.homeAddr}</td>
                        <td class="px-2">{s.schoolAddr}</td>
                        <td class="px-2">English, Mathematics, Science</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            <br><br><br>
        </div>
    </div>
</section>
