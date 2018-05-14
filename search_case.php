<?php
/**
 * Created by PhpStorm.
 * User: Ali-Raza
 * Date: 4/25/2018
 * Time: 5:20 PM
 */





/*
 *line number 17 to 47
 * Receiving Parameter from front end form
 */
$married =$_POST['married'];
$dom =$_POST['dom'];
$father_name =$_POST['father_name'];
$father_dob =$_POST['father_dob'];
$father_current_state =$_POST['father_current_state'];
$father_state_lived_more =$_POST['father_state_lived_more'];
$mother_name =$_POST['mother_name'];
$mother_dob =$_POST['mother_dob'];
$mother_current_state =$_POST['mother_current_state'];
$mother_state_lived_more =$_POST['mother_state_lived_more'];
$child_name =$_POST['child_name'];
$child_dob =$_POST['child_dob'];
$child_current_state =$_POST['child_current_state'];
$child_state_lived_more =$_POST['child_state_lived_more'];
$custody_state =$_POST['custody_state'];
$c_date =$_POST['c_date'];
$c_given =$_POST['c_given'];
$c_court =$_POST['c_court'];
$c =$_POST['c'];
$subsequent_which_state =$_POST['subsequent_which_state'];
$s_court =$_POST['s_court'];
$s_date =$_POST['s_date'];
$sub =$_POST['sub'];
$s_favour =$_POST['s_favour'];
$status =$_POST['status'];
$pe_case =$_POST['pe_case'];
$pending_which_state =$_POST['pending_which_state'];
$pe_date =$_POST['pe_date'];
$pe_reason =$_POST['pe_reason'];
$pe_remedy =$_POST['pe_remedy'];
$pe =$_POST['pe'];
/*
 *line number 17 to 47
 * Receiving Parameter from front end form
 */

















/*
 * Applying condition manual form
*/


/*
 *checking father or child estate
 * if same adding cs_fs variable value 1
 * else 0
*/
$cs_fs=0;
if($father_current_state==$child_current_state){
    $cs_fs=1;
}



/*
 * checking mother or child estate
 * if same adding cs_ms variable value 1
 * else 0
*/
$cs_ms=0;
if($mother_current_state==$child_current_state){
    $cs_ms=1;
}


/*
 * States lived more than one year  father or child
 * if same adding fo_co variable value 1
 * else 0
*/
$fo_co=0;
if($father_state_lived_more==$child_state_lived_more){
    $fo_co=1;
}


/*
 * States lived more than one year  mother or child
 * if same adding mo_co variable value 1
 * else 0
*/
$mo_co=0;
if($mother_state_lived_more==$child_state_lived_more){
    $mo_co=1;

}


/*
 * Checking pending state or child estate
 * if same adding cs_pe variable value 1
 * else 0
*/
$cs_pe=0;
if($pending_which_state==$child_current_state){
    $cs_pe=1;
}



/*
 * Checking pending state or father current estate
 * if same adding fs_pe variable value 1
 * else 0
*/
$fs_pe=0;
if($father_current_state==$pending_which_state){
    $fs_pe=1;

}


/*
 * Checking pending state or mother current estate
 * if same adding ms_pe variable value 1
 * else 0
*/
$ms_pe=0;
if($mother_current_state==$pending_which_state){
    $ms_pe=1;
}


/*
 * Checking custody state or child current estate
 * if same adding cs_c variable value 1
 * else 0
*/
$cs_c=0;
if($child_current_state==$custody_state){
    $cs_c=1;

}





/*
 * Checking custody state or father current estate
 * if same adding fs_c variable value 1
 * else 0
*/
$fs_c=0;
if($father_current_state==$custody_state){
    $fs_c=1;

}


/*
 * Checking custody state or mother current estate
 * if same adding ms_c variable value 1
 * else 0
*/
$ms_c=0;
if($mother_current_state==$custody_state){
    $ms_c=1;

}



/*
 * Checking subsequent state or child current estate
 * if same adding cs_c variable value 1
 * else 0
*/
$cs_s=0;
if($child_current_state==$subsequent_which_state){
    $cs_s=1;

}



/*
 * Checking subsequent state or father current estate
 * if same adding fs_c variable value 1
 * else 0
*/
$fs_s=0;
if($father_current_state==$subsequent_which_state){
    $fs_s=1;

}


/*
 * Checking subsequent state or mother current estate
 * if same adding ms_c variable value 1
 * else 0
*/
$ms_s=0;
if($mother_current_state==$subsequent_which_state){
    $ms_s=1;

}


/*
 * Database Connectivity
 *
*/
require 'config.php';
$db=new db();
$db=$db->connect();




/*
 * Fetch All Records from the database
*/
$qry_get = "SELECT * FROM `tbl_case`";
$stmt =$db->prepare($qry_get);
$stmt->execute();
$data_cases =$stmt->fetchAll(PDO::FETCH_OBJ);

