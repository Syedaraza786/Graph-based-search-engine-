<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="assets/css/wizard-style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">-->
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">

            <form id="wizard_example_6" action="search_case.php" method="post">
                <fieldset>
                    <legend>Family Information</legend>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="col-md-4 col-md-offset-4 text-center">
                                <div class="form-group">
                                    <label>Married</label><br/>

                                    <div class="" style="display: inline-block">
                                        <label for="married-yes">
                                            <input type="radio" value="1" id="married-yes" name="married"
                                                   data-parsley-group="block0"
                                                >Yes
                                        </label>
                                    </div>
                                    <div class="" style="display: inline-block">
                                        <label for="married-no">
                                            <input type="radio" value="0" name="married" id="married-no"
                                                   data-parsley-group="block0"
                                                >No
                                        </label>
                                    </div>
                                </div>

                                <div id="marriaged_date_boxes">
                                    <div class="form-group " id="">
                                        <label for="marriage_date">Date of marriage</label>
                                        <input type="date" class="form-control" name="dom" id="marriage_date"
                                               placeholder="Date" data-parsley-group="block0">
                                    </div>
                                </div>


                                <div class="form-group " id="">
                                    <label for="marriage_date">Status</label>
                                    <select class="form-control" name="status">
                                        <option>Win</option>
                                        <option>Lost</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">


                            <h4>Father Information</h4>

                            <div class="form-group">
                                <label for="father_name">Name of Father</label>
                                <input type="text" name="father_name" class="form-control" id="father_name"
                                       placeholder="Enter Father Name" data-parsley-group="block0">
                            </div>

                            <div class="form-group">
                                <label for="date_of_birth_father">Date of birth </label>
                                <input type="date" name="father_dob" class="form-control"
                                       id="date_of_birth_father"
                                       placeholder="Date of birth " data-parsley-group="block0">
                            </div>

                            <div class="form-group">
                                <label for="father_current_state">Current State </label>
                                <select name="father_current_state" class="form-control" id="father_current_state">
                                    <option value="">Choose</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>States lived more than one year </label>
                                <br/>

                                <div class="" style="display: inline-block">
                                    <label for="father_state_lived_more_yes">
                                        <input type="radio" value="1" id="father_state_lived_more_yes"
                                               name="father_state_lived_more" data-parsley-group="block0"
                                            >Yes
                                    </label>

                                </div>
                                <div class="" style="display: inline-block">
                                    <label for="father_state_lived_more_no">

                                        <input type="radio" value="0" name="father_state_lived_more"
                                               id="father_state_lived_more_no" data-parsley-group="block0"
                                            >No
                                    </label>
                                </div>
                            </div>


                        </div>
                        <div class="col-lg-6">


                            <h4>Mother Information</h4>

                            <div class="form-group">
                                <label for="mother_name">Name of Mother</label>
                                <input type="text" name="mother_name" class="form-control" id="mother_name"
                                       placeholder="Enter Mother Name" data-parsley-group="block0">
                            </div>

                            <div class="form-group">
                                <label for="date_of_birth_mother">Date of birth </label>
                                <input type="date" name="mother_dob" class="form-control"
                                       id="date_of_birth_mother"
                                       placeholder="Date of birth " data-parsley-group="block0">
                            </div>

                            <div class="form-group">
                                <label for="mother_current_state">Current State </label>
                                <select name="mother_current_state" class="form-control" id="mother_current_state">
                                    <option value="">Choose</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>States lived more than one year </label>
                                <br/>

                                <div class="" style="display: inline-block">
                                    <label for="mother_state_lived_more_yes">
                                        <input type="radio" value="1" id="mother_state_lived_more_yes"
                                               name="mother_state_lived_more" data-parsley-group="block0"
                                            >Yes
                                    </label>

                                </div>
                                <div class="" style="display: inline-block">
                                    <label for="mother_state_lived_more_no">

                                        <input type="radio" value="0" name="mother_state_lived_more"
                                               id="mother_state_lived_more_no" data-parsley-group="block0"
                                            >No
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-12">
                            <h4>Child Information</h4>

                            <div class="form-group">
                                <label for="mother_name">Name of Child</label>
                                <input type="text" name="child_name" class="form-control" id="child_name"
                                       placeholder="Enter Child Name" data-parsley-group="block0">
                            </div>


                            <div class="form-group">
                                <label for="date_of_birth_child">Date of birth </label>
                                <input type="date" name="child_dob" class="form-control"
                                       id="date_of_birth_child"
                                       placeholder="Date of birth " data-parsley-group="block0">
                            </div>


                            <div class="form-group">
                                <label for="child_current_state">Current State </label>
                                <select name="child_current_state" class="form-control" id="child_current_state">
                                    <option value="">Choose</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>States lived more than one year </label>
                                <br/>

                                <div class="" style="display: inline-block">
                                    <label for="child_state_lived_more_yes">
                                        <input type="radio" value="1" id="child_state_lived_more_yes"
                                               name="child_state_lived_more" data-parsley-group="block0"
                                            >Yes
                                    </label>

                                </div>
                                <div class="" style="display: inline-block">
                                    <label for="child_state_lived_more_no">

                                        <input type="radio" value="0" name="child_state_lived_more"
                                               id="child_state_lived_more_no" data-parsley-group="block0"
                                            >No
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </fieldset>


                <fieldset>
                    <legend>Custody Information</legend>

                    <div class="col-md-6">

                        <div class="form-group">
                            <label for="c">Was there a custody case Filed before?</label><br/>
                            <select id="c" name="c"
                                    class="form-control" data-parsley-group="block0">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>


                        <div class="form-group">
                            <label for="custody_state">Which State was it filed?</label>
                            <select name="custody_state" class="form-control" id="custody_state" data-parsley-group="block1">
                                <option value="">Choose</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                            </select>
                        </div>


                        <div class="form-group">
                            <label for="which_date_was_it_filed">Which Date was it filed?</label>
                            <input type="date" name="c_date" class="form-control"
                                   id="which_date_was_it_filed"
                                   placeholder="Enter" data-parsley-group="block1">
                        </div>
                    </div>


                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="who_was_given_custody">Who was given custody</label>
                            <select name="c_given" id="who_was_given_custody" data-parsley-group="block0"
                                    class="form-control">
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="which_court_was_the_case_done">Which court was the case done? </label>


                            <select id="which_court_was_the_case_done" name="c_court"
                                    class="form-control" data-parsley-group="block0">
                                <option value="Highcourt">High Court</option>
                                <option value="trial">Trial Appeal</option>
                            </select>

                        </div>



                    </div>


                </fieldset>

                <fieldset>
                    <legend>Subsequent Information</legend>
                    <div class="row">
                        <div class="col-md-6">


                            <div class="form-group">
                                <label for="sub">Was there a subsequent case?</label><br/>
                                <select id="sub" name="sub"
                                        class="form-control" data-parsley-group="block0">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>





                            <div class="form-group">
                                <label for="subsequent_which_state">Which State </label>
                                <select name="subsequent_which_state" class="form-control" id="subsequent_which_state" data-parsley-group="block2">
                                    <option value="">Choose</option>
                                    <option value="Alabama">Alabama</option>
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Arkansas">Arkansas</option>
                                </select>
                            </div>




                            <div class="form-group">
                                <label for="s_favour">Favour</label>
                                <select name="s_favour" id="s_favour"
                                        class="form-control">
                                    <option value="mother">Mother</option>
                                    <option value="father">Father</option>
                                </select>
                            </div>




                        </div>


                        <div class="col-md-6">

                            <div class="form-group">
                                <label for="s_date">Date of the case filed </label>
                                <input type="date" name="s_date" class="form-control"
                                       id="s_date" placeholder="Enter"
                                       data-parsley-group="block2">
                            </div>

                            <div class="form-group">
                                <label for="s_court">Which court was the case
                                    done? </label>
                                <select name="s_court"
                                        id="s_court" class="form-control">
                                    <option value="Highcourt">High Court</option>
                                    <option value="trial">Trial Appeal</option>
                                </select>
                            </div>




                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>Pending Information</legend>

                    <div class="col-md-6">




                        <div class="form-group">
                            <label for="pe">Any pending case?</label><br/>
                            <select id="pe" name="pe"
                                    class="form-control" data-parsley-group="block0">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>






                        <div class="form-group">
                            <label for="pe_case">By whom the case is pending</label>
                            <select name="pe_case" id="pe_case"
                                    class="form-control">
                                <option value="mother">Mother</option>
                                <option value="father">Father</option>
                            </select>
                        </div>







                        <div class="form-group">
                            <label for="pending_which_state">Which State </label>
                            <select name="pending_which_state" class="form-control" id="pending_which_state" data-parsley-group="block3">
                                <option value="">Choose</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                            </select>
                        </div>





                    </div>


                    <div class="col-md-6">


                        <div class="form-group">
                            <label for="pe_date">Which the Date was it filed?</label>
                            <input type="date" name="pe_date" class="form-control"
                                   id="pe_date" placeholder="Enter"
                                   data-parsley-group="block3">
                        </div>




                        <div class="form-group">
                            <label for="pe_reason">What were the grounds of being
                                pending?</label>
                            <select name="pe_reason" class="form-control"
                                    id="pe_reason" data-parsley-group="block3">
                                <option value="1">No Proper filling</option>
                                <option  value="2">Less information</option>
                                <option  value="3">Family not attending the haring</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="pe_remedy">What remedy the party seeking?</label>
                            <select data-parsley-group="block3" class="form-control" name="pe_remedy" id="pe_remedy">
                                <option  value="0">Compromise btw the party</option>
                                <option value="1">Compromise in money value for
                                    child help</option>
                            </select>
                        </div>




                    </div>

                    <noscript>
                        <input class="nocsript-finish-btn sf-right nocsript-sf-btn" type="submit"
                               value="finish"/>
                    </noscript>
                </fieldset>
            </form>
        </div>
    </div>
</div>
</body>


<script src="assets/js/wizard-script.js"></script>
<script src="assets/js/wizard-bootstrap.js"></script>


<script>


//    Married radio sliding code
    $("#married-yes , #married-no").on('change', function () {
        married_box();


    });
    married_box();

    function married_box() {
        var val = $('input[name=married]:checked').val();

        if (val ==1) {
            $("#marriaged_date_boxes").slideDown("slow");
        } else {
            $("#marriaged_date_boxes").slideUp("slow");
        }
    }

</script>

</html>