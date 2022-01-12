<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";

    let successReq = false;
    const closeSuccess = () => {
        successReq = false;
    }

    let displayTeacher = false;
    const matchTeacher = () => {
        displayTeacher = true;
    }

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let selectedDay;
    let timeClass = [];

    const changingDay = () => {
        if (selectedDay === 'Sunday' || selectedDay === 'Saturday') {
            timeClass = ['11.00 AM', '12.00 PM']
            console.log(selectedDay);
        } else {
            timeClass = ['8.00 PM', '9.00 PM']
            console.log(selectedDay);
        }
    }

    const requestChange = () => {
        successReq = true;
    }

</script>

<NavClerk />
<BasicHeader title="Adjust timetable" />
<br><br>
{#if successReq === true}
<div class="columns">
    <div class="column col-6 col-mx-auto">
        <div class="toast toast-success">
            <button class="btn btn-clear float-right" on:click={closeSuccess}></button>
            The request to change timetable is successfully submitted.
        </div>
    </div>
</div>
{/if}
<br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <br><br>
            <form on:submit|preventDefault={requestChange} class="form-horizontal my-2">
                <div class="form-group">
                    <div class="col-3">
                        <label for="subjects" class="form-label">Select subject</label>
                    </div>
                    <div class="col-9">
                        <div class="form-group">
                            <select class="form-select" id="subjects" on:change={matchTeacher}>
                                <option selected>Choose an option</option>
                                <option>Bahasa Melayu (Standard 4-6)</option>
                                <option>English (Standard 4-6)</option>
                                <option>Mathematics (Standard 4-6)</option>
                                <option>Science (Standard 4-6)</option>
                                <option>Bahasa Melayu (Form 1-3)</option>
                                <option>English (Form 1-3)</option>
                                <option>Mathematics (Form 1-3)</option>
                                <option>Science (Form 1-3)</option>
                                <option>Biology (Form 4-5)</option>
                                <option>Physics (Form 4-5)</option>
                                <option>Chemistry (Form 4-5)</option>
                                <option>Additional Mathematics (Form 4-5)</option>
                                <option>Accounting Principles (Form 4-5)</option>
                            </select>
                          </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="days" class="form-label">Select day</label>
                    </div>
                    <div class="col-9">
                        <div class="form-group">
                            <select bind:value={selectedDay} on:change={changingDay} class="form-select" id="days">
                                <option selected>Choose an option</option>
                                {#each days as day}
                                    <option value={day}>{day}</option>
                                {/each}
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="times" class="form-label">Select preferred time</label>
                    </div>
                    <div class="col-9">
                        <select id="times" class="form-select">
                            <option selected>Choose an option</option>
                            {#each timeClass as time}
                                <option value={time}>{time}</option>
                            {/each}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3">
                        <label for="teachers" class="form-label">Request teacher availability</label>
                    </div>
                    <div class="col-9">
                        {#if displayTeacher === true}
                        <div class="form-group">
                            <label class="form-switch">
                                <input type="checkbox">
                                <i class="form-icon"></i> Mr. Chong
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-switch">
                                <input type="checkbox">
                                <i class="form-icon"></i> Ms. Aqila
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="form-switch">
                                <input type="checkbox">
                                <i class="form-icon"></i> Mr. Puvaan
                            </label>
                        </div>
                        {/if}
                    </div>
                </div>
                <br>
                <p class="text-right">
                    <button type="submit" class="btn btn-primary">Request changes</button>
                </p>
            </form>
        </div>
    </div>
</section>
