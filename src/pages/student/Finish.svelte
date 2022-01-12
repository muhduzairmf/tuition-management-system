<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavStudent from "../../components/NavStudent.svelte";

    const register = () => {
        window.location.href = '/student/register/success';
    }
</script>

<NavStudent />
<BasicHeader title="Register new student: Finish" />
<section class="container py-2">
    <div class="columns">
        <div class="column col-6 col-sm-11 col-mx-auto">
            <br><br>
            <h5>Student Information</h5>
            <hr>
            <div class="columns">
                <div class="column col-3">Full Name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; James Bond
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">IC Number</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; 070707-07-0707
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Age</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; 15
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Phone Number</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; +11 1111 1111
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Email</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; james@email.com
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Category of study</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Form 1-3
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Parent Name</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Jack Bond
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Parent Phone Number</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; +11 2222 2222
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">Home Address</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; New York City
                </div>
            </div>
            <div class="columns">
                <div class="column col-3">School Address</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; SK New York City
                </div>
            </div>
            <br><br>
            <h5>Subject to take</h5>
            <hr>
            <ol>
                <li>&nbsp;&nbsp;&nbsp;&nbsp; English</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp; Mathematics</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp; Science</li>
            </ol>
            <br><br>
            <h5>Payment method for initial fee</h5>
            <hr>
            <div class="columns">
                <div class="column col-3">Method</div>
                <div class="column col-9">
                    :&nbsp;&nbsp;&nbsp;&nbsp; Cash
                </div>
            </div>
            <br><br>
            <h5>Confirmation</h5>
            <hr>
            <p>Please confirm to the clerk on duty of your registration. After the clerk confirm the registration, you can officially become our students by submitting this registration form.</p>
            <br><br>
            <p class="text-right">
                <a href="/student/register/step-3" class="btn">Back</a>
                <button class="btn btn-primary" on:click={register}>Submit</button>
            </p>
        </div>
    </div>
</section>
