# Week 1 Test Log

## Test 1 — Complete internship information

Input:
Amazon Retail Intern in Mexico City. Application deadline October 20. Requires English, Excel, communication skills and analytical thinking. I already applied online.

Expected Result:
The Core Agent should identify Amazon, Retail Intern, Mexico City, October 20, the listed skills, Applied stage, Follow up on application, and High priority.

Actual Result:
The structured output displayed all expected fields correctly.

Status:
PASS

---

## Test 2 — Missing information

Input:
Marketing internship opportunity. Requires communication skills.

Expected Result:
Known information should be extracted and missing fields should display "Not specified" without crashing the page.

Actual Result:
The page remained functional and missing information displayed as "Not specified."

Status:
PASS

---

## Test 3 — Save and display

Input:
Use the generated Amazon internship result and click Save Output.

Expected Result:
A new row should be created in the Supabase core_outputs table and the saved result should appear in Dashboard Preview.

Actual Result:
The result was saved successfully in Supabase and appeared in Dashboard Preview.

Status:
PASS

# Iteration Log

During testing, saving initially failed because Supabase Row Level Security blocked new inserts. I identified the exact error message and added policies that allow anonymous and authenticated users to insert and read rows from core_outputs.

After this correction, Save Output worked successfully and the saved internship appeared in both Supabase and Dashboard Preview.


## Test 4 - Deadline Extraction

Input:
Microsoft Product Management Intern in Mexico City. Deadline November 15. Requires English, Excel, communication and analytical skills. I have not applied yet.

Expected Result:
The Core Agent should extract Microsoft, Product Management Intern, Mexico City, November 15, and the listed skills.

Actual Result:
The Core Agent correctly extracted November 15 and the internship information. The result was successfully saved to Supabase and displayed in Dashboard Preview.

Status:
PASS

## Module 2 — Research + Benchmarking

### Software Test 1 — Research Generation
...

Beto Cameras <betocameras12@gmail.com>
11:40 p.m. (hace 0 minutos)
para mí

Input:
Product Manager internships in Mexico

Expected Result:
The /research page should generate a structured research view for the topic and display at least 5 global benchmark examples, competitor research, Mexico-specific context, and a risk map.

Actual Result:
The research topic generated successfully. The page displayed the simulated research output and the five benchmark companies: Google, Microsoft, Amazon, Spotify, and Meta. The Save Research action also worked and displayed the message "Research saved successfully."

Status:
PASS

Observation:
The main research generation flow worked correctly. No crash occurred and the generated topic remained visible after saving.

### Software Test 2 — Search and Filter

Input:
Mexico

Expected Result:
When the user enters "Mexico" in the competitor search field, the competitor table should filter the results and display only competitors related to the Mexico market.

Actual Result:
The competitor table filtered successfully. The page displayed OCCMundial and Computrabajo and showed "Showing 2 of 8 results."

Status:
PASS

Observation:
The search and filtering feature worked correctly and updated the competitor table immediately without reloading the page.

### Edge Case Test — Empty Research Topic

Input:
Leave the Research Topic field empty and click Generate Research.

Expected Result:
The page should not crash or generate invalid research. The user should receive a clear validation message explaining that a research topic is required.

Actual Result:
The page remained stable and displayed the message "Please enter a research topic first."

Status:
PASS

Observation:
The validation worked correctly and prevented an empty research request from being generated

### Iteration — Validation Message Visibility

Issue:
The empty-topic validation worked correctly, but the error message was too subtle and could easily be missed by the user.

Fix:
The validation message was redesigned as a bordered alert box. Error messages now use a red background and red text, while successful actions use a green confirmation style.

Retest:
The Research Topic field was left empty and Generate Research was clicked again.

Result:
The page remained stable and displayed the validation message inside a clearly visible red alert box.

Status:
PASS

## Module 3 — Product Architecture + Pricing Simulator

### Pricing Logic Test 1 — Monthly Revenue

Input:
- Potential customers: 10,000
- Conversion rate: 10%
- Monthly price: $99 MXN

Expected Result:
- Paid customers = 1,000
- Monthly revenue = $99,000 MXN

Actual Result:
The simulator calculated 1,000 paid customers and $99,000 MXN in monthly revenue.

Status:
PASS


### Pricing Logic Test 2 — Annual Revenue

Input:
- Monthly revenue: $99,000 MXN

Expected Result:
- Annual revenue = $1,188,000 MXN

Actual Result:
The simulator calculated $1,188,000 MXN in annual revenue.

Status:
PASS


### Software Test 1 — Scenario Toggle

Action:
Switch between Conservative, Base, and Aggressive scenarios.

Expected Result:
The calculator inputs and revenue assumptions should update according to the selected scenario.

Actual Result:
The scenario buttons updated the active scenario and changed the customer, conversion, and pricing assumptions successfully.

Status:
PASS


### Software Test 2 — Save Pricing Scenario

Action:
Click "Save Current Scenario".

Expected Result:
The active pricing scenario should be saved in Supabase and displayed in the Saved Pricing Scenarios section.

Actual Result:
The first save attempt failed because the new Supabase table had Row Level Security enabled without public SELECT and INSERT policies.

Initial Status:
FAIL


### Iteration — Supabase RLS Save Failure

Issue:
The Save Current Scenario button displayed the message "Save failed. Please try again." The pricing scenario was not being stored in Supabase.

Cause:
The pricing_scenarios table had Row Level Security enabled, but no policies allowed the public application to read or insert records.

Fix:
Two Supabase Row Level Security policies were created:
- Public SELECT access using a true condition.
- Public INSERT access using a true WITH CHECK condition.

Retest:
The Base pricing scenario was saved again using the Save Current Scenario button.

Result:
The application displayed "Pricing scenario saved successfully." The new Base Scenario appeared immediately in the Saved Pricing Scenarios table with the correct customer segment, scenario, customers, conversion rate, monthly price, monthly revenue, and annual revenue.

Final Status:
PASS


### Software Test 3 — Invalid Input

Action:
Enter an invalid value such as 0 or a negative number in the pricing calculator and attempt to calculate or save.

Expected Result:
The application should not crash and should display clear validation feedback.

Actual Result:
The Potential Customers value was set to 0 and Calculate Revenue was clicked. The application remained stable and displayed the validation message "Please enter valid positive values before calculating revenue."

Status:
PASS
