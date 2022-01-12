<script>
    import BasicHeader from "../../components/BasicHeader.svelte";
    import NavClerk from "../../components/NavClerk.svelte";
</script>

<NavClerk />
<BasicHeader title="Add new teacher" />
<section class="container py-2">
    <div class="columns">
        <div class="column col-6 col-mx-auto">
            <form class="form-horizontal my-2">
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="name">Name</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="text" id="name" class="form-input" placeholder="Name">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="icNumber">IC Number</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="text" id="icNumber" class="form-input" placeholder="IC Number">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="homeAddress">Home address</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <textarea id="homeAddress" class="form-input" rows="5" placeholder="Home Address"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="age">Age</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="number" max="50" id="age" class="form-input" placeholder="Age">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="phoneNum">Phone number</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="text" id="phoneNum" class="form-input" placeholder="Phone number">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="email">Email</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="email" id="email" class="form-input" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="maritalStatus">Marital status</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <label class="form-radio">
                            <input type="radio" name="maritalStatus" checked>
                            <i class="form-icon"></i> Married
                        </label>
                        <label class="form-radio">
                            <input type="radio" name="maritalStatus">
                            <i class="form-icon"></i> Not married
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="eduLevel">Education level</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input type="text" id="eduLevel" class="form-input" placeholder="Education level">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="subjects">Subject to teach</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <div class="divider text-center" data-content="STANDARD 4-6"></div>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Bahasa Melayu
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> English
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Science
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Mathematics
                        </label>
                        <div class="divider text-center" data-content="FORM 1-3"></div>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Bahasa Melayu
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> English
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Science
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Mathematics
                        </label>
                        <div class="divider text-center" data-content="FORM 4-5"></div>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Biology
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Physics
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Chemistry
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Additional Mathematics
                        </label>
                        <label class="form-switch">
                            <input type="checkbox">
                            <i class="form-icon"></i> Accounting Principles
                        </label>
                    </div>
                </div>
                <br>
                <p class="text-right">
                    <button class="btn">Cancel</button>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </p>
            </form>
        </div>
    </div>
</section>