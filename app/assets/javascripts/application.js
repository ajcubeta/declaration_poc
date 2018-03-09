// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.placeholder
//= require declaration
//= require_tree

(function($) {
  var Declaration = {};

  $('.timesheet td.remark textarea').on('keyup', function() {
    var value = $(this).val();
    var name = $(this).attr('name');
    $('textarea[name="' + name + '"]').val(value)
  })

  $('input, textarea').placeholder();

  $('.js-got-it').click(function (e) {
    e.preventDefault();
    $.post('/feature_tours/2015-Nov-Timesheet-working-hour-feature/got_it');

    $('.dropdown-menu--tstip').remove();
  });

  Jobline.secondaryNav = {
    display: function(settingLink) {
      var nav = settingLink.parent();
      nav.find('ul.sub').toggle();
      settingLink.toggleClass('pop');
    },
    hide: function() {
      var settingLink = $('nav.sec a');
      var nav = settingLink.parent();
      nav.find('ul.sub').hide();
      settingLink.removeClass('pop');
    }
  };

  /* Pressing ESC or click on html region */
  function hidePopover() {
    Jobline.secondaryNav.hide();
    $('ul.filter .popover').hide();
  }

  $('body').keydown(function(evt) {
    if (evt.keyCode == 27) {
      hidePopover()
      evt.preventDefault();
    }
  });

  $('html').click(function(evt) {
    hidePopover();
    if (evt.target.id !== 'add-claim-btn') {
      $('.dropdown-menu').removeClass('expand');
    }

    if (evt.target.attributes.style === undefined) {
      if ($(this).parent().children('.gmap iframe')[0] === undefined) {
        if (evt.target.id !== 'approver-google-map-id' && evt.target.id !== 'map-instruction-id') {
          $('.approver-google-map').css('display', 'none');
        }
      }
    }
  });

  /* Flash message */
  $('.flash').delay(800).slideDown("fast");
  $('.flash').live("click", function() {
    $(this).fadeOut("fast");
  });

  /* Sub-menu */
  $('header#masthead nav li').hover(
    function() { $(this).find('ul.sub').show(); },
    function() { $(this).find('ul.sub').hide(); }
  );

  /* Secondary nav - logout, settings, etc */
  $('nav.sec > a').click(function(evt) {
    Jobline.secondaryNav.display($(this));
    evt.preventDefault();
    evt.stopPropagation(); // prevent html click from getting it
  });

  /* Filter bar popover */
  $('ul.filter li.pop').live("click", function(evt) {
    $(this).find('.popover').show();
  });

  /* Timesheet display */
  $('nav.sheets a').live("click", function(evt) {
    var tsid = $(this).attr("href").replace("#", "");
    $(".sheet").hide();
    $(".sheet[data-tsid='" + tsid + "']").show();
    $("li.pop span.selected").html(tsid);
    $("nav.sheets .checkbox").hide();
    $(this).find(".checkbox").show();
    evt.preventDefault();
  });

  function pad (val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
  }

  /* Leave type loading */
  $("ul.leave_types li a").live("click", function(evt) {
    var li = $(this).closest("li");
    $("ul.leave_types li").removeClass("active");
    li.addClass("active");

    var url = this.href;

    $("#leaves").animate({opacity:  0.2}, "fast", function() {
      $(".leave_loading").show();
      $.ajax({
        url: url, type: 'GET', dataType: "script"
      });

      if (history && history.pushState) {
        history.pushState({module:"leave"}, document.title, url);
      }
    });

    evt.preventDefault();
  });

  $(window).bind("popstate", function(evt) {
    var state = evt.originalEvent.state;
    if (state && state.module === "leave") {
      $("#leaves").animate({opacity: 0.2}, "fast", function() {
        $(".leave_loading").show();

        $.getScript(location.href);
      });
    }
  });

  // $("#leaves table.basic td, table.projects td, table.articles td").live("mouseover mouseout", function(evt) {
  //   if (evt.type == "mouseover") {
  //     $(this).find(".action").show();
  //   } else {
  //     $(this).find(".action").hide();
  //   }
  // });

  $("#leaves .action a.cancel").live("ajax:beforeSend", function() {
    $("#leaves").animate({opacity: 0.2}, "fast");
    $(".leave_loading").show();
  });

  $("a.cancel_upload_button").live("click", function(evt) {
    $(".overlay").fadeOut();
    $("#drawer.leave").slideUp("fast");
    evt.preventDefault();
  });

  /* Apply for leave drawer */
  $("a.apply_leave").live("click", function(evt) {
    if (!window.FormData) {
      alert("We're sorry, but this browser is not supported by Jobline web portal. To get the best experience using Jobline web portal, please upgrade it to the latest version.");
      return false;
    }

    $(".overlay").remove();
    $("#view").append("<div class='overlay'>");
    $(".overlay").fadeIn("fast");
    $(".overlay").click(function() {
      $(".overlay").fadeOut();
      $("#drawer.leave").slideUp("fast");
    });
    $("#drawer.leave").slideDown("fast");
    $("#drawer").html("<div class='loading'>");
    $("#drawer").append("<p class='load_msg'>Loading ...</p>");
    $("#drawer .loading").show();

    $.getScript(this.href, function() {
      $("#drawer .loading").hide();
    });

    evt.preventDefault();
  });

  $("a.upload_cert").live("click", function(evt) {
    if (!window.FormData) {
      alert("We're sorry, but this browser is not supported by Jobline web portal. To get the best experience using Jobline web portal, please upgrade it to the latest version.");
      return false;
    }

    $(".overlay").remove();
    $("#view").append("<div class='overlay'>");
    $(".overlay").fadeIn("fast");
    $(".overlay").click(function() {
      $(".overlay").fadeOut();
      $("#drawer.leave").slideUp("fast");
    });
    $("#drawer.leave").slideDown("fast");
    $("#drawer").html("<div class='loading'>");
    $("#drawer").append("<p class='load_msg'>Loading ...</p>");
    $("#drawer .loading").show();

    $.getScript(this.href, function() {
      $("#drawer .loading").hide();
    });

    evt.preventDefault();
  });

  $("#drawer.leave .action a").live("click", function(evt) {
    $(".overlay").fadeOut();
    $("#drawer.leave").slideUp("fast");
    evt.preventDefault();
  });

  $("td.holiday").live("click", function() {
    if ($(this).hasClass("selected")) {
      alert("You've selected a holiday!");
    }
  });

  $("td.taken").live("click", function() {
    if (!$(this).hasClass("selected")) {
      alert("You've already taken a leave on this day.");
    }
  });

  $("#drawer.leave form").live("ajax:beforeSend", function() {
    $("#drawer").html("<div class='loading'>");
    $("#drawer").append("<p class='load_msg'>Saving your leaves...</p>");
    $("#drawer .loading").show();
  });

  $("#drawer.leave .action input[type=submit]").live("click", function(evt) {
    var form = $(this).closest("form");
    if ($("select[name=approver_employer_id]", form).val() == "0") {
      alert("Please select your approver.");
    } else if ($("select[name=leave_type]", form).val() == "0") {
      alert("Please select leave type.");
    } else if ($("table.dates tr").length == 0 && $('.cal-wrap').length != 0) {
      alert("Please click on the calendar box to choose your days.");
    } else if (($("select[name=leave_type]", form).val() == "ML") && ($('#attachment_id').val() == '')){
      alert("You are required to upload your medical certificate.");
    } else if (($("select[name=leave_type]", form).val() == "ML" ) && ($(".leave_attachment_label").find('option:selected').val() == "0")){
      alert("Please select the document type.");
    } else if (($("select[name=leave_type]", form).length == 0 ) && (($('#attachment_id').val() == ''))){
      alert("Attachment cannot be empty.");
    } else if (($("select[name=leave_type]", form).length == 0 ) && ($(".leave_attachment_label").find('option:selected').val() == "0")){
      alert("Document type cannot be empty.");
    } else if (($("select[name=leave_type]", form).val() == "ML" ) && ($(".medical_reason").find('option:selected').val() == "0")){
      alert("Please select the medical reason.");
    } else if (($("select[name=leave_type]", form).val() == "ML" ) && ($(".health_care_address").find('textarea').val() == "")){
      alert("Please input the health care address.");
    } else {
      $("#leave_submit_button").attr("disabled", true)
      $("#leave_submit_button").val("Submitting ...")

      var leave_type = document.getElementById('leave_type') && document.getElementById('leave_type').value;
      var leave_attachment_type = document.getElementById('leave_attachment_type') && document.getElementById('leave_attachment_type').value;
      var attachment = document.getElementById("attachment_id") && document.getElementById("attachment_id").files[0]
      var reason = document.getElementById('reason_field_id') && document.getElementById('reason_field_id').value;
      var contract_code = $(".leave-form-js").attr('data-contract-code')
      var medical_reason = document.getElementById('medical_reason') && document.getElementById('medical_reason').value;
      var other_reason = document.getElementById('other_reason_input') && document.getElementById('other_reason_input').value;
      var health_care_address = document.getElementById('healthcare_address') && document.getElementById('healthcare_address').value;

      var d = {};
      $('table.dates tr').each(function (tr) {
        var details = $(this).find('.leave-details-js').val();
        var unpaid = $(this).find('.leave-unpaid-js').get(0).checked;
        var date = $(this).find('[data-date]').data('date');

        d[date] = {details: details, unpaid: unpaid};
      });

      var approver_ids = []
      $('.approver_ids').each(function (e) {
        approver_ids.push($(this).get(0).value)
      })

      if ($('#approver_employer_id').length > 0) {
        approver_ids.push($('#approver_employer_id option:selected').val())
      }

      var formData = new FormData();
      formData.append('leave_attachment', attachment);
      formData.append('leave_attachment_type', leave_attachment_type);
      formData.append('dates', JSON.stringify(d));
      formData.append('ca_contract_code', contract_code);
      formData.append('reason', reason);
      formData.append('leave_type', leave_type);
      formData.append('approver_ids', JSON.stringify(approver_ids));
      formData.append('medical_reason', medical_reason);
      formData.append('other_reason', other_reason);
      formData.append('health_care_address', health_care_address);

      $.ajax({
        url: window.location.pathname,
        data: formData,
        type: 'POST',
        cache: false,
        processData: false,
        contentType: false
      });
    }

    evt.preventDefault();
  });

  $("#drawer.leave .upload_cert input[type=submit]").live("click", function(evt) {
    var form = $(this).closest("form");

    if (($("select[name=leave_type]", form).length == 0 ) && (($('#attachment_id').val() == ''))){
      alert("Attachment cannot be empty.");
    } else {
      $("#upload_cert_button").attr("disabled", true)
      $("#upload_cert_button").val("Submitting ...")

      var attachment = document.getElementById("attachment_id") && document.getElementById("attachment_id").files[0]
      var leave_id = document.getElementById("leave_id") && document.getElementById("leave_id").value

      var formData = new FormData();
      formData.append('cert_attachment', attachment);
      formData.append('leave_id', leave_id);

      $.ajax({
        url: '/s/leaves/save_attachment',
        data: formData,
        type: 'POST',
        cache: false,
        processData: false,
        contentType: false
      });
    }

    evt.preventDefault();
  });

  $("form.timesheet .confirmation_action input#return").live("click", function(evt) {
    $("select").attr('disabled',false);
    $(".clock").removeClass("disabled_select_link");
    $(".remark").removeClass("disabled_textarea");
    $(".action").css("display", "inline");
    $(".confirmation_action").css("display", "none");
    $(".leave_confirmation_message").css("display", "none");
    $(".pb_confirmation_message").css("display", "none");
    return false;
  });

  $("form.timesheet .confirmation_action input#approval").live("click", function(evt) {
    $("select").attr('disabled',false);
    $(".clock").removeClass("disabled_select_link");
    $(".remark").removeClass("disabled_textarea");
  });

  $("form.timesheet .action input[type=submit]").live("click", function(evt) {
    var form = $(this).closest("form");
    var title =  $(".sheet h1").html().trim().split(' ');
    var work_month = title[2] + " " + title[3];

    if ($("select[name=approver_employer_id]", form).val() == "0") {
      alert("Please select your approver for this timesheet.");
      return false;
    } else {
        if (window.hiddenCommit) {
          window.hiddenCommit.setAttribute('value', this.value);
        } else {
          hiddenCommit = document.createElement('input');
          hiddenCommit.type = 'hidden';
          hiddenCommit.value = this.value;
          hiddenCommit.name = this.name;
          this.form.appendChild(hiddenCommit);
        }
        var holiday_array = [];
        var leave_array = [];
        $('table.normal tbody tr').each(function() {
          var holiday = $(this).find("td.holiday");
          if (holiday.length > 0) {
            var hours =  $(this).find("td.normal_total").html();
            if (hours > 0) {
              var holiday_name = holiday.find('span').attr('title');
              holiday_array.push(holiday_name + " - " + holiday.html() + " " + work_month);

              $(this).find("td").each(function () {
                $(this).addClass("alert_border");
              });
              $(this).next('tr').find("td").each(function () {
                $(this).addClass("alert_border_top");
                $(this).removeClass("sat");
                $(this).removeClass("sun");
              });
            } else {
              $(this).find("td").each(function () {
                $(this).removeClass("alert_border");
              });
              $(this).next('tr').find("td").each(function () {
                $(this).removeClass("alert_border_top");
              });
            }
          }
        });

        $('table.normal tbody tr').each(function() {
         var leave = $(this).find("td.half_day_leave");
         if (leave.length > 0) {
           var hours =  $(this).find("td.normal_total").html();

           if (hours <= 0) {
             leave_array.push(leave.html() + " " + work_month);

             $(this).find("td").each(function () {
               $(this).addClass("alert_border");
             });
             $(this).next('tr').find("td").each(function () {
               $(this).removeClass("sat");
               $(this).removeClass("sun");
               $(this).addClass("alert_border_top");
             });
           } else {
             $(this).find("td").each(function () {
               $(this).removeClass("alert_border");
             });
             $(this).next('tr').find("td").each(function () {
               $(this).removeClass("alert_border_top");
             });
           }
         }
        });

      if ($(this).val() == "Submit for approval") {
        if (holiday_array.length > 0) {
          var list_of_holiday = $.map(holiday_array, function(val, i) {
            return "<p>" + val + "</p>";
          });
          var title = "<p style='color:red;font-size:16;font-weight:bold;'>" + "Public Holiday" + "</p>"
          var message = "<p style='color:blue;font-style:italic;font-weight:bold;'>" + "Did you work on the following public holiday? If not, please remove the working hours." + "</p>"
          $(".pb_confirmation_message").html( title + message + list_of_holiday.join(""));
          $(".pb_confirmation_message").css("display", "block");
        }

        if (leave_array.length > 0) {
          var list_of_leave = $.map(leave_array, function(val, i) {
            return "<p>" + val + "</p>";
          });
          var title = "<p style='color:red;font-size:16;font-weight:bold;'>" + 'Half Day Leave' + '</p>'
          var message = "<p style='color:blue;font-style:italic;font-weight:bold;'>" + "You had taken half day leave on the following date(s). Please input the working hours for the remaining half day now." + "</p>"
          $(".leave_confirmation_message").html(title + message + list_of_leave.join(""));
          $(".leave_confirmation_message").css("display", "block");
        }

        if (holiday_array.length > 0 || leave_array.length > 0) {
          $("select").attr('disabled',true);
          $(".clock").addClass("disabled_select_link");
          $(".remark").addClass("disabled_textarea");
          $(".action").css("display", "none");
          $(".confirmation_action").css("display", "inline");
          return false;
        }
      }
    }
  });

  /* Favorite */
  $("#fav_action a.star").live("click", function(evt) {
    $(this).addClass("starred");
  });

  $("#fav_action a.starred").live("click", function(evt) {
    $(this).removeClass("starred");
  });

  /* Hour change for Timesheet */
  $("table.timesheet.normal td.entry select").live("change", function() {
    var table = $(this).closest("table");
    var tr = $(this).closest("tr");
    var normal_total = $("td.normal_total", tr);

    var time_in = $("td.entry select[name*=time_in]", tr).val();
    var lunch_duration = $("td.entry select[name*=lunch_duration]", tr).val();
    var time_out = $("td.entry select[name*=time_out]", tr).val();
    var grand = $("td.normal_grand_total", tr.parent()); // tbody

    var normal_hrs = 0; // in hour
    var lunch_hrs = 0; // in hour

    if (!time_in.match(/Leave|\-|^\s*$/) && !time_out.match(/Leave|\-|^\s*$/)) {
      var _time_in = time_in.split(":");
      var _time_out = time_out.split(":");
      var diff = new Date(2010,1,1,_time_out[0],(_time_out[1]||0)) - new Date(2010,1,1,_time_in[0],(_time_in[1]||0)); // return in ms
      normal_hrs = (24 * (diff / 86400000));
    }

    if (lunch_duration != "" && lunch_duration != "0") {
      lunch_hrs = (24 * ((parseInt(lunch_duration) * 60000) / 86400000));
    }

    var normal = normal_hrs - lunch_hrs;

    // Overnight time will give negative value, here we will add 24 to make it positive
    if (normal < 0) {
      normal_duration = 24 + normal;
    } else {
      normal_duration = normal;
    }

    normal_total.html(normal_duration.toFixed(2));

    var grand_total = 0;

    $("td.normal_total", table).map(function() {
      var _v = jQuery.trim($(this).html());
      if (_v == "N/A" || _v == "" || _v == "Leave") {
        _v = 0;
      }
      grand_total += parseFloat(_v || 0);
    });

    grand.html(grand_total.toFixed(2));
  });

  $("table.timesheet.overtime td.entry select").live("change", function() {
    var table = $(this).closest("table");
    var tr = $(this).closest("tr");
    var overtime_total = $("td.overtime_total", tr);

    var overtime_time_in = $("td.entry select[name*=overtime_in]", tr).val();
    var dinner_duration = $("td.entry select[name*=dinner_duration]", tr).val();
    var overtime_time_out = $("td.entry select[name*=overtime_out]", tr).val();
    var grand = $("td.over_time_grand_total", tr.parent());

    var overtime_hrs = 0;
    var dinner_hrs = 0;

    if (!overtime_time_in.match(/Leave|\-|^\s*$/) && !overtime_time_out.match(/Leave|\-|^\s*$/)) {
      var _overtime_time_in = overtime_time_in.split(":");
      var _overtime_time_out = overtime_time_out.split(":");
      var diff = new Date(2010,1,1,_overtime_time_out[0],(_overtime_time_out[1]||0)) - new Date(2010,1,1,_overtime_time_in[0],(_overtime_time_in[1]||0));

      overtime_hrs = (24 * (diff / 86400000));
    }

    if (dinner_duration != "" && dinner_duration != "0") {
      dinner_hrs = (24 * ((parseInt(dinner_duration) * 60000) / 86400000));
    }

    var overtime = overtime_hrs - dinner_hrs

    // Overnight time will give negative value, here we will add 24 to make it positive
    if (overtime < 0) {
      overtime_duration = 24 + overtime;
    } else {
      overtime_duration = overtime;
    }

    overtime_total.html(overtime_duration.toFixed(2));

    var grand_total = 0;

    $("td.overtime_total", table).map(function() {
      var _v = jQuery.trim($(this).html());
      if (_v == "N/A" || _v == "" || _v == "Leave") {
        _v = 0;
      }
      grand_total += parseFloat(_v || 0);
    });

    grand.html(grand_total.toFixed(2));
  });

  /* Calculate grand total for Timesheet */
  $(".sheet").each(function() {
    var normal_grand = $("td.normal_grand_total", $(this));
    var normal_grand_total = 0;
    var over_time_grand = $("td.over_time_grand_total", $(this));
    var over_time_grand_total = 0;

    $("td.normal_total", $(this)).map(function() {
      var _v = jQuery.trim($(this).html());
      if (_v == "N/A" || _v == "" || _v == "Leave") {
        _v = 0;
      }

      normal_grand_total += parseFloat(_v || 0);
    });

    normal_grand.html(normal_grand_total.toFixed(2));

    $("td.overtime_total", $(this)).map(function() {
      var _v = jQuery.trim($(this).html());
      if (_v == "N/A" || _v == "" || _v == "Leave") {
        _v = 0;
      }
      over_time_grand_total += parseFloat(_v || 0);
    });

    over_time_grand.html(over_time_grand_total.toFixed(2));
  });

  $(".shifter_roster").change(function(evt) {
    var team = $(this).val();
    var year = $(this).attr("data-year");
    var month = $(this).attr("data-month");
    // var hours = JSON.parse($(this).attr("data-hours"));
    var clock_in = JSON.parse($(this).attr("data-clock-in-hours"));
    var clock_out = JSON.parse($(this).attr("data-clock-out-hours"));
    var form = $(this).closest("form");
    var shift = JSON.parse($(this).find('option:selected').attr('data-team'));
    var grand_total = 0;

    for (var i = 0; i < shift.length; i++) {
      var currentDate = new Date(year, (parseInt(month) - 1), i + 1);
      var formattedDate = year + "-" + pad(month, 2) + "-" + pad(i+1, 2);
      var select_time_in = $("select[name='d[" + formattedDate + "][time_in]']", form);
      var select_time_out = $("select[name='d[" + formattedDate + "][time_out]']", form);
      var select_lunch_duration = $("select[name='d[" + formattedDate + "][lunch_duration]']", form);
      var from = clock_in[shift[i]];
      var to = clock_out[shift[i]];

      if (select_time_in.val() != undefined && select_time_in[0].options[0].text != "Leave") {
        select_time_in.val(from);
      }

      if (select_time_out.val() != undefined && select_time_out[0].options[0].text != "Leave") {
        select_time_out.val(to);
      }

      if (select_lunch_duration.val() != undefined && select_lunch_duration[0].options[0].text != "Leave") {
        if (to == "" || to == undefined) {
          select_lunch_duration.val("0");
        } else {
          select_lunch_duration.val("60");
        }
      }

      var tr = select_time_in.parent().parent();
      var normal_total = $("td.normal_total", tr);
      var grand = $("td.normal_grand_total", tr.parent());
      var normal_hrs = 0;
      var lunch_hrs = 0;

      if (select_time_in.val()) {
        if (!select_time_in.val().match(/Leave|^\s*$/) && !select_time_out.val().match(/Leave|^\s*$/)) {
          var _time_in = select_time_in.val().split(":");
          var _time_out = select_time_out.val().split(":");
          // I anyhow pick a year, does not matter because we are dealing with time
          var diff = new Date(2010,1,1,_time_out[0],(_time_out[1]||0)) - new Date(2010,1,1,_time_in[0],(_time_in[1]||0));

          normal_hrs = (24 * (diff / 86400000));
        }

        if (select_lunch_duration.val() != "") {
          lunch_hrs = (24 * ((parseInt(select_lunch_duration.val()) * 60000) / 86400000));
        }

        normal = normal_hrs - lunch_hrs;

        // Overnight time will give negative value, here we will add 24 to make it positive
        if (normal < 0) {
          normal_duration = 24 + normal;
        } else {
          normal_duration = normal;
        }

        normal_total.html(normal_duration.toFixed(2));

        $("td.normal_total", tr).map(function() {
          var _v = jQuery.trim($(this).html());
          if (_v == "N/A" || _v == "" || _v == "Leave") {
            _v = 0;
          }
          grand_total += parseFloat(_v || 0);
        });

        grand.html(grand_total);
      } else {
        normal_total.html("");
      }
    }
  evt.preventDefault();
});

  /* Pre-fill working hours */
  $("li.wh a").live("click", function(evt) {
    var year = $(this).attr("data-year");
    var month = $(this).attr("data-month");
    var from = $(this).attr("data-from");
    var to = $(this).attr("data-to");
    var lunch_duration = $(this).attr("data-lunch-duration");
    var working_days = $(this).attr("data-working-days");
    var start_date = $(this).attr("data-start_date");

    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = today.getMonth() + 1;
    var thisDay = today.getDate();

    var form = $(this).closest("form");

    if (thisYear == year && thisMonth == month && from != "N/A" && to != "N/A") {
      var grand_total = 0;

      for (var i = 1; i <= thisDay; i++) {
        var currentDate = new Date(year, (parseInt(month) - 1), i);
        var startDate = new Date(start_date);
        if (currentDate < startDate) { continue; }

        if ((working_days == "5" || working_days == "") && (currentDate.getDay() == 0 || currentDate.getDay() == 6)) {
          // We want to ignore 5 days week CA, they rest on Sat and Sun, so if getDay() returns us that, we don't do anything
        } else if ((working_days == "5.5" || working_days == "") && currentDate.getDay() == 0) {
          // For those who work half day on Sat, we do want to fill it up
        } else {
          // For everyone else
          var formattedDate = year + "-" + pad(month, 2) + "-" + pad(i, 2);
          var select_time_in = $("select[name='d[" + formattedDate + "][time_in]']", form);
          var select_time_out = $("select[name='d[" + formattedDate + "][time_out]']", form);
          var select_lunch_duration = $("select[name='d[" + formattedDate + "][lunch_duration]']", form);

          if (select_time_in.val() == "" && select_time_in[0].options[0].text != "Leave") {
            select_time_in.val(from);
          }

          if (select_time_out.val() == "" && select_time_out[0].options[0].text != "Leave") {
            select_time_out.val(to);
          }

          if (select_lunch_duration.val() == "0"  && select_lunch_duration[0].options[0].text != "Leave") {
            select_lunch_duration.val(lunch_duration);
          }

          var tr = select_time_in.parent().parent();
          var normal_total = $("td.normal_total", tr);
          var grand = $("td.normal_grand_total", tr.parent());
          var normal_hrs = 0;
          var lunch_hrs = 0;

          if (select_time_in.val()) {
            if (!select_time_in.val().match(/Leave|^\s*$/) && !select_time_out.val().match(/Leave|^\s*$/)) {
              var _time_in = select_time_in.val().split(":");
              var _time_out = select_time_out.val().split(":");
              // I anyhow pick a year, does not matter because we are dealing with time
              var diff = new Date(2010,1,1,_time_out[0],(_time_out[1]||0)) - new Date(2010,1,1,_time_in[0],(_time_in[1]||0));

              normal_hrs = (24 * (diff / 86400000));
            }

            if (select_lunch_duration.val() != "") {
              lunch_hrs = (24 * ((parseInt(select_lunch_duration.val()) * 60000) / 86400000));
            }

            normal = normal_hrs - lunch_hrs;

            // Overnight time will give negative value, here we will add 24 to make it positive
            if (normal < 0) {
              normal_duration = 24 + normal;
            } else {
              normal_duration = normal;
            }

            normal_total.html(normal_duration);

            $("td.normal_total", tr).map(function() {
              var _v = jQuery.trim($(this).html());
              if (_v == "N/A" || _v == "" || _v == "Leave") {
                _v = 0;
              }
              grand_total += parseFloat(_v || 0);
            });

            grand.html(grand_total.toFixed(2));
          }
        }
      } // end-for
    } else {
      // Do not restrict to today
      var grand_total = 0;

      for (var i = 1; i <= 31; i++) {
        var currentDate = new Date(year, (parseInt(month) - 1), i);
        var startDate = new Date(start_date);
        if (currentDate < startDate) { continue; }

        if ((working_days == "5" || working_days == "") && (currentDate.getDay() == 0 || currentDate.getDay() == 6)) {
          // We want to ignore 5 days week CA, they rest on Sat and Sun, so if getDay() returns us that, we don't do anything
        } else if ((working_days == "5.5" || working_days == "") && currentDate.getDay() == 0) {
          // For those who work half day on Sat, we do want to fill it up
        } else {
          // For everyone else
          var formattedDate = year + "-" + pad(month, 2) + "-" + pad(i, 2);
          var select_time_in = $("select[name='d[" + formattedDate + "][time_in]']", form);
          var select_time_out = $("select[name='d[" + formattedDate + "][time_out]']", form);
          var select_lunch_duration = $("select[name='d[" + formattedDate + "][lunch_duration]']", form);

          if (select_time_in.val() == "" && select_time_in[0].options[0].text != "Leave") {
            select_time_in.val(from);
          }

          if (select_time_out.val() == "" && select_time_out[0].options[0].text != "Leave") {
            select_time_out.val(to);
          }

          if (select_lunch_duration.val() == "0"  && select_lunch_duration[0].options[0].text != "Leave") {
            select_lunch_duration.val(lunch_duration);
          }

          var tr = select_time_in.parent().parent();
          var normal_total = $("td.normal_total", tr);
          var grand = $("td.normal_grand_total", tr.parent());
          var normal_hrs = 0;
          var lunch_hrs = 0;

          if (select_time_in.val()) {
            if (!select_time_in.val().match(/Leave|^\s*$/) && !select_time_out.val().match(/Leave|^\s*$/)) {
              var _time_in = select_time_in.val().split(":");
              var _time_out = select_time_out.val().split(":");
              // I anyhow pick a year, does not matter because we are dealing with time
              var diff = new Date(2010,1,1,_time_out[0],(_time_out[1]||0)) - new Date(2010,1,1,_time_in[0],(_time_in[1]||0));

              normal_hrs = (24 * (diff / 86400000));
            }

            if (select_lunch_duration.val() != "") {
              lunch_hrs = (24 * ((parseInt(select_lunch_duration.val()) * 60000) / 86400000));
            }

            normal = normal_hrs - lunch_hrs;

            // Overnight time will give negative value, here we will add 24 to make it positive
            if (normal < 0) {
              normal_duration = 24 + normal;
            } else {
              normal_duration = normal;
            }

            normal_total.html(normal_duration);

            $("td.normal_total", tr).map(function() {
              var _v = jQuery.trim($(this).html());
              if (_v == "N/A" || _v == "" || _v == "Leave") {
                _v = 0;
              }
              grand_total += parseFloat(_v || 0);
            });

            grand.html(grand_total.toFixed(2));
          }
        }
      } // end-for
    }

    evt.preventDefault();
  });

  /* Invoice oustanding credit terms */
  $(".popover.ct a").click(function(evt) {
    var c = $(this).attr("class");
    $(".popover.ct a .checkbox").remove();
    $(this).append("<div class='checkbox'>");
    $(".project_cost_total span").hide();

    if (c == "all") {
      $("section#invoices table.basic tbody tr").show();
      $(".project_cost_total span.all").show();
    } else {
      $("section#invoices table.basic tbody tr").hide();
      $("section#invoices table.basic tbody tr." + c).show();
      $(".project_cost_total span." + c).show();
    }

    evt.preventDefault();
  });

  /* Toggle leaves for approver */
  $("section#leaves.approver .leaves_group h1").live("click", function(evt) {
    var group = $(this).parent();
    group.find("table.basic").toggle();
    group.find(".ca_info").toggleClass("collapse");
    $(".leaves_group:last-child .ca_info").removeClass("collapse");
    evt.stopPropagation();
  });

  $("section#leaves.approver .leaves_group h1 input[type=checkbox]").click(function(evt) {
    var group = $(this).closest(".leaves_group");
    group.find("input.cb").attr("checked", ($(this).attr('checked') || false));
    evt.stopPropagation();
  });

  /* Leave approval */
  $(".leaves_group").each(function() {
    var group = $(this); // keep it for closure
    var approveLink = $(this).find("a.approve");
    var rejectLink = $(this).find("a.reject");
    var rejectStaffLink = $(this).find("a.reject_staff");
    var rejectButton = $(this).find("button.reject");

    approveLink.click(function(evt) {
      var checked = $("input[type=checkbox].cb:checked", group);

      if (checked.length != 0) {
        var checkedList = checked.map(function() {
          return $(this).val();
        }).get().join();

        $.ajax({
          url: $(this).attr("href"),
          dataType: "script",
          data: "ids=" + checkedList,
          type: "POST",
          beforeSend: function() {
            $(".rejectPanel", group).hide();
            $("table.basic", group).animate({opacity: 0.2}, "fast");
            $(".leave_loading", group).show();
          },
          success: function() {
            $("table.basic", group).animate({opacity: 1.0}, "fast");
            $(".leave_loading", group).hide();
            if ($("table.basic tr", group).length == 0) {
              $(".ca_info", group).text('All leaves have been approved.');
            }
          }
        });

      }

      evt.preventDefault();
    });

    rejectLink.click(function(evt) {
      var checked = $("input[type=checkbox].cb:checked", group);

      if (checked.length != 0) {
        $(".rejectPanel", group).show();
      }

      evt.preventDefault();
    });

    rejectButton.click(function(evt) {
      var reason = $("textarea.reason", group).val();
      var url = rejectLink.attr("href");
      var checked = $("input[type=checkbox].cb:checked", group);

      if (checked.length != 0) {
        var checkedList = checked.map(function() {
          return $(this).val();
        }).get().join();

        $.ajax({
          url: url,
          dataType: "script",
          data: "ids=" + checkedList + "&reason=" + reason,
          type: "POST",
          beforeSend: function() {
            $(".rejectPanel", group).hide();
            $("table.basic", group).animate({opacity: 0.2}, "fast");
            $(".leave_loading", group).show();
          },
          success: function() {
            $("table.basic", group).animate({opacity: 1.0}, "fast");
            $(".leave_loading", group).hide();
          }
        });
      }

      evt.preventDefault();
    });

    rejectStaffLink.click(function(evt) {
      var checked = $("input[type=checkbox].cb:checked", group);

      if (checked.length != 0) {
        var checkedList = checked.map(function() {
          return $(this).val();
        }).get().join();

        $.ajax({
          url: $(this).attr("href"),
          dataType: "script",
          data: "ids=" + checkedList,
          type: "POST",
          beforeSend: function() {
            $(".rejectPanel", group).hide();
            $("table.basic", group).animate({opacity: 0.2}, "fast");
            $(".leave_loading", group).show();
          },
          success: function() {
            $("table.basic", group).animate({opacity: 1.0}, "fast");
            $(".leave_loading", group).hide();
          }
        });
      }

      evt.preventDefault();
    });
  });

  /* Timesheet approval */
  // timesheet_actions to prevent from executing
  $(".timesheet_actions a.approve").click(function(evt) {
    var url = $(this).attr("href");
    var checked = $("input[name=confirm]").attr("checked");

    if (checked) {
      $.ajax({
        url: url,
        dataType: "script",
        type: "POST",
        beforeSend: function() {
          $(".loading").show();
          $(".approve_reject").hide();
          $(".rejectPanel").hide();
          $(".confirmation").hide();
        },
        success: function() {
          $(".loading").hide();
        }
      });
    } else {
      alert("You have to check through the hours");
    }

    evt.preventDefault();
  });

  /* Timesheet rejection */
  $(".timesheet_action a.reject").click(function(evt) {
    $(".rejectPanel").show();
    evt.preventDefault();
  });

  $("button.reject").click(function(evt) {
    var reason = $("textarea.reason").val();
    var checked = $("input[name=confirm]").attr("checked");
    var url = $(".timesheet_action a.reject").attr("href");

    if (checked) {
      $.ajax({
        url: url,
        dataType: "script",
        data: "reason=" + reason,
        type: "POST",
        beforeSend: function() {
          $(".loading").show();
          $(".approve_reject").hide();
          $(".rejectPanel").hide();
          $(".confirmation").hide();
        },
        success: function() {
          $(".loading").hide();
        }
      });
    }

    evt.preventDefault();
  });

  $("span#expand_interview").click(function(evt){
    if ($("span#expanded_interview").css("display") == "none"){
        $("span#expanded_interview").show();
    }
    else {
        $("span#expanded_interview").hide();
    }
  });

  $("select[name=goto]").change(function(evt) {
    location.href = this.value;
  });

  $("select[name=topics]").change(function(evt) {
    var topic_id = this.value;

    if (topic_id == "") {
      alert("Please choose a topic");
    } else {
      $.ajax({
        url: "/help/topics/" + topic_id + "/all_articles",
        dataType: "script",
        type: "GET",
        beforeSend: function() {
          $("section#preference div.articles").html("<p style='margin-top: 20px; text-align: center;'><img src='/images/loading.gif' /></p>");
        }
      });
    }
  });

  $("#job_domain_month").change(function(evt) {
    var team_filter = $("#_team_filter").val();
    var year = $("#_year").val();
    var month = this.value
    var recruiter_id = $("#job_domain_month").data("recruiter-id")
    var params = { month : month, year : year, team_filter : team_filter, recruiter_id : recruiter_id }

    $.ajax({
      url: "/job_domains/monthly_data",
      dataType: "script",
      type: "POST",
      data: params
    });
  });

  $("table.articles .action a").live("ajax:beforeSend", function() {
    $(this).closest("tr").remove();
  });

  $("form .action input.btn").click(function(event){
    if ($("#resignation_reason_for_leaving").val() === ""){
      alert('You are required to fill in your reason for leaving.');
      $("#resignation_reason_for_leaving").focus();
      return false;
    } else {
      return true;
    }
  });

  $("form .action.mod input.reject").click(function(event){
    if ($("#resignation_reason_for_rejection").val() === ""){
      alert('You are required to fill in your reason for rejecting.');
      $("#resignation_reason_for_rejection").focus();
      return false;
    } else {
      return true;
    }
  });

  $("ul.app_sb li a").click(function(e) {
    e.preventDefault();
    var el = $(this);
    $("ul.app_sb li a").removeClass("selected");
    el.addClass("selected");
    var parentLi = el.parent();

    if (parentLi.hasClass("profile")) {
      $(".paper-wrap .resume-app").show();
      $(".paper-wrap .interviews").hide();
      $(".paper-wrap .particulars").hide();
    } else if (parentLi.hasClass("interviews")) {
      $(".paper-wrap .resume-app").hide();
      $(".paper-wrap .interviews").show();
      $(".paper-wrap .particulars").hide();
    } else if (parentLi.hasClass("particulars")) {
      $(".paper-wrap .resume-app").hide();
      $(".paper-wrap .interviews").hide();
      $(".paper-wrap .particulars").show();
    }
  });

  $("#_span").change(function(evt){
    hideMonthSelect();
  });

  $("#_domain_order").change(function(evt){
    if ($("#_domain_order").val() == "date"){
      $("#_date_span").hide();
      $("#_date_span").attr("disabled", "disabled");
      $("#_year").hide();
      $("#_year").attr("disabled", "disabled");
    } else {
      $("#_date_span").show();
      $("#_date_span").removeAttr("disabled");
      $("#_year").show();
      $("#_year").removeAttr("disabled");
    }
  });

  $("#_grouping").change(function(evt){
    if ($("#_grouping").val() == "domain"){
      $("#_domain_order").show();
      $("#_domain_order").removeAttr("disabled");
    } else {
      $("#_domain_order").hide();
      $("#_domain_order").attr("disabled", "disabled");
      $("#_domain_order").val("date");
      $("#_date_span").hide();
      $("#_date_span").attr("disabled", "disabled");
      $("#_year").hide();
      $("#_year").attr("disabled", "disabled");
    }
  });

  $.fn.truncate = function(old_text, lenght) {
    var new_text = old_text.substring(0, lenght);
    if (new_text == old_text){
      return new_text;
    } else {
      return new_text + "...";
    }
  };

  $("#schedule_interview").click(function(evt){
    if ($("#schedule_interview").data("interview") === true){
      $("ul.app_sb li").removeClass("current");
      $("ul.app_sb li.interviews").addClass("current");
      $(".paper-wrap .resume").hide();
      $(".paper-wrap .interviews").show();
      $(".paper-wrap .particulars").hide();
    } else {
      window.location = $("#schedule_interview").data("url");
    }
  });

  $("#new_staff_claim.basic.mod .action input[type=submit]").live("click", function(evt) {
    if ($("#staff_claim_description").val() == "") {
      alert("Please select document type")
      evt.preventDefault()
      return false
    }
    if ($("#staff_claim_description").val() == "Medical Claim") {
      if ($("#staff_claim_attachment").val() == "") {
        alert("Upload document can't be blank!")
        evt.preventDefault();
      } else if ($("#claim_on").val() == "") {
        alert("Claim on can't be blank!")
        evt.preventDefault();
      } else if ($("#claim_on").val() == "Workweek") {
        if ($("#staff_claim_leaved_from").val() == "") {
          alert("Leave from is required.")
          evt.preventDefault();
        } else if ($("#staff_claim_leaved_to").val() != "") {
          var from = new Date($("#staff_claim_leaved_from").val());
          var to = new Date($("#staff_claim_leaved_to").val());
          if (from > to) {
            alert("Leave from cannot be older in days than Leave to.")
            evt.preventDefault();
          }
          if ($("#staff_claim_amount").val() == "") {
            alert("Amount can't be blank!")
            $("#staff_claim_amount").focus();
            evt.preventDefault();
          }
        } else if ($("#staff_claim_amount").val() == "") {
          alert("Amount can't be blank!")
          $("#staff_claim_amount").focus();
          evt.preventDefault();
        }
      } else if ($("#claim_on").val() == "Weekend") {
        if ($("#weekend_claim_date").val() == "") {
          alert("Claim date is required.")
          $("#weekend_claim_date").focus();
          evt.preventDefault();
        } else if ($("#staff_claim_amount").val() == "") {
          alert("Amount can't be blank!")
          $("#staff_claim_amount").focus();
          evt.preventDefault();
        }
      } else if ($("#claim_on").val() == "Afterwork") {
          if ($("#afterwork_claim_date").val() == "") {
            alert("Claim date is required.")
            $("#afterwork_claim_date").focus();
            evt.preventDefault();
          } else if ($("#staff_claim_amount").val() == "") {
            alert("Amount can't be blank!")
            $("#staff_claim_amount").focus();
            evt.preventDefault();
          }
      } else if ($("#staff_claim_amount").val() == "") {
        alert("Amount can't be blank!")
        $("#staff_claim_amount").focus();
        evt.preventDefault();
      } else {
        return true
      }
    } else if ($("#staff_claim_description").val() == "Dental Claim") {
      if ($("#staff_claim_attachment").val() == "") {
        alert("Upload document can't be blank!")
        evt.preventDefault();
      } else if ($("#normal_claim_date").val() == "") {
        alert("Claim date can't be blank!")
        $("#normal_claim_date").focus();
        evt.preventDefault();
      } else if ($("#staff_claim_amount").val() == "") {
        alert("Amount can't be blank!")
        $("#staff_claim_amount").focus();
        evt.preventDefault();
      } else {
        return true
      }
    } else if ($("#staff_claim_description").val() == "Other Claim") {
      if ($("#staff_claim_attachment").val() == "") {
        alert("Upload document can't be blank!")
        evt.preventDefault();
      } else if ($("#normal_claim_date").val() == "") {
        alert("Claim date can't be blank!")
        $("#normal_claim_date").focus();
        evt.preventDefault();
      } else if ($("#staff_claim_amount").val() == "") {
        alert("Amount can't be blank!")
        $("#staff_claim_amount").focus();
        evt.preventDefault();
      } else {
        return true
      }
    } else {
      if ($("#staff_claim_attachment").val() == "") {
        alert("Upload document can't be blank!")
        evt.preventDefault();
      } else if ($("#staff_claim_amount").val() == "") {
        alert("Amount can't be blank!")
        $("#staff_claim_amount").focus();
        evt.preventDefault();
      } else {
        return true
      }
    }
  });

  $('#staff_claim_description').change(function() {
    if ($(this).find('option:selected').val() == "Medical Claim") {
      $("fieldset div.attachment").show();
      $("fieldset div.claim_on").show();
      $("fieldset div.normal_claim_date").hide();
      $("fieldset div.amount").show();
      $("#amount").focus();
    } else if ($(this).find('option:selected').val() == "Dental Claim") {
      $("fieldset div.attachment").show();
      $("fieldset div.claim_on").hide();
      $("fieldset div.normal_claim_date").show();
      $("fieldset div.amount").show();
      $("#amount").focus();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.other_reason").hide();
    } else if ($(this).find('option:selected').val() == "Other Claim") {
      $("fieldset div.attachment").show();
      $("fieldset div.claim_on").hide();
      $("fieldset div.normal_claim_date").show();
      $("fieldset div.amount").show();
      $("#amount").focus();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.other_reason").hide();
    } else {
      $("fieldset div.attachment").hide();
      $("fieldset div.claim_on").hide();
      $("fieldset div.normal_claim_date").hide();
      $("fieldset div.amount").hide();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.other_reason").hide();
    }
  });

  $("#claim_on").live("change", function(evt) {
    if ($(this).find('option:selected').val() == "Workweek") {
      $("fieldset div.leaved_from").show();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.normal_claim_date").hide();
    } else if ($(this).find('option:selected').val() == "Weekend") {
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.weekend_claim_date").show();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.normal_claim_date").hide();
    } else if ($(this).find('option:selected').val() == "Afterwork") {
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.afterwork_claim_date").show();
      $("fieldset div.normal_claim_date").hide();
    } else {
      $("fieldset div.leaved_from").hide();
      $("fieldset div.leaved_to").hide();
      $("fieldset div.weekend_claim_date").hide();
      $("fieldset div.afterwork_claim_date").hide();
      $("fieldset div.normal_claim_date").hide();
    }
  });

  $("#staff_claim_leaved_from").live("change", function(evt) {
    if ($("#staff_claim_leaved_from").val() == "") {
      $("fieldset div.leaved_to").hide();
    } else {
      $("fieldset div.leaved_to").show();
    }
  });

  $('#staff_claim_medical_reason').change(function() {
    if ($(this).find('option:selected').val() == "Others") {
      $("fieldset div.other_reason").show();
      $("#staff_claim_other_reason").focus()
    } else {
      $("fieldset div.other_reason").hide();
    }
  });

  $("#other_reason").keyup(function(evt){
    var othersOption = $('#staff_claim_medical_reason').find('option:selected');
    if (othersOption.val() == "Others") {
      $(othersOption).html($("#other_reason").val());
    }
  });

  $('#new_staff_claim').submit(function(evt) {
    var othersOption = $('#staff_claim_medical_reason').find('option:selected');
    if (othersOption.val() == "Others") {
      if ($("#staff_claim_other_reason").val() == "") {
        alert("Please specify the other medical reason.")
        $("#staff_claim_other_reason").focus()
        evt.preventDefault();
      } else {
        othersOption.val($("#other_reason").val());
      }
    }
  });

  /* Automations Support loading */
  $("ul.automation_list li a").live("click", function(evt) {
    var li = $(this).closest("li");
    $("ul.automation_list li").removeClass("active");
    li.addClass("active");

    var url = this.href;

    evt.preventDefault();
  });

  $('.html-email-form input#title').keyup(function () {
    $('.js-html-email-title').html(this.value);
  });

  $('.html-email-form textarea#learn_more').keyup(function () {
    $('.js-html-email-learn-more').html(converter.makeHtml(this.value));
  });

  $('.html-email-form input#location').keyup(function () {
    $('.js-html-email-location').html(this.value);
  });

  $('.html-email-form input#working_hours').keyup(function () {
    $('.js-html-email-working-hours').html(this.value);
  });

  $('.html-email-form input#salary').keyup(function () {
    $('.js-html-email-salary').html(this.value);
  });

  var converter = new Showdown.converter();

  $('.html-email-form textarea#requirements').keyup(function () {
    $('.js-html-email-requirements').html(converter.makeHtml(this.value));
  });

})(jQuery);

