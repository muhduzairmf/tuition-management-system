<script>
    const logout = () => {
        window.location.href = '/auth/login'
    }
</script>

<nav class="navbar bg-primary px-2 py-2">
    <section class="navbar-section px-2 py-2">
        <a href="/teacher" class="navbar-brand text-light mr-2">Cyber Saujana Tuition</a>
    </section>
    <section class="navbar-section px-2 py-2">
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                My Class <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/teacher/myclass/subject">My Subject</a></li>
                <li class="text-dark"><a class="btn btn-link" href="/teacher/myclass/student-attendance">Student Attendance</a></li>
                <li class="text-dark"><a class="btn btn-link" href="/teacher/myclass/student-list">My Student List</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Timetable <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/teacher/timetable/confirm-available">Confirm availability</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Salary <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <li class="text-dark"><a class="btn btn-link" href="/teacher/salary/payment-history">Salary Payment History</a></li>
            </ul>
        </div>
        <div class="dropdown dropdown-right">
            <button class="btn btn-primary dropdown-toggle" tabindex="0">
                Setting <i class="icon icon-caret"></i>
            </button>
            <ul class="menu">
                <!-- <li class="text-dark"><a href="/teacher/aboutme">About me</a></li> -->
                <li class="text-dark"><a class="btn btn-link" href="/teacher/change-password">Change password</a></li>
                <li class="text-dark"><button class="btn btn-link" on:click={logout}>Logout</button></li>
            </ul>
        </div>
        <button class="btn btn-action s-circle mx-2"><i class="icon icon-people"></i></button>
        <div>Teacher</div>
    </section>
</nav>
