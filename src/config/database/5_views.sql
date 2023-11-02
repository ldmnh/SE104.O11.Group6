USE DATABASE_SE104;

CREATE VIEW VIEW_AUTHUSER AS
SELECT
  au_user_first_name,
  au_user_last_name,
  au_user_email,
  au_user_avt_url,
  au_user_sex,
  au_user_birthday
FROM AUTHUSER;

SELECT * FROM VIEW_AUTHUSER;