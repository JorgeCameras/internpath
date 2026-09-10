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