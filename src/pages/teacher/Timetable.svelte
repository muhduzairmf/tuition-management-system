<script>
    import NavTeacher from "../../components/NavTeacher.svelte";
    import BasicHeader from "../../components/BasicHeader.svelte";
</script>

<NavTeacher />
<BasicHeader title="Subject Timetable" />
<br><br>
<section class="container">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
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
                        <td class="bg-primary">MATH (F1-F3)</td>
                        <td>BIO (F4-F5)</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td> - </td>
                        <td> - </td>
                        <td>BM (F1-F3)</td>
                        <td class="bg-primary">ADD MATH (F4-F5)</td>
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
    </div>
</section>
