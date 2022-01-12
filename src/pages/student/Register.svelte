<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavStudent from "../../components/NavStudent.svelte";

</script>

<NavStudent />
<BasicHeader title="Register new student" />
<section class="hero hero-sm py-2">
    <div class="columns">
        <div class="column col-6 col-sm-11 col-mx-auto text-center">
            <div class="container">
                <br>
                <h3><strong>Step 1</strong></h3>
                <hr>
                <p>Fill the form that contains information below : </p>
                <ol>
                    <li>Full Name</li>
                    <li>IC Number</li>
                    <li>Age</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                    <li>Category of Study</li>
                    <li>Parent Name</li>
                    <li>Parent Phone Number</li>
                    <li>Home Address</li>
                    <li>School Address</li>
                </ol>
                <br>
            </div>
            <div class="container">
                <br>
                <h3><strong>Step 2</strong></h3>
                <hr>
                <p>Choose the subject to take</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Category of Study</th>
                            <th>Promoted Subjects</th>
                        </tr>
                        <tr>
                            <td>Standard 4-6</td>
                            <td>Bahasa Melayu, English, Science, Mathematics</td>
                        </tr>
                        <tr>
                            <td>Form 1-3</td>
                            <td>Bahasa Melayu, English, Science, Mathematics</td>
                        </tr>
                        <tr>
                            <td>Form 4-5</td>
                            <td>Biology, Chemistry, Physics, Add Maths, Accounting Principles</td>
                        </tr>
                    </tbody>
                </table>
                <br><br>
                <p class="text-center">Timetable</p>
                <table class="table table-hover table-striped table-scroll">
                    <thead>
                        <tr>
                            <th>Day/Time</th>
                            <th>11.00 AM - 12.00 PM</th>
                            <th>12.00 PM - 1.00PM</th>
                            <th>8.00 PM - 9.00 PM</th>
                            <th>9.00 PM - 10.00 PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sunday</td>
                            <td>BM (S4-S6)</td>
                            <td> - </td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td> - </td>
                            <td> - </td>
                            <td>MATH (F1-F3)</td>
                            <td>BIO (F4-F5)</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td> - </td>
                            <td> - </td>
                            <td>BM (F1-F3)</td>
                            <td>ADD MATH (F4-F5)</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td> - </td>
                            <td> - </td>
                            <td>ENG (S4-S6)</td>
                            <td>SCI (F1-F3)</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td> - </td>
                            <td> - </td>
                            <td>PHY (F4-F5)</td>
                            <td>ENG (F1-F3)</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td> - </td>
                            <td> - </td>
                            <td>CHEM (F4-F5)</td>
                            <td>SCI (S4-S6)</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>MATH (S4-S6)</td>
                            <td>ACC (F4-F5)</td>
                            <td> - </td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container">
                <br>
                <h3><strong>Step 3</strong></h3>
                <hr>
                <p>Choose the payment method to pay initial fee</p>
                <p><strong>If you choose to cash/hands-on payment,</strong> please meet the clerk on duty to pay.</p>
                <p><strong>If you choose online banking,</strong> please include the PDF or image of receipt/transaction proof.<br> Please transfer to the 5555-55-555 (CIMB Bank)</p>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Category of Study</th>
                            <th>Fee charge</th>
                        </tr>
                        <tr>
                            <td>Standard 4-6</td>
                            <td>2 subjects = RM90, 3 subjects = RM110, 4 subjects = RM130</td>
                        </tr>
                        <tr>
                            <td>Form 1-3</td>
                            <td>2 subjects = RM100, 3 subjects = RM120, 4 subjects = RM140</td>
                        </tr>
                        <tr>
                            <td>Form 4-5</td>
                            <td>RM50 for each subject</td>
                        </tr>
                    </tbody>
                </table>
                <br>
            </div>
            <div class="container">
                <br>
                <h3><strong>Finish</strong></h3>
                <hr>
                <p>Please ask to the clerk on duty to confirm your registration.</p>
                <br>
            </div>
            <p class="text-right">
                <a href="/student/register/step-1" class="btn btn-primary">Continue</a>
            </p>
        </div>
    </div>
</section>