function gotoGroup(date_select) {
  var date = new Date(date_select)
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return { 'month': month, 'year' : year };
}

function gotoIndividual(point) {
  var recruiter = point.category || point.name;
  return recruiter
}

function gotoGroupSales(date) {
  var params = gotoGroup(date);
  window.location = 'group_sales?utf8=✓&%5Bchart%5D=bar&month=' + params.month +'&%5Byear%5D=' + params.year +'&commit=Display'
}

function gotoIndividualSales(point) {
  var recruiter = gotoIndividual(point);
  window.location = 'individual_sales?utf8=✓&%5Brecruiter%5D=' + recruiter + '&commit=Display'
}

function gotoGroupKpi(date) {
  var params = gotoGroup(date);
  var status = $(".kpi_wrapper").data("status");
  window.location = 'group?utf8=✓&%5Bstatus%5D=' + status + '&month=' + params.month +'&%5Byear%5D=' + params.year +'&commit=Display'
}

function gotoIndividualKpi(point) {
  var recruiter = gotoIndividual(point);
  var status = $(".kpi_wrapper").data("status");
  window.location = 'individual?utf8=✓&%5Brecruiter%5D=' + recruiter + '&%5Bstatus%5D=' + status + '&commit=Display'
}

function hideMonthSelect() {
  if ($("#_span").val() == "yearly"){
    $("#date_month").hide();
  } else {
    $("#date_month").show();
  }
}

function hideMsdPlacementsChart(domains_handled, number_of_placements, head_count_data) {
  if (domains_handled == ""){
    $("#pie_domains_handled").hide();
  } else {
    $("#pie_domains_handled").show();
  }

  if (number_of_placements == "0"){
    $("#search_layer").hide();
    $("#bar_jobs_handled").hide();
  } else {
    $("#search_layer").show();
    $("#bar_jobs_handled").show();
  }

  if (head_count_data == ""){
    $("#pie_head_count").hide();
  } else {
    $("#pie_head_count").show();
  }
}

function hideRecruitPlacementsChart(domains_handled) {
  if (domains_handled == ""){
    $("#pie_domains_handled").hide();
  } else {
    $("#pie_domains_handled").show();
  }
}

function hidePlacementsTableData(placements, msd_head_count, payroll_head_count) {
  if (msd_head_count == 0 || payroll_head_count == 0) {
    $('div.placements table tbody tr td')[0].style.width = "50%";
  }

  if (placements == 0 && msd_head_count == 0) {
    $('div.placements table tbody tr td')[0].style.width = "25%";
  }

  if (placements == 0 && payroll_head_count == 0) {
    $('div.placements table tbody tr td')[0].style.width = "25%";
  }
}
