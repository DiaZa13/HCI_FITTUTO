



------ tutores que imparten n curso
select id_tutor, name, last_name, date_of_birth, phone_number,avg_score,rate_per_hour from course_teaches ct
left join (
	select id_tutor, name, last_name, date_of_birth, phone_number, COALESCE(avg_score ,0.0) as avg_score , rate_per_hour from tutor_tutor t
	left join (select id_tutor_id, cast(avg(score) as float) as avg_score , count(score) as num_of_reviews from score_score s
	join appointment_appointment ap
	on s.id_appointment_id = ap.id_appointment
	group by id_tutor_id) sub1
	on sub1.id_tutor_id = t.id_tutor ) sub1
on sub1.id_tutor = ct.id_tutor_id
where id_course_id = 2 
order by avg_score desc




---- get comments by tutor id
select first_name, last_name, cc.name , score, comment from score_score ss
join appointment_appointment aa
on ss.id_appointment_id = aa.id_appointment
join (
	select au.id, first_name,last_name from auth_user au
	join users_user uu
	on au.id = uu.user_id) sub1
on sub1.id =aa.id_user_id
join course_course cc
on aa.id_course_id = cc.id_course
where id_tutor_id =2
;
----courses by tutor id

select name from course_course cc join course_teaches ct on ct.id_course_id = cc.id_course where id_tutor_id =1;








------------VIEW POSTGRESS

----- get all the hours
create view allhours as (select * from (select * from (select current_date as date) day1 cross join (select * from tutor_hour) sub1) aliasss
union 
(select * from (select current_date +1 as day2 ) day2 cross join (select * from tutor_hour) sub2) 
union
(select * from (select current_date +2 as day3 ) day3 cross join (select * from tutor_hour) sub3)
union
(select * from (select current_date +3 as day4 ) day4 cross join (select * from tutor_hour) sub4)
union
(select * from (select current_date +4 as day5 ) day5 cross join (select * from tutor_hour) sub5)
union
(select * from (select current_date +5 as day6 ) day6 cross join (select * from tutor_hour) sub6)
union
(select * from (select current_date +6 as day7 ) day7 cross join (select * from tutor_hour) sub7)
order by date, start_time

);
----get day of week


create view commingweek as (
select * from (select current_date as date, extract(isodow from current_date) as day_of_week) dates
union
(select current_date +1 , extract(isodow from current_date+1) as day_of_week)
union
(select current_date +2 , extract(isodow from current_date+2) as day_of_week)
union
(select current_date +3 , extract(isodow from current_date+3) as day_of_week)
union
(select current_date +4 , extract(isodow from current_date+4) as day_of_week)
union
(select current_date +5 , extract(isodow from current_date+5) as day_of_week)
union
(select current_date +6 , extract(isodow from current_date+6) as day_of_week)
order by date
);


---- get both

create view calendar as (
	select c.date, day_of_week,start_time, end_time from commingweek c 
	join allhours a 
	on a.date=c.date);










----------------------










------------ querry to get availability from tutor by id

select * from (
	select date,c.start_time,c.end_time from tutor_availability ta
	join calendar c 
	on ta.day_of_week = c.day_of_week 
	where id_tutor_id = 2 and c.start_time >= ta.start_time and c.end_time <= ta.end_time 
) available
except (
	select date, start_time, end_time
	from appointment_appointment aa
	where id_tutor_id = 2) ;