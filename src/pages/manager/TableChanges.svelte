<script>
    import NavManager from "../../components/NavManager.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";
</script>

<NavManager />
<BasicHeader title="Approve Timetable Changes" />
<section class="container">
    <br><br>
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <h5>Subject Information</h5>
            <hr>
            <div class="columns mt-2">
                <div class="column col-3">Subject name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Mathematics (Standard 4-6)
                </div>
            </div>
            <div class="columns mt-2">
                <div class="column col-3">Day</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Monday
                </div>
            </div>
            <div class="columns mt-2">
                <div class="column col-3">Preferred time</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; 8.00 PM
                </div>
            </div>
            <div class="columns mt-2">
                <div class="column col-3">Subject name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Mathematics
                </div>
            </div>
            <div class="columns mt-2">
                <div class="column col-3">Available Teacher</div>
                <div class="column col-9">
                    <div class="form-group">
                        <select class="form-select">
                          <option>Choose an option</option>
                          <option>Ms. Aqila</option>
                          <option>Mr. Puvaan</option>
                        </select>
                      </div>
                </div>
            </div>
            <br><br>
            <p class="text-right">
                <button class="btn">Reject</button>
                <button class="btn btn-primary">Approve</button>
            </p>
        </div>
    </div>
</section>
