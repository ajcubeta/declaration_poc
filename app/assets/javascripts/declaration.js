
// ========================= Employment Declaration ========================= //

$('#dob').datepicker({dateFormat: 'dd/mm/yy'});
$('#pr_obtain').datepicker({dateFormat: 'dd/mm/yy'});

// (D) Medical Self Disclosure Form
// 1. High Blood Pressure?
$('#item1_checkbox_yes').click(function() {
  $('#item1_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num1').show();
    $('#med_detail1').val('').focus();
  } else {
    $('#detail_item_num1').hide();
  }
});

$('#item1_checkbox_no').click(function() {
  $('#item1_checkbox_yes').attr('checked', false);
  $('#med_detail1').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num1').hide();
  }
});

// 2. Blood Disorder (*Anemia / Hep B / Thalassaemia / Others)?
$('#item2_checkbox_yes').click(function() {
  $('#item2_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num2').show();
    $('#med_detail2').val('').focus();
  } else {
    $('#detail_item_num2').hide();
  }
});

$('#item2_checkbox_no').click(function() {
  $('#item2_checkbox_yes').attr('checked', false);
  $('#med_detail2').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num2').hide();
  }
});

// 3. Blood Disorder (*Anemia / Hep B / Thalassaemia / Others)?
$('#item3_checkbox_yes').click(function() {
  $('#item3_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num3').show();
    $('#med_detail3').val('').focus();
  } else {
    $('#detail_item_num3').hide();
  }
});

$('#item3_checkbox_no').click(function() {
  $('#item3_checkbox_yes').attr('checked', false);
  $('#med_detail3').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num3').hide();
  }
});

// 4. Dizziness / Fainting spells / Blackout?
$('#item4_checkbox_yes').click(function() {
  $('#item4_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num4').show();
    $('#med_detail4').val('').focus();
  } else {
    $('#detail_item_num4').hide();
  }
});

$('#item4_checkbox_no').click(function() {
  $('#item4_checkbox_yes').attr('checked', false);
  $('#med_detail4').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num4').hide();
  }
});

// 5. Heart Disease (*Attack / Birth defects / Others)?
$('#item5_checkbox_yes').click(function() {
  $('#item5_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num5').show();
    $('#med_detail5').val('').focus();
  } else {
    $('#detail_item_num5').hide();
  }
});

$('#item5_checkbox_no').click(function() {
  $('#item5_checkbox_yes').attr('checked', false);
  $('#med_detail5').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num5').hide();
  }
});

// 6. Urine Infection / Kidney problem / Stones?
$('#item6_checkbox_yes').click(function() {
  $('#item6_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num6').show();
    $('#med_detail6').val('').focus();
  } else {
    $('#detail_item_num6').hide();
  }
});

$('#item6_checkbox_no').click(function() {
  $('#item6_checkbox_yes').attr('checked', false);
  $('#med_detail6').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num6').hide();
  }
});

// 7. Back or Spine problems?
$('#item7_checkbox_yes').click(function() {
  $('#item7_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num7').show();
    $('#med_detail7').val('').focus();
  } else {
    $('#detail_item_num7').hide();
  }
});

$('#item7_checkbox_no').click(function() {
  $('#item7_checkbox_yes').attr('checked', false);
  $('#med_detail7').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num7').hide();
  }
});

// 8. Hand / Leg / Foot problems / Sweaty palm?
$('#item8_checkbox_yes').click(function() {
  $('#item8_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num8').show();
    $('#med_detail8').val('').focus();
  } else {
    $('#detail_item_num8').hide();
  }
});

$('#item8_checkbox_no').click(function() {
  $('#item8_checkbox_yes').attr('checked', false);
  $('#med_detail8').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num8').hide();
  }
});

// 9. Growth / Tumor / Cancer?
$('#item9_checkbox_yes').click(function() {
  $('#item9_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num9').show();
    $('#med_detail9').val('').focus();
  } else {
    $('#detail_item_num9').hide();
  }
});

$('#item9_checkbox_no').click(function() {
  $('#item9_checkbox_yes').attr('checked', false);
  $('#med_detail9').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num9').hide();
  }
});

// 10. Vision Defects / Color Blindness?
$('#item10_checkbox_yes').click(function() {
  $('#item10_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num10').show();
    $('#med_detail10').val('').focus();
  } else {
    $('#detail_item_num10').hide();
  }
});

$('#item10_checkbox_no').click(function() {
  $('#item10_checkbox_yes').attr('checked', false);
  $('#med_detail10').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num10').hide();
  }
});

// 11. Hearing Defects?
$('#item11_checkbox_yes').click(function() {
  $('#item11_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num11').show();
    $('#med_detail11').val('').focus();
  } else {
    $('#detail_item_num11').hide();
  }
});

$('#item11_checkbox_no').click(function() {
  $('#item11_checkbox_yes').attr('checked', false);
  $('#med_detail11').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num11').hide();
  }
});

// 12. Fits / Epilepsy?
$('#item12_checkbox_yes').click(function() {
  $('#item12_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num12').show();
    $('#med_detail12').val('').focus();
  } else {
    $('#detail_item_num12').hide();
  }
});

$('#item12_checkbox_no').click(function() {
  $('#item12_checkbox_yes').attr('checked', false);
  $('#med_detail12').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num12').hide();
  }
});

// 13. Headaches / Migraine?
$('#item13_checkbox_yes').click(function() {
  $('#item13_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num13').show();
    $('#med_detail13').val('').focus();
  } else {
    $('#detail_item_num13').hide();
  }
});

$('#item13_checkbox_no').click(function() {
  $('#item13_checkbox_yes').attr('checked', false);
  $('#med_detail13').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num13').hide();
  }
});

// 14. Stomach / Gastric problems?
$('#item14_checkbox_yes').click(function() {
  $('#item14_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num14').show();
    $('#med_detail14').val('').focus();
  } else {
    $('#detail_item_num14').hide();
  }
});

$('#item14_checkbox_no').click(function() {
  $('#item14_checkbox_yes').attr('checked', false);
  $('#med_detail14').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num14').hide();
  }
});

// 15. Breathing / Lung problems / Asthma?
$('#item15_checkbox_yes').click(function() {
  $('#item15_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num15').show();
    $('#med_detail15').val('').focus();
  } else {
    $('#detail_item_num15').hide();
  }
});

$('#item15_checkbox_no').click(function() {
  $('#item15_checkbox_yes').attr('checked', false);
  $('#med_detail15').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num15').hide();
  }
});

// 16. Jaundice / Liver problems?
$('#item16_checkbox_yes').click(function() {
  $('#item16_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num16').show();
    $('#med_detail16').val('').focus();
  } else {
    $('#detail_item_num16').hide();
  }
});

$('#item16_checkbox_no').click(function() {
  $('#item16_checkbox_yes').attr('checked', false);
  $('#med_detail16').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num16').hide();
  }
});

// 17. Skin Problems?
$('#item17_checkbox_yes').click(function() {
  $('#item17_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num17').show();
    $('#med_detail17').val('').focus();
  } else {
    $('#detail_item_num17').hide();
  }
});

$('#item17_checkbox_no').click(function() {
  $('#item17_checkbox_yes').attr('checked', false);
  $('#med_detail17').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num17').hide();
  }
});

// 18. Hand Tremors?
$('#item18_checkbox_yes').click(function() {
  $('#item18_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num18').show();
    $('#med_detail18').val('').focus();
  } else {
    $('#detail_item_num18').hide();
  }
});

$('#item18_checkbox_no').click(function() {
  $('#item18_checkbox_yes').attr('checked', false);
  $('#med_detail18').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num18').hide();
  }
});

// 19. Addictive Drugs - Marijuana, Heroin, etc.?
$('#item19_checkbox_yes').click(function() {
  $('#item19_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num19').show();
    $('#med_detail19').val('').focus();
  } else {
    $('#detail_item_num19').hide();
  }
});

$('#item19_checkbox_no').click(function() {
  $('#item19_checkbox_yes').attr('checked', false);
  $('#med_detail19').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num19').hide();
  }
});

// 20. Mental problems?
$('#item20_checkbox_yes').click(function() {
  $('#item20_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num20').show();
    $('#med_detail20').val('').focus();
  } else {
    $('#detail_item_num20').hide();
  }
});

$('#item20_checkbox_no').click(function() {
  $('#item20_checkbox_yes').attr('checked', false);
  $('#med_detail20').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num20').hide();
  }
});

// 21. Radiation exposure at work between 1995 and now?
$('#item21_checkbox_yes').click(function() {
  $('#item21_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num21').show();
    $('#med_detail21').val('').focus();
  } else {
    $('#detail_item_num21').hide();
  }
});

$('#item21_checkbox_no').click(function() {
  $('#item21_checkbox_yes').attr('checked', false);
  $('#med_detail21').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num21').hide();
  }
});

// 22. Any Operations / Hospitalisation / Accident?
$('#item22_checkbox_yes').click(function() {
  $('#item22_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num22').show();
    $('#med_detail22').val('').focus();
  } else {
    $('#detail_item_num22').hide();
  }
});

$('#item22_checkbox_no').click(function() {
  $('#item22_checkbox_yes').attr('checked', false);
  $('#med_detail22').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num22').hide();
  }
});

// 23. For Female Only
// a) Have you been advised to have a mammorgram,
// biopsy, ultrasound or have any other gynaecological disorder?
$('#item23a_checkbox_yes').click(function() {
  $('#item23a_checkbox_no').attr('checked', false);
});

$('#item23a_checkbox_no').click(function() {
  $('#item23a_checkbox_yes').attr('checked', false);
});

// b) Are you pregnant now?
$('#item23b_checkbox_yes').click(function() {
  $('#item23b_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#detail_item_num23b').show();
    $('#med_detail23b').val('').focus();
  } else {
    $('#detail_item_num23b').hide();
  }
});

$('#item23b_checkbox_no').click(function() {
  $('#item23b_checkbox_yes').attr('checked', false);
  $('#med_detail23b').val('');

  if ($(this).is(':checked')) {
    $('#detail_item_num23b').hide();
  }
});

// c) Were there any complications during any of your pregnancy(ies)
// such as gestional diabetes, hypertension, etc
$('#item23c_checkbox_yes').click(function() {
  $('#item23c_checkbox_no').attr('checked', false);
});

$('#item23c_checkbox_no').click(function() {
  $('#item23c_checkbox_yes').attr('checked', false);
  $('#med_detail23c').val('');
});

// (E) Declaration by Applicant
// 1. Have you ever been charged with any offence or convicted of a criminal charge
// or for drug offense or detained by the authorities under the provisions of any
// law in any country?
$('#declare1_checkbox_yes').click(function() {
  $('#declare1_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#declare_item_num1').show();
    $('#declare_detail1').val('').focus();
  } else {
    $('#declare_item_num1').hide();
  }
});

$('#declare1_checkbox_no').click(function() {
  $('#declare1_checkbox_yes').attr('checked', false);
  $('#declare_detail1').val('');

  if ($(this).is(':checked')) {
    $('#declare_item_num1').hide();
  }
});

// 2. Have you been declared a bankrupt?
$('#declare2_checkbox_yes').click(function() {
  $('#declare2_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#declare_item_num2').show();
    $('#declare_detail2').val('').focus();
  } else {
    $('#declare_item_num2').hide();
  }
});

$('#declare2_checkbox_no').click(function() {
  $('#declare2_checkbox_yes').attr('checked', false);
  $('#declare_detail2').val('');

  if ($(this).is(':checked')) {
    $('#declare_item_num2').hide();
  }
});

// 3. Are you in any stage of pregnancy at this moment?
// $('#declare3_checkbox_yes').click(function() {
//   $('#declare3_checkbox_no').attr('checked', false);
//
//   if ($(this).is(':checked')) {
//     $('#declare_item_num3').show();
//     $('#declare_detail3').val('').focus();
//   } else {
//     $('#declare_item_num3').hide();
//   }
// });
//
// $('#declare3_checkbox_no').click(function() {
//   $('#declare3_checkbox_yes').attr('checked', false);
//   $('#declare_detail3').val('');
//
//   if ($(this).is(':checked')) {
//     $('#declare_item_num3').hide();
//   }
// });

// 4. Do you have a medical insurance?
$('#declare4_checkbox_yes').click(function() {
  $('#declare4_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#declare_item_num4').show();
    $('#declare_detail4').val('').focus();
  } else {
    $('#declare_item_num4').hide();
  }
});

$('#declare4_checkbox_no').click(function() {
  $('#declare4_checkbox_yes').attr('checked', false);
  $('#declare_detail4').val('');

  if ($(this).is(':checked')) {
    $('#declare_item_num4').hide();
  }
});

// 5. Do you have a life insurance?
$('#declare5_checkbox_yes').click(function() {
  $('#declare5_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#declare_item_num5').show();
    $('#declare_detail5').val('').focus();
  } else {
    $('#declare_item_num5').hide();
  }
});

$('#declare5_checkbox_no').click(function() {
  $('#declare5_checkbox_yes').attr('checked', false);
  $('#declare_detail5').val('');

  if ($(this).is(':checked')) {
    $('#declare_item_num5').hide();
  }
});

