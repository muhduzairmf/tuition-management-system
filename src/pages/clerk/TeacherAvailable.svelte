<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";
</script>

<NavClerk />
<BasicHeader title="Teacher availability" />
<section class="container"><br><br>
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <h5>Subject Information</h5>
            <hr>
            <div class="columns">
                <div class="column col-3">Subject name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Mathematics (Standard 4-6)
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Day</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Monday
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Preferred time</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; 8.00 PM
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Subject name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Mathematics
                </div>
            </div>
            <br><br>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Teacher</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mr. Chong</td>
                        <td>Not Available</td>
                    </tr>
                    <tr>
                        <td>Ms. Aqila</td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>Mr. Puvaan</td>
                        <td><em>Not confirmed</em></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
