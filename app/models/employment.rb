require 'filemaker'

Filemaker.load!(
  File.expand_path('../config/filemaker.yml', File.dirname(__FILE__)),
  'production'
)

class Employment
  include Filemaker::Model

  database 'master Sales Records '
  layout 'Employment_detail'

  string :service_code,         fm_name: 'SRID', identity: true
  string :candidate_id,         fm_name: 'CAID'
  string :employee_id,          fm_name: 'Emp ID'
  string :project_id,           fm_name: 'PTID'
  string :job_id,               fm_name: 'JDID'
  string :company_id,           fm_name: 'CLID'
  string :company_name,         fm_name: 'COMPANY'
  string :candidate_name,       fm_name: 'CANDIDATE'
  string :job_title,            fm_name: 'Job Title'
  string :type,                 fm_name: 'TYPE'
  string :hiring,               fm_name: 'Hiring'
  string :hired_by,             fm_name: 'Hired Thru'
  string :project_manager,      fm_name: 'Project Manager'
  string :person_in_charge,     fm_name: 'PIC'
  string :consultant_name,      fm_name: 'consultant'
  string :consultant_email,     fm_name: 'Consultant_KPI::Email'
  string :work_visa,            fm_name: 'EMP status'
  date :commencement_at,        fm_name: 'Commencement'
  date :extension_at,           fm_name: 'Ext date'
  date :expired_at,             fm_name: 'Expired'
  date :last_day_at,            fm_name: 'Last day'
  date :updated_at,             fm_name: 'modify date'
  string :bank_account_no,      fm_name: 'Bank Account No'
  money :salary,                fm_name: 'ChargesSalary::Charges'
  string :salary_pay_kind,      fm_name: 'ChargesSalary::Pay Kind'
  string :benefit,              fm_name: 'Benefit Entitlement'
  string :bill_from,            fm_name: 'Bill From'
  string :working_days,         fm_name: 'Days'
  datetime :working_hours_from, fm_name: 'WHFrom'
  datetime :working_hours_to,   fm_name: 'WHTo'
  integer :lunch_duration,      fm_name: 'Lunch'
  integer :dinner_duration,     fm_name: 'Dinner'
  string :multiple_timesheets,  fm_name: 'TS Status'
  number :sales,                fm_name: 'SALE'
  date :sales_date,             fm_name: 'Sales Date'
  string :outstanding,          fm_name: 'OSD Flagging'
  string :managed_by,           fm_name: 'Managed By'
  string :payroll_by,           fm_name: 'Payroll By'
  string :billing_by,           fm_name: 'Billing By'
  string :team,                 fm_name: 'jobs::Team'
  string :domains,              fm_name: 'jobs::Domains'
  string :web_db,               fm_name: 'candidates::web_db'
  string :epayroll,             fm_name: 'ProjectTeam::ePayroll'
  string :default_payment,      fm_name: 'ProjectTeam::Default Payment'
  string :renewal,              fm_name: 'ProjectTeam::Renewal'
  string :service_grade,        fm_name: 'Service Grade'
  string :co_shared_by,         fm_name: 'Co_Shared By'
  money :co_shared_rate,        fm_name: 'Co_Shared Rate'
  money :co_shared_amount,      fm_name: 'Co_Shared Amount'
  money :co_shared_nett_sales,  fm_name: 'Nett Sale'
  date :work_visa_expired_at,   fm_name: 'EP/WP EXP'
  string :check_in_details,     fm_name: 'Reporting details'
  string :check_in_venue,       fm_name: 'Reporting Venue'
  string :check_in_with,        fm_name: 'Reporting Person'
  string :check_in_contact,     fm_name: 'Reporting Contact'
  date :check_in_at,            fm_name: 'Reporting Date'
  datetime :check_in_time,      fm_name: 'Reporting Time'

  def candidate_id
    return nil if attributes['candidate_id'].blank?
    attributes['candidate_id'].to_i.to_s
  end
end
