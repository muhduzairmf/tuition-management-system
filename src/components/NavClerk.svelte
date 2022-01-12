<script>
    const logout = () => {
        window.location.href = '/auth/login'
    }
</script>

<nav class="navbar bg-primary px-2 py-2">
    <section class="navbar-section px-2 py-2">
        <a href="/clerk" class="navbar-brand text-light mr-2">Cyber Saujana Tuition</a>
    </section>
    <section class="navbar-section px-2 py-2">
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Student <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/clerk/student/registered">Register List</a></li>
                <li class="text-dark"><a class="btn btn-link" href="/clerk/student/fee-status">Fee Payment</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Teacher <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/clerk/teacher/add-new">Add New</a></li>
                <li class="text-dark"><a class="btn btn-link" href="/clerk/teacher/salary-status">Salary Payment</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Timetable <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/clerk/timetable/adjust">Adjust Timetable</a></li>
                <li class="text-dark"><a class="btn btn-link" href="/clerk/timetable/teacher-availability">Check Teacher<br>Availability</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Setting <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <!-- <li class="text-dark"><a href="/clerk/aboutme">About me</a></li> -->
                <li class="text-dark"><a class="btn btn-link" href="/clerk/change-password">Change password</a></li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <li class="text-dark"><button class="btn btn-link" on:click={logout}>Logout</button></li>
            </ul>
        </div>
        <button class="btn btn-action s-circle mx-2"><i class="icon icon-people"></i></button>
        <div>Clerk</div>
    </section>
</nav>