$array_top=array();// this variable hold top showing values like 0,1,0,0,1,1,1
$percentage_limit_find =0;//this variable holding percentage total
foreach($data_cases as $data_case){ // loop start get data from the db one by one


    /*
     * line number 266 to 452
     *Here Repeat same condition like top
     * here we applying a condition checking search value and db record are same or not
     * if db record matching search field both are same  percentage_limit_find variable hold 5 points every time
     * else not match percentage_limit_find  add 0
     * and array_top variable holding 1 if both match else 0
    */

    if($data_case->case_status==$status) {
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->cs_fs==$cs_fs){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->cs_ms==$cs_ms){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->fo_co==$fo_co){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->mo_co==$mo_co){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->cs_pe==$cs_pe){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->fs_pe==$fs_pe){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->ms_pe==$ms_pe){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->cs_c==$cs_c){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->fs_c==$fs_c){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->ms_c==$ms_c){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->cs_s==$cs_s){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->fs_s==$fs_s){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->ms_s==$ms_s){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->c==$c){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->sub==$sub){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }
    if(strcasecmp($data_case->c_given,$c_given)==0){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->pe==$pe){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if(strcasecmp($data_case->pe_case,$pe_case)== 0){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->pe_reason==$pe_reason){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if($data_case->pe_remedy==$pe_remedy){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }

    if(strcasecmp($data_case->c_court,$c_court)== 0){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }


    if(strcasecmp($data_case->s_court,$s_court)== 0){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }
    if(strcasecmp($data_case->s_favour,$s_favour)== 0){
        $percentage_limit_find +=5;
        $array_top[]=1;
    }
    else{
        $array_top[]=0;
    }



    $percentage=($percentage_limit_find*100)/120;//getting percentage correct answer
    $result_data=array();// holding records for front end showing
    if($percentage>=84){//if search case 70% match
        $result_data[]= array('s_court'=>$data_case->s_court ,'s_date'=>$data_case->s_date ,'child_name'=>$data_case->child_name,'mother_name'=>$data_case->mother_name,'father_name'=>$data_case->father_name,'percentage'=>round($percentage),'file'=>$data_case->file_path);
    }
    $percentage_limit_find=0;//return initialize
    $percentage=0;//return initialize
}
$string = rtrim(implode(',', $array_top), ',');// top array show value separate by comma
echo $string;// result show on top

?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!------ Include the above in your HEAD tag ---------->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>





    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">



    <style>
        .panel-table .panel-body{
            padding:0;
        }

        .panel-table .panel-body .table-bordered{
            border-style: none;
            margin:0;
        }

        .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
            text-align:center;
            width: 100px;
        }

        .panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
        .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
            border-right: 0px;
        }

        .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
        .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
            border-left: 0px;
        }

        .panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{
            border-bottom: 0px;
        }

        .panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{
            border-top: 0px;
        }

        .panel-table .panel-footer .pagination{
            margin:0;
        }

        /*
        used to vertically center elements, may need modification if you're not using default sizes.
        */
        .panel-table .panel-footer .col{
            line-height: 34px;
            height: 34px;
        }

        .panel-table .panel-heading .col h3{
            line-height: 30px;
            height: 30px;
        }

        .panel-table .panel-body .table-bordered > tbody > tr > td{
            line-height: 34px;
        }


    </style>
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <br /><br /><br />
            <div class="panel panel-default panel-table">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col col-xs-6">
                            <h3 class="panel-title">Related Cases</h3>
                        </div>
                        <div class="col col-xs-6 text-right">
                            <a href="index.php" class="btn btn-sm btn-info btn-create"><i class="fa fa-chevron-circle-left  "></i> Back</a>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <table class="table table-striped table-bordered table-list">
                        <thead>
                        <tr>
                            <th><em class="fa fa-download"></em></th>
                            <th>Name </th>
                            <th>Court</th>
                            <th>Date</th>
                            <th>Related Per %</th>
                        </tr>
                        </thead>
                        <tbody>

                        <?php

                        /*
                         * $result_data variable holding 70% and above Record
                         * */
                        if(count($result_data)>0){
                            foreach($result_data as $data_case):?>


                                <tr>
                                    <td align="center">
                                        <a class="btn btn-success" href="<?=$data_case['file']?>"><em class="fas fa-cloud-download-alt"></em></a>
                                    </td>
                                    <td><?=$data_case['father_name']?>,<?=$data_case['mother_name']?>,<?=$data_case['child_name']?></td>
                                    <td><?=$data_case['s_court']?></td>
                                    <td><?=$data_case['s_date']?></td>
                                    <td><?=$data_case['percentage']?>%</td>
                                </tr>

                            <?php endforeach;
                        }
                        else{
                            echo '<tr><td align="center" colspan="5">Not Found Any Case Related This</td></tr>';
                        }

                        ?>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    </div>
</div>


</body>
</html>




