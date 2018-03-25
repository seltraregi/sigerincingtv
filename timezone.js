function sortSchedule(){var $table=$('#schedule');var rows=$table.find('tr').get();rows.sort(function(a,b){var keyA=$(a).attr('data-time');var keyB=$(b).attr('data-time');if(keyA>keyB)return 1;if(keyA<keyB)return-1;return 0;});$.each(rows,function(index,row){$table.children('tbody').append(row);});}
function calcTime(time){var date=new Date(time*1000);return date;}
function currentTimezone(){var date=new Date();return date.getTimezoneOffset()/60;}
function showTime(date,seperate){var curr_hour=("0"+date.getHours()).slice(-2);var curr_minute=("0"+date.getMinutes()).slice(-2);return curr_hour+seperate+curr_minute;}
function SetTimezone(){jQuery(".time").each(function(index){var timeValue=jQuery(this).attr('data-time')
var date=calcTime(timeValue);jQuery(this).html(showTime(date,':'));});var timezone="GMT";if(currentTimezone()<0)timezone+="+"+currentTimezone()*-1;if(currentTimezone()>0)timezone+=currentTimezone()*-1;jQuery("#timezone").html(timezone);}
jQuery(document).ready(SetTimezone());$(".e_row").each(function(){if(currentTimezone()!==0){var num=parseInt($(this).attr('data-time'))+(3600*(currentTimezone()*-1));$(this).attr('data-time',num);}});sortSchedule();