// Bank Document file remove!
$('#btn_bank_doc_remove').on('click', function() {
  var $el = $('#bank_document');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Personal Documents Required
// NRIC / Passport Document file remove!
$('#btn_nric_pp_doc_remove').on('click', function() {
  var $el = $('#nric_pp_id_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// PR REP file remove!
$('#btn_pr_rep_doc_remove').on('click', function() {
  var $el = $('#pr_rep_id_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// FW Pass / SVP file remove!
$('#btn_fwp_svp_doc_remove').on('click', function() {
  var $el = $('#fwp_svp_id_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// PR-Entry Permit (For PR Holder only) Document file remove!
$('#btn_pr_entry_permit_remove').on('click', function() {
  var $el = $('#pr_rep_id_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Work Pass Card / SVP Document file remove!
$('#btn_wp_svp_remove').on('click', function() {
  var $el = $('#wp_svp_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Certificate & Transcript Document file remove!
$('#btn_cert_doc_remove').on('click', function() {
  var $el = $('#transcript_certificate_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// NS Certificate Document file remove!
$('#btn_ns_cert_remove').on('click', function() {
  var $el = $('#ns_certificate_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Photo Document file remove!
$('#btn_photo_doc_remove').on('click', function() {
  var $el = $('#photo_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Resume Document file remove!
$('#btn_resume_doc_remove').on('click', function() {
  var $el = $('#resume_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Client Documents Required
// G50 Form file remove!
$('#btn_g50_doc_remove').on('click', function() {
  var $el = $('#g50_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Job Application Form file remove!
$('#btn_job_application_form_doc_remove').on('click', function() {
  var $el = $('#job_application_form_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// NDA file remove!
$('#btn_nda_doc_remove').on('click', function() {
  var $el = $('#nda_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// PDPA file remove!
$('#btn_pdpa_doc_remove').on('click', function() {
  var $el = $('#pdpa_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// Safeguard Form file remove!
$('#btn_safeguard_form_doc_remove').on('click', function() {
  var $el = $('#safeguard_form_doc');
      $el.wrap('<form>').closest('form').get(0).reset();
      $el.unwrap();
});

// I Agree to this Declaration
$('#btnAgreeDeclaration').live('click', function (e) {
  var name = $('#name').val();
  var race = $('#race').val();
  var other_race = $('#other_race').val();
  var marital_status = $('#marital_status').val();
  var religion = $('#religion').val();
  var other_religion = $('#other_religion').val();
  var dob = $('#dob').val();
  var nationality = $('#nationality').val();
  var nric = $('#nric').val();
  var pr_obtain = $('#pr_obtain').val();
  var foreign_id = $('#foreign_id').val();
  var address = $('#address').val();
  var email = $('#email').val();
  var mobile_contact = $('#mobile_contact').val();
  var first_contact_name = $('#first_contact_name').val();
  var first_contact_relationship = $('#first_contact_relationship').val();
  var first_contact_no = $('#first_contact_no').val();
  var second_contact_name = $('#second_contact_name').val();
  var second_contact_relationship = $('#second_contact_relationship').val();
  var second_contact_no = $('#second_contact_no').val();
  var bank_name = $('#bank_name').val();
  var bank_account_no = $('#bank_account_no').val();
  var bank_document = $('#bank_document').val();

  if (!name.trim()) {
    alert('Please fill in your Complete Name.');
    $('#name').focus();
    return false;
  }

  if (!race.trim()) {
    alert('Please select your Race.');
    $('#race').focus();
    return false;
  }

  if ((race === 'Others') && (!other_race.trim())) {
    alert('Please fill in your Race.');
    $('#other_race').focus();
    return false;
  }

  if (!marital_status.trim()) {
    alert('Please select your Marital Status.');
    $('#marital_status').focus();
    return false;
  }

  if (!religion.trim()) {
    alert('Please select your Religion.');
    $('#religion').focus();
    return false;
  }

  if ((religion === 'Others') && (!other_religion.trim())) {
    alert('Please fill in your Religion.');
    $('#other_religion').focus();
    return false;
  }

  if (!dob.trim()) {
    alert('Please select your Date of Birth.');
    $('#dob').focus();
    return false;
  }

  if (!nationality.trim()) {
    alert('Please select your Nationality.');
    $('#nationality').focus();
    return false;
  }

  // if ((nationality === 'SINGAPORE PR') && (!pr_obtain.trim())) {
  //   alert('Please select the date you obtained your Permanent Residency.');
  //   $('#pr_obtain').focus();
  //   return false;
  // }

  if ((nationality === 'Singaporean') && !nric.trim()) {
    alert('Please fill in your NRIC.');
    $('#nric').focus();
    return false;
  }

  if (!(nationality === 'Singaporean') && !foreign_id.trim()) {
    alert('Please fill in your FIN / Passport No.');
    $('#foreign_id').focus();
    return false;
  }

  if (!address.trim()) {
    alert('Please fill in your complete address in Singapore.');
    $('#address').focus();
    return false;
  } else if (!email.trim()) {
    alert('Please fill in your valid email address.');
    $('#email').focus();
    return false;
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    $('#email').focus();
    return false;
  } else if (!mobile_contact.trim()) {
    alert('Please fill in your mobile contact number.');
    $('#mobile_contact').focus();
    return false;
  }

  if (!first_contact_name.trim()) {
    alert('Please enter your Emergency Contact Name (Next of Kin).');
    $('#first_contact_name').focus();
    return false;
  } else if (!first_contact_relationship.trim()) {
    alert('Please enter the Emergency Contact Relationship (Next of Kin).');
    $('#first_contact_relationship').focus();
    return false;
  } else if (!first_contact_no.trim()) {
    alert('Please enter the Emergency Contact No. (Next of Kin).');
    $('#first_contact_no').focus();
    return false;
  }

  if (!second_contact_name.trim()) {
    alert('Please enter your Emergency Contact Name (Friends/Others).');
    $('#second_contact_name').focus();
    return false;
  } else if (!second_contact_relationship.trim()) {
    alert('Please enter the Emergency Contact Relationship (Friends/Others).');
    $('#second_contact_relationship').focus();
    return false;
  } else if (!second_contact_no.trim()) {
    alert('Please enter the Emergency Contact No. (Friends/Others).');
    $('#second_contact_no').focus();
    return false;
  }

  if (bank_name.trim() || bank_account_no.trim() || bank_document.trim()) {
    if (!bank_name.trim()) {
      alert('Bank Name cannot be empty.');
      $('#bank_account_no').focus();
      return false;
    } else if (!bank_account_no.trim()) {
      alert('Bank Account No. cannot be empty.');
      $('#bank_account_no').focus();
      return false;
    } else if ((bank_account_no.trim()) && (!validateNumber(bank_account_no))) {
      alert('Bank account number only allow digits.');
      $('#bank_account_no').focus();
      return false;
    } else if (!bank_document.trim()) {
      alert('Bank Document cannot be empty.');
      $('#bank_document').focus();
      return false;
    }
  }

  // Medical Self Disclosure Form
  // 1. High Blood Pressure?
  if (!($('#item1_checkbox_yes').is(':checked') || $('#item1_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item1_checkbox_no').focus();
    return false;
  }

  if ($('#item1_checkbox_yes').is(':checked') && ($('#med_detail1').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num1').show();
    $('#med_detail1').focus();
    return false;
  }

  // 2. Blood Disorder (*Anemia / Hep B / Thalassaemia / Others)?
  if (!($('#item2_checkbox_yes').is(':checked') || $('#item2_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item2_checkbox_no').focus();
    return false;
  }

  if ($('#item2_checkbox_yes').is(':checked') && ($('#med_detail2').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num2').show();
    $('#med_detail2').focus();
    return false;
  }

  // 3. Dizziness / Fainting spells / Blackout?
  if (!($('#item3_checkbox_yes').is(':checked') || $('#item3_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item3_checkbox_no').focus();
    return false;
  }

  if ($('#item3_checkbox_yes').is(':checked') && ($('#med_detail3').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num3').show();
    $('#med_detail3').focus();
    return false;
  }

  // 4. Heart Disease (*Attack / Birth defects / Others)?
  if (!($('#item4_checkbox_yes').is(':checked') || $('#item4_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item4_checkbox_no').focus();
    return false;
  }

  if ($('#item4_checkbox_yes').is(':checked') && ($('#med_detail4').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num4').show();
    $('#med_detail4').focus();
    return false;
  }

  // 5. Diabetes Mellitus?
  if (!($('#item5_checkbox_yes').is(':checked') || $('#item5_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item5_checkbox_no').focus();
    return false;
  }

  if ($('#item5_checkbox_yes').is(':checked') && ($('#med_detail5').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num5').show();
    $('#med_detail5').focus();
    return false;
  }

  // 6. Urine Infection / Kidney problem / Stones?
  if (!($('#item6_checkbox_yes').is(':checked') || $('#item6_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item6_checkbox_no').focus();
    return false;
  }

  if ($('#item6_checkbox_yes').is(':checked') && ($('#med_detail6').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num6').show();
    $('#med_detail6').focus();
    return false;
  }

  // 7. Back or Spine problems?
  if (!($('#item7_checkbox_yes').is(':checked') || $('#item7_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item7_checkbox_no').focus();
    return false;
  }

  if ($('#item7_checkbox_yes').is(':checked') && ($('#med_detail7').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num7').show();
    $('#med_detail7').focus();
    return false;
  }

  // 8. Hand / Leg / Foot problems / Sweaty palm?
  if (!($('#item8_checkbox_yes').is(':checked') || $('#item8_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item8_checkbox_no').focus();
    return false;
  }

  if ($('#item8_checkbox_yes').is(':checked') && ($('#med_detail8').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num8').show();
    $('#med_detail8').focus();
    return false;
  }

  // 9. Growth / Tumor / Cancer?
  if (!($('#item9_checkbox_yes').is(':checked') || $('#item9_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item9_checkbox_no').focus();
    return false;
  }

  if ($('#item9_checkbox_yes').is(':checked') && ($('#med_detail9').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num9').show();
    $('#med_detail9').focus();
    return false;
  }

  // 10. Vision Defects / Color Blindness?
  if (!($('#item10_checkbox_yes').is(':checked') || $('#item10_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item10_checkbox_no').focus();
    return false;
  }

  if ($('#item10_checkbox_yes').is(':checked') && ($('#med_detail10').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num10').show();
    $('#med_detail10').focus();
    return false;
  }

  // 11. Hearing Defects?
  if (!($('#item11_checkbox_yes').is(':checked') || $('#item11_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item11_checkbox_no').focus();
    return false;
  }

  if ($('#item11_checkbox_yes').is(':checked') && ($('#med_detail11').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num11').show();
    $('#med_detail11').focus();
    return false;
  }

  // 12. Fits / Epilepsy?
  if (!($('#item12_checkbox_yes').is(':checked') || $('#item12_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item12_checkbox_no').focus();
    return false;
  }

  if ($('#item12_checkbox_yes').is(':checked') && ($('#med_detail12').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num12').show();
    $('#med_detail12').focus();
    return false;
  }

  // 13. Headaches / Migraine?
  if (!($('#item13_checkbox_yes').is(':checked') || $('#item13_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item13_checkbox_no').focus();
    return false;
  }

  if ($('#item13_checkbox_yes').is(':checked') && ($('#med_detail13').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num13').show();
    $('#med_detail13').focus();
    return false;
  }

  // 14. Stomach / Gastric problems?
  if (!($('#item14_checkbox_yes').is(':checked') || $('#item14_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item14_checkbox_no').focus();
    return false;
  }

  if ($('#item14_checkbox_yes').is(':checked') && ($('#med_detail14').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num14').show();
    $('#med_detail14').focus();
    return false;
  }

  // 15. Breathing / Lung problems / Asthma?
  if (!($('#item15_checkbox_yes').is(':checked') || $('#item15_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item15_checkbox_no').focus();
    return false;
  }

  if ($('#item15_checkbox_yes').is(':checked') && ($('#med_detail15').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num15').show();
    $('#med_detail15').focus();
    return false;
  }

  // 16. Jaundice / Liver problems?
  if (!($('#item16_checkbox_yes').is(':checked') || $('#item16_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item16_checkbox_no').focus();
    return false;
  }

  if ($('#item16_checkbox_yes').is(':checked') && ($('#med_detail16').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num16').show();
    $('#med_detail16').focus();
    return false;
  }

  // 17. Skin Problems?
  if (!($('#item17_checkbox_yes').is(':checked') || $('#item17_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item17_checkbox_no').focus();
    return false;
  }

  if ($('#item17_checkbox_yes').is(':checked') && ($('#med_detail17').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num17').show();
    $('#med_detail17').focus();
    return false;
  }

  // 18. Hand Tremors?
  if (!($('#item18_checkbox_yes').is(':checked') || $('#item18_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item18_checkbox_no').focus();
    return false;
  }

  if ($('#item18_checkbox_yes').is(':checked') && ($('#med_detail18').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num18').show();
    $('#med_detail18').focus();
    return false;
  }

  // 19. Addictive Drugs - Marijuana, Heroin, etc.?
  if (!($('#item19_checkbox_yes').is(':checked') || $('#item19_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item19_checkbox_no').focus();
    return false;
  }

  if ($('#item19_checkbox_yes').is(':checked') && ($('#med_detail19').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num19').show();
    $('#med_detail19').focus();
    return false;
  }

  // 20. Mental problems?
  if (!($('#item20_checkbox_yes').is(':checked') || $('#item20_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item20_checkbox_no').focus();
    return false;
  }

  if ($('#item20_checkbox_yes').is(':checked') && ($('#med_detail20').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num20').show();
    $('#med_detail20').focus();
    return false;
  }

  // 21. Radiation exposure at work between 1995 and now?
  if (!($('#item21_checkbox_yes').is(':checked') || $('#item21_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item21_checkbox_no').focus();
    return false;
  }

  if ($('#item21_checkbox_yes').is(':checked') && ($('#med_detail21').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num21').show();
    $('#med_detail21').focus();
    return false;
  }

  // 22. Any Operations / Hospitalisation / Accident?
  if (!($('#item22_checkbox_yes').is(':checked') || $('#item22_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item22_checkbox_no').focus();
    return false;
  }

  if ($('#item22_checkbox_yes').is(':checked') && ($('#med_detail22').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num22').show();
    $('#med_detail22').focus();
    return false;
  }

  // 23. For Female Only
  // a.) Have you been advised to have a mammorgram, biopsy,
  // ultrasound or have any other gynaecological disorder?
  if (!($('#item23a_checkbox_yes').is(':checked') || $('#item23a_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item23a_checkbox_no').focus();
    return false;
  }

  // b.) Are you pregnant now? If yes, please state the weeks / months of pregnancy.
  if (!($('#item23b_checkbox_yes').is(':checked') || $('#item23b_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item23b_checkbox_no').focus();
    return false;
  }

  if ($('#item23b_checkbox_yes').is(':checked') && ($('#med_detail23b').val() === '')) {
    alert('Please elaborate the details.');
    $('#detail_item_num23b').show();
    $('#med_detail23b').focus();
    return false;
  }

  // c.) Were there any complications during any of your pregnancy(ies)
  // such as gestional diabetes, hypertension, etc.
  if (!($('#item23c_checkbox_yes').is(':checked') || $('#item23c_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#item23c_checkbox_no').focus();
    return false;
  }

  // Declaration by Applicant
  // 1. Have you ever been charged with any offence or convicted of a criminal charge or for
  // drug offense or detained by the authorities under the provisions of any law in any country?
  if (!($('#declare1_checkbox_yes').is(':checked') || $('#declare1_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#declare1_checkbox_no').focus();
    return false;
  }

  if ($('#declare1_checkbox_yes').is(':checked') && ($('#declare_detail1').val() === '')) {
    alert('Please elaborate the details.');
    $('#declare_item_num1').show();
    $('#declare_detail1').focus();
    return false;
  }

  // 2. Have you been declared a bankrupt?
  if (!($('#declare2_checkbox_yes').is(':checked') || $('#declare2_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#declare2_checkbox_no').focus();
    return false;
  }

  if ($('#declare2_checkbox_yes').is(':checked') && ($('#declare_detail2').val() === '')) {
    alert('Please elaborate the details.');
    $('#declare_item_num2').show();
    $('#declare_detail2').focus();
    return false;
  }

  // Temporarily diable this item #3, Joanne wants to check with MOM details.
  // 3. Are you in any stage of pregnancy at this moment? (Applicable to female employee)
  // Bring back #4 -> #3, and #5 -> #4 temporarily.

  // 3. Do you have a medical insurance?
  if (!($('#declare4_checkbox_yes').is(':checked') || $('#declare4_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#declare4_checkbox_no').focus();
    return false;
  }

  if ($('#declare4_checkbox_yes').is(':checked') && ($('#declare_detail4').val() === '')) {
    alert('Please elaborate the details.');
    $('#declare_item_num4').show();
    $('#declare_detail4').focus();
    return false;
  }

  // 4. Do you have a life insurance?
  if (!($('#declare5_checkbox_yes').is(':checked') || $('#declare5_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#declare5_checkbox_no').focus();
    return false;
  }

  if ($('#declare5_checkbox_yes').is(':checked') && ($('#declare_detail5').val() === '')) {
    alert('Please elaborate the details.');
    $('#declare_item_num5').show();
    $('#declare_detail5').focus();
    return false;
  }

  // Please read carefully:  I wish to confirm
  if ($('#confirm_declaration_checkbox').is(':checked') == false) {
    alert('Please select from the checkboxes if you have read and confirm this Declaration.');
    $('#confirm_declaration_checkbox').focus();
    return false;
  }
});

function displayOtherRace(races) {
  if (races.options[races.selectedIndex].value === 'Others') {
    $('#otherRace').show();
    $('#other_race').focus();
  } else {
    $('#other_race').val('');
    $('#otherRace').hide();
  }
}

function displayOtherReligion(religions) {
  if (religions.options[religions.selectedIndex].value === 'Others') {
    $('#otherReligion').show();
    $('#other_religion').focus();
  } else {
    $('#other_religion').val('');
    $('#otherReligion').hide();
  }
}

// function displayPrStatusObtain(nationalities) {
//   if (nationalities.options[nationalities.selectedIndex].value === 'SINGAPORE PR') {
//     $('#prStatusObtain').show();
//     $('#pr_obtain').focus();
//   } else {
//     $('#pr_obtain').val('');
//     $('#prStatusObtain').hide();
//   }
// }

// function displayIdentification(nationalities) {
//   singaporeNationality = (nationalities.options[nationalities.selectedIndex].value);
//   emptyNationality = (nationalities.options[nationalities.selectedIndex].value);
//
//   if ((singaporeNationality === 'SINGAPOREAN') || (singaporeNationality === 'SINGAPORE PR')) {
//     $('#nricNum').show();
//     $('#nric').focus();
//     $('#otherID').hide();
//     $('#foreign_id').val('');
//   } else if (emptyNationality === '') {
//     $('#nric').val('');
//     $('#nricNum').hide();
//     $('#foreign_id').val('');
//     $('#otherID').hide();
//   } else {
//     $('#nric').val('');
//     $('#nricNum').hide();
//     $('#otherID').show();
//     $('#foreign_id').focus();
//   }
// }

function validateEmail(email) {
  var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailReg.test(email);
}

function validateNumber(bankNum) {
  var bankReg = /^\d+$/;
  return bankReg.test(bankNum);
}

function bankDocumentValidation() {
  var fileInput = document.getElementById('bank_document');
  var filePath = fileInput.value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
  if (!allowedExtensions.exec(filePath)) {
    alert('Please upload file having extensions of .JPEG / .JPG / .PNG / .GIF / .PDF only.');
    fileInput.value = '';
    return false;
  }
}

// ========================= Work Pass Application ========================= //

// Section 2: Applicant’s Personal Information
// (C) Travel Document Information
$('#date_of_expiry').datepicker({dateFormat: 'dd/mm/yy'});
// (D) Spouse Details (If any)
$('#spouse_dob').datepicker({dateFormat: 'dd/mm/yy'});

// Section 3: Applicant’s Education / Membership Details
// (A) Education Details (Applicant Period of Studies
$('#educ_detail1_from_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#educ_detail1_to_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#educ_detail2_from_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#educ_detail2_to_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
// (B) Membership Details
$('#membership_detail1_from_period').datepicker({dateFormat: 'dd/mm/yy'});
$('#membership_detail1_to_period').datepicker({dateFormat: 'dd/mm/yy'});
$('#membership_detail2_from_period').datepicker({dateFormat: 'dd/mm/yy'});
$('#membership_detail2_to_period').datepicker({dateFormat: 'dd/mm/yy'});

// Section 4: Applicant’s Spouse Education (If Applicable)
// Spouse Applicant Period of Studies
$('#spouse_educ_detail1_from_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#spouse_educ_detail1_to_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#spouse_educ_detail2_from_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});
$('#spouse_educ_detail2_to_period_of_study').datepicker({dateFormat: 'dd/mm/yy'});

// Section 5: Applicant’s Employment Details
// Current / Latest Employment Details
$('#from_latest_employment').datepicker({dateFormat: 'dd/mm/yy'});
$('#to_latest_employment').datepicker({dateFormat: 'dd/mm/yy'});
$('#from_previous_employment').datepicker({dateFormat: 'dd/mm/yy'});
$('#to_previous_employment').datepicker({dateFormat: 'dd/mm/yy'});

// Section 1: Pass Declaration
// a.) Are you holding an existing work pass –
// Employment Pass, S Pass, Work Permit or Related Passes?
$('#pass_dec1_checkbox_yes').click(function() {
  $('#pass_dec1_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#pass_dec_detail1').show();
    $('#pass_dec1_detail').val('').focus();
  } else {
    $('#pass_dec_detail1').hide();
  }
});

$(function(){
  $('.pass_info').hover(
    function(){
      $(this).next().show();
    },
    function(){
      $(this).next().hide();
    }
  )
});

$('#pass_dec1_checkbox_no').click(function() {
  $('#pass_dec1_checkbox_yes').attr('checked', false);
  $('#pass_dec1_detail').val('');

  if ($(this).is(':checked')) {
    $('#pass_dec_detail1').hide();
  }
});

// b.) Have you ever held any Employment Pass, S Pass,
// Work Permit, Related Passes or Student’s Pass?
$('#pass_dec2_checkbox_yes').click(function() {
  $('#pass_dec2_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#pass_dec_detail2').show();
    $('#pass_dec2_detail').val('').focus();
  } else {
    $('#pass_dec_detail1').hide();
  }
});

$('#pass_dec2_checkbox_no').click(function() {
  $('#pass_dec2_checkbox_yes').attr('checked', false);
  $('#pass_dec2_detail').val('');

  if ($(this).is(':checked')) {
    $('#pass_dec_detail2').hide();
  }
});

// c.) Are you a Singapore Citizen or Singapore Permanent Resident?
$('#pass_dec3_checkbox_yes').click(function() {
  $('#pass_dec3_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#pass_dec_detail3').show();
    $('#pass_dec3_detail').val('').focus();
  } else {
    $('#pass_dec_detail1').hide();
  }
});

$('#pass_dec3_checkbox_no').click(function() {
  $('#pass_dec3_checkbox_yes').attr('checked', false);
  $('#pass_dec3_detail').val('');

  if ($(this).is(':checked')) {
    $('#pass_dec_detail3').hide();
  }
});

// Section 2: Applicant’s Personal Information
// Do you want to edit the Personal Particulars?
$('#edit_personal_yes').click(function() {
  $('#edit_personal_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#name').attr('disabled', false);
    $('#name').focus();
    $('#gender').attr('disabled', false);
    $('#race').attr('disabled', false);
    $('#marital_status').attr('disabled', false);
    $('#religion').attr('disabled', false);
    $('#dob').attr('disabled', false);
    $('#nationality').attr('disabled', false);
    $('#foreign_id').attr('disabled', false);
  } else {
    $('#name').attr('disabled', true);
    $('#gender').attr('disabled', true);
    $('#race').attr('disabled', true);
    $('#marital_status').attr('disabled', true);
    $('#religion').attr('disabled', true);
    $('#dob').attr('disabled', true);
    $('#nationality').attr('disabled', true);
    $('#foreign_id').attr('disabled', true);
  }
});

$('#edit_personal_no').click(function() {
  $('#edit_personal_yes').attr('checked', false);
  $('#name').attr('disabled', true);
  $('#gender').attr('disabled', true);
  $('#race').attr('disabled', true);
  $('#marital_status').attr('disabled', true);
  $('#religion').attr('disabled', true);
  $('#dob').attr('disabled', true);
  $('#nationality').attr('disabled', true);
  $('#foreign_id').attr('disabled', true);
});

// Do you want to edit the Contact Particulars?
$('#edit_contact_yes').click(function() {
  $('#edit_contact_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#address').attr('disabled', false);
    $('#address').focus();
    $('#email').attr('disabled', false);
    $('#home_contact').attr('disabled', false);
    $('#mobile_contact').attr('disabled', false);
  } else {
    $('#address').attr('disabled', true);
    $('#email').attr('disabled', true);
    $('#home_contact').attr('disabled', true);
    $('#mobile_contact').attr('disabled', true);
  }
});

$('#edit_contact_no').click(function() {
  $('#edit_contact_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#address').attr('disabled', true);
    $('#email').attr('disabled', true);
    $('#home_contact').attr('disabled', true);
    $('#mobile_contact').attr('disabled', true);
  }
});

// (C) Travel Document Information
function displayOtherTravelDocument(travel_docs) {
  if (travel_docs.options[travel_docs.selectedIndex].value === 'Others') {
    $('#otherTravelDocument').show();
    $('#other_travel_document').focus();
  } else {
    $('#other_travel_document').val('');
    $('#otherTravelDocument').hide();
  }
}

function displayMalaysianIdentity(countries) {
  if (countries.options[countries.selectedIndex].value === 'MALAYSIA') {
    $('#malaysianIdentityNumber').show();
    $('#malaysian_ic').focus();
  } else {
    $('#malaysian_ic').val('');
    $('#malaysianIdentityNumber').hide();
  }
}

// (D) Spouse Details (If any)
$('#spouse_detail_yes').click(function() {
  $('#spouse_detail_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#spouse_detail').show();
    $('#name_of_spouse').val('').focus();
  } else {
    $('#name_of_spouse').val('');
    $('#spouse_detail').hide();
  }
});

$('#spouse_detail_no').click(function() {
  $('#spouse_detail_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#name_of_spouse').val('');
    $('#spouse_detail').hide();
  }
});

// Section 3: Applicant’s Education / Membership Details
// (A) Education Details
$('#create1_educ_detail').click(function() {
  $('#create2_educ_detail').attr('checked', false);
  $('#supporting_docs1_yes').attr('checked', false);
  $('#supporting_docs1_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#education_detail_table1').show();
    $('#supporting_docs1_no').focus();
    $('#education_detail_table2').hide();
  } else {
    $('#supporting_docs1_yes').attr('checked', false);
    $('#supporting_docs1_no').attr('checked', false);
    $('#education_detail_table1').hide();
    $('#education_detail_table2').hide();
  }
});

$('#create2_educ_detail').click(function() {
  $('#create1_educ_detail').attr('checked', false);
  $('#supporting_docs1_yes').attr('checked', false);
  $('#supporting_docs1_no').attr('checked', false);
  $('#supporting_docs2_yes').attr('checked', false);
  $('#supporting_docs2_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#education_detail_table1').show();
    $('#supporting_docs1_no').focus();
    $('#education_detail_table2').show();
  } else {
    $('#supporting_docs1_yes').attr('checked', false);
    $('#supporting_docs1_no').attr('checked', false);
    $('#education_detail_table1').hide();
    $('#supporting_docs2_yes').attr('checked', false);
    $('#supporting_docs2_no').attr('checked', false);
    $('#education_detail_table2').hide();
  }
});

// (A) Education Details
// 1.1) Have you submitted supporting documents to MOM for this qualification before?
$('#supporting_docs1_yes').click(function() {
  $('#supporting_docs1_no').attr('checked', false);
});

$('#supporting_docs1_no').click(function() {
  $('#supporting_docs1_yes').attr('checked', false);
});

$('#study_qualification1_country_institution_no').hide();
$('#study_qualification1_school_institution_no').hide();

// (A) Education Details
// 1.2) Did the applicant study for this qualification
// at the declared Awarding Body / Institution / University?
$('#study_at_institution1_yes').click(function() {
  $('#study_at_institution1_no').attr('checked', false);
  $('#study_qualification1_country_institution_no').hide();
  $('#study_qualification1_school_institution_no').hide();
});

$('#study_at_institution1_no').click(function() {
  $('#study_at_institution1_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#study_qualification1_country_institution_no').show();
    $('#educ_detail1_country_of_school').val('').focus();
    $('#study_qualification1_school_institution_no').show();
  } else {
    $('#study_qualification1_country_institution_no').hide();
    $('#study_qualification1_school_institution_no').hide();
  }
});

// (A) Education Details
// 2.1) Have you submitted supporting documents to MOM for this qualification before?
$('#supporting_docs2_yes').click(function() {
  $('#supporting_docs2_no').attr('checked', false);
});

$('#supporting_docs2_no').click(function() {
  $('#supporting_docs2_yes').attr('checked', false);
});

$('#study_qualification2_country_institution_no').hide();
$('#study_qualification2_school_institution_no').hide();

// (A) Education Details
// 2.2) Did the applicant study for this qualification
// at the declared Awarding Body / Institution / University?
$('#study_at_institution2_yes').click(function() {
  $('#study_at_institution2_no').attr('checked', false);
  $('#study_qualification2_country_institution_no').hide();
  $('#study_qualification2_school_institution_no').hide();
});

$('#study_at_institution2_no').click(function() {
  $('#study_at_institution2_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#study_qualification2_country_institution_no').show();
    $('#educ_detail2_country_of_school').val('').focus();
    $('#study_qualification2_school_institution_no').show();
  } else {
    $('#study_qualification2_country_institution_no').hide();
    $('#study_qualification2_school_institution_no').hide();
  }
});

// (B) Membership Details
$('#create0_membership_detail').click(function() {
  $('#create1_membership_detail').attr('checked', false);
  $('#create2_membership_detail').attr('checked', false);
  $('#membership_detail_table1').hide();
  $('#membership_detail_table2').hide();
});

$('#create1_membership_detail').click(function() {
  $('#create0_membership_detail').attr('checked', false);
  $('#create2_membership_detail').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#membership_detail_table1').show();
    $('#membership_detail1_society_organisation').val('').focus();
    $('#membership_detail_table2').hide();
  } else {
    $('#membership_detail_table1').hide();
    $('#membership_detail1_society_organisation').val('');
    $('#membership_detail_table2').hide();
  }
});

$('#create2_membership_detail').click(function() {
  $('#create0_membership_detail').attr('checked', false);
  $('#create1_membership_detail').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#membership_detail_table1').show();
    $('#membership_detail1_society_organisation').val('').focus();
    $('#membership_detail_table2').show();
  } else {
    $('#membership_detail_table1').hide();
    $('#membership_detail1_society_organisation').val('');
    $('#membership_detail_table2').hide();
  }
});

// Section 4: Applicant’s Spouse Education (If Applicable)
// (A) Education Details
// Number of Education Details
$('#create0_spouse_education_detail').click(function() {
  $('#create1_spouse_education_detail').attr('checked', false);
  $('#create2_spouse_education_detail').attr('checked', false);
  $('#spouse_supporting_docs2_yes').attr('checked', false);
  $('#spouse_supporting_docs2_no').attr('checked', false);
  $('#spouse_education_detail_table2').hide();
  $('#spouse_supporting_docs1_yes').attr('checked', false);
  $('#spouse_supporting_docs1_no').attr('checked', false);
  $('#spouse_education_detail_table1').hide();
});

$('#create1_spouse_education_detail').click(function() {
  $('#create0_spouse_education_detail').attr('checked', false);
  $('#create2_spouse_education_detail').attr('checked', false);
  $('#spouse_supporting_docs1_yes').attr('checked', false);
  $('#spouse_supporting_docs1_no').attr('checked', false);
  $('#spouse_supporting_docs2_yes').attr('checked', false);
  $('#spouse_supporting_docs2_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#spouse_education_detail_table1').show();
    $('#spouse_supporting_docs1_no').focus();
    $('#spouse_education_detail_table2').hide();
  } else {
    $('#spouse_supporting_docs1_yes').attr('checked', false);
    $('#spouse_supporting_docs1_no').attr('checked', false);
    $('#spouse_education_detail_table1').hide();
    $('#spouse_education_detail_table2').hide();
  }
});

$('#create2_spouse_education_detail').click(function() {
  $('#create0_spouse_education_detail').attr('checked', false);
  $('#create1_spouse_education_detail').attr('checked', false);
  $('#spouse_supporting_docs1_yes').attr('checked', false);
  $('#spouse_supporting_docs1_no').attr('checked', false);
  $('#spouse_supporting_docs2_yes').attr('checked', false);
  $('#spouse_supporting_docs2_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#spouse_education_detail_table1').show();
    $('#spouse_supporting_docs1_no').focus();
    $('#spouse_education_detail_table2').show();
  } else {
    $('#spouse_supporting_docs1_yes').attr('checked', false);
    $('#spouse_supporting_docs1_no').attr('checked', false);
    $('#spouse_education_detail_table1').hide();
    $('#spouse_supporting_docs2_yes').attr('checked', false);
    $('#spouse_supporting_docs2_no').attr('checked', false);
    $('#spouse_education_detail_table2').hide();
  }
});

// (A) Spouse Education Details
// 1.1) Have you submitted supporting documents to MOM for this qualification before?
$('#spouse_supporting_docs1_yes').click(function() {
  $('#spouse_supporting_docs1_no').attr('checked', false);
});

$('#spouse_supporting_docs1_no').click(function() {
  $('#spouse_supporting_docs1_yes').attr('checked', false);
});

$('#spouse_study_qualification1_country_institution_no').hide();
$('#spouse_study_qualification1_school_institution_no').hide();

// (A) Spouse Education Details
// 1.2) Did the applicant study for this qualification
// at the declared Awarding Body / Institution / University?
$('#spouse_study_at_institution1_yes').click(function() {
  $('#spouse_study_at_institution1_no').attr('checked', false);
  $('#spouse_study_qualification1_country_institution_no').hide();
  $('#spouse_study_qualification1_school_institution_no').hide();
});

$('#spouse_study_at_institution1_no').click(function() {
  $('#spouse_study_at_institution1_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#spouse_study_qualification1_country_institution_no').show();
    $('#spouse_educ_detail1_country_of_school').val('').focus();
    $('#spouse_study_qualification1_school_institution_no').show();
  } else {
    $('#spouse_study_qualification1_country_institution_no').hide();
    $('#spouse_study_qualification1_school_institution_no').hide();
  }
});

// (A) Spouse Education Details
// 2.1) Did the applicant study for this qualification
// at the declared Awarding Body / Institution / University?
$('#spouse_supporting_docs2_yes').click(function() {
  $('#spouse_supporting_docs2_no').attr('checked', false);
});

$('#spouse_supporting_docs2_no').click(function() {
  $('#spouse_supporting_docs2_yes').attr('checked', false);
});

$('#spouse_study_qualification2_country_institution_no').hide();
$('#spouse_study_qualification2_school_institution_no').hide();

// (A) Education Details
// 2.2) Did the applicant study for this qualification
// at the declared Awarding Body / Institution / University?
$('#spouse_study_at_institution2_yes').click(function() {
  $('#spouse_study_at_institution2_no').attr('checked', false);
  $('#spouse_study_qualification2_country_institution_no').hide();
  $('#spouse_study_qualification2_school_institution_no').hide();
});

$('#spouse_study_at_institution2_no').click(function() {
  $('#spouse_study_at_institution2_yes').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#spouse_study_qualification2_country_institution_no').show();
    $('#spouse_educ_detail2_country_of_school').val('').focus();
    $('#spouse_study_qualification2_school_institution_no').show();
  } else {
    $('#spouse_study_qualification2_country_institution_no').hide();
    $('#spouse_study_qualification2_school_institution_no').hide();
  }
});

// Section 5: Applicant’s Employment Details
$('#create0_employment_record').click(function() {
  $('#create1_employment_record').attr('checked', false);
  $('#create2_employment_record').attr('checked', false);
  $('#latest_employment_record_table').hide();
  $('#previous_employment_record_table').hide();
});

$('#create1_employment_record').click(function() {
  $('#create0_employment_record').attr('checked', false);
  $('#create2_employment_record').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#latest_employment_record_table').show();
    $('#latest_company').val('').focus();
    $('#previous_employment_record_table').hide();
  } else {
    $('#latest_company').val('');
    $('#latest_employment_record_table').hide();
    $('#previous_employment_record_table').hide();
  }
});

$('#create2_employment_record').click(function() {
  $('#create0_employment_record').attr('checked', false);
  $('#create1_employment_record').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#latest_employment_record_table').show();
    $('#latest_company').val('').focus();
    $('#previous_employment_record_table').show();
  } else {
    $('#latest_employment_record_table').hide();
    $('#previous_company').val('');
    $('#previous_employment_record_table').hide();
  }
});

// Section 6: Declaration by Applicant
// a.) Has the Applicant ever been refused entry into or deported from any country?
$('#dec_by_app1_yes').click(function() {
  $('#dec_by_app1_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item1').show();
    $('#dec_by_app_detail1').val('').focus();
  } else {
    $('#dec_by_app_item1').hide();
  }
});

$('#dec_by_app1_no').click(function() {
  $('#dec_by_app1_yes').attr('checked', false);
  $('#dec_by_app_detail1').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item1').hide();
  }
});

// b.) Has the Applicant ever been convicted in a court of law in any country?
$('#dec_by_app2_yes').click(function() {
  $('#dec_by_app2_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item2').show();
    $('#dec_by_app_detail2').val('').focus();
  } else {
    $('#dec_by_app_item2').hide();
  }
});

$('#dec_by_app2_no').click(function() {
  $('#dec_by_app2_yes').attr('checked', false);
  $('#dec_by_app_detail2').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item2').hide();
  }
});

// c.) Has the Applicant ever been prohibited from entering Singapore?
$('#dec_by_app3_yes').click(function() {
  $('#dec_by_app3_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item3').show();
    $('#dec_by_app_detail3').val('').focus();
  } else {
    $('#dec_by_app_item3').hide();
  }
});

$('#dec_by_app3_no').click(function() {
  $('#dec_by_app3_yes').attr('checked', false);
  $('#dec_by_app_detail3').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item3').hide();
  }
});

// d.) Has the Applicant ever entered Singapore using a passport issued by a different country?
$('#dec_by_app4_yes').click(function() {
  $('#dec_by_app4_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item4').show();
    $('#dec_by_app_detail4').val('').focus();
  } else {
    $('#dec_by_app_item4').hide();
  }
});

$('#dec_by_app4_no').click(function() {
  $('#dec_by_app4_yes').attr('checked', false);
  $('#dec_by_app_detail4').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item4').hide();
  }
});

// e.) Has the Applicant ever entered Singapore using a different name?
$('#dec_by_app5_yes').click(function() {
  $('#dec_by_app5_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item5').show();
    $('#dec_by_app_detail5').val('').focus();
  } else {
    $('#dec_by_app_item5').hide();
  }
});

$('#dec_by_app5_no').click(function() {
  $('#dec_by_app5_yes').attr('checked', false);
  $('#dec_by_app_detail5').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item5').hide();
  }
});

// f.) Has the Applicant ever been a Singapore Citizen or Singapore Permanent Resident?
$('#dec_by_app6_yes').click(function() {
  $('#dec_by_app6_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item6').show();
    $('#dec_by_app_detail6').val('').focus();
  } else {
    $('#dec_by_app_item6').hide();
  }
});

$('#dec_by_app6_no').click(function() {
  $('#dec_by_app6_yes').attr('checked', false);
  $('#dec_by_app_detail6').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item6').hide();
  }
});

// g.) Has the Applicant ever been issued a work visa by another country(s)?
// If yes, please provide the most recent details below.
$('#dec_by_app7_yes').click(function() {
  $('#dec_by_app7_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dec_by_app_item7').show();
    $('#country_of_issue').val('').focus();
  } else {
    $('#dec_by_app_item7').hide();
  }
});

$('#dec_by_app7_no').click(function() {
  $('#dec_by_app7_yes').attr('checked', false);
  $('#country_of_issue').val('');

  if ($(this).is(':checked')) {
    $('#dec_by_app_item7').hide();
  }
});

// Submit Work Pass Application
$('#btnSubmitWorkPassApplication').live('click', function (e) {

  // Section 1: Pass Declaration a.)
  if (!($('#pass_dec1_checkbox_yes').is(':checked') || $('#pass_dec1_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#pass_dec1_checkbox_no').focus();
    return false;
  }

  if ($('#pass_dec1_checkbox_yes').is(':checked') && ($('#pass_dec1_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#pass_dec_detail1').show();
    $('#pass_dec1_detail').focus();
    return false;
  }

  // Section 1: Pass Declaration b.)
  if (!($('#pass_dec2_checkbox_yes').is(':checked') || $('#pass_dec2_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#pass_dec2_checkbox_no').focus();
    return false;
  }

  if ($('#pass_dec2_checkbox_yes').is(':checked') && ($('#pass_dec2_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#pass_dec_detail2').show();
    $('#pass_dec2_detail').focus();
    return false;
  }

  // Section 1: Pass Declaration c.)
  if (!($('#pass_dec3_checkbox_yes').is(':checked') || $('#pass_dec3_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#pass_dec3_checkbox_no').focus();
    return false;
  }

  if ($('#pass_dec3_checkbox_yes').is(':checked') && ($('#pass_dec3_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#pass_dec_detail3').show();
    $('#pass_dec3_detail').focus();
    return false;
  }

  // Section 2: Applicant’s Personal Information
  // (C) Travel Document Information
  var travel_document_type = $('#travel_document_type').val();
  var other_travel_document = $('#other_travel_document').val();
  var travel_document_num = $('#travel_document_num').val();
  var date_of_expiry = $('#date_of_expiry').val();
  var country_of_birth = $('#country_of_birth').val();
  var country_of_origin = $('#country_of_origin').val();

  if (!travel_document_type.trim()) {
    alert('Travel document type is empty.');
    $('#travel_document_type').focus();
    return false;
  } else if ((travel_document_type.trim() === 'Others') && !other_travel_document.trim()) {
    alert('Please fill in other travel document type.');
    $('#other_travel_document').focus();
    return false;
  } else if (!travel_document_num.trim()) {
    alert('Travel document number cannot be empty.');
    $('#travel_document_num').focus();
    return false;
  } else if (!date_of_expiry.trim()) {
    alert('Date of expiry cannot be empty.');
    $('#date_of_expiry').focus();
    return false;
  } else if (!country_of_birth.trim()) {
    alert('Country of birth is empty.');
    $('#country_of_birth').focus();
    return false;
  } else if (!country_of_origin.trim()) {
    alert('Country of origin is empty.');
    $('#country_of_origin').focus();
    return false;
  }

  // (D) Spouse Details (If any)
  if ($('#spouse_detail_yes').is(':checked')) {
    var name_of_spouse = $('#name_of_spouse').val();
    var spouse_fin_nric_no = $('#spouse_fin_nric_no').val();
    var spouse_travel_document_type = $('#spouse_travel_document_type').val();
    var spouse_dob = $('#spouse_dob').val();

    if (!name_of_spouse.trim()) {
      alert('Please fill in your spouse name.');
      $('#name_of_spouse').focus();
      return false;
    } else if (!spouse_fin_nric_no.trim()) {
      alert('Please fill in spouse FIN / NRIC no.');
      $('#spouse_fin_nric_no').focus();
      return false;
    } else if (!spouse_travel_document_type.trim()) {
      alert('Please fill in spouse ID type.');
      $('#spouse_travel_document_type').focus();
      return false;
    } else if (!spouse_dob.trim()) {
      alert('Please fill in spouse your spouse date of birth.');
      $('#spouse_dob').focus();
      return false;
    }
  }

  // Section 3: Applicant’s Education / Membership Details
  // (A) Education Details
  if (!$('#create1_educ_detail').is(':checked') && !$('#create2_educ_detail').is(':checked')) {
    alert('Are you sure you have no education details?');
    $('#create1_educ_detail').focus();
    return false;
  }

  if ($('#create1_educ_detail').is(':checked')) {
    var educ_detail1_country = $('#educ_detail1_country').val();
    var educ_detail1_institution = $('#educ_detail1_institution').val();
    var educ_detail1_campus_college = $('#educ_detail1_campus_college').val();
    var educ_detail1_qualification = $('#educ_detail1_qualification').val();
    var educ_detail1_faculty = $('#educ_detail1_faculty').val();
    var educ_detail1_specialisation = $('#educ_detail1_specialisation').val();
    var educ_detail1_mode_of_study = $('#educ_detail1_mode_of_study').val();
    var educ_detail1_from_period_of_study = $('#educ_detail1_from_period_of_study').val();
    var educ_detail1_to_period_of_study = $('#educ_detail1_to_period_of_study').val();
    var study_at_institution1_yes = $('#study_at_institution1_yes').val();
    var study_at_institution1_no = $('#study_at_institution1_no').val();

    if (!educ_detail1_country.trim()) {
      alert('Please select the country.');
      $('#educ_detail1_country').focus();
      return false;
    } else if (!educ_detail1_institution.trim()) {
      alert('Please fill in the name of awarding body / institution / university.');
      $('#educ_detail1_institution').focus();
      return false;
    } else if (!educ_detail1_campus_college.trim()) {
      alert('Please fill in the main campus or affiliating college attended.');
      $('#educ_detail1_campus_college').focus();
      return false;
    } else if (!educ_detail1_qualification.trim()) {
      alert('Please fill in the qualification.');
      $('#educ_detail1_qualification').focus();
      return false;
    } else if (!educ_detail1_faculty.trim()) {
      alert('Please fill in the faculty.');
      $('#educ_detail1_faculty').focus();
      return false;
    } else if (!educ_detail1_specialisation.trim()) {
      alert('Please fill in the specialisation.');
      $('#educ_detail1_specialisation').focus();
      return false;
    } else if (!educ_detail1_mode_of_study.trim()) {
      alert('Please fill in the mode of study.');
      $('#educ_detail1_mode_of_study').focus();
      return false;
    } else if (!educ_detail1_from_period_of_study.trim()) {
      alert('Please fill in the from period of study.');
      $('#educ_detail1_from_period_of_study').focus();
      return false;
    } else if (!educ_detail1_to_period_of_study.trim()) {
      alert('Please fill in the to period of study.');
      $('#educ_detail1_to_period_of_study').focus();
      return false;
    }

    if (!($('#study_at_institution1_yes').is(':checked')) && !($('#study_at_institution1_no').is(':checked'))) {
      alert('Please select from the checkbox.');
      $('#study_at_institution1_yes').focus();
      return false;
    }

    if ($('#study_at_institution1_no').is(':checked')) {
      var educ_detail1_country_of_school = $('#educ_detail1_country_of_school').val();
      var educ_detail1_name_of_school = $('#educ_detail1_name_of_school').val();

      if (!educ_detail1_country_of_school.trim()) {
        alert('Please fill in the country of school attended.');
        $('#educ_detail1_country_of_school').focus();
        return false;
      } else if (!educ_detail1_name_of_school.trim()) {
        alert('Please fill in the name of school attended.');
        $('#educ_detail1_name_of_school').focus();
        return false;
      }
    }
  }

  if ($('#create2_educ_detail').is(':checked')) {
    var educ_detail2_country = $('#educ_detail2_country').val();
    var educ_detail2_institution = $('#educ_detail2_institution').val();
    var educ_detail2_campus_college = $('#educ_detail2_campus_college').val();
    var educ_detail2_qualification = $('#educ_detail2_qualification').val();
    var educ_detail2_faculty = $('#educ_detail2_faculty').val();
    var educ_detail2_specialisation = $('#educ_detail2_specialisation').val();
    var educ_detail2_mode_of_study = $('#educ_detail2_mode_of_study').val();
    var educ_detail2_from_period_of_study = $('#educ_detail2_from_period_of_study').val();
    var educ_detail2_to_period_of_study = $('#educ_detail2_to_period_of_study').val();
    var study_at_institution2_yes = $('#study_at_institution2_yes').val();
    var study_at_institution2_no = $('#study_at_institution2_no').val();

    if (!educ_detail2_country.trim()) {
      alert('Please select the country.');
      $('#educ_detail2_country').focus();
      return false;
    } else if (!educ_detail2_institution.trim()) {
      alert('Please fill in the name of awarding body / institution / university.');
      $('#educ_detail2_institution').focus();
      return false;
    } else if (!educ_detail2_campus_college.trim()) {
      alert('Please fill in the main campus or affiliating college attended.');
      $('#educ_detail2_campus_college').focus();
      return false;
    } else if (!educ_detail2_qualification.trim()) {
      alert('Please fill in the qualification.');
      $('#educ_detail2_qualification').focus();
      return false;
    } else if (!educ_detail2_faculty.trim()) {
      alert('Please fill in the faculty.');
      $('#educ_detail2_faculty').focus();
      return false;
    } else if (!educ_detail2_specialisation.trim()) {
      alert('Please fill in the specialisation.');
      $('#educ_detail2_specialisation').focus();
      return false;
    } else if (!educ_detail2_mode_of_study.trim()) {
      alert('Please fill in the mode of study.');
      $('#educ_detail2_mode_of_study').focus();
      return false;
    } else if (!educ_detail2_from_period_of_study.trim()) {
      alert('Please fill in the from period of study.');
      $('#educ_detail2_from_period_of_study').focus();
      return false;
    } else if (!educ_detail2_to_period_of_study.trim()) {
      alert('Please fill in the to period of study.');
      $('#educ_detail2_to_period_of_study').focus();
      return false;
    }

    if (!($('#study_at_institution2_yes').is(':checked')) && !($('#study_at_institution2_no').is(':checked'))) {
      alert('Please select from the checkbox.');
      $('#study_at_institution2_yes').focus();
      return false;
    }

    if ($('#study_at_institution2_no').is(':checked')) {
      var educ_detail2_country_of_school = $('#educ_detail2_country_of_school').val();
      var educ_detail2_name_of_school = $('#educ_detail2_name_of_school').val();

      if (!educ_detail2_country_of_school.trim()) {
        alert('Please fill in the country of school attended.');
        $('#educ_detail2_country_of_school').focus();
        return false;
      } else if (!educ_detail2_name_of_school.trim()) {
        alert('Please fill in the name of school attended.');
        $('#educ_detail2_name_of_school').focus();
        return false;
      }
    }
  }

  // (B) Membership Details
  if (!$('#create0_membership_detail').is(':checked') && !$('#create1_membership_detail').is(':checked') && !$('#create2_membership_detail').is(':checked')) {
    alert('Are you sure you have no membership details?');
    $('#create0_membership_detail').focus();
    return false;
  }

  if ($('#create1_membership_detail').is(':checked')) {
    var membership_detail1_society_organisation = $('#membership_detail1_society_organisation').val();
    var membership_detail1_position_held = $('#membership_detail1_position_held').val();
    var membership_detail1_from_period = $('#membership_detail1_from_period').val();
    var membership_detail1_to_period = $('#membership_detail1_to_period').val();

    if (!membership_detail1_society_organisation.trim()) {
      alert('Please select the position held.');
      $('#membership_detail1_society_organisation').focus();
      return false;
    } else if (!membership_detail1_position_held.trim()) {
      alert('Please select the position held.');
      $('#membership_detail1_position_held').focus();
      return false;
    } else if (!membership_detail1_from_period.trim()) {
      alert('Please fill in the from period date.');
      $('#membership_detail1_from_period').focus();
      return false;
    } else if (!membership_detail1_to_period.trim()) {
      alert('Please fill in the to period date.');
      $('#membership_detail1_to_period').focus();
      return false;
    }
  }

  if ($('#create2_membership_detail').is(':checked')) {
    var membership_detail2_society_organisation = $('#membership_detail2_society_organisation').val();
    var membership_detail2_position_held = $('#membership_detail2_position_held').val();
    var membership_detail2_from_period = $('#membership_detail2_from_period').val();
    var membership_detail2_to_period = $('#membership_detail2_to_period').val();

    if (!membership_detail2_society_organisation.trim()) {
      alert('Please select the position held.');
      $('#membership_detail2_society_organisation').focus();
      return false;
    } else if (!membership_detail2_position_held.trim()) {
      alert('Please select the position held.');
      $('#membership_detail2_position_held').focus();
      return false;
    } else if (!membership_detail2_from_period.trim()) {
      alert('Please fill in the from period date.');
      $('#membership_detail2_from_period').focus();
      return false;
    } else if (!membership_detail2_to_period.trim()) {
      alert('Please fill in the to period date.');
      $('#membership_detail2_to_period').focus();
      return false;
    }
  }

  // Section 4: Applicant’s Spouse Education (If Applicable)
  // (A) Education Details

  if (!$('#create0_spouse_education_detail').is(':checked') && !$('#create1_spouse_education_detail').is(':checked') && !$('#create2_spouse_education_detail').is(':checked')) {
    alert("If \'Applicant\'s Spouse Education\' is not applicable to you, please select \'0\'");
    $('#create0_spouse_education_detail').focus();
    return false;
  }

  if ($('#create1_spouse_education_detail').is(':checked')) {
    var spouse_educ_detail1_country = $('#spouse_educ_detail1_country').val();
    var spouse_educ_detail1_institution = $('#spouse_educ_detail1_institution').val();
    var spouse_educ_detail1_campus_college = $('#spouse_educ_detail1_campus_college').val();
    var spouse_educ_detail1_qualification = $('#spouse_educ_detail1_qualification').val();
    var spouse_educ_detail1_faculty = $('#spouse_educ_detail1_faculty').val();
    var spouse_educ_detail1_specialisation = $('#spouse_educ_detail1_specialisation').val();
    var spouse_educ_detail1_mode_of_study = $('#spouse_educ_detail1_mode_of_study').val();
    var spouse_educ_detail1_from_period_of_study = $('#spouse_educ_detail1_from_period_of_study').val();
    var spouse_educ_detail1_to_period_of_study = $('#spouse_educ_detail1_to_period_of_study').val();

    if (!spouse_educ_detail1_country.trim()) {
      alert('Please select the country.');
      $('#spouse_educ_detail1_country').focus();
      return false;
    } else if (!spouse_educ_detail1_institution.trim()) {
      alert('Please fill in the name of awarding body / institution / university.');
      $('#spouse_educ_detail1_institution').focus();
      return false;
    } else if (!spouse_educ_detail1_campus_college.trim()) {
      alert('Please fill in the main campus or affiliating college attended.');
      $('#spouse_educ_detail1_campus_college').focus();
      return false;
    } else if (!spouse_educ_detail1_qualification.trim()) {
      alert('Please fill in the qualification.');
      $('#spouse_educ_detail1_qualification').focus();
      return false;
    } else if (!spouse_educ_detail1_faculty.trim()) {
      alert('Please fill in the faculty.');
      $('#spouse_educ_detail1_faculty').focus();
      return false;
    } else if (!spouse_educ_detail1_specialisation.trim()) {
      alert('Please fill in the specialisation.');
      $('#spouse_educ_detail1_specialisation').focus();
      return false;
    } else if (!spouse_educ_detail1_mode_of_study.trim()) {
      alert('Please fill in the mode of study.');
      $('#spouse_educ_detail1_mode_of_study').focus();
      return false;
    } else if (!spouse_educ_detail1_from_period_of_study.trim()) {
      alert('Please fill in the from period of study.');
      $('#spouse_educ_detail1_from_period_of_study').focus();
      return false;
    } else if (!spouse_educ_detail1_to_period_of_study.trim()) {
      alert('Please fill in the to period of study.');
      $('#spouse_educ_detail1_to_period_of_study').focus();
      return false;
    }

    if ($('#spouse_study_at_institution1_no').is(':checked')) {
      var spouse_educ_detail1_country_of_school = $('#spouse_educ_detail1_country_of_school').val();
      var spouse_educ_detail1_name_of_school = $('#spouse_educ_detail1_name_of_school').val();

      if (!spouse_educ_detail1_country_of_school.trim()) {
        alert('Please fill in the country of school attended.');
        $('#spouse_educ_detail1_country_of_school').focus();
        return false;
      } else if (!spouse_educ_detail1_name_of_school.trim()) {
        alert('Please fill in the name of school attended.');
        $('#spouse_educ_detail1_name_of_school').focus();
        return false;
      }
    }
  }

  if ($('#create2_spouse_education_detail').is(':checked')) {
    var spouse_educ_detail2_country = $('#spouse_educ_detail2_country').val();
    var spouse_educ_detail2_institution = $('#spouse_educ_detail2_institution').val();
    var spouse_educ_detail2_campus_college = $('#spouse_educ_detail2_campus_college').val();
    var spouse_educ_detail2_qualification = $('#spouse_educ_detail2_qualification').val();
    var spouse_educ_detail2_faculty = $('#spouse_educ_detail2_faculty').val();
    var spouse_educ_detail2_specialisation = $('#spouse_educ_detail2_specialisation').val();
    var spouse_educ_detail2_mode_of_study = $('#spouse_educ_detail2_mode_of_study').val();
    var spouse_educ_detail2_from_period_of_study = $('#spouse_educ_detail2_from_period_of_study').val();
    var spouse_educ_detail2_to_period_of_study = $('#spouse_educ_detail2_to_period_of_study').val();

    if (!spouse_educ_detail2_country.trim()) {
      alert('Please select the country.');
      $('#spouse_educ_detail2_country').focus();
      return false;
    } else if (!spouse_educ_detail2_institution.trim()) {
      alert('Please fill in the name of awarding body / institution / university.');
      $('#spouse_educ_detail2_institution').focus();
      return false;
    } else if (!spouse_educ_detail2_campus_college.trim()) {
      alert('Please fill in the main campus or affiliating college attended.');
      $('#spouse_educ_detail2_campus_college').focus();
      return false;
    } else if (!spouse_educ_detail2_qualification.trim()) {
      alert('Please fill in the qualification.');
      $('#spouse_educ_detail2_qualification').focus();
      return false;
    } else if (!spouse_educ_detail2_faculty.trim()) {
      alert('Please fill in the faculty.');
      $('#spouse_educ_detail2_faculty').focus();
      return false;
    } else if (!spouse_educ_detail2_specialisation.trim()) {
      alert('Please fill in the specialisation.');
      $('#spouse_educ_detail2_specialisation').focus();
      return false;
    } else if (!spouse_educ_detail2_mode_of_study.trim()) {
      alert('Please fill in the mode of study.');
      $('#spouse_educ_detail2_mode_of_study').focus();
      return false;
    } else if (!spouse_educ_detail2_from_period_of_study.trim()) {
      alert('Please fill in the from period of study.');
      $('#spouse_educ_detail2_from_period_of_study').focus();
      return false;
    } else if (!spouse_educ_detail2_to_period_of_study.trim()) {
      alert('Please fill in the to period of study.');
      $('#spouse_educ_detail2_to_period_of_study').focus();
      return false;
    }

    if ($('#spouse_study_at_institution2_no').is(':checked')) {
      var spouse_educ_detail2_country_of_school = $('#spouse_educ_detail2_country_of_school').val();
      var spouse_educ_detail2_name_of_school = $('#spouse_educ_detail2_name_of_school').val();

      if (!spouse_educ_detail2_country_of_school.trim()) {
        alert('Please fill in the country of school attended.');
        $('#spouse_educ_detail2_country_of_school').focus();
        return false;
      } else if (!spouse_educ_detail2_name_of_school.trim()) {
        alert('Please fill in the name of school attended.');
        $('#spouse_educ_detail2_name_of_school').focus();
        return false;
      }
    }
  }

  // Section 5: Applicant’s Employment Details
  var year_work_experience = $('#year_work_experience').val();
  var month_work_experience = $('#month_work_experience').val();
  var year_related_work_experience = $('#year_related_work_experience').val();
  var month_related_work_experience = $('#month_related_work_experience').val();

  if ((year_work_experience.trim()) && (!validateNumber(year_work_experience))) {
    alert('Total year(s) of working experience only allow digits.');
    $('#year_work_experience').focus();
    return false;
  } else if ((month_work_experience.trim()) && (!validateNumber(month_work_experience))) {
    alert('Total month(s) of working experience only allow digits.');
    $('#month_work_experience').focus();
    return false;
  } else if ((year_related_work_experience.trim()) && (!validateNumber(year_related_work_experience))) {
    alert('Total year(s) of related experience only allow digits.');
    $('#year_related_work_experience').focus();
    return false;
  } else if ((month_related_work_experience.trim()) && (!validateNumber(month_related_work_experience))) {
    alert('Total month(s) of related experience only allow digits.');
    $('#month_related_work_experience').focus();
    return false;
  }

  if (!$('#create0_employment_record').is(':checked') && !$('#create1_employment_record').is(':checked') && !$('#create2_employment_record').is(':checked')) {
    alert('Are you sure you have no past working experience?');
    $('#create0_employment_record').focus();
    return false;
  }

  if ($('#create1_employment_record').is(':checked')) {
    var latest_company = $('#latest_company').val();
    var latest_occupation = $('#latest_occupation').val();
    var latest_country = $('#latest_country').val();
    var from_latest_employment = $('#from_latest_employment').val();
    var to_latest_employment = $('#to_latest_employment').val();
    var latest_drawn_salary = $('#latest_drawn_salary').val();

    if (!latest_company.trim()) {
      alert('Please fill in your current / latest company.');
      $('#latest_company').focus();
      return false;
    } else if (!latest_occupation.trim()) {
      alert('Please fill in your current / latest occupation.');
      $('#latest_occupation').focus();
      return false;
    } else if (!latest_country.trim()) {
      alert('Please fill in the current / latest country.');
      $('#latest_country').focus();
      return false;
    } else if (!from_latest_employment.trim()) {
      alert('Please fill in the period from date.');
      $('#from_latest_employment').focus();
      return false;
    } else if (!to_latest_employment.trim()) {
      alert('Please fill in the period to date.');
      $('#to_latest_employment').focus();
      return false;
    } else if (!latest_drawn_salary.trim()) {
      alert('Please fill in latest drawn salary.');
      $('#latest_drawn_salary').focus();
      return false;
    }
  }

  // Current / Latest Employment Details
  var latest_drawn_salary = $('#latest_drawn_salary').val();
  if ((latest_drawn_salary.trim()) && (!validateNumber(latest_drawn_salary))) {
    alert('Latest drawn fixed monthly salary only allow digits.');
    $('#latest_drawn_salary').focus();
    return false;
  }

  // Previous Employment Details
  var previous_last_drawn_salary = $('#previous_last_drawn_salary').val();
  if ((previous_last_drawn_salary.trim()) && (!validateNumber(previous_last_drawn_salary))) {
    alert('Previous last drawn fixed monthly salary only allow digits.');
    $('#previous_last_drawn_salary').focus();
    return false;
  }

  if ($('#create2_employment_record').is(':checked')) {
    var previous_company = $('#previous_company').val();
    var previous_occupation = $('#previous_occupation').val();
    var previous_country = $('#previous_country').val();
    var from_previous_employment = $('#from_previous_employment').val();
    var to_previous_employment = $('#to_previous_employment').val();
    var previous_last_drawn_salary = $('#previous_last_drawn_salary').val();

    if (!previous_company.trim()) {
      alert('Please fill in your previous company.');
      $('#previous_company').focus();
      return false;
    } else if (!previous_occupation.trim()) {
      alert('Please fill in your previous occupation.');
      $('#previous_occupation').focus();
      return false;
    } else if (!previous_country.trim()) {
      alert('Please fill in the previous country.');
      $('#previous_country').focus();
      return false;
    } else if (!from_previous_employment.trim()) {
      alert('Please fill in the period from date.');
      $('#from_previous_employment').focus();
      return false;
    } else if (!to_previous_employment.trim()) {
      alert('Please fill in the period to date.');
      $('#to_previous_employment').focus();
      return false;
    } else if (!previous_last_drawn_salary.trim()) {
      alert('Please fill in previous drawn salary.');
      $('#previous_last_drawn_salary').focus();
      return false;
    }
  }

  // Section 6: Declaration by Applicant a.)
  if (!($('#dec_by_app1_yes').is(':checked') || $('#dec_by_app1_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app1_no').focus();
    return false;
  }

  if ($('#dec_by_app1_yes').is(':checked') && ($('#dec_by_app_detail1').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item1').show();
    $('#dec_by_app_detail1').focus();
    return false;
  }

  // Section 6: Declaration by Applicant b.)
  if (!($('#dec_by_app2_yes').is(':checked') || $('#dec_by_app2_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app2_no').focus();
    return false;
  }

  if ($('#dec_by_app2_yes').is(':checked') && ($('#dec_by_app_detail2').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item2').show();
    $('#dec_by_app_detail2').focus();
    return false;
  }

  // Section 6: Declaration by Applicant c.)
  if (!($('#dec_by_app3_yes').is(':checked') || $('#dec_by_app3_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app3_no').focus();
    return false;
  }

  if ($('#dec_by_app3_yes').is(':checked') && ($('#dec_by_app_detail3').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item3').show();
    $('#dec_by_app_detail3').focus();
    return false;
  }

  // Section 6: Declaration by Applicant d.)
  if (!($('#dec_by_app4_yes').is(':checked') || $('#dec_by_app4_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app4_no').focus();
    return false;
  }

  if ($('#dec_by_app4_yes').is(':checked') && ($('#dec_by_app_detail4').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item4').show();
    $('#dec_by_app_detail4').focus();
    return false;
  }

  // Section 6: Declaration by Applicant e.)
  if (!($('#dec_by_app5_yes').is(':checked') || $('#dec_by_app5_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app5_no').focus();
    return false;
  }

  if ($('#dec_by_app5_yes').is(':checked') && ($('#dec_by_app_detail5').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item5').show();
    $('#dec_by_app_detail5').focus();
    return false;
  }

  // Section 6: Declaration by Applicant f.)
  if (!($('#dec_by_app6_yes').is(':checked') || $('#dec_by_app6_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app6_no').focus();
    return false;
  }

  if ($('#dec_by_app6_yes').is(':checked') && ($('#dec_by_app_detail6').val() === '')) {
    alert('Please elaborate the details.');
    $('#dec_by_app_item6').show();
    $('#dec_by_app_detail6').focus();
    return false;
  }

  // Section 6: Declaration by Applicant g.)
  if (!($('#dec_by_app7_yes').is(':checked') || $('#dec_by_app7_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dec_by_app7_no').focus();
    return false;
  }

  if ($('#dec_by_app7_yes').is(':checked') && ($('#country_of_issue').val() === '')) {
    alert('Please select the issuing country.');
    $('#dec_by_app_item7').show();
    $('#country_of_issue').focus();
    return false;
  }

  var country_of_issue = $('#country_of_issue').val();
  var length_year_visa = $('#length_year_visa').val();
  var length_month_visa = $('#length_month_visa').val();

  if (country_of_issue.trim() && !length_year_visa.trim()) {
    alert('Year(s) length of visa cannot be empty.');
    $('#length_year_visa').focus();
    return false;
  } else if (country_of_issue.trim() &&  !validateNumber(length_year_visa)) {
    alert('Year(s) length of visa only allow digits.');
    $('#length_year_visa').focus();
    return false;
  } else if (country_of_issue.trim() && length_year_visa.trim() && !length_month_visa.trim()) {
    alert('Month(s) length of visa cannot be empty.');
    $('#length_month_visa').focus();
    return false;
  } else if (country_of_issue.trim() &&  length_year_visa.trim() && !validateNumber(length_month_visa)) {
    alert('Month(s) length of visa only allow digits.');
    $('#length_month_visa').focus();
    return false;
  }

  // Please read carefully:  I wish to confirm
  if ($('#confirm_workpass_checkbox').is(':checked') == false) {
    alert('Please select from the checkboxes if you have read and confirm this Work Pass Application.');
    $('#confirm_workpass_checkbox').focus();
    return false;
  }
});

// ====== Dependent Pass / Long Term Visit Pass 'Applications' ====== //

// Section 1: Pass Declaration
// (Referring to Dependant or Long term visit pass applicant)

// a.) Are you holding an existing work pass –
// Employment Pass, S Pass, Work Permit or Related Passes
$('#dpass_dec1_checkbox_yes').click(function() {
  $('#dpass_dec1_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail1').show();
    $('#dpass_dec1_detail').val('').focus();
  } else {
    $('#dpass_dec_detail1').hide();
  }
});

$('#dpass_dec1_checkbox_no').click(function() {
  $('#dpass_dec1_checkbox_yes').attr('checked', false);
  $('#pass_dec1_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail1').hide();
  }
});

// b.) Have you ever held any Employment Pass, S Pass,
// Work Permit, Related Passes or Student’s Pass?
$('#dpass_dec2_checkbox_yes').click(function() {
  $('#dpass_dec2_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail2').show();
    $('#dpass_dec2_detail').val('').focus();
  } else {
    $('#dpass_dec_detail2').hide();
  }
});

$('#dpass_dec2_checkbox_no').click(function() {
  $('#dpass_dec2_checkbox_yes').attr('checked', false);
  $('#pass_dec2_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail2').hide();
  }
});

// c.) Are you a Singapore Citizen or Singapore Permanent Resident?
$('#dpass_dec3_checkbox_yes').click(function() {
  $('#dpass_dec3_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail3').show();
    $('#dpass_dec3_detail').val('').focus();
  } else {
    $('#dpass_dec_detail3').hide();
  }
});

$('#dpass_dec3_checkbox_no').click(function() {
  $('#dpass_dec3_checkbox_yes').attr('checked', false);
  $('#pass_dec3_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec_detail3').hide();
  }
});

// Section 3: Applicant’s Education / Last Drawn Salary Details
// (Referring to Dependant or Long term visit pass applicant)
// (A) Education Details
function disAbleIfNoFormalEducation(highest_qualifications) {
  var no_formal_education = 'NO FORMAL EDUCATION / PRIMARY EDUCATION / JUNIOR SCHOOL EDUCATION'
  if (highest_qualifications.options[highest_qualifications.selectedIndex].value === no_formal_education) {
    $('#dpass_country_institution').val('');
    $('#dpass_country_institution').attr('disabled', true);
    $('#dpass_name_institution').val('');
    $('#dpass_name_institution').attr('disabled', true);
  } else {
    $('#dpass_country_institution').attr('disabled', false);
    $('#dpass_name_institution').attr('disabled', false);
  }
}

// (B) School Enrolment
// Is the applicant planning to study or currently studying in an educational
// institution in Singapore? (excluding pre-school, nursery and kindergarten)
$('#school_enrolment_yes').click(function() {
  $('#school_enrolment_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#enrolment_status').attr('disabled', false);
    $('#enrolment_status').focus();
    $('#name_of_school_in_sg').attr('disabled', false);
    $('#education_level').attr('disabled', false);
    $('#month_school_started').attr('disabled', false);
    $('#year_school_started').attr('disabled', false);
    $('#month_school_ended').attr('disabled', false);
    $('#year_school_ended').attr('disabled', false);
  } else {
    $('#enrolment_status').attr('disabled', true);
    $('#enrolment_status').val('');
    $('#name_of_school_in_sg').attr('disabled', true);
    $('#name_of_school_in_sg').val('');
    $('#education_level').attr('disabled', true);
    $('#education_level').val('');
    $('#month_school_started').attr('disabled', true);
    $('#month_school_started').val('');
    $('#year_school_started').attr('disabled', true);
    $('#year_school_started').val('');
    $('#month_school_ended').attr('disabled', true);
    $('#month_school_ended').val('');
    $('#year_school_ended').attr('disabled', true);
    $('#year_school_ended').val('');
  }
});

$('#school_enrolment_no').click(function() {
  $('#school_enrolment_yes').attr('checked', false);
  $('#enrolment_status').attr('disabled', true);
  $('#enrolment_status').val('');
  $('#name_of_school_in_sg').attr('disabled', true);
  $('#name_of_school_in_sg').val('');
  $('#education_level').attr('disabled', true);
  $('#education_level').val('');
  $('#month_school_started').attr('disabled', true);
  $('#month_school_started').val('');
  $('#year_school_started').attr('disabled', true);
  $('#year_school_started').val('');
  $('#month_school_ended').attr('disabled', true);
  $('#month_school_ended').val('');
  $('#year_school_ended').attr('disabled', true);
  $('#year_school_ended').val('');
});

// $('#month_school_started').datepicker({dateFormat: 'dd/mm/yy'});
// $('#year_school_started').datepicker({dateFormat: 'dd/mm/yy'});
// $('#month_school_ended').datepicker({dateFormat: 'dd/mm/yy'});
// $('#year_school_ended').datepicker({dateFormat: 'dd/mm/yy'});

// $('#school_enrolment_start_started').datepicker({dateFormat: 'dd/mm/yy'});
// $('#school_enrolment_end_started').datepicker({dateFormat: 'dd/mm/yy'});

// Section 4: Declaration by Applicant
// (Referring to Dependant or Long term visit pass applicant)
// a.) Has the Applicant ever been refused entry into or deported from any country?
$('#dpass_dec1_applicant_checkbox_yes').click(function() {
  $('#dpass_dec1_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec1_applicant').show();
    $('#dpass_dec_by_app_detail1').val('').focus();
  } else {
    $('#dpass_dec1_applicant').hide();
  }
});

$('#dpass_dec1_applicant_checkbox_no').click(function() {
  $('#dpass_dec1_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec1_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec1_applicant').hide();
  }
});

// b.) Has the Applicant ever been convicted in a court of law in any country?
$('#dpass_dec2_applicant_checkbox_yes').click(function() {
  $('#dpass_dec2_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec2_applicant').show();
    $('#dpass_dec_by_app_detail2').val('').focus();
  } else {
    $('#dpass_dec2_applicant').hide();
  }
});

$('#dpass_dec2_applicant_checkbox_no').click(function() {
  $('#dpass_dec2_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec2_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec2_applicant').hide();
  }
});

// c.) Has the Applicant ever been prohibited from entering Singapore?
$('#dpass_dec3_applicant_checkbox_yes').click(function() {
  $('#dpass_dec3_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec3_applicant').show();
    $('#dpass_dec_by_app_detail3').val('').focus();
  } else {
    $('#dpass_dec3_applicant').hide();
  }
});

$('#dpass_dec3_applicant_checkbox_no').click(function() {
  $('#dpass_dec3_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec3_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec3_applicant').hide();
  }
});

// d.) Has the Applicant ever entered Singapore using a passport issued by a different country?
$('#dpass_dec4_applicant_checkbox_yes').click(function() {
  $('#dpass_dec4_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec4_applicant').show();
    $('#dpass_dec_by_app_detail4').val('').focus();
  } else {
    $('#dpass_dec4_applicant').hide();
  }
});

$('#dpass_dec4_applicant_checkbox_no').click(function() {
  $('#dpass_dec4_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec4_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec4_applicant').hide();
  }
});

// e.) Has the Applicant ever entered Singapore using a different name?
$('#dpass_dec5_applicant_checkbox_yes').click(function() {
  $('#dpass_dec5_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec5_applicant').show();
    $('#dpass_dec_by_app_detail5').val('').focus();
  } else {
    $('#dpass_dec5_applicant').hide();
  }
});

$('#dpass_dec5_applicant_checkbox_no').click(function() {
  $('#dpass_dec5_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec5_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec5_applicant').hide();
  }
});

// f.) Has the Applicant ever been a Singapore Citizen or Singapore Permanent Resident?
$('#dpass_dec6_applicant_checkbox_yes').click(function() {
  $('#dpass_dec6_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec6_applicant').show();
    $('#dpass_dec_by_app_detail6').val('').focus();
  } else {
    $('#dpass_dec6_applicant').hide();
  }
});

$('#dpass_dec6_applicant_checkbox_no').click(function() {
  $('#dpass_dec6_applicant_checkbox_yes').attr('checked', false);
  $('#pass_dec6_detail').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec6_applicant').hide();
  }
});

// g.) Has the Applicant ever been issued a work visa by another country(s)?
$('#dpass_dec7_applicant_checkbox_yes').click(function() {
  $('#dpass_dec7_applicant_checkbox_no').attr('checked', false);

  if ($(this).is(':checked')) {
    $('#dpass_dec7_applicant').show();
    $('#country_of_issue').val('').focus();
  } else {
    $('#dpass_dec7_applicant').hide();
  }
});

$('#dpass_dec7_applicant_checkbox_no').click(function() {
  $('#dpass_dec7_applicant_checkbox_yes').attr('checked', false);
  $('#country_of_issue').val('');

  if ($(this).is(':checked')) {
    $('#dpass_dec7_applicant').hide();
  }
});

function fetchDependantName() {
  var typed = document.getElementById('name_of_applicant').value;
  document.getElementById('applicant_name').innerHTML= typed;
}

// Submit Dependent Pass / Long Term Visit Pass Application
$('#btnSubmitDependentPassApplication').live('click', function (e) {
  // Section 1: Pass Declaration
  // (Referring to Dependant or Long term visit pass applicant)
  // a.) Are you holding an existing work pass – Employment Pass, S Pass, Work Permit or Related Passes
  if (!($('#dpass_dec1_checkbox_yes').is(':checked') || $('#dpass_dec1_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec1_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec1_checkbox_yes').is(':checked') && ($('#dpass_dec1_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec_detail1').show();
    $('#dpass_dec1_detail').focus();
    return false;
  }

  // b.) Have you ever held any Employment Pass, S Pass, Work Permit, Related Passes or Student’s Pass?
  if (!($('#dpass_dec2_checkbox_yes').is(':checked') || $('#dpass_dec2_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec2_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec2_checkbox_yes').is(':checked') && ($('#dpass_dec2_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec_detail2').show();
    $('#dpass_dec2_detail').focus();
    return false;
  }

  // c.) Are you a Singapore Citizen or Singapore Permanent Resident?
  if (!($('#dpass_dec3_checkbox_yes').is(':checked') || $('#dpass_dec3_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec3_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec3_checkbox_yes').is(':checked') && ($('#dpass_dec3_detail').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec_detail3').show();
    $('#dpass_dec3_detail').focus();
    return false;
  }

  // d.) Duration of Pass Applied for (from 1 month to work pass applicant/holder’s pass expiry)
  var pass_duration = $('#pass_duration').val();
  if (pass_duration === '') {
    alert('Please fill in the duration of pass applied.');
    $('#pass_duration').focus();
    return false;
  } else if (pass_duration.trim() && !validateNumber(pass_duration)) {
    alert('Please fill-in the number of months.');
    $('#pass_duration').focus();
    return false;
  }

  // Section 2: Applicant’s Personal Information
  // (Referring to Dependant or Long term visit pass applicant)
  var name_of_applicant = $('#name_of_applicant').val();
  var race = $('#race').val();
  var other_race = $('#other_race').val();
  var marital_status = $('#marital_status').val();
  var religion = $('#religion').val();
  var other_religion = $('#other_religion').val();
  var dob = $('#dob').val();
  var nationality = $('#nationality').val();
  var foreign_id = $('#foreign_id').val();
  var address = $('#address').val();
  var email = $('#email').val();
  var mobile_contact = $('#mobile_contact').val();

  if (!name_of_applicant.trim()) {
    alert('Please fill in Complete Name.');
    $('#name_of_applicant').focus();
    return false;
  } else if (!race.trim()) {
    alert('Please select Race.');
    $('#race').focus();
    return false;
  } else if ((race === 'Others') && (!other_race.trim())) {
    alert('Please fill in the Race.');
    $('#other_race').focus();
    return false;
  } else if (!marital_status.trim()) {
    alert('Please select the Marital Status.');
    $('#marital_status').focus();
    return false;
  } else if (!religion.trim()) {
    alert('Please select the Religion.');
    $('#religion').focus();
    return false;
  } else if ((religion === 'Others') && (!other_religion.trim())) {
    alert('Please fill in the Religion.');
    $('#other_religion').focus();
    return false;
  } else if (!dob.trim()) {
    alert('Please select the Date of Birth.');
    $('#dob').focus();
    return false;
  } else if (!nationality.trim()) {
    alert('Please select the Nationality.');
    $('#nationality').focus();
    return false;
  } else if (!address.trim()) {
    alert('Please fill in the Complete Address in Singapore.');
    $('#address').focus();
    return false;
  } else if (!email.trim()) {
    alert('Please fill in the email address.');
    $('#email').focus();
    return false;
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    $('#email').focus();
    return false;
  } else if (!mobile_contact.trim()) {
    alert('Please fill in the mobile contact number.');
    $('#mobile_contact').focus();
    return false;
  }

  // (C) Travel Document Information
  var travel_document_type = $('#travel_document_type').val();
  var other_travel_document = $('#other_travel_document').val();
  var travel_document_num = $('#travel_document_num').val();
  var date_of_expiry = $('#date_of_expiry').val();
  var country_of_birth = $('#country_of_birth').val();
  var country_of_origin = $('#country_of_origin').val();
  var malaysian_ic = $('#malaysian_ic').val();

  if (!travel_document_type.trim()) {
    alert('Travel document type is empty.');
    $('#travel_document_type').focus();
    return false;
  }

  if ((travel_document_type.trim() === 'Others') && !other_travel_document.trim()) {
    alert('Please fill in other travel document type.');
    $('#other_travel_document').focus();
    return false;
  }

  if (!travel_document_num.trim()) {
    alert('Travel document number cannot be empty.');
    $('#travel_document_num').focus();
    return false;
  }

  if (!date_of_expiry.trim()) {
    alert('Date of expiry cannot be empty.');
    $('#date_of_expiry').focus();
    return false;
  }

  if (!country_of_birth.trim()) {
    alert('Country of birth is empty.');
    $('#country_of_birth').focus();
    return false;
  }

  if (!country_of_origin.trim()) {
    alert('Country of origin is empty.');
    $('#country_of_origin').focus();
    return false;
  }

  if ((country_of_origin === 'MALAYSIA') && (!malaysian_ic.trim())) {
    alert('Malaysian new ID card no. cannot be empty');
    $('#malaysian_ic').focus();
    return false;
  }

  // Section 3: Applicant’s Education / Last Drawn Salary Details
  // (Referring to Dependant or Long term visit pass applicant)
  // (A) Education Details
  var highest_qualification_attained = $('#highest_qualification_attained').val();
  var dpass_country_institution = $('#dpass_country_institution').val();
  var dpass_name_institution = $('#dpass_name_institution').val();
  var no_formal_education = 'NO FORMAL EDUCATION / PRIMARY EDUCATION / JUNIOR SCHOOL EDUCATION'

  if (!highest_qualification_attained.trim()) {
    alert('Please select the highest qualification attained.');
    $('#highest_qualification_attained').focus();
    return false;
  } else if (!(highest_qualification_attained == no_formal_education) && (!dpass_country_institution.trim())) {
    alert('Country of school attended cannot be empty.');
    $('#dpass_country_institution').focus();
    return false;
  } else if (!(highest_qualification_attained == no_formal_education) && (!dpass_name_institution.trim())) {
    alert('Name of school attended cannot be empty.');
    $('#dpass_name_institution').focus();
    return false;
  }

  // (B) School Enrolment
  var month_school_started = $('#month_school_started').val();
  var year_school_started = $('#year_school_started').val();
  var month_school_ended = $('#month_school_ended').val();
  var year_school_ended = $('#year_school_ended').val();
  // (!validateNumber(bank_account_no))
  if (($('#school_enrolment_yes').is(':checked')) && ($('#enrolment_status').val() === '')) {
    alert('Enrolment status cannot be empty.');
    $('#enrolment_status').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && ($('#name_of_school_in_sg').val() === '')) {
    alert('Please fill in  the name of school in Singapore.');
    $('#name_of_school_in_sg').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && ($('#education_level').val() === '')) {
    alert('Please select the leave of education.');
    $('#education_level').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && (month_school_started === '')) {
    alert('What is the estimated started month date?');
    $('#month_school_started').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && !(month_school_started === '') && (!validateNumber(month_school_started))) {
    alert('Please fill in a date in number.');
    $('#month_school_started').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && (year_school_started === '')) {
    alert('What is the estimated started year date?');
    $('#year_school_started').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && !(year_school_started === '') && (!validateNumber(year_school_started))) {
    alert('Please fill in a date in number.');
    $('#year_school_started').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && (month_school_ended === '')) {
    alert('What is the estimated completion month date?');
    $('#month_school_ended').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && !(month_school_ended === '') && (!validateNumber(month_school_ended))) {
    alert('Please fill in a date in number.');
    $('#month_school_ended').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && (year_school_ended === '')) {
    alert('What is the estimated completion year date?');
    $('#year_school_ended').focus();
    return false;
  } else if (($('#school_enrolment_yes').is(':checked')) && !(year_school_ended === '') && (!validateNumber(year_school_ended))) {
    alert('Please fill in a date in number.');
    $('#year_school_ended').focus();
    return false;
  }

  // (C) Last Drawn Salary Details
  var gross_monthly_salary = $('#gross_monthly_salary').val();
  if (gross_monthly_salary && !validateNumber(gross_monthly_salary)   ) {
    alert('Gross monthly salary only allow digits.');
    $('#gross_monthly_salary').focus();
    return false;
  }

  // Section 4: Declaration by Applicant
  // (Referring to Dependant or Long term visit pass applicant
  // a.) Has the Applicant ever been refused entry into or deported from any country?
  if (!($('#dpass_dec1_applicant_checkbox_yes').is(':checked') || $('#dpass_dec1_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec1_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec1_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail1').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec1_applicant').show();
    $('#dpass_dec_by_app_detail1').focus();
    return false;
  }

  // b.) Has the Applicant ever been convicted in a court of law in any country?
  if (!($('#dpass_dec2_applicant_checkbox_yes').is(':checked') || $('#dpass_dec2_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec2_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec2_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail2').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec2_applicant').show();
    $('#dpass_dec_by_app_detail2').focus();
    return false;
  }

  // c.) Has the Applicant ever been prohibited from entering Singapore?
  if (!($('#dpass_dec3_applicant_checkbox_yes').is(':checked') || $('#dpass_dec3_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec3_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec3_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail3').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec3_applicant').show();
    $('#dpass_dec_by_app_detail3').focus();
    return false;
  }

  // d.) Has the Applicant ever entered Singapore using a passport issued by a different country?
  if (!($('#dpass_dec4_applicant_checkbox_yes').is(':checked') || $('#dpass_dec4_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec4_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec4_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail4').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec4_applicant').show();
    $('#dpass_dec_by_app_detail4').focus();
    return false;
  }

  // e.) Has the Applicant ever entered Singapore using a different name?
  if (!($('#dpass_dec5_applicant_checkbox_yes').is(':checked') || $('#dpass_dec5_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec5_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec5_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail5').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec5_applicant').show();
    $('#dpass_dec_by_app_detail5').focus();
    return false;
  }

  // f.) Has the Applicant ever been a Singapore Citizen or Singapore Permanent Resident?
  if (!($('#dpass_dec6_applicant_checkbox_yes').is(':checked') || $('#dpass_dec6_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec6_applicant_checkbox_no').focus();
    return false;
  }

  if ($('#dpass_dec6_applicant_checkbox_yes').is(':checked') && ($('#dpass_dec_by_app_detail6').val() === '')) {
    alert('Please elaborate the details.');
    $('#dpass_dec6_applicant').show();
    $('#dpass_dec_by_app_detail6').focus();
    return false;
  }

  // g.) Has the Applicant ever been issued a work visa by another country(s)?
  if (!($('#dpass_dec7_applicant_checkbox_yes').is(':checked') || $('#dpass_dec7_applicant_checkbox_no').is(':checked'))) {
    alert('Please select from the checkboxes.');
    $('#dpass_dec7_applicant_checkbox_no').focus();
    return false;
  }

  var length_year_visa = $('#length_year_visa').val();
  var length_month_visa = $('#length_month_visa').val();
  if ($('#dpass_dec7_applicant_checkbox_yes').is(':checked') && ($('#country_of_issue').val() === '')) {
    alert('Please select the country of issue.');
    $('#dpass_dec7_applicant').show();
    $('#country_of_issue').focus();
    return false;
  } else if ($('#dpass_dec7_applicant_checkbox_yes').is(':checked') && (length_year_visa === '')) {
    alert('Please fill in the length of visa in year.');
    $('#dpass_dec7_applicant').show();
    $('#length_year_visa').focus();
    return false;
  } else if ($('#dpass_dec7_applicant_checkbox_yes').is(':checked') && (length_year_visa.trim()) && !validateNumber(length_year_visa)) {
    alert('Length of visa in year(s) only allow digits.');
    $('#dpass_dec7_applicant').show();
    $('#length_year_visa').focus();
    return false;
  } else if ($('#dpass_dec7_applicant_checkbox_yes').is(':checked') && (length_month_visa === '')) {
    alert('Please fill in the length of visa in months.');
    $('#dpass_dec7_applicant').show();
    $('#length_month_visa').focus();
    return false;
  } else if ($('#dpass_dec7_applicant_checkbox_yes').is(':checked') && (length_month_visa.trim()) && !validateNumber(length_month_visa)) {
    alert('Length of visa in month(s) only allow digits.');
    $('#dpass_dec7_applicant').show();
    $('#length_month_visa').focus();
    return false;
  }

  // Please read carefully:  Dependant wish to confirm
  if ($('#dependant_confirm_checkbox').is(':checked') == false) {
    alert('Please tick on the checkbox if the dependant have read and confirm this Declaration.');
    $('#dependant_confirm_checkbox').focus();
    return false;
  }

  // Please read carefully:  Applicant wish to confirm
  if ($('#applicant_confirm_checkbox').is(':checked') == false) {
    alert('Please tick on the checkbox if you have read and confirm this Declaration.');
    $('#applicant_confirm_checkbox').focus();
    return false;
  }
});

function allowSubmission() {
  var file_docs = $('input:file');

  for (i = 0; i < file_docs.length; i++) {
    if (file_docs.get(i).files.length === 1) {
      $('#empty_attachment_msg').hide();
      $('.btn').removeClass('submit-btn-disabled');
      break;
    } else {
      $('.btn').addClass('submit-btn-disabled');
    }
  }
}

// Important Documents Required
$('#btnSubmitDocuments').live('click', function (e) {
  var attached_docs = $('input:file');

  for (i = 0; i < attached_docs.length; i++) {
    if (attached_docs.get(i).files.length === 1) {
      $('#empty_attachment_msg').hide();
      $('.btn').removeClass('submit-btn-disabled');
      break;
    } else if (attached_docs.get(i).files.length === 0) {
      $('#empty_attachment_msg').show();
      $('.btn').addClass('submit-btn-disabled');
      return false;
    }
  }
});
