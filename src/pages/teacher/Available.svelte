<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavTeacher from "../../components/NavTeacher.svelte";
</script>

<NavTeacher />
<BasicHeader title="Confirm Availability" />
<section class="container">
    <br><br>
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
            <br>
            <p class="text-right">
                <button class="btn">Not Available</button>
                <button class="btn btn-primary">Confirm</button>
            </p>
        </div>
    </div>
</section>
