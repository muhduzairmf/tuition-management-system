<script>
    // Import router from Page.js
    import router from "page"

    // Home page
    //import Home from "./pages/Home.svelte";
    
    // Login
    import Login from "./pages/login/Login.svelte";

    // Student
    import Register from "./pages/student/Register.svelte";
    import Step1 from "./pages/student/Step1.svelte";
    import Step2 from "./pages/student/Step2.svelte";
    import Step3 from "./pages/student/Step3.svelte";
    import Finish from "./pages/student/Finish.svelte";
    import Success from "./pages/student/Success.svelte";

    // Teacher
    import DashboardT from "./pages/teacher/DashboardT.svelte";
    import MyStudent from "./pages/teacher/MyStudent.svelte";
    import StuAtt from "./pages/teacher/StuAtt.svelte";
    import Timetable from "./pages/teacher/Timetable.svelte";
    import SalaryHistory from "./pages/teacher/SalaryHistory.svelte";
    import ChangeT from "./pages/teacher/ChangeT.svelte";
    import AboutMeT from "./pages/teacher/AboutMeT.svelte";
    import Available from "./pages/teacher/Available.svelte";

    // Clerk
    import DashboardC from "./pages/clerk/DashboardC.svelte";
    import RegisteredStu from "./pages/clerk/RegisteredStu.svelte";
    import FeeStatus from "./pages/clerk/FeeStatus.svelte";
    import AddNewTea from "./pages/clerk/AddNewTea.svelte";
    import SalaryStatus from "./pages/clerk/SalaryStatus.svelte";
    import Adjust from "./pages/clerk/Adjust.svelte";
    import TeacherAvailable from "./pages/clerk/TeacherAvailable.svelte";
    import ChangeC from "./pages/clerk/ChangeC.svelte";
    import AboutMeC from "./pages/clerk/AboutMeC.svelte";

    // Manager
    import DashboardM from "./pages/manager/DashboardM.svelte";
    // import StudentList from "./pages/manager/StudentList.svelte";
    // import StuAttPerform from "./pages/manager/StuAttPerform.svelte";
    // import TeacherList from "./pages/manager/TeacherList.svelte";
    // import TeaAttPerform from "./pages/manager/TeaAttPerform.svelte";
    import ApproveSalary from "./pages/manager/ApproveSalary.svelte";
    // import TableWeek from "./pages/manager/TableWeek.svelte";
    // import TableSubject from "./pages/manager/TableSubject.svelte";
    import TableChanges from "./pages/manager/TableChanges.svelte";
    import ChangeM from "./pages/manager/ChangeM.svelte";
    import AboutMeM from "./pages/manager/AboutMeM.svelte";
    
    // Not Found pages
    import NotFound from "./pages/NotFound.svelte";

    let page;
    let params;
    // const getParams = (ctx, next) => {
    //     params = ctx.params;
    //     next();
    // };

    // Home
    router('/', () => {
        router.redirect('/student/register')
    })

    // Login
    router('/auth/login', () => page = Login)

    // Student
    router('/student/register', () => page = Register)
    router('/student/register/step-1', () => page = Step1)
    router('/student/register/step-2', () => page = Step2)
    router('/student/register/step-3', () => page = Step3)
    router('/student/register/finish', () => page = Finish)
    router('/student/register/success', () => page = Success)

    // Teacher
    router('/teacher', () => page = DashboardT)
    router('/teacher/myclass/student-list', () => page = MyStudent)
    router('/teacher/myclass/student-attendance', () => page = StuAtt)
    router('/teacher/myclass/subject', () => page = Timetable)
    router('/teacher/timetable/confirm-available', () => page = Available)
    router('/teacher/salary/payment-history', () => page = SalaryHistory)
    //router('/teacher/aboutme', () => page = AboutMeT)
    router('/teacher/change-password', () => page = ChangeT)
    
    // Clerk
    router('/clerk', () => page = DashboardC)
    router('/clerk/student/registered', () => page = RegisteredStu)
    router('/clerk/student/fee-status', () => page = FeeStatus)
    router('/clerk/teacher/add-new', () => page = AddNewTea)
    router('/clerk/teacher/salary-status', () => page = SalaryStatus)
    router('/clerk/timetable/adjust', () => page = Adjust)
    router('/clerk/timetable/teacher-availability', () => page = TeacherAvailable)
    //router('/clerk/aboutme', () => page = AboutMeC)
    router('/clerk/change-password', () => page = ChangeC)

    // Manager
    router('/manager', () => page = DashboardM)
    // router('/manager/student/list', () => page = StudentList)
    // router('/manager/student/attendance-perfomance', () => page = StuAttPerform)
    // router('/manager/teacher/list', () => page = TeacherList)
    // router('/manager/teacher/attendance-perfomance', () => page = TeaAttPerform)
    router('/manager/teacher/approve-salary', () => page = ApproveSalary)
    // router('/manager/timetable/by-week', () => page = TableWeek)
    // router('/manager/timetable/by-subject', () => page = TableSubject)
    router('/manager/timetable/approve-changes', () => page = TableChanges)
    //router('/manager/aboutme', () => page = AboutMeM)
    router('/manager/change-password', () => page = ChangeM)

    // Not Found
    router('/*', () => page = NotFound)

    router.start()

</script>

{#if params !== undefined}
    <svelte:component this={page} {params} />
{:else}
    <svelte:component this={page} />
{/if}
